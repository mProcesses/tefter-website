---
layout: default
permalink: /
lang: sr
page_id: home
title: AI kontrolni toranj za porudžbine u B2B trgovini
description: Tefter pomaže kupcima i dobavljačima da spreče nesporazume u porudžbinama pre nego što postanu dorade, nepotpune isporuke i izgubljena prodaja.
keywords: order control tower, order alignment, B2B orders, EDI, email orders, OTIF, distributors, retail purchasing, ERP
---
<section class="hero">
  <div class="wrapper">
    <p class="supporting-tagline">{% t hero.tagline %}</p>
    <h1>{% t hero.title %}</h1>
    <p class="subheadline">{% t hero.subtitle %}</p>
    <p class="layers-tagline">{% t hero.vision %}</p>
    <div class="cta-buttons">
      <a href="#contact" class="btn btn-primary">{% t global.start_pilot %}</a>
      <a href="#how" class="btn btn-secondary">{% t global.see_how %}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t problem.title %}</h2>
    <p class="section-copy">{% t problem.intro %}</p>
    <div class="card-grid">
      <div class="card">
        <h3>{% t problem.direct_title %}</h3>
        <p>{% t problem.direct_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t problem.indirect_title %}</h3>
        <p>{% t problem.indirect_desc %}</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="how">
  <div class="wrapper">
    <h2 class="section-title">{% t how.title %}</h2>
    <p class="section-copy">{% t how.intro %}</p>
    <div class="card-grid">
      <div class="card">
        <h3>1. {% t how.step1_title %}</h3>
        <p>{% t how.step1_desc %}</p>
      </div>
      <div class="card">
        <h3>2. {% t how.step2_title %}</h3>
        <p>{% t how.step2_desc %}</p>
      </div>
      <div class="card">
        <h3>3. {% t how.step3_title %}</h3>
        <p>{% t how.step3_desc %}</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t channels.title %}</h2>
    <p class="section-copy">{% t channels.intro %}</p>
    <div class="card-grid">
      <div class="card">
        <h3>{% t channels.connected_title %}</h3>
        <p>{% t channels.connected_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t channels.documents_title %}</h3>
        <p>{% t channels.documents_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t channels.phone_title %}</h3>
        <p>{% t channels.phone_desc %}</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t evidence.title %}</h2>
    <div class="card-grid">
      <div class="card">
        <h3>{% t evidence.baseline_value %}</h3>
        <p>{% t evidence.baseline %}</p>
      </div>
      <div class="card">
        <h3>{% t evidence.edi_value %}</h3>
        <p>{% t evidence.edi %}</p>
      </div>
      <div class="card">
        <h3>{% t evidence.email_value %}</h3>
        <p>{% t evidence.email %}</p>
      </div>
      <div class="card">
        <h3>{% t evidence.time_value %}</h3>
        <p>{% t evidence.time %}</p>
      </div>
    </div>
    <p style="text-align: center; margin-top: 30px; font-size: 14px; color: #666;"><em>{% t evidence.note %}</em></p>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t who.title %}</h2>
    <div class="card-grid">
      <div class="card">
        <h3>{% t who.suppliers_title %}</h3>
        <p>{% t who.suppliers_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t who.retailers_title %}</h3>
        <p>{% t who.retailers_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t who.erp_title %}</h3>
        <p>{% t who.erp_desc %}</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="contact">
  <div class="wrapper">
    <div class="cta-box">
      <h2>{% t cta.title %}</h2>
      <p>{% t cta.desc %}</p>
      <div class="cta-buttons">
        <a href="mailto:{{ site.email }}" class="btn btn-primary">{{ site.email }}</a>
        <a href="https://tx.tefter.com" class="btn btn-secondary" target="_blank" rel="noopener">tx.tefter.com</a>
      </div>
    </div>
  </div>
</section>
