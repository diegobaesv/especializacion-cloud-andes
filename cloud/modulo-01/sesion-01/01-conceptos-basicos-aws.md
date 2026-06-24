---
marp: true
theme: default
size: 16:9
paginate: false
---

<style>
:root {
  --blue-900: #142b8f;
  --blue-700: #1d7fc1;
  --cyan-500: #08add8;
  --cyan-100: #d9f4fb;
  --ink: #0b1220;
  --muted: #516173;
  --soft: #eef7fb;
  --line: #d9e5ec;
  --aws: #ff9900;
}

section {
  background: #ffffff;
  color: var(--ink);
  font-family: "Aptos", "Segoe UI", Arial, sans-serif;
  letter-spacing: 0;
  padding: 54px 72px 70px;
}

section:has(> .quiz-slide),
section:has(> .visual-slide) {
  padding: 0;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  font-size: 40px;
  line-height: 1.08;
  font-weight: 800;
}

h2 {
  font-size: 30px;
  line-height: 1.12;
  font-weight: 800;
}

h3 {
  font-size: 20px;
  line-height: 1.18;
  font-weight: 800;
}

p,
li {
  font-size: 18px;
  line-height: 1.35;
}

ul,
ol {
  margin: 18px 0 0;
  padding-left: 30px;
}

li + li {
  margin-top: 8px;
}

code {
  font-family: "Cascadia Code", "Consolas", monospace;
}

pre {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #f7fafc;
  padding: 18px;
}

pre code {
  font-size: 15px;
  line-height: 1.35;
}

.slide {
  height: 100%;
  position: relative;
}

.brandbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
}

.logo-usmp {
  height: 78px;
  width: auto;
}

.logo-andes {
  height: 70px;
  width: auto;
}

