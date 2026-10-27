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

| 항목 | 내용 |
| :--- | :--- |
| **대상 게임** | 엘든 링 (Elden Ring) |
| **지역** | 시프라 강 하층, 각해의 영지 |
| **작업 기간** | 2026.03 ~ 2026.04 (2개월) |
| **사용 툴** | 언리얼 엔진 5.6 (Unreal Engine 5.6) |
| **크기** | 약 `520m × 180m` |

<div class="video-embed-container">
  <iframe src="https://www.youtube.com/embed/DzPZhLIEnJw" title="엘든 링 시프라 강 역기획 시연 영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

<div style="margin: 2rem 0 3rem; text-align: center;">
  <a href="{{ '/assets/images/portfolio/siofra-river/elden-ring-siofra-river-reverse-design.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
    📄 역기획서 원본 PDF 전체 보기 / 다운로드
  </a>
</div>

---

## 01. 황금나무가 없는 지하 오픈월드, 『각해의 영지』 역기획

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/cover.jpg' | relative_url }}" alt="엘든 링 시프라 강 각해의 영지 역기획 전경" loading="lazy">
  </figure>
</div>

엘든 링의 지상 세계가 거대한 **'황금나무'**를 나침반 삼아 플레이어를 이끈다면, 지하 세계인 **시프라 강(각해의 영지)**은 황금나무도, 미니맵의 친절한 가이드도 없는 공간입니다. 게다가 던전과 필드가 명확히 분리된 엘든 링에서 드물게 **'오픈월드 필드 자체에서 8개의 기둥 기믹을 해결해 보스전을 해금하는 독특한 구조'**를 취하고 있습니다.

> *"거대한 지표가 사라진 비선형 오픈월드에서, 어떻게 강제성 없이 플레이어의 발걸음을 유도할 것인가?"*

이 질문에 답하기 위해 인게임 미니맵을 바탕으로 구획을 나누고, 캐릭터 신장(`1.8m`)과 자연물, 낙하 데미지를 기준으로 지형 고도(`2m ~ 32m`)와 성벽 규격(`88m`)을 역산했습니다. 화려한 외부 에셋이나 머티리얼에 기대기보다 **언리얼 엔진 5.6의 기본 에셋과 모델링 툴, 랜드스케이프만을 활용**해 `520m × 180m` 규모의 공간을 직접 빚어내며, 오직 **시각적 프레이밍과 동선 설계의 본질**만으로 원작의 탐험 경험을 재구축했습니다.

---

## 02. 수직적 레벨과 일관된 플레이 경험: '조망'이 만드는 정복감

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/vertical_level.png' | relative_url }}" alt="높은 성벽에서 아래 플레이 구역을 조망하는 뷰" loading="lazy">
  </figure>
</div>

이 레벨을 관통하는 핵심 테마는 **'수직성(Verticality)을 통한 정복감과 복습의 재미'**입니다. 초반 낮은 강가에서 출발해 거대한 구문명의 성벽에 압도당하던 플레이어는, 오르막과 무너진 기둥, 사다리 통로를 거쳐 점차 높은 곳으로 상승하게 됩니다.

그리고 마침내 도달한 상층부 성벽 끝에서 **자신이 방금 전까지 치열하게 돌파해 온 아랫마을과 기둥들을 한눈에 내려다보는 순간**, 공간의 수직성은 곧 플레이어의 성장과 정복감이라는 강렬한 피드백으로 치환됩니다.

- **일관된 경험 설계**: 작은 오두막의 사다리 상승 구간부터 거대한 성벽의 조망 포인트까지, `'상승(긴장) → 조망(정복감) → 하강 및 복귀(이완)'`의 리듬을 레벨 전역에 일관되게 반복 배치했습니다.
- **역기획을 통한 레벨 개선**: 원작의 성벽 상층부에서 플레이 밀도를 떨어뜨리던 불필요한 잡몹전과 지나치게 넓은 지연 구간을 과감히 압축하고, 쓰러진 기둥을 등반해 성 내부 조망 포인트로 직결되도록 동선을 개편하여 **'수직적 조망의 카타르시스'가 즉각적으로 전달**되도록 개선했습니다.

---

## 03. AI를 활용한 블루프린트 기믹 & 라이딩 구현

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/blueprint_gimmick.png' | relative_url }}" alt="기둥 점화 카운트 및 각해 보스전 활성화 블루프린트" loading="lazy">
  </figure>
</div>

넓은 오픈월드(`520m × 180m`)의 이동 템포와 기믹 중심의 플레이 흐름을 실제로 검증하기 위해, **AI를 적극 활용하여 컴파일 오류와 로직 병목을 해결**하며 핵심 시스템들을 블루프린트(Blueprint)로 직접 구현했습니다.

- **필드 기둥 ↔ 랜드마크 기둥 연동 및 보스전 해금**: 필드 곳곳의 기둥과 상호작용(`Lightup`)하면 뷰포트에서 매핑된 유적 입구의 대응 기둥(`TargetPillars`)에 동시에 불꽃 파티클이 점화됩니다. 매니저가 점화된 입구 기둥 수(`Lit Count == 8`)를 감지하면 완료 메시지와 함께 **'각해' 보스전 전송 포탈(`IsActive`)이 해금**되어, 별도의 강제 귀환 동선 없이도 플레이어 스스로 랜드마크로 돌아오게 만듭니다.
- **영마(말) 라이딩 소환 및 하차 시스템**: 말 스켈레탈 메시에 안장(`Saddle`) 소켓을 구성하고, `T` 키 입력 시 즉시 말을 소환·부착하여 조작 권한(`Possess`)을 이양받거나 하차 시 원래 캐릭터의 카메라와 애니메이션으로 매끄럽게 복귀하는 오픈월드 기동 시스템을 구축했습니다.

---

<div style="margin: 3rem 0 1rem; padding: 2rem; background: var(--bg-card); border: 1px solid var(--border-highlight); border-radius: var(--radius-lg); text-align: center;">
  <p style="margin-bottom: 1rem; color: var(--text-primary); font-weight: 600; font-size: 1.05rem;">
    85개 세부 동선 포인트의 시선 유도(프레이밍·지그재그 배치) 분석과<br>구획별 상세 규격 도면은 아래 기획서 원문에서 확인하실 수 있습니다.
  </p>
  <a href="{{ '/assets/images/portfolio/siofra-river/elden-ring-siofra-river-reverse-design.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
    📄 역기획서 전체 PDF 열람하기 (43 Pages)
  </a>
</div>
