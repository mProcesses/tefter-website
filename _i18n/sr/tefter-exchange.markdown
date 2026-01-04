---
layout: page
title: Tefter Exchange (TX)
permalink: /tefter-exchange/
description: Otporna, samopopravljajuća razmena za misija-kritične operacije
---

<section class="section">
  <div class="wrapper section-center">
    <h1 class="section-title">Samopopravljajući sloj izvršavanja za poslovne transakcije</h1>
    <p class="section-copy">
      TX je sloj razmene Teftera: čini transakcionu razmenu pouzdanom u nepouzdanom svetu. Prekidi ne postaju vanredna stanja — transakcije se bezbedno pauziraju, automatski se oporavljaju i traže poslovni unos samo kada je zaista potrebno.
    </p>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t tx.getting_started_title %}</h2>
    <p class="section-copy">{% t tx.getting_started_desc %}</p>
    <ol style="margin-top: 10px; padding-left: 20px; line-height: 1.8;">
      <li>{% t tx.getting_started_step_1 %}</li>
      <li>{% t tx.getting_started_step_2 %}</li>
      <li>{% t tx.getting_started_step_3 %}</li>
      <li>{% t tx.getting_started_step_4 %}</li>
    </ol>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">Prekid je normalan (ne izuzetak)</h2>
    <p class="section-copy">
      Realne operacije žive u “neredu”: mreže pucaju, partneri odlaze offline, formati driftuju, a delimičan uspeh je čest.
    </p>
    <ul class="feature-list">
      <li>Prekid mreže ili endpoint-a</li>
      <li>Nepoklapanje podataka (SKU, jedinica mere, struktura adrese)</li>
      <li>Partner “down” usred transakcije</li>
      <li>Delimičan uspeh (neke poruke isporučene, neke ne)</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">Kako TX reaguje (konceptualno)</h2>
    <div class="card-grid">
      <div class="card">
        <h3>Detektuje</h3>
        <p>TX vidi prekid i drift rano — pre nego što postane poslovni incident.</p>
      </div>
      <div class="card">
        <h3>Izoluje</h3>
        <p>Problem jednog partnera se ne preliva na ostatak mreže.</p>
      </div>
      <div class="card">
        <h3>Ponavlja</h3>
        <p>TX čuva rad bezbednim i automatski pokušava ponovo kada se sistemi oporave.</p>
      </div>
      <div class="card">
        <h3>Nastavlja</h3>
        <p>Transakcije nastavljaju sa pravog mesta — bez dupliranja i bez ručnog ponovnog unosa.</p>
      </div>
      <div class="card">
        <h3>Eskalira (samo kada treba)</h3>
        <p>Kada su podaci pogrešni, TX šalje odluku biznisu — ne u IT red.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">Tri “duboka” scenarija</h2>
    <div class="card-grid">
      <div class="card">
        <h3>1) Prekid mreže</h3>
        <p><strong>Šta se desi:</strong> Partnerov endpoint je nedostupan usred toka.</p>
        <p><strong>TX reakcija:</strong> Transakcija se bezbedno pauzira, ponavlja i nastavlja kada se partner vrati.</p>
        <p><strong>Ishod:</strong> Nema izgubljenih porudžbina. Nema ručnog unosa. Nema poziva “gde je nestalo?”.</p>
      </div>

      <div class="card">
        <h3>2) Greška mapiranja (poslovni fix)</h3>
        <p><strong>Šta se desi:</strong> Kupac očekuje drugačiji SKU ili jedinicu mere.</p>
        <p><strong>TX reakcija:</strong> TX označi nepoklapanje i pošalje odluku pravoj poslovnoj ulozi da odobri korekciju.</p>
        <p><strong>Ishod:</strong> Minute do rešenja — bez čekanja na IT tiket.</p>
      </div>

      <div class="card">
        <h3>3) Uključivanje partnera istog dana</h3>
        <p><strong>Šta se desi:</strong> Novi dobavljač mora da isporuči danas, uz ograničenu tehničku sposobnost.</p>
        <p><strong>TX reakcija:</strong> TX poštuje realnost partnera (EDI, API, fajlovi, čak i email razmena).</p>
        <p><strong>Ishod:</strong> Brže uključivanje bez nametanja novog “standarda” partneru.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">Tehnička arhitektura (CIO sekcija)</h2>
    <p class="section-copy">
      Ovo je jedino mesto gde ulazimo dublje: TX je dizajniran za trajno izvršavanje, recovery-first obradu i enterprise observability.
    </p>

    <div class="two-column" style="margin-top: 30px;">
      <div class="column">
        <h3>Infrastruktura</h3>
        <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
          <li>SaaS model isporuke</li>
          <li>Hostovano na Google Cloud Platform (GCP)</li>
          <li>Primarni region: Brisel, Belgija (EU rezidentnost podataka)</li>
          <li>Redundansa kroz više zona</li>
          <li>Automatski backup sa point-in-time recovery</li>
        </ul>
      </div>

      <div class="column">
        <h3>Core stack</h3>
        <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
          <li>Go backend za performanse i pouzdanost</li>
          <li>Kubernetes orkestracija</li>
          <li>Temporal workflow engine za trajno izvršavanje i oporavak</li>
          <li>Observability: Grafana, Prometheus, Loki</li>
          <li>Redundansa i failover “by design”</li>
        </ul>
      </div>
    </div>

    <div class="highlight-box" style="margin-top: 30px;">
      <p><strong>Bezbednost:</strong> Enkripcija, kontrola pristupa, auditabilnost i governance su detaljno pokriveni na strani <a href="/security/">Bezbednost i upravljanje</a>.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <h2 class="section-title">Ishodi + za koga je</h2>
    <div class="two-column" style="margin-top: 30px;">
      <div class="column">
        <h3>Ishodi</h3>
        <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
          <li>Nula izgubljenih transakcija</li>
          <li>Predvidiv oporavak umesto ručnog “gašenja požara”</li>
          <li>Biznis rešava probleme sa podacima bez IT uskih grla</li>
        </ul>
      </div>
      <div class="column">
        <h3>Za koga je</h3>
        <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
          <li><strong>CIO:</strong> governance, stabilnost, observability, manji integracioni rizik</li>
          <li><strong>COO:</strong> kontinuitet, brzina i kontrola kroz dnevno izvršavanje</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <div class="cta-box">
      <h2>Zakaži tehnički demo</h2>
      <div class="cta-buttons">
        <a href="/contact/" class="btn btn-primary">Zakaži demo</a>
        <a href="/platform/" class="btn btn-secondary">Pogledaj platformu</a>
      </div>
    </div>
  </div>
</section>


