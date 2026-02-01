---
layout: page
lang: sr
page_id: contact
title: Kontakt - Zakažite demo | Tefter
permalink: /contact/
description: Zakažite demo od 30 minuta i pogledajte kako Tefter eliminiše ručni unos porudžbina u distribuciji.
keywords: kontakt, demo, automatizacija distribucije
---
<section class="section">
  <div class="wrapper section-center">
    <h1 class="section-title">Hajde da razgovaramo o vašim izazovima u distribuciji</h1>
    <p class="section-copy">Zakažite demo od 30 minuta ili nam pošaljite poruku. Pokazaćemo kako Tefter eliminiše ručni unos porudžbina.</p>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="contact-layout">
      <form class="contact-form" action="{{ '/contact/' | relative_url }}" method="post">
        <div class="form-row">
          <label for="full-name">Ime i prezime *</label>
          <input id="full-name" name="full_name" type="text" required>
        </div>
        <div class="form-row">
          <label for="email">Email *</label>
          <input id="email" name="email" type="email" required>
        </div>
        <div class="form-row">
          <label for="company">Naziv kompanije *</label>
          <input id="company" name="company_name" type="text" required>
        </div>
        <div class="form-row">
          <label for="phone">Telefon</label>
          <input id="phone" name="phone" type="tel">
        </div>
        <div class="form-row">
          <label for="company-size">Veličina kompanije</label>
          <select id="company-size" name="company_size">
            <option value="1-10">1-10 zaposlenih</option>
            <option value="11-50">11-50 zaposlenih</option>
            <option value="51-200">51-200 zaposlenih</option>
            <option value="201+">201+ zaposlenih</option>
          </select>
        </div>
        <div class="form-row">
          <label for="interest">Šta vas zanima?</label>
          <select id="interest" name="interest">
            <option value="customer-portal">Korisnički portal</option>
            <option value="mobile-operations">Mobilne operacije</option>
            <option value="integration-engine">Integracioni engine</option>
            <option value="full-platform">Cela platforma</option>
          </select>
        </div>
        <div class="form-row">
          <label for="message">Opišite izazove</label>
          <textarea id="message" name="message" rows="5" placeholder="npr. Imamo 50+ kupaca koji poručuju emailom i želimo automatizaciju..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Pošalji poruku</button>
      </form>

      <aside class="contact-sidebar">
        <div class="card">
          <h3>Kontakt informacije</h3>
          <p><strong>Email:</strong> office@tefter.com</p>
          <p><strong>Platforma:</strong> <a href="https://tx.tefter.com" target="_blank" rel="noopener">tx.tefter.com</a></p>
          <p><strong>Lokacija:</strong> Beograd, Srbija</p>
          <p><strong>EU data residency:</strong> Brisel, Belgija</p>
          <p><strong>Vreme odgovora:</strong> Obično odgovaramo u roku od 24 sata (radni dani)</p>
        </div>
      </aside>
    </div>
  </div>
</section>
