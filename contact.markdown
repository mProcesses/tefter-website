---
layout: page
lang: en
page_id: contact
title: Contact Us - Book a Demo | Tefter
permalink: /contact/
description: Book a 30-minute demo of Tefter's distribution automation platform. See how we eliminate manual order processing for wholesale distributors.
keywords: contact, book demo, distribution automation
---
<section class="section">
  <div class="wrapper section-center">
    <h1 class="section-title">Let's Talk About Your Distribution Challenges</h1>
    <p class="section-copy">Book a 30-minute demo, or send us a message. We'll show you how Tefter can eliminate manual order processing.</p>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="contact-layout">
      <form class="contact-form" action="{{ '/contact/' | relative_url }}" method="post">
        <div class="form-row">
          <label for="full-name">Full Name *</label>
          <input id="full-name" name="full_name" type="text" required>
        </div>
        <div class="form-row">
          <label for="email">Email *</label>
          <input id="email" name="email" type="email" required>
        </div>
        <div class="form-row">
          <label for="company">Company Name *</label>
          <input id="company" name="company_name" type="text" required>
        </div>
        <div class="form-row">
          <label for="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel">
        </div>
        <div class="form-row">
          <label for="company-size">Company Size</label>
          <select id="company-size" name="company_size">
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201+">201+ employees</option>
          </select>
        </div>
        <div class="form-row">
          <label for="interest">What are you interested in?</label>
          <select id="interest" name="interest">
            <option value="customer-portal">Customer Portal</option>
            <option value="mobile-operations">Mobile Operations</option>
            <option value="integration-engine">Integration Engine</option>
            <option value="full-platform">Full Platform</option>
          </select>
        </div>
        <div class="form-row">
          <label for="message">Tell us about your challenges</label>
          <textarea id="message" name="message" rows="5" placeholder="e.g., We manage 50+ customers by email and need to automate order processing..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>

      <aside class="contact-sidebar">
        <div class="card">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> office@tefter.com</p>
          <p><strong>Platform Login:</strong> <a href="https://tx.tefter.com" target="_blank" rel="noopener">tx.tefter.com</a></p>
          <p><strong>Location:</strong> Belgrade, Serbia</p>
          <p><strong>EU data residency:</strong> Brussels, Belgium</p>
          <p><strong>Response Time:</strong> We typically respond within 24 hours (business days)</p>
        </div>
      </aside>
    </div>
  </div>
</section>
