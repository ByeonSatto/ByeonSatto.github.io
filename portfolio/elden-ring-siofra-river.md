---
layout: post
title: "엘든 링: 시프라 강 (각해의 영지) 역기획 및 레벨 제작"
subtitle: "수직적 공간 구성을 통한 정복감과 가시적 목표(기둥) 기반의 비선형 오픈월드 동선 설계"
category: portfolio-item
permalink: /portfolio/elden-ring-siofra-river/
period: "2026.03 - 2026.04 (2개월)"
role: "Level Designer (공간 규격 분석 · 레벨 역기획 및 개선 · 블루프린트 기믹 구현)"
team_size: "개인 프로젝트 (1인 제작)"
genre: "3D Open-World Action RPG / Level Design"
thumbnail: "/assets/images/portfolio/siofra-river/slide_01.png"
tech_stack:
  - "Unreal Engine 5.6"
  - "Blueprint Visual Scripting"
  - "Landscape & Modeling Tools"
tags:
  - "UnrealEngine5"
  - "LevelDesign"
  - "ReverseDesign"
  - "EldenRing"
  - "OpenWorld"
summary: "언리얼 엔진 5.6을 활용하여 『엘든 링』의 지하 오픈월드 '시프라 강 하층 - 각해의 영지(약 520m × 180m)'를 역기획 및 재구축하고, 성벽 상층부의 동선 밀도와 조망 피드백을 개선한 레벨 디자인 프로젝트입니다."
toc: true
---

## 1. 프로젝트 개요 및 시연 영상 (Overview & Showcase)

<div class="video-embed-container">
  <iframe src="https://www.youtube.com/embed/DzPZhLIEnJw" title="엘든 링 시프라 강 역기획 시연 영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

본 프로젝트는 **『엘든 링(Elden Ring)』**의 지하 오픈월드 지역인 **시프라 강 하층, 각해의 영지**를 분석하여 역기획하고, **언리얼 엔진 5.6(Unreal Engine 5.6)**으로 직접 레벨과 핵심 기믹을 구축 및 개선한 레벨 디자인 프로젝트입니다.

- **대상 게임 및 지역**: 엘든 링 (Elden Ring) — 시프라 강 하층, 각해의 영지
- **작업 기간**: 2026.03 ~ 2026.04 (2개월)
- **사용 툴**: Unreal Engine 5.6 (기본 에셋, 모델링 툴, 랜드스케이프, 블루프린트 활용)
- **레벨 규모**: 약 `520m × 180m`

<div style="margin: 1.5rem 0;">
  <a href="{{ '/assets/images/portfolio/siofra-river/elden-ring-siofra-river-reverse-design.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
    📄 역기획서 원본 PDF 전체 보기 / 다운로드
  </a>
</div>

### 핵심 플레이 흐름 (Core Playflow)
1. 랜드마크인 **각해의 영지** 입구 계단에 **8개의 불 꺼진 기둥**이 배치되어 있으며, 이와 대응하는 8개의 기둥이 시프라 강 필드 곳곳에 흩어져 있습니다.
2. 플레이어가 필드를 탐험하며 각 기둥에 불을 붙이면, 랜드마크 입구의 대응 기둥에도 동시에 불이 켜집니다.
3. **8개의 기둥을 모두 찾아 활성화**하면 `'어딘가에서 각해의 힘이 깃들었다'`라는 메시지가 팝업되며, 별도의 강제 동선 없이도 플레이어가 랜드마크(각해)로 돌아와 보스전을 활성화하고 클리어하도록 유도하는 것이 핵심 플레이 경험입니다.

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_04.png' | relative_url }}" alt="각해의 영지 플레이 흐름 소개" loading="lazy">
    <figcaption>▲ 랜드마크인 각해의 영지 입구 8개 기둥과 필드 기둥의 대응 구조</figcaption>
  </figure>
</div>

---

## 2. 선정 이유 및 기획 의도 (Selection & Design Intent)

### 2.1. 지역 선정 이유
1. **황금나무가 없는 지역의 시선 유도**: 엘든 링의 지상 지역은 거대한 '황금나무'라는 강력한 시각적 지향점과 동선 상의 POI 배치로 플레이어를 안내합니다. 반면 황금나무가 존재하지 않는 지하 공간인 시프라 강에서 **기믹 수행을 위해 플레이어를 어떻게 필드로 유도하는지**가 매력적인 분석 대상이었습니다.
2. **지하 오픈월드와 수직적 레벨**: 지하 공간임에도 오픈월드의 개방감이 살아있으며, 수직적 단차 구성을 통해 높은 정복감을 제공합니다. 이는 게임 후반부 성벽 윗부분(영원한 도읍 녹크론)을 탐험할 때 거시적인 수직성으로 확장되며 **'플레이 복습의 재미'**로 작용합니다.
3. **기믹 해결과 오픈월드의 결합**: 던전과 오픈월드가 명확히 분리된 엘든 링에서, 오픈월드 필드 자체에서 8개의 기둥 기믹을 해결해 보스전을 해금하는 유니크한 플레이 흐름을 갖추고 있습니다.

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_06.png' | relative_url }}" alt="시프라 강 선정 이유" loading="lazy">
    <figcaption>▲ 시프라 강 역기획 선정의 3가지 핵심 매력 포인트</figcaption>
  </figure>
