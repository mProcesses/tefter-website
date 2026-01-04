---
layout: default
title: Početna
description: Vodite operacije. Razmenjujte podatke. Održavajte poslovanje u pokretu. Tefter spaja operativne module sa otpornom razmenom podataka.
---

<section class="hero">
  <div class="wrapper">
    <h1>{% t home.main_heading %}</h1>
    <p class="subheadline">{% t home.main_subheading %}</p>
    <p class="supporting-tagline">{% t hero.tagline %}</p>
    <div class="two-layer-explanation">
      <div class="layer-item">
        <strong>{% t hero.exchange_layer %}</strong> {% t hero.exchange_desc %}
      </div>
      <div class="layer-item">
        <strong>{% t hero.ops_layer %}</strong> {% t hero.ops_desc %}
      </div>
    </div>
    <div class="cta-buttons">
      <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">→ {% t global.book_demo %}</a>
      <a href="{{ '/platform/' | relative_url }}" class="btn btn-secondary">→ {% t global.see_product %}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper section-center">
    <h2 class="section-title">{% t home.new_category_title %}</h2>
    <p class="section-copy">
      {% t home.new_category_desc %}
    </p>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t home.problem_title %}</h2>
    <p class="section-copy">{% t home.problem_intro %}</p>
    
    <div class="card-grid">
      <div class="card">
        <h3>{% t home.path_erp_title %}</h3>
        <p>{% t home.path_erp_desc %}</p>
        <p><strong>{% t common.outcome %}:</strong> {% t home.path_erp_reality %}</p>
      </div>
      
      <div class="card">
        <h3>{% t home.path_edi_title %}</h3>
        <p>{% t home.path_edi_desc %}</p>
        <p><strong>{% t common.outcome %}:</strong> {% t home.path_edi_reality %}</p>
      </div>
      
      <div class="card">
        <h3>{% t home.path_custom_title %}</h3>
        <p>{% t home.path_custom_desc %}</p>
        <p><strong>{% t common.outcome %}:</strong> {% t home.path_custom_reality %}</p>
      </div>
      
      <div class="card">
        <h3>{% t home.path_manual_title %}</h3>
        <p>{% t home.path_manual_desc %}</p>
        <p><strong>{% t common.outcome %}:</strong> {% t home.path_manual_reality %}</p>
      </div>
    </div>

    <p class="section-copy" style="margin-top: 20px;">
      {% t home.problem_missing %}
    </p>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t home.breakthrough_title %}</h2>
    <p class="section-copy">{% t home.solution_highlight %}</p>

    <ul class="feature-list" style="margin-top: 20px;">
      <li>{% t home.tx_feature_1 %}</li>
      <li>{% t home.tx_feature_2 %}</li>
      <li>{% t home.tx_feature_3 %}</li>
      <li>{% t home.tx_feature_4 %}</li>
    </ul>
    
    <p class="section-copy" style="margin-top: 20px;">
      {% t home.tx_start_quick %}
    </p>
    <p class="section-copy">
      {% t home.tx_edi_bridge %}
    </p>

    <div class="card" style="margin: 30px 0; background: #f8f9fa;">
      <h3>{% t home.tx_example_title %}</h3>
      <p>{% t home.tx_example %}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t home.tx_enables_title %}</h2>
    <h3 class="section-subtitle">{% t home.ops_subtitle %}</h3>
    <p class="section-copy">{% t home.ops_desc %}</p>

    <div class="card-grid">
      <div class="card">
        <h3>{% t home.ops_sales_title %}</h3>
        <p>{% t home.ops_sales_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t home.ops_procurement_title %}</h3>
        <p>{% t home.ops_procurement_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t home.ops_warehouse_title %}</h3>
        <p>{% t home.ops_warehouse_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t home.ops_partner_title %}</h3>
        <p>{% t home.ops_partner_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t home.ops_shipping_title %}</h3>
        <p>{% t home.ops_shipping_desc %}</p>
      </div>
    </div>

    <a href="{{ '/tefter-apps/' | relative_url }}" class="arrow-link" style="display: block; text-align: center; margin-top: 30px;">{% t home.see_all_modules %}</a>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t home.end_to_end_title %}</h2>
    <div class="card" style="margin: 30px 0; background: #f8f9fa;">
      <p><strong>{% t home.e2e_label_order %}:</strong> {% t home.e2e_order %}</p>
      <p><strong>{% t home.e2e_label_issue %}:</strong> {% t home.e2e_issue %}</p>
      <p><strong>{% t home.e2e_label_recovery %}:</strong> {% t home.e2e_recovery %}</p>
      <p><strong>{% t common.outcome %}:</strong> {% t home.e2e_outcome %}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t home.outcomes_title %}</h2>
    <div class="card-grid">
      <div class="card">
        <h3>{% t home.outcome_onboarding %}</h3>
        <p>{% t home.outcome_onboarding_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t home.outcome_tickets %}</h3>
        <p>{% t home.outcome_tickets_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t home.outcome_close %}</h3>
        <p>{% t home.outcome_close_desc %}</p>
      </div>
      <div class="card">
        <h3>{% t home.outcome_entry %}</h3>
        <p>{% t home.outcome_entry_desc %}</p>
      </div>
    </div>
    <p style="text-align: center; margin-top: 30px; font-size: 14px; color: #666;">
      <em>{% t common.projection %}</em>
    </p>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t home.who_for_title %}</h2>
    <div class="two-column" style="margin-top: 30px;">
      <div class="column">
        <h3>{% t home.who_cio_title %}</h3>
        <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
          <li>{% t home.who_cio_1 %}</li>
          <li>{% t home.who_cio_2 %}</li>
        </ul>
      </div>
      <div class="column">
        <h3>{% t home.who_coo_title %}</h3>
        <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
          <li>{% t home.who_coo_1 %}</li>
          <li>{% t home.who_coo_2 %}</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="cta-box">
      <h2>{% t cta.see_action %}</h2>
      <div class="cta-buttons">
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">{% t global.book_demo %}</a>
        <a href="{{ '/platform/' | relative_url }}" class="btn btn-secondary">{% t global.explore_platform %}</a>
      </div>
    </div>
  </div>
</section>