.center {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.cover .center {
  height: 66%;
}

.cover .center strong {
  display: block;
  font-size: 24px;
  margin-top: 28px;
}

.kicker {
  color: #000000;
  font-size: 20px;
  margin-bottom: 22px;
}

.title-main {
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.underline {
  background: linear-gradient(90deg, #000 0 10%, var(--cyan-500) 10% 90%, #000 90%);
  height: 10px;
  margin: 24px auto 34px;
  width: 360px;
}

.subtitle {
  font-size: 22px;
  line-height: 1.3;
}

.instructor {
  bottom: 180px;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
}

.instructor strong {
  display: block;
  font-size: 22px;
  margin-bottom: 14px;
}

.instructor span {
  font-size: 20px;
}

.section-title {
  margin-top: 18px;
  text-align: center;
}

.section-title .small {
  color: var(--muted);
  display: block;
  font-size: 22px;
  font-weight: 400;
  margin-top: 18px;
}

.highlight-box {
  background: #f8fbfd;
  border: 2px solid #cfe0ea;
  border-left: 8px solid var(--cyan-500);
  border-radius: 8px;
  display: grid;
  gap: 36px;
  grid-template-columns: 1fr 1.45fr;
  margin: 34px auto 0;
  padding: 28px 42px;
  width: 88%;
}

.module-list {
  margin-top: 36px;
}

.module-row {
  align-items: center;
  display: grid;
  gap: 30px;
  grid-template-columns: 260px 160px 1fr;
  margin: 20px auto;
  width: 86%;
}

.module-row.active {
  background: #f8fbfd;
  border: 2px solid #cfe0ea;
  border-left: 8px solid var(--cyan-500);
  border-radius: 8px;
  padding: 20px 28px;
  width: 88%;
}

.module-name {
  text-align: center;
}

.module-name strong {
  display: block;
  font-size: 27px;
}

.module-name span {
  display: block;
  font-size: 16px;
  line-height: 1.25;
  margin-top: 10px;
}

.chevrons {
  color: var(--cyan-500);
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -18px;
  white-space: nowrap;
}

.module-row:nth-child(2) .chevrons,
.module-row:nth-child(3) .chevrons,
.module-row:nth-child(4) .chevrons {
  color: var(--blue-700);
}

.agenda {
  font-size: 18px;
  line-height: 1.42;
}

.two-col {
  align-items: start;
  display: grid;
  gap: 54px;
  grid-template-columns: 1fr 1fr;
  margin-top: 34px;
}

.two-col.centered {
  align-items: center;
}

.panel {
  background: #ffffff;
  border: 2px solid var(--line);
  border-radius: 8px;
  padding: 28px;
}

.panel.blue {
  background: var(--soft);
  border-color: #b7dceb;
}

.photo-card {
  border-radius: 8px;
  height: 360px;
  overflow: hidden;
  position: relative;
}

.photo-card img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.photo-card .caption {
  background: rgba(11, 18, 32, 0.78);
  bottom: 0;
  color: #ffffff;
  font-size: 13px;
  left: 0;
  padding: 10px 14px;
  position: absolute;
  right: 0;
}

.cloud-demand {
  display: grid;
  gap: 38px;
  grid-template-columns: 0.95fr 1.05fr;
  margin-top: 30px;
}

.signal-row {
  display: grid;
  gap: 16px;
  margin-top: 26px;
}

.signal {
  border-left: 8px solid var(--cyan-500);
  border-radius: 8px;
  background: #f8fbfd;
  padding: 18px 22px;
}

.signal strong {
  color: var(--blue-900);
  display: block;
  font-size: 20px;
  margin-bottom: 4px;
}

.signal span {
  color: var(--muted);
  font-size: 16px;
}

.criteria-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 26px;
}

.criteria-grid div {
  background: #f8fbfd;
  border: 2px solid var(--line);
  border-radius: 8px;
  color: var(--blue-900);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.22;
  min-height: 86px;
  padding: 18px;
}

.panel strong {
  display: block;
  font-size: 21px;
  margin-bottom: 12px;
}

.profile-photo {
  border: 1px solid var(--line);
  border-radius: 50%;
  display: block;
  height: 270px;
  margin: 0 auto 20px;
  object-fit: cover;
  object-position: center;
  width: 270px;
}

.docente-layout {
  align-items: center;
  display: grid;
  gap: 64px;
  grid-template-columns: 0.9fr 1.1fr;
  margin-top: 34px;
}

.profile-block {
  text-align: center;
}

.profile-block h3 {
  font-size: 23px;
  line-height: 1.14;
  margin-bottom: 10px;
}

.profile-role {
  color: var(--blue-900);
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 12px;
}

.profile-summary {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.3;
  margin: 0 auto;
  max-width: 390px;
}

.bio-block h3 {
  margin-top: 0;
}

.bio-block h3 + ul {
  margin-bottom: 30px;
}

.bio-block li {
  font-size: 17px;
  line-height: 1.32;
}

.big-word {
  color: var(--blue-900);
  font-size: 45px;
  font-weight: 900;
  line-height: 1;
}

.muted {
  color: var(--muted);
}

.cards {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 34px;
}

.cards.two {
  grid-template-columns: repeat(2, 1fr);
}

.cards.four {
  grid-template-columns: repeat(4, 1fr);
}

.card {
  background: #ffffff;
  border: 2px solid var(--line);
  border-radius: 8px;
  min-height: 150px;
  padding: 24px;
}

.card.accent {
  border-top: 8px solid var(--cyan-500);
}

.card.aws {
  border-top: 8px solid var(--aws);
}

.card img {
  height: 58px;
  margin-bottom: 16px;
  width: auto;
}

.card strong {
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
}

.card span,
.card p {
  color: var(--muted);
  display: block;
  font-size: 16px;
  line-height: 1.3;
}

.visual-slide {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.visual-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.visual-title {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(217, 229, 236, 0.9);
  border-radius: 8px;
  box-shadow: 0 18px 45px rgba(11, 18, 32, 0.14);
  color: var(--ink);
  font-size: 36px;
  font-weight: 900;
  left: 52px;
  line-height: 1.08;
  max-width: 520px;
  padding: 18px 24px;
  position: absolute;
  top: 46px;
}

.callout {
  background: var(--cyan-100);
  border-left: 12px solid var(--blue-900);
  border-radius: 8px;
  font-size: 24px;
  line-height: 1.25;
  margin-top: 34px;
  padding: 32px 38px;
}

.quiz-slide {
  background:
    radial-gradient(circle at 50% 45%, rgba(255, 0, 214, 0.42) 0 10%, transparent 34%),
    radial-gradient(circle at 18% 52%, rgba(0, 224, 255, 0.36) 0 9%, transparent 30%),
    radial-gradient(circle at 86% 55%, rgba(171, 71, 255, 0.38) 0 11%, transparent 32%),
    linear-gradient(135deg, #050b34 0%, #14115d 46%, #240047 100%);
  height: 100%;
  isolation: isolate;
  overflow: hidden;
  padding: 54px 72px 70px;
  position: relative;
}

.quiz-slide::before {
  animation: quizShift 18s linear infinite;
  background:
    repeating-conic-gradient(from -12deg at 50% 50%, transparent 0deg 7deg, rgba(76, 106, 255, 0.5) 7.5deg 8.5deg, transparent 9deg 18deg),
    repeating-conic-gradient(from 6deg at 50% 50%, transparent 0deg 12deg, rgba(255, 45, 220, 0.32) 12.4deg 13.3deg, transparent 13.8deg 28deg),
    radial-gradient(circle at 50% 50%, transparent 0 19%, rgba(7, 11, 50, 0.1) 20% 36%, rgba(2, 6, 35, 0.72) 72%);
  content: "";
  inset: -140px;
  opacity: 0.88;
  position: absolute;
  transform-origin: center;
  z-index: 0;
}

.quiz-slide::after {
  content: "\1F914";
  filter: drop-shadow(0 0 16px rgba(0, 224, 255, 0.8)) drop-shadow(0 0 28px rgba(255, 51, 214, 0.62));
  font-size: 148px;
  line-height: 1;
  position: absolute;
  right: 78px;
  top: 54px;
  z-index: 3;
}

@keyframes quizShift {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(9deg) scale(1.04);
  }
}

.question {
  align-items: center;
  background: rgba(9, 12, 54, 0.82);
  border: 2px solid rgba(0, 224, 255, 0.82);
  border-radius: 28px;
  box-shadow:
    0 0 0 1px rgba(255, 51, 214, 0.44),
    0 0 28px rgba(0, 224, 255, 0.56),
    0 0 62px rgba(255, 51, 214, 0.38),
    0 28px 64px rgba(0, 0, 0, 0.34);
  display: flex;
  flex-direction: column;
  min-height: 310px;
  margin: 72px auto 0;
  padding: 46px 70px;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 82%;
  z-index: 2;
}

.question::before {
  content: none;
}

.question h1 {
  color: #ffffff;
  font-size: 50px;
  font-weight: 800;
  line-height: 1.15;
  margin: 0;
  max-width: 940px;
  text-shadow: none;
}

.question p {
  color: #ffffff;
  font-size: 50px;
  font-weight: 800;
  line-height: 1.15;
  max-width: 920px;
  text-shadow: none;
}

.review-quiz h1,
.review-quiz ol {
  position: relative;
  z-index: 1;
}

.review-quiz h1 {
  color: #ffffff;
  text-align: center;
  margin-top: 54px;
  text-shadow: none;
}

.review-quiz ol {
  background: rgba(9, 12, 54, 0.82);
  border: 2px solid rgba(0, 224, 255, 0.82);
  border-radius: 28px;
  box-shadow:
    0 0 0 1px rgba(255, 51, 214, 0.44),
    0 0 28px rgba(0, 224, 255, 0.56),
    0 0 62px rgba(255, 51, 214, 0.38),
    0 28px 64px rgba(0, 0, 0, 0.34);
  color: #e7efff;
  margin: 30px auto 0;
  max-width: 900px;
  padding: 34px 52px 34px 78px;
}

.section-break {
  align-items: center;
  display: flex;
  height: 82%;
  justify-content: center;
  text-align: center;
}

.section-break h1 {
  max-width: 920px;
}

.section-break .line {
  background: var(--cyan-500);
  height: 10px;
  margin: 28px auto 0;
  width: 310px;
}

.vocab {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 34px;
}

.term {
  border-bottom: 2px solid var(--line);
  padding: 20px 0;
}

.term strong {
  color: var(--blue-900);
  display: block;
  font-size: 21px;
}

.term span {
  color: var(--muted);
  display: block;
  font-size: 17px;
  margin-top: 6px;
}

.stack {
  display: grid;
  gap: 18px;
  margin-top: 34px;
}

.step {
  align-items: center;
  border: 2px solid var(--line);
  border-radius: 8px;
  display: grid;
  gap: 22px;
  grid-template-columns: 74px 1fr;
  padding: 20px 26px;
}

.step .num {
  align-items: center;
  background: var(--blue-900);
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  font-size: 21px;
  font-weight: 800;
  height: 58px;
  justify-content: center;
  width: 58px;
}

.step strong {
  display: block;
  font-size: 20px;
}

.step span {
  color: var(--muted);
  display: block;
  font-size: 16px;
  margin-top: 4px;
}

.icon-line {
  align-items: center;
  display: flex;
  gap: 28px;
  margin-top: 36px;
}

.icon-line img {
  height: 72px;
  width: auto;
}

.icon-line .arrow {
  color: var(--blue-700);
  font-size: 32px;
  font-weight: 800;
}

.compare {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  margin-top: 34px;
}

.compare .panel {
  min-height: 330px;
}

.compare h3 {
  margin-bottom: 20px;
}

.tag {
  background: var(--soft);
  border: 1px solid #cde4ee;
  border-radius: 999px;
  color: var(--blue-900);
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 16px;
  padding: 8px 14px;
  text-transform: uppercase;
}

.diagram {
  align-items: center;
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 70px 1fr 70px 1fr;
  margin-top: 44px;
  text-align: center;
}

.diagram .box {
  background: #ffffff;
  border: 2px solid var(--line);
  border-radius: 8px;
  min-height: 142px;
  padding: 20px;
}

.diagram .box img {
  height: 62px;
  margin-bottom: 14px;
}

.diagram .box strong {
  display: block;
  font-size: 18px;
}

.diagram .next {
  color: var(--blue-700);
  font-size: 32px;
  font-weight: 900;
}

.az-layout {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 34px;
}

.az-card {
  background: #ffffff;
  border: 2px solid var(--line);
  border-radius: 8px;
  min-height: 300px;
  padding: 28px;
}

.az-card .label {
  align-items: center;
  background: var(--blue-900);
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  font-size: 26px;
  font-weight: 900;
  height: 70px;
  justify-content: center;
  margin-bottom: 22px;
  width: 70px;
}

.az-card strong {
  display: block;
  font-size: 21px;
  margin-bottom: 12px;
}

.az-card span {
  color: var(--muted);
  display: block;
  font-size: 17px;
  line-height: 1.35;
}

.choice-cards {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 34px;
}

.choice-card {
  border: 2px solid var(--line);
  border-radius: 8px;
  min-height: 315px;
  padding: 26px;
}

.choice-card strong {
  color: var(--blue-900);
  display: block;
  font-size: 23px;
  margin-bottom: 12px;
}

.choice-card p {
  color: var(--muted);
  font-size: 17px;
}

.choice-card ul {
  margin-top: 18px;
}

.choice-card li {
  font-size: 16px;
}

.iac-layout {
  display: grid;
  gap: 34px;
  grid-template-columns: 0.95fr 1.05fr;
  margin-top: 30px;
}

.code-window {
  background: #0b1220;
  border-radius: 8px;
  color: #d9f4fb;
  min-height: 280px;
  padding: 28px;
}

.code-window .file {
  color: #8bdcf0;
  display: block;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 18px;
}

.code-window pre {
  background: transparent;
  border: 0;
  border-radius: 0;
  margin: 0;
  padding: 0;
}

.code-window code {
  color: #eef7fb;
  font-size: 18px;
  line-height: 1.5;
}

.summary {
  counter-reset: item;
  display: grid;
  gap: 18px;
  margin-top: 34px;
}

.summary div {
  align-items: center;
  border-bottom: 2px solid var(--line);
  display: grid;
  gap: 22px;
  grid-template-columns: 64px 1fr;
  padding: 14px 0;
}

.summary div::before {
  align-items: center;
  background: var(--cyan-100);
  border: 2px solid var(--blue-900);
  border-radius: 50%;
  color: var(--blue-900);
  content: counter(item);
  counter-increment: item;
  display: flex;
  font-size: 19px;
  font-weight: 900;
  height: 46px;
  justify-content: center;
  width: 46px;
}

.summary strong {
  font-size: 20px;
}

.compact-list li {
  font-size: 17px;
  margin-top: 6px;
}

.sources {
  margin-top: 28px;
}

.sources li {
  font-size: 15px;
  line-height: 1.28;
}
</style>

<div class="slide cover">
  <div class="brandbar">
    <img class="logo-usmp" src="../../recursos/imagenes/logousmp_60.png" alt="USMP">
    <img class="logo-andes" src="../../recursos/imagenes/logo-andes.png" alt="ANDES">
  </div>
  <div class="center">
    <h1 class="title-main">Cloud AWS y despliegues productivos</h1>
    <div class="underline"></div>
    <div class="subtitle">Módulo 1 · Sesión 1</div>
    <strong>Diego Fernando Baes Vasquez</strong>
  </div>
</div>

---

<div class="slide">
  <div class="brandbar">
    <img class="logo-usmp" src="../../recursos/imagenes/logousmp_60.png" alt="USMP">
    <img class="logo-andes" src="../../recursos/imagenes/logo-andes.png" alt="ANDES">
  </div>
  <h1>Docente</h1>
  <div class="docente-layout">
    <div class="profile-block">
      <img class="profile-photo" src="../../recursos/imagenes/perfil-docente.jpg" alt="Diego Fernando Baes Vasquez">
      <h3>Diego Fernando Baes Vasquez</h3>
      <p class="profile-role">Especialista Full Stack Senior</p>
      <p class="profile-summary">Backend, arquitectura cloud, microservicios y despliegues productivos sobre AWS.</p>
    </div>
    <div class="bio-block">
      <h3>Acerca de mí</h3>
      <ul>
        <li>Ingeniería de Sistemas e Informática.</li>
        <li>Maestría en Ingeniería de Software en curso.</li>
        <li>Certificación AWS Developer Associate y Scrum Master.</li>
      </ul>
      <h3>Experiencia</h3>
      <ul>
        <li>Más de 7 años construyendo APIs, microservicios y plataformas cloud.</li>
        <li>Experiencia en Java Spring Boot, Node.js, Docker, serverless y contenedores.</li>
        <li>Proyectos en banca, seguros y gobierno con foco en alta disponibilidad.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <div class="brandbar">
    <img class="logo-usmp" src="../../recursos/imagenes/logousmp_60.png" alt="USMP">
    <img class="logo-andes" src="../../recursos/imagenes/logo-andes.png" alt="ANDES">
  </div>
  <h1>Cómo vamos a aprender</h1>
  <div class="cards three">
    <div class="card accent">
      <strong>Entender</strong>
      <span>Traducir cloud a problemas cotidianos: servidores, archivos, bases de datos, seguridad y costos.</span>
    </div>
    <div class="card accent">
      <strong>Practicar</strong>
      <span>Conectar servicios paso a paso sin asumir experiencia previa en infraestructura.</span>
    </div>
    <div class="card accent">
      <strong>Construir</strong>
      <span>Preparar el camino para desplegar aplicaciones frontend y backend en AWS.</span>
    </div>
  </div>
  <div class="callout">El objetivo no es memorizar servicios: es aprender a elegirlos con criterio.</div>
</div>

---

<div class="slide">
  <h1 class="section-title">Plan de estudio <span class="small">Curso Cloud AWS y despliegues productivos</span></h1>
  <div class="module-list">
    <div class="module-row active">
      <div class="module-name"><strong>Módulo 1</strong><span>Introducción a AWS</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">
        Sesión 1 - Conceptos básicos de AWS<br>
        Sesión 2 - Configuración de servicios base<br>
        Sesión 3 - Automatización y scripting<br>
        Sesión 4 - Mejorando la infraestructura
      </div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Módulo 2</strong><span>Dominio y almacenamiento</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Route 53, certificados SSL, S3 y CloudFront</div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Módulo 3</strong><span>Despliegue de aplicaciones</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Frontend, backend, RDS, monitoreo y eventos</div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Módulo 4</strong><span>Orquestación y escalabilidad</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Contenedores, balanceo, CI/CD y alta disponibilidad</div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1 class="section-title">Módulo 1 - Introducción a AWS</h1>
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 1</strong>
      <span>Conceptos básicos de AWS</span>
    </div>
    <div class="agenda">
      Conceptos clave de AWS<br>
      Creación de cuenta y configuraciones básicas<br>
      Modelos de despliegue en la nube<br>
      Fundamentos de infraestructura como código
    </div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 2</strong><span>Servicios base</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">Consola, IAM, seguridad y costos</div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 3</strong><span>Automatización</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">AWS CLI, SDKs, CloudFormation y Terraform</div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 4</strong><span>Infraestructura</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">Costos, reservas, Spot, escalabilidad y caso práctico</div>
  </div>
</div>

---

<div class="slide">
  <h1>Sesión 1 - Conceptos básicos de AWS</h1>
  <div class="two-col">
    <div>
      <p><strong>Duración:</strong> 1 h 30 min</p>
      <div class="stack">
        <div class="step"><div class="num">1</div><div><strong>Explicar qué es AWS</strong><span>Servicios, recursos y vocabulario esencial.</span></div></div>
        <div class="step"><div class="num">2</div><div><strong>Configurar una cuenta con criterio</strong><span>Seguridad inicial, costos y región de trabajo.</span></div></div>
        <div class="step"><div class="num">3</div><div><strong>Distinguir modelos de despliegue</strong><span>Cloud, on-premises, híbrido y cuándo usarlos.</span></div></div>
        <div class="step"><div class="num">4</div><div><strong>Entender infraestructura como código</strong><span>Por qué automatizar evita errores repetidos.</span></div></div>
      </div>
    </div>
    <div class="panel blue">
      <h3>Contenido de la clase</h3>
      <ol>
        <li>Conceptos clave de AWS</li>
        <li>Cuenta y configuraciones básicas</li>
        <li>Modelos de despliegue en la nube</li>
        <li>Fundamentos de IaC</li>
      </ol>
    </div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Cuando abres una aplicación web, ¿qué cosas deben existir para que funcione?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Una app necesita varias piezas</h1>
  <div class="cards four">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="Amazon EC2">
      <strong>Cómputo</strong>
      <span>Un lugar donde se ejecuta el código.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="Amazon S3">
      <strong>Archivos</strong>
      <span>Imágenes, documentos, backups o contenido estático.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="Amazon RDS">
      <strong>Datos</strong>
      <span>Información que la aplicación debe consultar y guardar.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="AWS IAM">
      <strong>Permisos</strong>
      <span>Quién puede entrar y qué puede hacer.</span>
    </div>
  </div>
  <div class="callout">Cloud no elimina estas piezas. Las vuelve más fáciles de crear, escalar y operar.</div>
</div>

---

<div class="slide">
  <h1>Cloud: pedir capacidad cuando la necesitas</h1>
  <div class="cloud-demand">
    <div>
      <p class="big-word">Bajo demanda</p>
      <p class="muted">Servidores, almacenamiento, bases de datos y otros recursos se provisionan por internet, normalmente con pago según uso.</p>
      <div class="signal-row">
        <div class="signal"><strong>Antes</strong><span>Comprar o reservar capacidad antes de saber la demanda real.</span></div>
        <div class="signal"><strong>Ahora</strong><span>Crear recursos cuando se necesitan y apagarlos cuando dejan de servir.</span></div>
        <div class="signal"><strong>Riesgo que baja</strong><span>Menos espera, menos capacidad ociosa y más margen para experimentar.</span></div>
      </div>
    </div>
    <div>
      <div class="photo-card">
        <img src="../../recursos/imagenes/web/google-data-center-council-bluffs-1280.jpg" alt="Centro de datos de Google en Council Bluffs, Iowa">
        <span class="caption">Foto real de un centro de datos: detrás del cloud hay infraestructura física especializada.</span>
      </div>
      <div class="callout">Cloud no significa “sin servidores”. Significa no tener que comprarlos, instalarlos y operarlos directamente para cada proyecto.</div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>¿Qué es AWS?</h1>
  <div class="two-col centered">
    <div>
      <p>AWS es una plataforma cloud con servicios para crear, ejecutar, asegurar, almacenar, monitorear y escalar aplicaciones.</p>
      <div class="callout">No es un solo producto: es una caja de herramientas.</div>
    </div>
    <div class="cards two">
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/AWS-Cloud-logo_32.png" alt="AWS Cloud">
        <strong>Servicios</strong>
        <span>EC2, S3, RDS, Lambda, IAM, VPC y muchos más.</span>
      </div>
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/AWS-Account_32.png" alt="AWS Account">
        <strong>Recursos</strong>
        <span>Instancias, buckets, bases de datos, usuarios, redes y políticas.</span>
      </div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Por qué cloud cambió la forma de construir</h1>
  <div class="cards three">
    <div class="card accent">
      <strong>Velocidad</strong>
      <span>Crear recursos en minutos permite experimentar sin esperar compras o instalaciones.</span>
    </div>
    <div class="card accent">
      <strong>Elasticidad</strong>
      <span>Subir o bajar capacidad cuando cambia la demanda.</span>
    </div>
    <div class="card accent">
      <strong>Alcance global</strong>
      <span>Acercar aplicaciones a usuarios de distintas regiones.</span>
    </div>
    <div class="card accent">
      <strong>Pago por uso</strong>
      <span>Evitar grandes inversiones iniciales y vigilar consumo real.</span>
    </div>
    <div class="card accent">
      <strong>Servicios administrados</strong>
      <span>Delegar parte de la operación técnica repetitiva.</span>
    </div>
    <div class="card accent">
      <strong>Automatización</strong>
      <span>Repetir despliegues de forma consistente.</span>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Vocabulario mínimo de AWS</h1>
  <div class="vocab">
    <div class="term"><strong>Cuenta</strong><span>Contenedor principal de seguridad, recursos y facturación.</span></div>
    <div class="term"><strong>Servicio</strong><span>Producto de AWS para una capacidad específica: cómputo, datos, red, seguridad.</span></div>
    <div class="term"><strong>Recurso</strong><span>Objeto concreto creado dentro de un servicio: una instancia, un bucket, una base de datos.</span></div>
    <div class="term"><strong>Región</strong><span>Ubicación geográfica donde AWS opera varios centros de datos.</span></div>
    <div class="term"><strong>Zona de disponibilidad</strong><span>Grupo aislado de centros de datos dentro de una región.</span></div>
    <div class="term"><strong>Consola</strong><span>Interfaz web desde donde se administran servicios y recursos.</span></div>
  </div>
</div>

<div class="slide">
  <h1>La cuenta AWS es la frontera inicial</h1>
  <div class="two-col centered">
    <div class="panel blue">
      <img src="../../recursos/imagenes/aws-icons/AWS-Account_32.png" alt="AWS Account" style="height: 70px; margin-bottom: 16px;">
      <h3>Una cuenta agrupa</h3>
      <ul>
        <li>Recursos creados.</li>
        <li>Usuarios y permisos.</li>
        <li>Facturación y presupuestos.</li>
        <li>Configuraciones de seguridad.</li>
      </ul>
    </div>
    <div>
      <p class="big-word">Cuidarla importa</p>
      <p class="muted">Una cuenta mal protegida puede terminar con datos expuestos, costos inesperados o recursos difíciles de rastrear.</p>
    </div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/root-user-llave-maestra.png" alt="Ilustración de una llave maestra protegida en una caja de seguridad">
  <div class="visual-title">Root, la llave maestra</div>
</div>

---

<div class="slide">
  <h1>Root user: cómo tratarlo</h1>
  <div class="two-col">
    <div class="panel">
      <h3>Qué es</h3>
      <p>Es la identidad inicial creada con el correo y contraseña de la cuenta AWS. Tiene acceso completo sobre la cuenta.</p>
    </div>
    <div class="panel blue">
      <h3>Reglas básicas</h3>
      <ul>
        <li>Activar MFA desde el inicio.</li>
        <li>No usar root para tareas diarias.</li>
        <li>No crear access keys de root.</li>
        <li>Guardar el acceso de recuperación con cuidado.</li>
      </ul>
    </div>
  </div>
  <div class="callout">Root no es para trabajar todos los días. Es para recuperar o administrar casos excepcionales.</div>
</div>

---

<div class="slide">
  <h1>Primeras configuraciones recomendadas</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Proteger el acceso</strong><span>MFA para root y usuario administrativo separado.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Controlar costos</strong><span>Crear presupuesto y alertas antes de desplegar laboratorios.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Elegir región de trabajo</strong><span>Considerar latencia, disponibilidad de servicios, costos y datos.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Etiquetar recursos</strong><span>Usar nombres y tags para saber qué es cada cosa y cuándo eliminarla.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Responsabilidad compartida</h1>
  <div class="compare">
    <div class="panel blue">
      <h3>AWS se encarga de</h3>
      <ul>
        <li>Centros de datos físicos.</li>
        <li>Hardware, red base y energía.</li>
        <li>Capa de virtualización e infraestructura global.</li>
      </ul>
    </div>
    <div class="panel">
      <h3>Tú te encargas de</h3>
      <ul>
        <li>Usuarios, permisos y contraseñas.</li>
        <li>Configuración de servicios.</li>
        <li>Datos, cifrado y exposición pública.</li>
        <li>Buenas prácticas de la aplicación.</li>
      </ul>
    </div>
  </div>
  <div class="callout">AWS protege la nube. Tú proteges lo que construyes dentro de la nube.</div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si un bucket de S3 queda público por error, ¿eso es responsabilidad de AWS o del dueño de la cuenta?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Región, zona y borde</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Region_32.png" alt="AWS Region">
      <strong>Región</strong>
      <span>Área geográfica, como Norteamérica, Europa o Sudamérica.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/AWS-Cloud_32.png" alt="AWS Cloud">
      <strong>Zona de disponibilidad</strong>
      <span>Ubicaciones separadas dentro de una región, conectadas con baja latencia.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="Amazon CloudFront">
      <strong>Ubicación edge</strong>
      <span>Punto cercano al usuario para entregar contenido con menor latencia.</span>
    </div>
  </div>
  <div class="criteria-grid">
    <div>Cercanía a usuarios</div>
    <div>Servicios disponibles</div>
    <div>Residencia de datos</div>
    <div>Costo por región</div>
  </div>
  <div class="callout">La ubicación sí importa: afecta velocidad, costos, cumplimiento y resiliencia.</div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/zonas-disponibilidad-region.png" alt="Ilustración de tres zonas de disponibilidad separadas y conectadas dentro de una región cloud">
  <div class="visual-title">Zonas separadas, región conectada</div>
</div>

---

<div class="slide">
  <h1>Zonas de disponibilidad: separar para resistir</h1>
  <div class="az-layout">
    <div class="az-card">
      <div class="label">A</div>
      <strong>Separada físicamente</strong>
      <span>Una falla local no debería afectar automáticamente a las demás zonas de la región.</span>
    </div>
    <div class="az-card">
      <div class="label">B</div>
      <strong>Conectada con baja latencia</strong>
      <span>Las zonas pueden trabajar juntas para balancear carga y mantener servicios disponibles.</span>
    </div>
    <div class="az-card">
      <div class="label">C</div>
      <strong>Mejor para producción</strong>
      <span>Cuando el servicio lo permite, se distribuyen componentes críticos en más de una zona.</span>
    </div>
  </div>
  <div class="callout">Si todo vive en un solo lugar, un problema local puede tumbar todo.</div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>¿Qué creen que pasaría si una aplicación depende de un solo servidor en una sola ubicación?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Servicios por problema</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="Amazon EC2">
      <strong>EC2</strong>
      <span>Servidores virtuales para ejecutar aplicaciones.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-Lambda_64.png" alt="AWS Lambda">
      <strong>Lambda</strong>
      <span>Funciones que se ejecutan sin administrar servidores.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="Amazon S3">
      <strong>S3</strong>
      <span>Almacenamiento de objetos para archivos y sitios estáticos.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="Amazon RDS">
      <strong>RDS</strong>
      <span>Bases de datos relacionales administradas.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Virtual-Private-Cloud_64.png" alt="Amazon VPC">
      <strong>VPC</strong>
      <span>Red privada donde viven muchos recursos.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="AWS IAM">
      <strong>IAM</strong>
      <span>Identidades, permisos y acceso seguro.</span>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Un primer mapa mental</h1>
  <div class="diagram">
    <div class="box">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="Amazon CloudFront">
      <strong>Usuario entra al sitio</strong>
    </div>
    <div class="next">&gt;</div>
    <div class="box">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="Amazon S3">
      <strong>Frontend o archivos</strong>
    </div>
    <div class="next">&gt;</div>
    <div class="box">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="Amazon RDS">
      <strong>Datos de negocio</strong>
    </div>
  </div>
  <div class="callout">Durante el curso iremos reemplazando este mapa simple por arquitecturas más completas.</div>
</div>

---

<div class="slide">
  <h1>Tres modelos, una decisión</h1>
  <div class="choice-cards">
    <div class="choice-card">
      <strong>Cloud público</strong>
      <p>Todo corre en AWS: aplicación, datos, red, seguridad y monitoreo.</p>
      <ul>
        <li>Empezar rápido.</li>
        <li>Escalar sin comprar hardware.</li>
        <li>Ideal para proyectos nuevos.</li>
      </ul>
    </div>
    <div class="choice-card">
      <strong>Privado u on-premises</strong>
      <p>La infraestructura está en un centro de datos propio o controlado por la organización.</p>
      <ul>
        <li>Sistemas heredados.</li>
        <li>Control físico obligatorio.</li>
        <li>Restricciones regulatorias.</li>
      </ul>
    </div>
    <div class="choice-card">
      <strong>Híbrido</strong>
      <p>Una parte queda fuera de AWS y otra se despliega en la nube.</p>
      <ul>
        <li>Transición progresiva.</li>
        <li>Integración con sistemas existentes.</li>
        <li>Balance entre velocidad y control.</li>
      </ul>
    </div>
  </div>
  <div class="callout">La decisión combina costo, riesgo, velocidad, regulación y capacidades del equipo.</div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Una tienda online pequeña quiere lanzar en dos semanas. ¿Qué modelo escogerían y por qué?</h1>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/infraestructura-como-codigo.png" alt="Ilustración de infraestructura como código creando recursos cloud desde un blueprint">
  <div class="visual-title">IaC: del archivo al recurso</div>
</div>

---

<div class="slide">
  <h1>Infraestructura como código</h1>
  <div class="iac-layout">
    <div>
      <p class="big-word">IaC</p>
      <p class="muted">Describir infraestructura en archivos para crearla, modificarla y repetirla de forma controlada.</p>
      <div class="signal-row">
        <div class="signal"><strong>Repetible</strong><span>El mismo archivo puede crear el mismo entorno otra vez.</span></div>
        <div class="signal"><strong>Auditable</strong><span>Se puede revisar qué cambió antes de aplicar.</span></div>
        <div class="signal"><strong>Menos errores</strong><span>No dependes de memoria ni de repetir clics a mano.</span></div>
      </div>
    </div>
    <div>
      <div class="code-window">
        <span class="file">infraestructura.yaml</span>
<pre><code>Resources:
  DemoBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: mi-demo-aws</code></pre>
      </div>
      <div class="callout">En vez de “hacer clic hasta que funcione”, dejamos escrito qué debe existir.</div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Herramientas que aparecerán en el curso</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-CloudFormation_64.png" alt="AWS CloudFormation">
      <strong>CloudFormation</strong>
      <span>Servicio nativo de AWS para definir recursos en plantillas.</span>
    </div>
    <div class="card accent">
      <img src="../../recursos/imagenes/tools/hashicorp-terraform.svg" alt="Terraform">
      <strong>Terraform</strong>
      <span>Herramienta muy usada para describir infraestructura en distintos proveedores.</span>
    </div>
    <div class="card accent">
      <img src="../../recursos/imagenes/tools/aws-command-line-interface.svg" alt="AWS CLI">
      <strong>AWS CLI</strong>
      <span>Comandos para crear, consultar y automatizar acciones en AWS.</span>
    </div>
  </div>
  <div class="callout">Hoy buscamos entender la idea. La práctica profunda llega en la sesión 3.</div>
</div>

---

<div class="slide">
  <h1>Errores comunes al empezar</h1>
  <div class="cards three">
    <div class="card accent">
      <strong>Usar root para todo</strong>
      <span>La cuenta queda expuesta a errores graves.</span>
    </div>
    <div class="card accent">
      <strong>No crear alertas de costo</strong>
      <span>Los laboratorios olvidados también consumen.</span>
    </div>
    <div class="card accent">
      <strong>No saber la región</strong>
      <span>Los recursos aparecen “perdidos” o lejos del usuario.</span>
    </div>
    <div class="card accent">
      <strong>Permisos demasiado amplios</strong>
      <span>Más acceso del necesario aumenta el riesgo.</span>
    </div>
    <div class="card accent">
      <strong>Recursos públicos por accidente</strong>
      <span>Una mala política puede exponer datos.</span>
    </div>
    <div class="card accent">
      <strong>No eliminar pruebas</strong>
      <span>Dejar recursos encendidos cuesta dinero.</span>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas desde la primera sesión</h1>
  <div class="summary">
    <div><strong>Activa MFA y evita usar root en el día a día.</strong></div>
    <div><strong>Trabaja con permisos mínimos para cada tarea.</strong></div>
    <div><strong>Configura presupuesto y alertas antes de experimentar.</strong></div>
    <div><strong>Elige región con intención, no por costumbre.</strong></div>
    <div><strong>Nombra, etiqueta y elimina recursos de laboratorio.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>AWS ofrece servicios cloud bajo demanda, no una sola herramienta.</strong></div>
    <div><strong>La cuenta AWS es frontera de seguridad, recursos y facturación.</strong></div>
    <div><strong>Regiones y zonas afectan latencia, resiliencia, costo y cumplimiento.</strong></div>
    <div><strong>El modelo de despliegue depende del contexto: cloud, privado o híbrido.</strong></div>
    <div><strong>IaC permite repetir infraestructura con menos errores manuales.</strong></div>
  </div>
</div>
