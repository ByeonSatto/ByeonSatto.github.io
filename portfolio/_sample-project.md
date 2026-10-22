---
layout: post
title: "Project Aether: 수직 순환형 유적 던전 레벨 디자인"
subtitle: "비언어적 시선 유도(Visual Guidance)와 숏컷 해금을 활용한 3D 액션 어드벤처 스테이지 제작기"
category: portfolio-item
permalink: /portfolio/sample-project/
period: "2026.06 - 2026.09 (14주)"
role: "Lead Level Designer (공간 기획 · 그레이박싱 · 인카운터 스크립팅)"
team_size: "개인 프로젝트 (1인 제작)"
genre: "3D Action Adventure / Level Design"
thumbnail: "/assets/images/bio-photo.jpg"
tech_stack:
  - "Unreal Engine 5.4"
  - "Blueprint Visual Scripting"
  - "CubeGrid (Grayboxing)"
  - "Figma / Miro"
tags:
  - "UnrealEngine5"
  - "LevelDesign"
  - "Grayboxing"
  - "EncounterDesign"
summary: "언리얼 엔진 5를 활용해 미니맵이나 UI 마커 없이도 랜드마크와 조명 대비만으로 플레이어의 동선을 유도하는 3층 수직 순환형 던전 레벨 프로젝트입니다."
---

## 1. 프로젝트 개요 (Overview)

**Project Aether**는 플레이어가 미니맵이나 퀘스트 마커에 의존하지 않고, 오직 **환경적 단서(Environmental Storytelling & Visual Cues)**만을 통해 목표 지점을 인지하고 탐험할 수 있도록 설계한 3D 액션 어드벤처 레벨 디자인 프로젝트입니다.

고대 부유 유적이라는 테마 아래 **중앙 코어 엘리베이터(Hub)**를 중심으로 3개의 층위가 입체적으로 얽혀 있으며, 탐험이 진행됨에 따라 닫혀 있던 문과 승강기가 개방되면서 **하나의 유기적인 숏컷(Shortcut) 루프**가 완성되도록 설계했습니다.

- **핵심 목표**: UI 네비게이션 없이 90% 이상의 플레이어가 의도된 주 동선을 자연스럽게 따라가도록 유도
- **플레이 타임**: 약 20~25분 (탐험 구간 60% / 전투 인카운터 30% / 퍼즐 및 기믹 10%)
- **타겟 레퍼런스**: *Dark Souls*, *God of War (2018)*, *The Legend of Zelda: Tears of the Kingdom*

---

## 2. 핵심 레벨 디자인 원칙 (Design Pillars)

### 2.1. 랜드마크와 시선 고정 (Weenie & Framing)
스테이지 진입 직후 좁은 석조 회랑을 빠져나오면 시야가 탁 트이는 **비스타 포인트(Vista Point)**를 배치했습니다. 이때 최종 목적지인 '중앙 첨탑의 푸른 에테르 코어'가 화면 정중앙 프레임에 들어오도록 좌우 기둥의 각도와 카메라 고도를 계산하여 배치했습니다.

### 2.2. 명도 대비와 색온도를 통한 동선 유도
- **주 동선 (Critical Path)**: 따뜻한 황금빛 횃불과 자연광(Chiaroscuro)을 배치하여 본능적으로 안전하고 나아가야 할 방향임을 암시했습니다.
- **서브 탐험 루트 (Optional Path)**: 차가운 청록색 발광 광석과 반파된 난간을 배치해 호기심을 자극하되, 주 동선과 명확히 구분되도록 설계했습니다.

### 2.3. 기믹 학습의 3단계 구조 (Kishotenketsu)
던전 핵심 기믹인 **'에테르 전도체 회전 장치'**를 플레이어에게 가르치기 위해 텍스트 튜토리얼 대신 안전한 공간에서의 실험을 유도했습니다.
1. **도입 (Intro)**: 위협 요소가 없는 안전 지대에서 장치 조작 시 다리가 연결되는 인과관계를 즉시 확인
2. **전개 (Development)**: 원거리 적의 견제 속에서 엄폐물과 기믹 조작 타이밍을 계산하는 복합 인카운터
3. **절정 (Twist)**: 수직 이동 중인 리프트 위에서 상하 층위의 전도체를 동시에 정렬해 보스방 입구를 여는 응용 퍼즐

---

