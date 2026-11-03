---
layout: post
title: "메이플스토리: 사냥 보조 이벤트 『즐거운 오아시스』 역기획"
subtitle: "일일 30분 사냥 루프 유도와 경험치·UI·애니메이션 트리거 구조 역설계"
category: portfolio-item
order: 3
permalink: /portfolio/maplestory-joyful-oasis/
period: "2025.08 (약 1주)"
genre: "MMORPG Live Service / Event System Reverse Design"
thumbnail: "/assets/images/portfolio/joyful-oasis/slide_01.png"
tags:
  - "역기획"
  - "시스템기획"
  - "이벤트기획"
summary: "메이플스토리의 사냥 보조 이벤트 『즐거운 오아시스』의 기획 의도와 경험치 수식, 플로우 차트, UI·애니메이션 연출 사양을 역기획한 문서입니다."
toc: false
---

## 프로젝트 개요

| 항목 | 내용 |
| :--- | :--- |
| **대상 게임** | 메이플스토리 (MapleStory) |
| **분석 대상** | 사냥 보조 이벤트 『즐거운 오아시스』 (`<오아시스 발견>` / `<즐거운 오아시스>`) |
| **작업 기간** | 2025.08 (약 1주) |
| **핵심 규칙** | 레벨 범위 몬스터 `250마리` 처치마다 광역 스킬 및 대량 경험치 발동 (일일 최대 `30회`) |
| **작성 범위** | 기획 의도 역산 · 데이터 테이블 정의 · 플로우 차트 · UI 및 애니메이션 연출 명세 |

---

<div class="portfolio-feature-list">

  <!-- 01 -->
  <section class="portfolio-feature-item scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/joyful-oasis/slide_04.png' | relative_url }}" alt="즐거운 오아시스 기획 의도 및 30분 사냥 유도 분석" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 01</span>
      <h2>30분 사냥 루프와 접속 유지율을 겨냥한 기획 의도</h2>
      <ul>
        <li><strong>일일 30분 접속 유도</strong>: 대다수 직업의 6분당 사냥 마릿수(<code>약 1,800마리</code>)와 이벤트 발동 중 처치 제외 구간을 역산하여, <strong>약 30분 사냥(8,000마리 전후)에 맞춘 일일 30회 제한</strong>의 설계 의도 도출</li>
        <li><strong>타 이벤트 연쇄 유인</strong>: 일일 최대치(<code>7,500마리</code>)를 4일만 달성해도 주간 미션인 '시간의 모래(1만)'와 '챌린저스 패스(3만)'가 자연스럽게 완료되도록 맞물린 코어 루프 분석</li>
        <li><strong>사냥터 분산 및 2배 보상감</strong>: 룬 경험치는 제외해 룬 대기 지연을 막되 <strong>버닝 필드 추가 경험치는 적용</strong>하여 비인기 사냥터 방문을 유도하고, 1회당 <code>500마리분</code> 기본 경험치로 사냥 시간 2배의 체감 보상 제공</li>
      </ul>
    </div>
  </section>

  <!-- 02 (교차: 텍스트 좌측 / 이미지 우측) -->
  <section class="portfolio-feature-item is-reversed scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/joyful-oasis/slide_09.png' | relative_url }}" alt="즐거운 오아시스 발동 조건 및 예외 처리 플로우 차트" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 02</span>
      <h2>데이터 테이블 정의와 온오프·자동/수동 플로우 설계</h2>
      <ul>
        <li><strong>핵심 컴포넌트 구조화</strong>: 스킬 획득(<code>skillAcquired</code>), 레벨 범위 진입(<code>isLevelRangeLocation</code>), 처치 카운트(<code>0~250</code>), 자동 발동 여부(<code>autoEventTrigger</code>) 등 8개 상태 변수를 테이블로 명세</li>
        <li><strong>온오프 및 발동 모드 분기</strong>: 0차 스킬창 우클릭을 통한 <strong>스킬/UI 전체 온오프</strong>와 인게임 UI 우클릭을 통한 <strong>자동·수동 발동 모드 전환</strong> 플로우를 분리 설계</li>
        <li><strong>예외 조건 및 사이클 완결</strong>: 수동 모드에서 <code>20초 내 NPC/채집 키</code> 입력 여부에 따른 발동·미발동 분기, 발동 시 카운트 초기화, 일일 30회 소진 시 UI 자동 비활성화 및 자정 초기화 루프 정립</li>
      </ul>
    </div>
  </section>

  <!-- 03 -->
  <section class="portfolio-feature-item scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/joyful-oasis/slide_13.png' | relative_url }}" alt="즐거운 오아시스 UI 컴포넌트 및 애니메이션 연출 명세" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 03</span>
      <h2>직관적인 UI 조작 체계와 7단계 애니메이션 연출 명세</h2>
      <ul>
        <li><strong>0차 스킬창 & 전용 게이지 UI</strong>: 드래그 이동이 가능한 전용 UI에 <strong>일일 잔여 횟수(<code>TODAY 0/30</code>), 처치 진행도 게이지(<code>현재/250</code>), 수동 모드 식별 마크(<code>M</code>)</strong>와 툴팁 가이드를 직관적으로 배치</li>
        <li><strong>단계별 연출 시퀀스 분해</strong>: 발동 대기(세야 말풍선·비눗방울 파티클) → 광역 스킬 시전(금빛 모래·소용돌이 파도·물방울 이펙트) → 종료 및 일일 횟수 소진 알림까지 <code>animation 1 ~ 7</code>로 세분화</li>
        <li><strong>시각적 피드백 강화</strong>: 광역 타격(<code>3000% 데미지, 최대 15마리</code>)과 동시에 캐릭터 상단에 획득 경험치 수치를 전용 이펙트로 출력하여 사냥 보조 이벤트의 타격감과 성장 체감을 극대화</li>
      </ul>
    </div>
  </section>

</div>

<div class="scroll-reveal" style="margin: 3rem 0 1rem; padding: 2.5rem; background: var(--bg-card); border: 1px solid var(--border-highlight); border-radius: var(--radius-lg); text-align: center;">
  <p style="margin-bottom: 1.25rem; color: var(--text-primary); font-weight: 600; font-size: 1.15rem;">
    상세 컴포넌트 테이블, 전체 플로우 차트(온오프/자동·수동),<br>UI 툴팁 및 7단계 애니메이션 영역별 명세는 아래 역기획서 원문에서 확인하실 수 있습니다.
  </p>
  <a href="{{ '/assets/images/portfolio/joyful-oasis/maplestory-joyful-oasis.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 1.02rem; padding: 0.8rem 1.6rem;">
    📄 역기획서 전체 PDF 열람하기 (17 Pages)
  </a>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var revealEls = document.querySelectorAll(".scroll-reveal");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -6% 0px"
    });
    revealEls.forEach(function (el) { observer.observe(el); });
  });
</script>
