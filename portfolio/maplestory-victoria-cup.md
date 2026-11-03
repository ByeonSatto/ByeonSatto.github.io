---
layout: post
title: "메이플스토리: 빅토리아컵 이벤트 GMS / KMS 로컬라이징 분석 및 개선 제안"
subtitle: "히로익 월드(79.1%) 중심의 유저 데이터 분석을 통한 글로벌 서버 맞춤형 이벤트·코인샵 재설계"
category: portfolio-item
order: 2
permalink: /portfolio/maplestory-victoria-cup/
period: "2025.06 (약 2주)"
genre: "MMORPG Live Service / Event & Localization Design"
thumbnail: "/assets/images/portfolio/victoria-cup/slide_01.png"
tags:
  - "시스템기획"
  - "이벤트기획"
  - "로컬라이징"
summary: "메이플스토리 빅토리아컵 이벤트의 KMS(21주년)와 GMS(20주년) 로컬라이징 차이를 분석하고, 레딧 유저 설문 데이터를 바탕으로 히로익 월드 중심의 개선안을 도출한 기획서입니다."
toc: false
---

<style>
  .portfolio-feature-list {
    display: flex;
    flex-direction: column;
    gap: 14rem;
    margin: 8rem 0;
    width: min(1420px, calc(100vw - 3.5rem));
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .portfolio-feature-item {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 4.5rem;
    align-items: center;
    padding-bottom: 14rem;
    border-bottom: 1px solid var(--border-subtle);
  }
  .portfolio-feature-item.is-reversed {
    grid-template-columns: 1fr 1.25fr;
  }
  .portfolio-feature-item.is-reversed .portfolio-feature-media {
    order: 2;
  }
  .portfolio-feature-item.is-reversed .portfolio-feature-content {
    order: 1;
  }
  .portfolio-feature-item:last-child {
    padding-bottom: 2rem;
    border-bottom: none;
  }
  .portfolio-feature-media {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.7);
  }
  .portfolio-feature-media img {
    width: 100%;
    height: auto;
    display: block;
  }
  .portfolio-feature-content h2 {
    margin-top: 0 !important;
    margin-bottom: 1.5rem !important;
    padding-bottom: 0.85rem !important;
    font-size: 1.95rem !important;
    line-height: 1.3 !important;
    border-bottom: 1px solid var(--border-subtle);
  }
  .portfolio-feature-num {
    font-family: var(--font-mono);
    color: var(--accent-cyan);
    font-size: 0.98rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 0.5rem;
  }
  .portfolio-feature-list ul {
    margin: 0 !important;
    padding-left: 1.4rem !important;
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }
  .portfolio-feature-list li {
    margin-bottom: 0 !important;
    font-size: 1.16rem !important;
    line-height: 1.8 !important;
  }
  .scroll-reveal {
    opacity: 0;
    transform: translateY(68px);
    transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }
  .scroll-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 960px) {
    .portfolio-feature-list {
      width: 100%;
      left: 0;
      transform: none;
      gap: 7rem;
      margin: 4.5rem 0;
    }
    .portfolio-feature-item,
    .portfolio-feature-item.is-reversed {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding-bottom: 7rem;
    }
    .portfolio-feature-item.is-reversed .portfolio-feature-media,
    .portfolio-feature-item.is-reversed .portfolio-feature-content {
      order: initial;
    }
    .portfolio-feature-content h2 {
      font-size: 1.55rem !important;
    }
    .portfolio-feature-list li {
      font-size: 1.05rem !important;
    }
  }
</style>

## 프로젝트 개요

| 항목 | 내용 |
| :--- | :--- |
| **대상 게임** | 메이플스토리 (MapleStory — GMS / KMS) |
| **분석 대상** | 빅토리아컵 이벤트 (KMS 21주년 / GMS 20주년) |
| **작업 기간** | 2025.06 (약 2주) |
| **핵심 타겟** | GMS 히로익(구 리부트) 월드 유저 및 강화·성장 콘텐츠 |
| **조사 방식** | 양 서버 데이터 비교 분석 및 레딧(Reddit) 유저 설문조사 (67명 응답) |

---