</div>

### 2.2. 핵심 기획 의도 (Design Pillars)
- **01. 모듈화된 탐험 원칙 학습**: 극초반부 림그레이브에서 조건 없이 입장 가능하지만 고레벨 몬스터를 배치하여, 엘든 링의 핵심 탐험 원칙인 **`회피 → 성장 → 재도전`**을 작은 구간이 아닌 지역 단위로 확장하여 학습시킵니다.
- **02. 수직적 레벨을 통한 정복감**: 오를 수 있는 무너진 성벽과 오르막길 등 수직적 레벨 디자인을 강조해 아래를 내려다보며 얻는 정복감을 제공합니다. 또한 높은 성벽은 후반부 플레이 지역과 맞물려 지역 간 수직성으로 정복감이 극대화됩니다.
- **03. 기믹 수행과 탐사 동기화**: 황금나무나 미니맵 유도가 약한 환경에서 **가시적인 목표(기둥)**를 제시하여 플레이어가 자발적으로 맵 곳곳을 탐험하도록 동기를 부여합니다.

---

## 3. 동선 구조 및 미니맵 설계 (Flow & Minimap Analysis)

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_05.png' | relative_url }}" alt="시프라 강 미니맵 및 동선 구조" loading="lazy">
    <figcaption>▲ 메인 동선, 서브 동선, 일방통행 포탈 및 대·중·소형 POI 배치도</figcaption>
  </figure>
</div>

- **15~30초 주기의 이지선다**: 유도성이 강한 메인 동선을 따라 이동하되, **15~30초에 한 번씩 서브 동선으로 빠지는 이지선다 선택지**를 부여하여 비선형 탐험의 재미를 유지합니다.
- **보상 위계 분리 (채집물 vs 소형 POI)**:
  - **채집물**: 보상 가치가 낮아 부담 없이 동선을 안내하는 **시선 유도(빵부스러기) 및 탐험 피드백 요소**로 활용했습니다.
  - **소형 POI**: 룬, 단석 등 실질적인 **강화 재화**로 한정하여 서브 동선 및 동선 외 자유 탐험에 확실한 보상감을 부여했습니다.
- **랜드마크 회귀 유도**: 8개 기둥을 모두 활성화하면 완료 메시지가 팝업되어, 별도의 물리적 귀환 동선 없이도 플레이어 스스로 랜드마크(보스전 포탈)로 돌아오도록 설계되어 있습니다.

---

## 4. 공간 규격 측정 및 상세 레벨 디자인 (Metrics & Level Design)

### 4.1. 지형 및 건축 규격 측정 (Metrics)
인게임 미니맵을 바탕으로 지역을 구획화한 뒤, 자연물·캐릭터 키(`1.8m`)·낙하 데미지 등을 활용해 구획별 높이를 추산하여 언리얼 엔진 랜드스케이프와 지형 에셋으로 재구축했습니다.

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_08.png' | relative_url }}" alt="지형 규격 측정 프로세스" loading="lazy">
    <figcaption>▲ 구획별 고도(`2m ~ 32m`) 추산 및 인게임 뷰 비교 보완 프로세스</figcaption>
  </figure>
</div>

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_09.png' | relative_url }}" alt="높은 성벽 건축 규격" loading="lazy">
    <figcaption>▲ 높은 성벽(`88m`)의 세로비 규격: 구문명에 대한 압도감 부여 및 상층 조망 시 극적인 정복감 제공</figcaption>
  </figure>
</div>

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_10.png' | relative_url }}" alt="수직적 통로와 건축물 단차" loading="lazy">
    <figcaption>▲ 수직적 통로와 건축물(`3m ~ 12m`): 계단과 사다리 상승 구간의 긴장감 부여 후 상인 조우 및 단차 하강으로 이완</figcaption>
  </figure>
</div>

### 4.2. 구간별 상세 레벨 디자인 기법 요약
전체 85개 세부 포인트에 걸쳐 비언어적 시선 유도와 전투 인카운터를 설계했습니다.

