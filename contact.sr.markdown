---
layout: page
lang: sr
page_id: contact
title: Kontakt / Demo
permalink: /contact/
description: Vidi Tefter u akciji — zakaži demo
---
<section class="section">
  <div class="wrapper section-center">
    <h1 class="section-title">{% t contact.main_heading %}</h1>
    <p class="section-copy">
      {% t contact.intro %}
    </p>
    <ul class="feature-list" style="max-width: 800px; margin: 30px auto;">
      <li>{% t contact.show_1 %}</li>
      <li>{% t contact.show_2 %}</li>
      <li>{% t contact.show_3 %}</li>
      <li>{% t contact.show_4 %}</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t contact.format_title %}</h2>
    
    <div class="two-column">
      <div class="column">
        <div class="card">
          <h3>{% t contact.live_demo_title %}</h3>
          <p>{% t contact.live_demo_desc %}</p>
          <p style="margin-top: 20px;"><strong>{% t contact.expect_title %}</strong></p>
          <ul style="margin-top: 10px; list-style-type: disc; padding-left: 20px; line-height: 1.8;">
            <li>{% t contact.expect_1 %}</li>
            <li>{% t contact.expect_2 %}</li>
            <li>{% t contact.expect_3 %}</li>
            <li>{% t contact.expect_4 %}</li>
            <li>{% t contact.expect_5 %}</li>
          </ul>
          <a href="mailto:demo@tefter.com?subject=Demo Request" class="btn btn-primary" style="margin-top: 20px; display: inline-block;">{% t cta.schedule_demo %}</a>
        </div>
      </div>
      
      <div class="column">
        <div class="card">
          <h3>{% t contact.expert_title %}</h3>
          <p>{% t contact.expert_desc %}</p>
          <p style="margin-top: 20px;"><strong>{% t contact.discuss_title %}</strong></p>
          <ul style="margin-top: 10px; list-style-type: disc; padding-left: 20px; line-height: 1.8;">
            <li>{% t contact.discuss_1 %}</li>
            <li>{% t contact.discuss_2 %}</li>
            <li>{% t contact.discuss_3 %}</li>
            <li>{% t contact.discuss_4 %}</li>
            <li>{% t contact.discuss_5 %}</li>
          </ul>
          <a href="mailto:experts@tefter.com?subject=Expert Consultation" class="btn btn-primary" style="margin-top: 20px; display: inline-block;">{% t cta.request_consultation %}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t contact.direct_title %}</h2>
    
    <div class="card-grid">
      <div class="card">
        <h3>{% t contact.sales_title %}</h3>
        <p>{% t contact.sales_desc %}</p>
        <p style="margin-top: 15px;">
          <a href="mailto:sales@tefter.com" class="arrow-link">sales@tefter.com</a>
        </p>
      </div>
      
      <div class="card">
        <h3>{% t contact.tech_title %}</h3>
        <p>{% t contact.tech_desc %}</p>
        <p style="margin-top: 15px;">
          <a href="mailto:tech@tefter.com" class="arrow-link">tech@tefter.com</a>
        </p>
      </div>
      
      <div class="card">
        <h3>{% t contact.partners_title %}</h3>
        <p>{% t contact.partners_desc %}</p>
        <p style="margin-top: 15px;">
          <a href="mailto:partnerships@tefter.com" class="arrow-link">partnerships@tefter.com</a>
        </p>
      </div>
      
      <div class="card">
        <h3>{% t contact.general_title %}</h3>
        <p>{% t contact.general_desc %}</p>
        <p style="margin-top: 15px;">
          <a href="mailto:info@tefter.com" class="arrow-link">info@tefter.com</a>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper section-center">
    <h2 class="section-title">{% t contact.faq_title %}</h2>
    
    <div style="max-width: 900px; margin: 0 auto; text-align: left;">
      <div class="card">
        <h3>{% t contact.q1 %}</h3>
        <p>{% t contact.a1 %}</p>
      </div>
      
      <div class="card">
        <h3>{% t contact.q2 %}</h3>
        <p>{% t contact.a2 %}</p>
      </div>
      
      <div class="card">
        <h3>{% t contact.q3 %}</h3>
        <p>{% t contact.a3 %}</p>
      </div>
      
      <div class="card">
        <h3>{% t contact.q4 %}</h3>
        <p>{% t contact.a4 %}</p>
      </div>
      
      <div class="card">
        <h3>{% t contact.q5 %}</h3>
        <p>{% t contact.a5 %} <a href="{{ '/security/' | relative_url }}" style="color: #0066cc;">{% t contact.q5_link %}</a> {% t contact.q5_end %}</p>
      </div>
      
      <div class="card">
        <h3>{% t contact.q6 %}</h3>
        <p>{% t contact.a6 %}</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="cta-box">
      <h2>{% t cta.ready_to_start %}</h2>
      <div class="cta-buttons">
        <a href="mailto:demo@tefter.com?subject=Demo Request" class="btn btn-primary">{% t global.book_demo %}</a>
        <a href="{{ '/' | relative_url }}" class="btn btn-secondary">{% t global.back_home %}</a>
      </div>
    </div>
  </div>
</section>


