# Byeon's Portfolio & Game Archive

게임 레벨 디자이너 변성민의 **개인 포트폴리오, 게임 시스템/레벨 디자인 칼럼, 심층 게임 리뷰**를 아카이빙하는 Jekyll 기반 반응형 정적 웹사이트입니다. 외부 빌드 파이프라인 없이 GitHub Pages에서 즉시 렌더링됩니다.

## 사이트 주소 및 환경 설정
- **Title**: Byeon's Portfolio & Game Archive
- **URL**: `https://byeonsatto.github.io/` (`baseurl: ""`)
- **Permalink**: `/:categories/:title/`

## 주요 디렉터리 구조
```text
.
├── _config.yml                              # 사이트 메타데이터, Baseurl(/github.io), 네비게이션 설정
├── _includes/
│   ├── header.html                          # 반응형 상단 GNB 헤더
│   └── footer.html                          # 소셜 링크 및 저작권 푸터
├── _layouts/
│   ├── default.html                         # SEO 메타태그, 뷰포트, 기본 레이아웃 틀
│   ├── home.html                            # 대표 포트폴리오 + 최신 칼럼/리뷰 피드 메인 레이아웃
│   ├── portfolio-list.html                  # 프로젝트 카드 그리드 레이아웃
│   ├── post.html                            # 칼럼 및 프로젝트 상세 레이아웃 (자동 목차 TOC 지원)
│   └── review.html                          # 게임 리뷰 전용 레이아웃 (평점 배지, 스펙 박스, 장단점 비교)
├── _posts/
│   ├── 2026-10-22-sample-game-column.md     # 샘플 게임 칼럼 (category: column)
│   └── 2026-10-22-sample-game-review.md     # 샘플 게임 리뷰 (category: review)
├── portfolio/
│   ├── index.md                             # 포트폴리오 목록 페이지 (/portfolio/)
│   └── elden-ring-siofra-river.md           # 엘든 링 시프라 강 역기획 포트폴리오 상세 페이지 (/portfolio/elden-ring-siofra-river/)
├── column/
│   └── index.md                             # 게임 칼럼 카테고리 아카이브 (/column/)
├── review/
│   └── index.md                             # 게임 리뷰 카테고리 아카이브 (/review/)
├── assets/
│   ├── css/style.css                        # 다크 톤 반응형 커스텀 스타일시트
│   └── images/                              # 프로필 및 프로젝트 썸네일 이미지
└── index.html                               # 메인 홈 엔트리
```