<div class="portfolio-feature-list">

  <!-- 01 -->
  <section class="portfolio-feature-item scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/victoria-cup/slide_02.png' | relative_url }}" alt="빅토리아컵 GMS / KMS 로컬라이징 분석 배경" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 01</span>
      <h2>『빅토리아컵』 GMS / KMS 로컬라이징 분석</h2>
      <ul>
        <li><strong>선정 이유</strong>: KMS 리부트 월드 삭제 이후, 유저의 <strong>79.1%가 히로익(리부트) 월드</strong>에 밀집한 GMS만의 특수한 환경에서 이벤트가 어떻게 로컬라이징되었는지 의도 분석</li>
        <li><strong>분석 범위</strong>: 스탬프 출석·교환, 궁극의 콜라보, 트로피 교환, 장거리 달리기 등 MMORPG의 핵심인 <strong>'강화 및 성장'</strong> 콘텐츠로 범위를 집중</li>
        <li><strong>배경 진단</strong>: KMS 9주(63일) → GMS 6주(43일)로 압축된 일정과 오리지널 직업(묵현·시아 아스텔) 업데이트가 겹친 변혁기 속에서 발생한 로컬라이징의 한계 포착</li>
      </ul>
    </div>
  </section>

  <!-- 02 (교차: 텍스트 좌측 / 이미지 우측) -->
  <section class="portfolio-feature-item is-reversed scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/victoria-cup/slide_44.png' | relative_url }}" alt="레딧 설문조사 기반 타겟 선정 및 아쉬운 점 분석" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 02</span>
      <h2>유저 설문 데이터로 도출한 핵심 문제점</h2>
      <ul>
        <li><strong>타겟 불일치</strong>: 레딧(Reddit) 자체 설문조사 결과, GMS의 주력 타겟인 히로익 월드 유저의 <strong>이벤트 불만족 비율이 53.1%</strong>로 인터랙티브(일반) 월드보다 높게 나타남</li>
        <li><strong>킬러 품목의 부재</strong>: 에디셔널 큐브·주문서 등 인터랙티브 월드 전용 보상에 치중되어, 정작 거래가 불가능한 히로익 유저의 만족 품목이 17종으로 파편화됨</li>
        <li><strong>일정 및 내실 괴리</strong>: 기간이 줄었음에도 동일 수치를 요구해 피로도가 급증한 '장거리 달리기'와, 우르스·퍼밀리어·솔 에르다 일일퀘스트 등<br><code>'GMS 전용 내실 콘텐츠'</code>가 배제된 버프 설계 확인</li>
      </ul>
    </div>
  </section>

  <!-- 03 -->
  <section class="portfolio-feature-item scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/victoria-cup/slide_47.png' | relative_url }}" alt="빅토리아컵 3대 콘텐츠 개선점 제안" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 03</span>
      <h2>서버 특성과 '미래시'를 반영한 3대 개선안</h2>
      <ul>
        <li><strong>장거리 달리기 통합 개편</strong>: 3주씩 나뉜 1·2차를 <strong>6주 단일 회차로 통합</strong>해 요구 참여율을 완화(<code>90% → 57%</code>)하고, 향후 '유니온 챔피언' 도입을 대비해 기존 유저 스펙업 품목으로 재구성</li>
        <li><strong>히로익 맞춤형 코인샵</strong>: 스탬프샵에 사냥·일일콘텐츠 유저 모두를 만족시킬 <strong>기간제 자석펫(루나 쁘띠)과 솔 에르다/조각</strong>을 추가하고, 트로피샵의 물방울석·검은 환생의 불꽃 구매 제한을 2배로 확대해 스타포스 개편 패치 대비</li>
        <li><strong>궁극의 콜라보 현지화</strong>: 효용이 낮은 기존 패시브 대신 <strong>우르스 메소 획득량, 퍼밀리어 드롭률, 일일퀘스트 조각 수급량 증가</strong>로 변경하여 GMS 고유의 플레이 경험과 시간 단축 보상감 극대화</li>
      </ul>
    </div>
  </section>

</div>

<div class="scroll-reveal" style="margin: 3rem 0 1rem; padding: 2.5rem; background: var(--bg-card); border: 1px solid var(--border-highlight); border-radius: var(--radius-lg); text-align: center;">
  <p style="margin-bottom: 1.25rem; color: var(--text-primary); font-weight: 600; font-size: 1.15rem;">
    세부 이벤트별 요구 참여율·코인 획득량 비교 데이터와<br>레딧 유저 설문 차트, 코인샵 상세 테이블은 아래 기획서 원문에서 확인하실 수 있습니다.
  </p>
  <a href="{{ '/assets/images/portfolio/victoria-cup/maplestory-victoria-cup-localization.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 1.02rem; padding: 0.8rem 1.6rem;">
    📄 분석 및 개선 제안서 전체 PDF 열람하기 (61 Pages)
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
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    });
    revealEls.forEach(function (el) { observer.observe(el); });
  });
</script>
