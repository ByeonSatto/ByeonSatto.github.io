---
layout: default
title: "Game Reviews"
permalink: /review/
description: "플레이 경험, 레벨 구조 완성도, 핵심 재미와 한계를 입체적으로 평가하는 게임 리뷰 아카이브입니다."
---

<section class="page-hero">
  <div class="container page-hero-flex">
    <div>
      <span class="page-kicker">CRITIQUE &amp; VERDICT ARCHIVE</span>
      <h1 class="page-title">게임 리뷰</h1>
      <p class="page-desc">{{ page.description }}</p>
    </div>
    <div class="owner-only page-hero-action">
      <a href="{{ '/write/?category=review' | relative_url }}" class="btn btn-primary">✏️ 새 리뷰 작성</a>
    </div>
  </div>
</section>

<div class="container page-container">
  <div class="archive-list archive-grid-review">
    {% assign reviews = site.categories.review %}
    {% if reviews and reviews.size > 0 %}
      {% for post in reviews %}
      <article class="archive-card archive-card-review {% if post.thumbnail %}has-thumb{% endif %}">
        {% if post.thumbnail %}
        <a href="{{ post.url | relative_url }}" class="archive-thumb-link">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="archive-thumb" loading="lazy">
        </a>
        {% endif %}
        <div class="archive-card-body">
          <div class="archive-review-header">
            <div class="archive-card-meta">
              <span class="cat-badge cat-review">REVIEW</span>
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

          <p class="archive-card-excerpt">{{ post.summary | default: post.excerpt | strip_html | truncate: 150 }}</p>
        </div>
      </article>
      {% endfor %}
    {% else %}
      <div class="empty-state-box">
        <p>아직 등록된 게임 리뷰가 없습니다.</p>
      </div>
    {% endif %}
  </div>
</div>