## 3. 공간 레이아웃 및 동선 설계 (Layout & Flow)

```
[진입로: 침묵의 협곡]
        │
        ▼ (Vista Point: 첨탑 조망)
[중앙 로비: 봉인된 에테르 코어 (Hub)] ◄───────────┐
        │                                       │
        ├──► [서쪽 날개: 하층 수로 (기믹 1단계)]  │ (숏컷 1 해금: 철제 격자문)
        │           │                           │
        │           ▼                           │
        └──► [동쪽 성소: 중층 회랑 (복합 전투)] ──┘
                    │
                    ▼ (숏컷 2 해금: 코어 승강기 가동)
        [최상층: 아카on 보스 아레나]
```

| 구역 명칭 | 고도 (Z축) | 주요 플레이 경험 | 핵심 레벨 기믹 |
| :--- | :--- | :--- | :--- |
| **Zone 1. 침묵의 협곡** | `0m ~ +8m` | 기본 이동 조작 확인 및 랜드마크 조망 | 프레이밍 아치, 비스타 연출 |
| **Zone 2. 중앙 코어 로비** | `+10m` | 다중 경로 인지 및 거점 역할 수행 | 잠긴 양측 숏컷 게이트와 중앙 승강기 |
| **Zone 3. 하층 침수 수로** | `-12m ~ 0m` | 전도체 기믹 학습 및 근거리 기습 인카운터 | 수위 조절 밸브, 숏컷 사다리 |
| **Zone 4. 상층 천공 회랑** | `+12m ~ +28m` | 고지대 원거리 저격수 대처 및 입체 기동 | 회전 브릿지, 낙사 위험 지형 |
| **Zone 5. 코어 성소 (Boss)** | `+40m` | 2페이즈 지형 변화가 포함된 보스전 | 파괴 가능한 기둥 엄폐물 |

---

## 4. 스크린샷 및 그레이박싱 검증 (Screenshots & Blockmesh)

> **Note**: 아래 영역은 레벨 에디터의 그레이박싱(Blockmesh) 단계부터 라이팅 패스까지의 작업 화면을 담는 쇼케이스 영역입니다.

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/bio-photo.jpg' | relative_url }}" alt="Vista Point Framing & Lighting Pass" loading="lazy">
    <figcaption>▲ [Fig 1] 진입부 비스타 포인트(Vista Point): 좌우 협곡 프레이밍을 통해 중앙 첨탑으로 플레이어의 초기 시선을 집중시키는 구도</figcaption>
  </figure>
</div>

### 플레이테스트 기반 트러블슈팅 사례
- **문제 현상**: 초기 그레이박싱 테스트에서 5명 중 3명의 테스터가 Zone 2 로비 진입 후 주 동선(좌측 계단) 대신 잠겨 있는 우측 숏컷 문에서 계속 상호작용을 시도하며 동선이 정체됨.
- **원인 분석**: 잠긴 숏컷 문 주변의 시야가 오히려 더 밝고 넓게 열려 있어 주 경로로 오인됨.
- **해결 방안**:
  1. 잠긴 문 앞의 단차를 높여 로비 쪽에서는 손잡이가 닿지 않는 구조임을 직관적으로 시각화.
  2. 의도된 주 동선인 좌측 계단 입구에 **움직이는 깃발(Motion Cue)**과 따뜻한 스포트라이트를 배치하고, 계단 위를 순찰하며 지나가는 적(Patrol AI)의 실루엣을 노출해 시선을 자연스럽게 견인함.
  3. 수정 후 재테스트 결과 **100%의 테스터가 5초 이내에 의도된 주 동선으로 진입**하는 것을 확인.

---

## 5. 사용 기술 및 구현 상세 (Technical Implementation)

- **Unreal Engine 5 CubeGrid**: 빠른 반복 수정(Iteration)을 위해 캐릭터 점프 높이(`180uu`), 엄폐물 높이(`120uu`), 복도 최소 폭(`400uu`) 규격 메트릭스(Metrics)를 수립하여 블록메시 제작.
- **Blueprint Encounter Trigger**: 구역 진입 시 웨이브 스폰, 전투 종료 후 숏컷 게이트 언락 및 카메라 시퀀서 연출을 모듈형 블루프린트 액터(`BP_EncounterZone`)로 구현하여 디자이너가 에디터에서 즉시 파라미터를 조절할 수 있도록 설계.