| 구간 분류 | 주요 포인트 | 핵심 레벨 디자인 기법 및 의도 |
| :--- | :--- | :--- |
| **진입 및 기믹 학습** | `#01 ~ #16` | • 진입 즉시 첫 기둥(`#01`)을 노출하고 건축물·바위로 축복과 랜드마크를 가려 시선 분산 방지 후 극적 발견 유도<br>• 첫 기둥(`#09`) 상호작용 시 랜드마크 입구 기둥(`#08`)에 동시에 불이 켜지는 연출로 **텍스트 없이 기믹 규칙 학습**<br>• 나무 프레이밍(`#15`)을 통해 랜드마크 내부의 상징물인 **'각해'(`#16`)** 강조 |
| **초중반 필드 & 포탈** | `#17 ~ #41` | • 푸른 빛을 띠는 함정(위습)과 몬스터(선조령의 백성)를 배치해 **'푸른색 = 위험'**이라는 시각 규칙 인지<br>• 채집물·비석·몬스터·위습을 **지그재그(Zig-zag)**로 배치하여 이동 간 지루함 방지 및 시선 견인<br>• 남북을 잇는 **양방향 포탈(`#26 ↔ #27`)**로 탐사 순서 선택권 부여 및 아치형 구조물 프레이밍(`#34`) 활용 |
| **상층부 수직 탐험** | `#42 ~ #50` | • 앞서 양방향 포탈을 경험하게 한 뒤 **일방향 포탈(`#42`)**을 배치해 심리적 저항 없이 상층부로 이동 유도<br>• 중간 보스(`#44, #47`)로 강한 긴장감을 부여하고, 쓰러진 기둥(`#45, #46`)을 타고 올라가 **아래 플레이 구역을 수직 조망(`#50`)**하며 극적인 정복감 획득 |
| **후반부 & 수직 통로** | `#51 ~ #85` | • 빠른 전투 동선(`#56`) vs 안전한 우회 동선(`#57`), 고지대 위험 보상(`#75, #76`) 등 리스크-리워드 선택지 제공<br>• 유일한 목조 건축물(`#54`)로 시각적 환기 후 계단·사다리·좁은 플랫폼 전투(`#59 ~ #64`)로 긴장감 고조<br>• 랜턴(빵부스러기+라이팅, `#67, #68`) 지그재그 유도 후 **방랑 상인(`#69`)** 조우로 긴장 해소<br>• 8번째 기둥(`#83`) 활성화 시 메시지 팝업과 함께 보스전 진입 및 지상 출구(`#85`) 연결 |

---

## 5. 역기획 기반 레벨 개선사항 (Level Improvements)

원작의 성벽 윗부분 구간을 분석하며 발견한 아쉬운 점들을 역기획 레벨에서 직접 수정·개선했습니다.

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_37.png' | relative_url }}" alt="성벽 윗부분 개선사항 1" loading="lazy">
    <figcaption>▲ [개선 1 & 2] 성벽 상층부의 불필요한 잡몹전 및 지연 구간 축소, 즉각적인 조망 피드백 확보</figcaption>
  </figure>
</div>

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_38.png' | relative_url }}" alt="성벽 윗부분 개선사항 2" loading="lazy">
    <figcaption>▲ [개선 3] 등반 가능한 기둥의 동선 연결성 강화 및 성 내부 진입 조망 포인트 확보</figcaption>
  </figure>
</div>

1. **플레이 밀도 개선 (잡몹전 삭제 및 구역 축소)**
   - **Before**: 보상 없이 난이도만 높은 불필요한 잡몹전이 배치되어 있고, 플레이 밀도 대비 공간이 지나치게 넓어 루즈함이 발생했습니다.
   - **After**: 불필요한 잡몹전을 삭제하고 구역을 과감히 축소하여 플레이타임을 압축함으로써 메인 동선이 소외되지 않도록 조절했습니다.
2. **수직적 조망 피드백의 즉각성 강화**
   - **Before**: 장소가 넓어 이동이 지연되는 반면 높이는 낮아져 수직적 레벨의 장점이 퇴색되었습니다.
   - **After**: 지연 공간을 삭제하고 올라서자마자 바로 아래층 플레이 구역을 조망할 수 있게 수정하여, 정복감을 즉각적으로 제공하고 빠르게 다음 플레이로 이어지도록 개선했습니다.
3. **등반 기둥의 공간 연결 및 유도 강화**
   - **Before**: 오를 수 있는 쓰러진 기둥임에도 실제로 플레이한 공간과 유기적으로 이어지지 않고, 아래를 조망하는 핵심 피드백으로의 유도가 약했습니다.
   - **After**: 해당 기둥을 올라 성 안쪽으로 직접 진입할 수 있게 구조를 개편하여 동선 유도를 강화하는 동시에 확실한 조망 포인트를 확보했습니다.

---

