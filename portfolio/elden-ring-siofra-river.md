---
layout: post
title: "엘든 링: 시프라 강 (각해의 영지) 역기획"
subtitle: "수직적 공간 구성을 통한 정복감과 가시적 목표(기둥) 기반의 비선형 오픈월드 동선 설계"
category: portfolio-item
permalink: /portfolio/elden-ring-siofra-river/
period: "2026.03 - 2026.04 (2개월)"
genre: "3D Open-World Action RPG / Level Design"
thumbnail: "/assets/images/portfolio/siofra-river/cover.jpg"
tags:
  - "UnrealEngine5"
  - "LevelDesign"
  - "ReverseDesign"
  - "EldenRing"
summary: "언리얼 엔진 5.6을 활용하여 『엘든 링』의 지하 오픈월드 '시프라 강 하층 - 각해의 영지(약 520m × 180m)'를 역기획 및 재구축한 레벨 디자인 프로젝트입니다."
toc: false
---

## 프로젝트 개요

| 항목 | 내용 |
| :--- | :--- |
| **대상 게임** | 엘든 링 (Elden Ring) |
| **지역** | 시프라 강 하층, 각해의 영지 |
| **작업 기간** | 2026.03 ~ 2026.04 (2개월) |
| **사용 툴** | 언리얼 엔진 5.6 (Unreal Engine 5.6) |
| **크기** | 약 `520m × 180m` |

<p style="text-align: center; font-weight: 700; color: var(--text-primary); margin: 2rem 0 0.75rem;">▼플레이영상</p>

<div class="video-embed-container" style="margin-top: 0.5rem;">
  <iframe src="https://www.youtube.com/embed/DzPZhLIEnJw" title="엘든 링 시프라 강 역기획 시연 영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

<div style="margin: 2rem 0 3.5rem; text-align: center;">
  <a href="{{ '/assets/images/portfolio/siofra-river/elden-ring-siofra-river-reverse-design.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
    📄 역기획서 원본 PDF 전체 보기 / 다운로드
  </a>
</div>

---

<div class="portfolio-feature-list">

  <!-- 01 -->
  <section class="portfolio-feature-item scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/siofra-river/cover.jpg' | relative_url }}" alt="엘든 링 시프라 강 각해의 영지 역기획 전경" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 01</span>
      <h2>엘든 링 『각해의 영지』 역기획</h2>
      <ul>
        <li><strong>선정 이유</strong>: 황금나무와 미니맵 가이드가 없는 지하 오픈월드에서, 8개의 기둥 기믹으로 플레이어의 자발적 탐험을 유도하는 독특한 레벨 구조 분석</li>
        <li><strong>규격 역산</strong>: 캐릭터 신장(<code>1.8m</code>)·자연물·낙하 데미지를 기준으로 지형 고도(<code>2m~32m</code>)와 성벽 높이(<code>88m</code>)를 정밀 추산</li>
        <li><strong>작업 방식</strong>: 외형적 에셋에 의존하지 않고, 언리얼 엔진 5.6의 <strong>기본 에셋과 모델링 툴만</strong>으로 공간 비례와 시선 유도 본질에 집중해 제작</li>
      </ul>
    </div>
  </section>

  <!-- 02 -->
  <section class="portfolio-feature-item scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/siofra-river/vertical_level.png' | relative_url }}" alt="높은 성벽에서 아래 플레이 구역을 조망하는 뷰" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 02</span>
      <h2>수직적 레벨과 일관된 플레이 경험</h2>
      <ul>
        <li><strong>핵심 재미</strong>: 구문명의 거대한 성벽에 압도당하던 초반에서 시작해, 점차 높은 곳으로 오르며 자신이 돌파해 온 아랫마을을 한눈에 내려다보는 <strong>정복감과 복습의 재미</strong></li>
        <li><strong>일관된 경험 설계</strong>: 작은 오두막의 사다리 상승 구간부터 거대한 성벽의 조망 포인트까지,<br><code>'상승(긴장) → 조망(정복감) → 하강 및 복귀(이완)'</code>의 리듬을 레벨 전역에 일관되게 반복 배치</li>
        <li><strong>레벨 개선</strong>: 원작 성벽 상층부의 불필요한 잡몹전과 루즈한 이동 구간을 압축하고, 등반 기둥을 성 내부 조망 포인트로 직결시켜 즉각적인 피드백 강화</li>
      </ul>
    </div>
  </section>

  <!-- 03 -->
  <section class="portfolio-feature-item scroll-reveal">
    <div class="portfolio-feature-media">
      <img src="{{ '/assets/images/portfolio/siofra-river/blueprint_gimmick.png' | relative_url }}" alt="기둥 점화 카운트 및 각해 보스전 활성화 블루프린트" loading="lazy">
    </div>
    <div class="portfolio-feature-content">
      <span class="portfolio-feature-num">POINT 03</span>
      <h2>AI를 활용한 블루프린트 기믹 구현</h2>
      <ul>
        <li><strong>AI 기반 문제 해결</strong>: 블루프린트 제작 중 발생한 레퍼런스 참조 및 컴파일 오류를 AI 프롬프트 간소화와 반복 테스트로 빠르게 극복</li>
        <li><strong>핵심 구현 기믹</strong>: 필드 기둥 점화 시 랜드마크 입구 기둥 연동 점화, 8개 기둥 활성화 감지 및 보스전 전송 포탈 해금, 오픈월드 이동을 위한 영마(말) 라이딩 소환·하차 시스템 구축</li>
      </ul>
    </div>
  </section>

</div>

<div class="scroll-reveal" style="margin: 3rem 0 1rem; padding: 2.5rem; background: var(--bg-card); border: 1px solid var(--border-highlight); border-radius: var(--radius-lg); text-align: center;">
  <p style="margin-bottom: 1.25rem; color: var(--text-primary); font-weight: 600; font-size: 1.15rem;">
    85개 세부 동선 포인트의 시선 유도(프레이밍·지그재그 배치) 분석과<br>구획별 상세 규격 도면은 아래 기획서 원문에서 확인하실 수 있습니다.
  </p>
  <a href="{{ '/assets/images/portfolio/siofra-river/elden-ring-siofra-river-reverse-design.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 1.02rem; padding: 0.8rem 1.6rem;">
    📄 역기획서 전체 PDF 열람하기 (43 Pages)
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
