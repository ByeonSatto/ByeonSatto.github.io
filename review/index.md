---
layout: default
title: "Game Reviews"
permalink: /review/
description: "플레이 경험, 레벨 구조 완성도, 핵심 재미와 한계를 입체적으로 평가하는 게임 리뷰 아카이브입니다."
---

{% assign reviews = site.categories.review %}

<section class="page-hero">
  <div class="container page-hero-flex">
    <div>
      <span class="page-kicker">CRITIQUE &amp; VERDICT ARCHIVE</span>
      <h1 class="page-title">
        게임 리뷰
        <span class="page-count-badge">총 {{ reviews.size | default: 0 }}편</span>
      </h1>
      <p class="page-desc">{{ page.description }}</p>
    </div>
    <div class="owner-only page-hero-action">
      <a href="{{ '/write/?category=review' | relative_url }}" class="btn btn-primary">✏️ 새 리뷰 작성</a>
    </div>
  </div>
</section>

<div class="container page-container">
  {% if reviews and reviews.size > 0 %}
    <!-- 3번칸: 정렬 탭 바 (게시일순 / 별점 높은순) -->
    <div class="review-sort-toolbar">
      <div class="sort-tabs" role="tablist" aria-label="리뷰 정렬 기준">
        <button type="button" class="sort-tab-btn active" data-sort="date" role="tab" aria-selected="true">
          게시일순
        </button>
        <button type="button" class="sort-tab-btn" data-sort="rating" role="tab" aria-selected="false">
          별점 높은순
        </button>
      </div>
    </div>

    <!-- 기본 뷰: 게시일순 그리드 -->
    <div id="review-view-date" class="archive-list archive-grid-review">
      {% for post in reviews %}
      <article class="archive-card archive-card-review {% if post.thumbnail %}has-thumb{% endif %}" data-rating="{{ post.rating | default: 0 }}">
        {% if post.thumbnail %}
        <a href="{{ post.url | relative_url }}" class="archive-thumb-link">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="archive-thumb" loading="lazy">
        </a>
        {% endif %}
        <div class="archive-card-body">
          <div class="archive-review-header">
            <div class="archive-card-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
              {% if post.game_info.genre %}
              <span class="meta-divider">·</span>
              <span>{{ post.game_info.genre }}</span>
              {% endif %}
            </div>
            {% if post.rating %}
            <div class="rating-pill" title="평점 {{ post.rating }} / 5.0">
              <span class="rating-star">★</span>
              <span class="rating-num">{{ post.rating }}</span><span class="rating-max">/5.0</span>
            </div>
            {% endif %}
          </div>

          <h2 class="archive-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>

          {% if post.verdict %}
          <p class="archive-verdict-quote">"{{ post.verdict }}"</p>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>

    <!-- 별점 높은순 뷰: 별점별 섹션 분리 -->
    <div id="review-view-rating" class="review-rating-sections" style="display: none;"></div>
  {% else %}
    <div class="empty-state-box">
      <p>아직 등록된 게임 리뷰가 없습니다.</p>
    </div>
  {% endif %}
</div>

<script>
(function () {
  var dateView = document.getElementById("review-view-date");
  var ratingView = document.getElementById("review-view-rating");
  var sortBtns = document.querySelectorAll(".sort-tab-btn");
  if (!dateView || !ratingView || sortBtns.length === 0) return;

  function renderStarString(score) {
    var s = "";
    for (var i = 1; i <= 5; i++) {
      if (score >= i) s += "★";
      else if (score >= i - 0.5) s += "★";
      else s += "☆";
    }
    return s;
  }

  function buildRatingSections() {
    var cards = Array.prototype.slice.call(dateView.querySelectorAll(".archive-card-review"));
    var groupsMap = {};

    cards.forEach(function (card) {
      var raw = parseFloat(card.getAttribute("data-rating") || "0");
      var key = isNaN(raw) ? 0 : raw;
      if (!groupsMap[key]) {
        groupsMap[key] = [];
      }
      groupsMap[key].push(card);
    });

    var sortedRatings = Object.keys(groupsMap)
      .map(function (k) { return parseFloat(k); })
      .sort(function (a, b) { return b - a; });

    ratingView.innerHTML = "";

    sortedRatings.forEach(function (score) {
      var groupCards = groupsMap[score];
      var section = document.createElement("section");
      section.className = "rating-tier-section";

      var displayScore = score % 1 === 0 ? score.toFixed(1) : String(score);
      var starsHtml = "";
      for (var i = 1; i <= 5; i++) {
        if (score >= i) {
          starsHtml += '<span class="tier-star filled">★</span>';
        } else if (score >= i - 0.5) {
          starsHtml += '<span class="tier-star half">★</span>';
        } else {
          starsHtml += '<span class="tier-star empty">☆</span>';
        }
      }

      var header = document.createElement("div");
      header.className = "rating-tier-header";
      header.innerHTML =
        '<div class="rating-tier-title-wrap">' +
          '<span class="rating-tier-badge">★ ' + displayScore + ' / 5.0</span>' +
          '<div class="rating-tier-stars" aria-hidden="true">' + starsHtml + '</div>' +
          '<span class="rating-tier-count">' + groupCards.length + '편</span>' +
        '</div>';

      var grid = document.createElement("div");
      grid.className = "archive-list archive-grid-review";

      groupCards.forEach(function (card) {
        grid.appendChild(card.cloneNode(true));
      });

      section.appendChild(header);
      section.appendChild(grid);
      ratingView.appendChild(section);
    });
  }

  buildRatingSections();

  sortBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var mode = this.getAttribute("data-sort");
      sortBtns.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      if (mode === "rating") {
        dateView.style.display = "none";
        ratingView.style.display = "flex";
      } else {
        ratingView.style.display = "none";
        dateView.style.display = "grid";
      }
    });
  });
})();
</script>