## 6. 블루프린트 기믹 구현 (Blueprint Implementation)

언리얼 엔진 5.6의 블루프린트 비주얼 스크립팅을 활용해 레벨의 핵심 기믹과 이동 시스템을 구현했습니다.

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_39.png' | relative_url }}" alt="블루프린트 - 기둥 및 각해 기믹" loading="lazy">
    <figcaption>▲ 필드 기둥-유적 기둥 연동, 활성화 카운트 매니저 및 보스전 텔레포트 블루프린트</figcaption>
  </figure>
</div>

- **필드 기둥 ↔ 유적 기둥 연동 기믹**:
  - `TargetPillars` 인스턴스 편집 가능 변수로 뷰포트에서 대응하는 입구 기둥을 직접 할당했습니다.
  - `E` 키로 필드 기둥과 상호작용 시 `Lightup` 이벤트가 실행되어 불꽃 파티클(`Particle System`)을 활성화하고, 할당된 `TargetPillars`의 `Lightup` 이벤트를 연쇄 호출한 뒤 `Mymanager`로 활성화 개수를 검사합니다.
- **각해 활성화 및 보스전 이동**:
  - `Entrance Pillars` 배열 변수를 통해 유적 입구 기둥만 카운트되도록 설계했습니다.
  - 입구 기둥 점화(`IsLit`) 시 `Lit Count`가 상승하며, **`Lit Count == 8` 충족 시** `IsActive` 이벤트를 실행해 완료 메시지를 출력하고 각해 이펙트를 활성화합니다.
  - 활성화된 각해와 상호작용 시 `IsActive` 여부를 검사한 뒤 뷰포트에서 지정한 `Teleport Location` 좌표로 플레이어를 보스전 아레나로 이동시킵니다.

<div class="screenshot-gallery">
  <figure class="screenshot-item">
    <img src="{{ '/assets/images/portfolio/siofra-river/slide_40.png' | relative_url }}" alt="블루프린트 - 말 라이딩 시스템" loading="lazy">
    <figcaption>▲ 영마(말) 라이딩 소환 및 하차 블루프린트 구현</figcaption>
  </figure>
</div>

- **말 라이딩(탑승/하차) 시스템**:
  - 광활한 오픈월드(`520m × 180m`) 이동 템포를 재현하기 위해 말 스켈레탈 메시에 `Saddle(안장)` 소켓을 추가했습니다.
  - `T` 키 입력 시 말 메시를 소환하고 플레이어를 `Saddle` 소켓 위치에 부착(`Attach Actor To Component`)한 뒤 조작 권한(`Possess`)을 이양하며, 재차 `T` 키 입력 시 말 액터를 파괴하고 카메라 인풋·애니메이션·조작 권한을 원래 캐릭터로 복귀시킵니다.

---

## 7. 시행착오 및 배운 점 (Retrospective)

### 7.1. 시행착오와 극복 과정
- **블루프린트 구현**: 기믹 수행과 말 라이딩 블루프린트를 제작하는 과정에서 레퍼런스 참조 및 권한 이양에 따른 컴파일 오류를 자주 겪었습니다. AI를 활용해 프롬프트와 로직 구조를 단계별로 간소화하고 반복적인 인게임 테스트를 거치며 안정적으로 구현했습니다.
- **본질적인 내러티브 전달**: 초기에는 공간을 구성하며 내러티브와 테마를 머티리얼이나 화려한 외부 에셋 등 미적인 요소로 보완하려는 실수를 범했습니다. 레벨 디자인 본연의 역할에 집중하기 위해 **기본 에셋과 언리얼 모델링 툴만을 활용**하여 공간의 비례, 고저차, 프레이밍만으로 내러티브와 위압감을 전달하도록 방향을 전환했습니다.

### 7.2. 프로젝트를 통해 배운 점
1. **주제의 일관성과 확장성**: 제작 과정 전반에서 **'수직적 레벨'**이라는 핵심 주제를 계단, 성벽, 조망 포인트 등 반복적인 플레이 경험으로 녹여내며 플레이어의 정복감을 일관되게 강화하는 법을 배웠습니다.
2. **비선형 오픈월드 레벨 디자인 역량**: 비선형적인 오픈월드 공간에서 플레이어에게 강제성을 띠지 않으면서도 동선이 난잡해지지 않도록 라이팅, 프레이밍, 지그재그 채집물 배치를 활용한 **절제되고 다양한 동선 유도 기법**을 체득했습니다.
3. **AI 리터러시와 기술적 문제 해결**: 블루프린트 스크립팅, 리깅 등 기술적으로 부족한 영역을 직면했을 때 AI를 효과적으로 활용해 프로토타이핑 속도와 완성도를 높이는 방법을 익혔습니다.
