---
layout: default
title: "Game Columns"
permalink: /column/
description: "게임 레벨 디자인, 공간의 시선 유도, 패치 방향성 및 코어 메커니즘을 심층 분석하는 칼럼 아카이브입니다."
---

{% assign columns = site.categories.column %}

<section class="page-hero">
  <div class="container page-hero-flex">
    <div>
      <span class="page-kicker">LEVEL &amp; SYSTEM DESIGN ARCHIVE</span>
      <h1 class="page-title">
        게임 칼럼 (Columns)
        <span class="page-count-badge">총 {{ columns.size | default: 0 }}편</span>
      </h1>
      <p class="page-desc">{{ page.description }}</p>
    </div>
    <div class="owner-only page-hero-action">
      <a href="{{ '/write/?category=column' | relative_url }}" class="btn btn-primary">✏️ 새 칼럼 작성</a>
    </div>
  </div>
</section>

<div class="container page-container">
  <div class="archive-list">
    {% assign columns = site.categories.column %}
    {% if columns and columns.size > 0 %}
      {% for post in columns %}
      <article class="archive-card {% if post.thumbnail %}has-thumb{% endif %}">
        {% if post.thumbnail %}
        <a href="{{ post.url | relative_url }}" class="archive-thumb-link">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="archive-thumb" loading="lazy">
        </a>
        {% endif %}
        <div class="archive-card-body">
          <div class="archive-card-meta">
            <span class="cat-badge cat-column">COLUMN</span>
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
            {% assign words = post.content | strip_html | number_of_words %}
            {% assign read_min = words | divided_by: 220 | plus: 1 %}
            <span class="meta-divider">·</span>
            <span>약 {{ read_min }}분 읽기</span>
          </div>
          <h2 class="archive-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          {% if post.subtitle %}
          <p class="archive-card-subtitle">{{ post.subtitle }}</p>
          {% endif %}
          <p class="archive-card-excerpt">{{ post.summary | default: post.excerpt | strip_html | truncate: 150 }}</p>
        </div>
      </article>
      {% endfor %}
    {% else %}
      <div class="empty-state-box">
        <p>아직 등록된 게임 칼럼이 없습니다.</p>
      </div>
    {% endif %}
  </div>
</div>
