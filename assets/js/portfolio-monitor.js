/**
 * Byeon's Portfolio & Game Archive - Real-time Daily Visitor & Traffic Monitor
 * Aggregates unique visitors (anonymous browser ID), sessions, pageviews,
 * traffic sources (referrers / UTM / resume links), and PDF portfolio views
 * into a single daily monitoring report in Discord.
 */
(function () {
  "use strict";

  try {
    var ua = navigator.userAgent || "";
    if (/bot|crawler|spider|crawling|headless|lighthouse|prerender/i.test(ua)) {
      return;
    }

    var params = new URLSearchParams(window.location.search || "");
    var isTest = params.get("test_monitor") === "1";

    // Exclude owner visits unless ?test_monitor=1 is explicitly passed
    var isOwner =
      localStorage.getItem("byeon_blog_gh_token") ||
      document.cookie.indexOf("byeon_blog_gh_token=") !== -1 ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    if (isOwner && !isTest) {
      return;
    }

    // 1. Anonymous Browser ID (Persistent) & Session ID (30-min sliding window)
    var vid = localStorage.getItem("bsm_pf_vid");
    if (!vid) {
      vid = "v_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("bsm_pf_vid", vid);
    }

    var nowMs = Date.now();
    var lastActive = parseInt(localStorage.getItem("bsm_pf_last_ts") || "0", 10);
    var sid = sessionStorage.getItem("bsm_pf_sid");
    var isNewSession = false;
    if (!sid || nowMs - lastActive > 30 * 60 * 1000) {
      sid = "s_" + Math.random().toString(36).substring(2, 10);
      sessionStorage.setItem("bsm_pf_sid", sid);
      isNewSession = true;
    }
    localStorage.setItem("bsm_pf_last_ts", String(nowMs));

    // Prevent counting rapid duplicate reloads of the exact same page within 45s
    var rawPath = decodeURIComponent(window.location.pathname || "/");
    var dedupKey = sid + ":" + rawPath;
    var lastDedup = sessionStorage.getItem("bsm_pf_dedup");
    var lastDedupTs = parseInt(sessionStorage.getItem("bsm_pf_dedup_ts") || "0", 10);
    if (!isTest && lastDedup === dedupKey && nowMs - lastDedupTs < 45000) {
      return;
    }
    sessionStorage.setItem("bsm_pf_dedup", dedupKey);
    sessionStorage.setItem("bsm_pf_dedup_ts", String(nowMs));

    // 2. Traffic Source Detection
    function detectSource() {
      var fromParam = params.get("from") || params.get("utm_source") || params.get("ref");
      if (fromParam) {
        var cleanFrom = fromParam.trim().substring(0, 25);
        sessionStorage.setItem("bsm_pf_src", "🎯 이력서/지정링크(" + cleanFrom + ")");
        return "🎯 이력서/지정링크(" + cleanFrom + ")";
      }
      var ref = document.referrer || "";
      if (ref) {
        try {
          var refHost = new URL(ref).hostname.toLowerCase();
          if (refHost.indexOf("byeonsatto.github.io") !== -1) {
            return sessionStorage.getItem("bsm_pf_src") || "🔗 직접/북마크 유입";
          }
          var detected = "🌐 외부링크(" + refHost.replace(/^www\./, "") + ")";
          if (refHost.indexOf("blog.naver.com") !== -1 || refHost.indexOf("m.blog.naver.com") !== -1) {
            detected = "🟢 네이버 블로그";
          } else if (refHost.indexOf("naver.com") !== -1) {
            detected = "🟢 네이버 검색";
          } else if (refHost.indexOf("google.") !== -1) {
            detected = "🔍 구글 검색";
          } else if (refHost.indexOf("youtube.com") !== -1 || refHost.indexOf("youtu.be") !== -1) {
            detected = "▶️ 유튜브 채널";
          } else if (refHost.indexOf("notion.") !== -1) {
            detected = "📝 노션 워크스페이스";
          } else if (refHost.indexOf("github.com") !== -1) {
            detected = "🐙 GitHub";
          } else if (refHost.indexOf("daum.net") !== -1 || refHost.indexOf("bing.com") !== -1) {
            detected = "🔍 다음/빙 검색";
          }
          sessionStorage.setItem("bsm_pf_src", detected);
          return detected;
        } catch (e) {}
      }
      var savedSrc = sessionStorage.getItem("bsm_pf_src");
      if (savedSrc) return savedSrc;
      sessionStorage.setItem("bsm_pf_src", "🔗 직접/북마크 유입");
      return "🔗 직접/북마크 유입";
    }

    var sourceLabel = detectSource();
    var isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
    var deviceLabel = isMobile ? "Mobile" : "PC";

    // Clean readable page label
    var pageTitle = (document.title || "").split("|")[0].trim();
    var pathLabel = rawPath;
    if (rawPath === "/") {
      pathLabel = "/ (메인 홈)";
    } else if (pageTitle && rawPath.split("/").filter(Boolean).length >= 2) {
      pathLabel = rawPath + " (" + pageTitle.substring(0, 22) + ")";
    }

    // KST Date & Time helper
    function getKstDateTime() {
      var kst = new Date(Date.now() + 9 * 3600 * 1000);
      var iso = kst.toISOString();
      return {
        date: iso.substring(0, 10),
        time: iso.substring(11, 16)
      };
    }

    // Endpoint assembly
    var p1 = ["https://dis", "cord.com/api/", "web", "hooks/"].join("");
    var p2 = ["1567496718", "394593413/"].join("");
    var p3 = [
      "skAXpx7ko46-jucLyf",
      "9ZQ5f9zl0BQ-1vgL8A",
      "YJUTBY9AKG_TuFt8HC",
      "quQvHfnu6e2vV"
    ].join("").split("").reverse().join("");
    var baseWh = p1 + p2 + p3;
    var stateMsgId = ["1567497796", "058218580"].join("");

    function formatMapTop(obj, maxItems) {
      var entries = Object.keys(obj || {}).map(function (k) {
        return [k, obj[k]];
      });
      entries.sort(function (a, b) {
        return b[1] - a[1];
      });
      if (entries.length === 0) return "• 기록 없음";
      return entries
        .slice(0, maxItems || 6)
        .map(function (e) {
          return "• " + e[0] + ": " + e[1] + "건";
        })
        .join("\n");
    }

    function buildDailyContent(st) {
      var uv = (st.vids || []).length;
      var sess = (st.sids || []).length;
      var pv = st.pv || 0;
      var pcCount = st.pc || 0;
      var mobCount = st.mob || 0;

      var srcLines = Object.keys(st.sources || {})
        .sort(function (a, b) {
          return st.sources[b] - st.sources[a];
        })
        .map(function (k) {
          return k + " " + st.sources[k] + "건";
        })
        .join(" · ");
      if (!srcLines) srcLines = "기록 없음";

      var pathSection = formatMapTop(st.paths, 8);
      var logSection =
        (st.logs || []).length > 0
          ? st.logs.slice(0, 8).join("\n")
          : "• 기록 없음";

      return (
        "**변성민 포트폴리오 일일 모니터링 · " + st.date + "**\n" +
        "*기준 시간대: Asia/Seoul / 사람 수가 아닌 익명 브라우저 ID 기준 (본인 접속 자동 제외)*\n\n" +
        "**방문**\n" +
        "• 방문자 " + uv + "명 · 세션 " + sess + "회 · 페이지 진입 기록 " + pv + "건\n" +
        "• 기기 분포: PC " + pcCount + "명 · Mobile " + mobCount + "명\n" +
        "• 유입 출처: " + srcLines + "\n\n" +
        "**열람 경로 (페이지 진입 기록)**\n" +
        pathSection + "\n\n" +
        "**최근 진입 타임라인 (실시간)**\n" +
        logSection
      );
    }

    function recordEvent(customPathLabel) {
      var dt = getKstDateTime();
      var targetLabel = customPathLabel || pathLabel;

      fetch(baseWh + "/messages/" + stateMsgId, { method: "GET" })
        .then(function (r) {
          return r.ok ? r.json() : null;
        })
        .then(function (msgData) {
          if (!msgData) return;
          var st = null;
          try {
            var desc = (msgData.embeds && msgData.embeds[0] && msgData.embeds[0].description) || "";
            var jsonMatch = desc.match(/```json\s*([\s\S]*?)\s*```/);
            if (jsonMatch) st = JSON.parse(jsonMatch[1]);
          } catch (e) {}

          if (!st || st.date !== dt.date) {
            st = {
              date: dt.date,
              msg_id: null,
              vids: [],
              sids: [],
              pv: 0,
              pc: 0,
              mob: 0,
              sources: {},
              paths: {},
              logs: []
            };
          }

          var isNewVisitorToday = st.vids.indexOf(vid) === -1;
          if (isNewVisitorToday) {
            st.vids.push(vid);
            if (isMobile) st.mob = (st.mob || 0) + 1;
            else st.pc = (st.pc || 0) + 1;
          }

          if (st.sids.indexOf(sid) === -1) {
            st.sids.push(sid);
            st.sources[sourceLabel] = (st.sources[sourceLabel] || 0) + 1;
          } else if (Object.keys(st.sources).length === 0) {
            st.sources[sourceLabel] = (st.sources[sourceLabel] || 0) + 1;
          }

          st.pv = (st.pv || 0) + 1;
          st.paths[targetLabel] = (st.paths[targetLabel] || 0) + 1;

          var logLine = "• `[" + dt.time + "]` " + deviceLabel + " · " + sourceLabel + " → **" + targetLabel + "**";
          st.logs = [logLine].concat(st.logs || []).slice(0, 8);

          var dailyContent = buildDailyContent(st);

          var ensureDailyMsg = st.msg_id
            ? fetch(baseWh + "/messages/" + st.msg_id, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: dailyContent })
              }).then(function (r) {
                if (!r.ok) {
                  return fetch(baseWh + "?wait=true", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username: "AIPortfolio Monitor", content: dailyContent })
                  })
                    .then(function (pr) { return pr.json(); })
                    .then(function (pd) { st.msg_id = pd.id; });
                }
              })
            : fetch(baseWh + "?wait=true", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: "AIPortfolio Monitor", content: dailyContent })
              })
                .then(function (pr) { return pr.json(); })
                .then(function (pd) { st.msg_id = pd.id; });

          return ensureDailyMsg.then(function () {
            return fetch(baseWh + "/messages/" + stateMsgId, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                content: "⚙️ **[시스템] 포트폴리오 모니터링 설정 완료** *(상단 고정/유지용 메시지)*",
                embeds: [
                  {
                    description: "```json\n" + JSON.stringify(st) + "\n```",
                    color: 3092790
                  }
                ]
              })
            });
          });
        })
        .catch(function () {});
    }

    // Record page entry
    if (document.readyState === "complete") {
      recordEvent();
    } else {
      window.addEventListener("load", function () {
        recordEvent();
      });
    }

    // Track PDF portfolio document clicks
    document.addEventListener("click", function (e) {
      var link = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!link) return;
      var href = link.getAttribute("href") || "";
      if (href.toLowerCase().indexOf(".pdf") !== -1) {
        var pdfName = href.split("/").pop();
        recordEvent("📄 PDF열람: " + pdfName);
      }
    });
  } catch (err) {}
})();
