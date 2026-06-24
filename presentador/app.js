const COURSES = [
  {
    id: "cloud",
    title: "Cloud AWS y despliegues productivos",
    shortTitle: "Cloud AWS",
    description: "Material de estudio para avanzar paso a paso en AWS Cloud, despliegues y buenas prácticas.",
    meta: "4 módulos · 16 sesiones · 56 horas académicas",
    accent: "from-brand-navy to-brand-cyan",
    modules: [
      {
        id: "modulo-01",
        title: "Módulo 1",
        subtitle: "Introducción a AWS",
        description: "Conceptos base, cuenta AWS, seguridad inicial, automatización y optimización.",
        sessions: [
          {
            id: "sesion-01",
            title: "Sesión 1",
            subtitle: "Conceptos básicos de AWS",
            description: "AWS, cuenta, modelos cloud e infraestructura como código.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-01/sesion-01/01-conceptos-basicos-aws.md"
              }
            ]
          },
          {
            id: "sesion-02",
            title: "Sesión 2",
            subtitle: "Configuración de servicios base",
            description: "Consola AWS, IAM, seguridad inicial, costos y facturación.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-01/sesion-02/02-configuracion-servicios-base.md"
              }
            ]
          },
          {
            id: "sesion-03",
            title: "Sesión 3",
            subtitle: "Automatización y scripting",
            description: "AWS CLI, SDKs, CloudFormation, Terraform y despliegue automatizado.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-01/sesion-03/03-automatizacion-scripting.md"
              }
            ]
          },
          {
            id: "sesion-04",
            title: "Sesión 4",
            subtitle: "Mejorando la infraestructura",
            description: "Optimización de costos, capacidad, escalabilidad y caso práctico.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-01/sesion-04/04-mejorando-infraestructura.md"
              }
            ]
          }
        ]
      },
      {
        id: "modulo-02",
        title: "Módulo 2",
        subtitle: "Dominio y almacenamiento",
        description: "Route 53, certificados SSL, S3 y CloudFront.",
        sessions: [
          {
            id: "sesion-01",
            title: "Sesión 1",
            subtitle: "Configuración de Route 53",
            description: "DNS, dominios, zonas hospedadas, registros, alias y validación.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-02/sesion-01/01-configuracion-route-53.md"
              }
            ]
          },
          {
            id: "sesion-02",
            title: "Sesión 2",
            subtitle: "Certificados SSL con ACM",
            description: "HTTPS, ACM, validación DNS, dominios alternativos e integración.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-02/sesion-02/02-certificados-ssl-acm.md"
              }
            ]
          },
          {
            id: "sesion-03",
            title: "Sesión 3",
            subtitle: "Almacenamiento con S3",
            description: "Buckets, objetos, versionado, lifecycle, CORS y permisos.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-02/sesion-03/03-almacenamiento-s3.md"
              }
            ]
          },
          {
            id: "sesion-04",
            title: "Sesión 4",
            subtitle: "Distribución con CloudFront",
            description: "CDN, distribución, orígenes, caché, dominio, HTTPS y monitoreo.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-02/sesion-04/04-distribucion-cloudfront.md"
              }
            ]
          }
        ]
      },
      {
        id: "modulo-03",
        title: "Módulo 3",
        subtitle: "Despliegue de aplicaciones",
        description: "Frontend, backend, RDS, monitoreo y eventos.",
        sessions: [
          {
            id: "sesion-01",
            title: "Sesión 1",
            subtitle: "Despliegue de frontend en AWS",
            description: "Amplify Hosting, S3, CloudFront, dominio, HTTPS y entrega continua.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-03/sesion-01/01-despliegue-frontend-aws.md"
              }
            ]
          },
          {
            id: "sesion-02",
            title: "Sesión 2",
            subtitle: "Backend con Elastic Beanstalk",
            description: "Aplicaciones, entornos, plataformas, variables, health checks y escalabilidad.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-03/sesion-02/02-backend-elastic-beanstalk.md"
              }
            ]
          },
          {
            id: "sesion-03",
            title: "Sesión 3",
            subtitle: "Bases de datos con RDS",
            description: "MySQL, PostgreSQL, backups, seguridad, Multi-AZ y conexión backend.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-03/sesion-03/03-bases-datos-rds.md"
              }
            ]
          },
          {
            id: "sesion-04",
            title: "Sesión 4",
            subtitle: "Monitoreo y gestión de eventos",
            description: "CloudWatch, alarmas, logs, X-Ray, EventBridge y respuestas automáticas.",
            duration: "1 h 30 min",
            decks: [
              {
                label: "Formato 1",
                title: "Presentación principal",
                path: "../cloud/modulo-03/sesion-04/04-monitoreo-eventos.md"
              }
            ]
          }
        ]
      },
      {
        id: "modulo-04",
        title: "Módulo 4",
        subtitle: "Orquestación y escalabilidad",
        description: "Contenedores, balanceo, CI/CD y alta disponibilidad.",
        sessions: []
      }
    ]
  }
];

const THEME_PATHS = {};
const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

const state = {
  view: "courses",
  courseIndex: 0,
  moduleIndex: 0,
  sessionIndex: 0,
  deckIndex: 0,
  slideIndex: 0,
  slides: [],
  embeddedCss: "",
  frontMatter: {},
  focusMode: false
};

const themeCache = new Map();

const elements = {
  app: document.querySelector("#app"),
  topbar: document.querySelector("#topbar"),
  screen: document.querySelector("#screen"),
  contextLabel: document.querySelector("#contextLabel"),
  homeButton: document.querySelector("#homeButton"),
  backButton: document.querySelector("#backButton"),
  deckVersions: document.querySelector("#deckVersions"),
    focusMode: document.querySelector("#focusMode"),
    downloadPdf: document.querySelector("#downloadPdf"),
    fullscreen: document.querySelector("#fullscreen"),
  controls: document.querySelector("#controls"),
  firstSlide: document.querySelector("#firstSlide"),
  prevSlide: document.querySelector("#prevSlide"),
  nextSlide: document.querySelector("#nextSlide"),
  lastSlide: document.querySelector("#lastSlide"),
  slideCounter: document.querySelector("#slideCounter")
};

const ui = {
  page: "mx-auto max-w-7xl px-5 py-8 md:py-10",
  eyebrow: "text-sm font-black uppercase tracking-wide text-brand-blue",
  title: "mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl",
  subtitle: "mt-4 max-w-3xl text-lg leading-8 text-slate-600",
  grid: "mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
  card: "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-xl",
  cardDisabled: "relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 text-left opacity-75",
  pill: "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600",
  primaryButton: "inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-navy px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-slate-950",
  softButton: "inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-brand-blue hover:text-brand-navy",
  versionBase: "min-h-10 rounded-lg border px-4 py-2 text-sm font-black transition",
  versionActive: "border-brand-navy bg-brand-navy text-white",
  versionInactive: "border-slate-200 bg-white text-slate-700 hover:border-brand-blue hover:text-brand-navy"
};

init();

function init() {
  bindGlobalControls();
  render();
}

function currentCourse() {
  return COURSES[state.courseIndex];
}

function currentModule() {
  return currentCourse().modules[state.moduleIndex];
}

function currentSession() {
  return currentModule().sessions[state.sessionIndex];
}

function currentDeck() {
  return currentSession().decks[state.deckIndex];
}

function bindGlobalControls() {
  elements.homeButton.addEventListener("click", () => {
    state.view = "courses";
    state.focusMode = false;
    render();
  });

  elements.backButton.addEventListener("click", goBack);

  elements.focusMode.addEventListener("click", () => {
    state.focusMode = !state.focusMode;
    applyPresentationLayout();
  });

  elements.downloadPdf.addEventListener("click", downloadCurrentDeckPdf);

  elements.fullscreen.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  });

  elements.firstSlide.addEventListener("click", () => goToSlide(0));
  elements.prevSlide.addEventListener("click", () => goToSlide(state.slideIndex - 1));
  elements.nextSlide.addEventListener("click", () => goToSlide(state.slideIndex + 1));
  elements.lastSlide.addEventListener("click", () => goToSlide(state.slides.length - 1));
  window.addEventListener("resize", resizeStage);

  elements.screen.addEventListener("click", (event) => {
    const target = event.target.closest("[data-go]");
    if (!target) return;

    state.view = target.dataset.go;
    state.focusMode = false;
    render();
  });

  window.addEventListener("keydown", (event) => {
    if (state.view !== "deck") return;

    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      goToSlide(state.slideIndex + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp" || event.key === "Backspace") {
      event.preventDefault();
      goToSlide(state.slideIndex - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goToSlide(state.slides.length - 1);
    }

    if (event.key.toLowerCase() === "p") {
      event.preventDefault();
      state.focusMode = !state.focusMode;
      applyPresentationLayout();
    }

    if (event.key === "Escape" && state.focusMode) {
      state.focusMode = false;
      applyPresentationLayout();
    }
  });
}

function render() {
  state.focusMode = state.view === "deck" ? state.focusMode : false;
  renderTopbar();

  if (state.view === "courses") renderCourses();
  if (state.view === "modules") renderModules();
  if (state.view === "sessions") renderSessions();
  if (state.view === "deck") loadCurrentDeck();
}

function renderTopbar() {
  const isDeck = state.view === "deck";
  const hasBack = state.view !== "courses";

  elements.backButton.className = hasBack
    ? "min-h-10 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-blue hover:text-brand-navy"
    : "hidden";

  const showVersions = isDeck && currentSession().decks.length > 1;
  elements.deckVersions.className = showVersions ? "hidden items-center gap-2 md:flex" : "hidden";
  elements.focusMode.className = isDeck
    ? "min-h-10 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-blue hover:text-brand-navy"
    : "hidden";
  elements.downloadPdf.className = isDeck
    ? "min-h-10 rounded-lg px-4 py-2 text-sm font-black shadow-sm"
    : "hidden";
  elements.fullscreen.className = isDeck
    ? "min-h-10 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-blue hover:text-brand-navy"
    : "hidden";
  elements.controls.className = isDeck
    ? "flex items-center justify-center gap-2.5 border-t border-slate-200 bg-white/95 px-4 py-3"
    : "hidden";

  if (state.view === "courses") elements.contextLabel.textContent = "Selecciona un curso";
  if (state.view === "modules") elements.contextLabel.textContent = currentCourse().title;
  if (state.view === "sessions") elements.contextLabel.textContent = `${currentCourse().shortTitle} · ${currentModule().title}`;
  if (state.view === "deck") elements.contextLabel.textContent = `${currentModule().title} · ${currentSession().title}`;  

  if (isDeck) renderVersionButtons();
  applyPresentationLayout();
}

function renderCourses() {
  elements.screen.className = "min-h-0 overflow-auto";
  elements.screen.innerHTML = `
    <section class="${ui.page}">
      <div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
        <p class="${ui.eyebrow}">Biblioteca de cursos</p>
        <h1 class="${ui.title}">Especialización desarrollador fullstack</h1>
        <p class="${ui.subtitle}">Encuentra aquí el material visual de cada sesión para repasar conceptos, rutas de aprendizaje y ejemplos clave.</p>
      </div>

      <div class="${ui.grid}">
        ${COURSES.map((course, courseIndex) => courseCard(course, courseIndex)).join("")}
      </div>
    </section>
  `;

  elements.screen.querySelectorAll("[data-course]").forEach((button) => {
    button.addEventListener("click", () => {
      state.courseIndex = Number(button.dataset.course);
      state.moduleIndex = 0;
      state.sessionIndex = 0;
      state.deckIndex = 0;
      state.slideIndex = 0;
      state.view = "modules";
      render();
    });
  });
}

function courseCard(course, courseIndex) {
  const sessionCount = course.modules.reduce((total, module) => total + module.sessions.length, 0);
  const sessionLabel = sessionCount === 1 ? "sesión disponible" : "sesiones disponibles";
  return `
    <button class="${ui.card}" type="button" data-course="${courseIndex}">
      <span class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${course.accent}"></span>
      <span class="${ui.pill}">${course.meta}</span>
      <h2 class="mt-5 text-2xl font-black tracking-tight text-slate-950">${escapeHtml(course.title)}</h2>
      <p class="mt-3 text-sm leading-6 text-slate-600">${escapeHtml(course.description)}</p>
      <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <span class="text-sm font-bold text-slate-500">${course.modules.length} módulos · ${sessionCount} ${sessionLabel}</span>
        <span class="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white transition group-hover:bg-brand-navy">Entrar</span>
      </div>
    </button>
  `;
}

function renderModules() {
  const course = currentCourse();

  elements.screen.className = "min-h-0 overflow-auto";
  elements.screen.innerHTML = `
    <section class="${ui.page}">
      ${breadcrumb([
        { label: "Cursos", go: "courses" },
        { label: course.title }
      ])}
      <div class="mt-6 flex flex-col justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:flex-row md:items-end md:p-10">
        <div>
          <p class="${ui.eyebrow}">Módulos</p>
          <h1 class="${ui.title}">${escapeHtml(course.title)}</h1>
          <p class="${ui.subtitle}">${escapeHtml(course.description)}</p>
        </div>
        <span class="self-start rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white md:self-auto">${escapeHtml(course.meta)}</span>
      </div>

      <div class="${ui.grid}">
        ${course.modules.map((module, moduleIndex) => moduleCard(module, moduleIndex)).join("")}
      </div>
    </section>
  `;

  elements.screen.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => {
      state.moduleIndex = Number(button.dataset.module);
      state.sessionIndex = 0;
      state.deckIndex = 0;
      state.slideIndex = 0;
      state.view = "sessions";
      render();
    });
  });
}

function moduleCard(module, moduleIndex) {
  const available = module.sessions.length > 0;
  const sessionLabel = module.sessions.length === 1 ? "sesión disponible" : "sesiones disponibles";
  const cardClass = available ? ui.card : ui.cardDisabled;
  const action = available
    ? `<span class="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white transition group-hover:bg-brand-navy">Ver sesiones</span>`
    : `<span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-500">Por preparar</span>`;
  const disabled = available ? "" : "disabled";
  const data = available ? `data-module="${moduleIndex}"` : "";

  return `
    <button class="${cardClass}" type="button" ${data} ${disabled}>
      <span class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-cyan"></span>
      <span class="${ui.pill}">${module.sessions.length || 0} ${sessionLabel}</span>
      <h2 class="mt-5 text-3xl font-black tracking-tight text-slate-950">${escapeHtml(module.title)}</h2>
      <h3 class="mt-1 text-lg font-bold text-brand-navy">${escapeHtml(module.subtitle)}</h3>
      <p class="mt-4 min-h-16 text-sm leading-6 text-slate-600">${escapeHtml(module.description)}</p>
      <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <span class="text-sm font-bold text-slate-500">${available ? sessionLabel : "Disponible próximamente"}</span>
        ${action}
      </div>
    </button>
  `;
}

function renderSessions() {
  const course = currentCourse();
  const module = currentModule();

  elements.screen.className = "min-h-0 overflow-auto";
  elements.screen.innerHTML = `
    <section class="${ui.page}">
      ${breadcrumb([
        { label: "Cursos", go: "courses" },
        { label: course.shortTitle, go: "modules" },
        { label: module.title }
      ])}
      <div class="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
        <p class="${ui.eyebrow}">Sesiones</p>
        <h1 class="${ui.title}">${escapeHtml(module.title)} · ${escapeHtml(module.subtitle)}</h1>
        <p class="${ui.subtitle}">${escapeHtml(module.description)}</p>
      </div>

      ${module.sessions.length ? `
        <div class="${ui.grid}">
          ${module.sessions.map((session, sessionIndex) => sessionCard(session, sessionIndex)).join("")}
        </div>
      ` : emptySessions()}
    </section>
  `;

  elements.screen.querySelectorAll("[data-session]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sessionIndex = Number(button.dataset.session);
      state.deckIndex = 0;
      state.slideIndex = 0;
      state.view = "deck";
      render();
    });
  });
}

function sessionCard(session, sessionIndex) {
  const deckLabel = session.decks.length === 1 ? "versión" : "versiones";
  return `
    <button class="${ui.card}" type="button" data-session="${sessionIndex}">
      <span class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-400 to-brand-cyan"></span>
      <div class="flex items-center justify-between gap-3">
        <span class="${ui.pill}">${escapeHtml(session.duration)}</span>
        <span class="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-brand-navy">${session.decks.length} ${deckLabel}</span>
      </div>
      <h2 class="mt-5 text-3xl font-black tracking-tight text-slate-950">${escapeHtml(session.title)}</h2>
      <h3 class="mt-1 text-lg font-bold text-brand-navy">${escapeHtml(session.subtitle)}</h3>
      <p class="mt-4 min-h-16 text-sm leading-6 text-slate-600">${escapeHtml(session.description)}</p>
      <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <span class="text-sm font-bold text-slate-500">Material de la sesión</span>
        <span class="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white transition group-hover:bg-brand-navy">Abrir sesión</span>
      </div>
    </button>
  `;
}

function emptySessions() {
  return `
    <div class="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center">
      <p class="text-sm font-black uppercase tracking-wide text-slate-400">Sin sesiones creadas todavía</p>
      <h2 class="mt-3 text-2xl font-black text-slate-950">Este módulo ya está en el organizador</h2>
      <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">Cuando el material esté disponible, aparecerá aquí para abrirlo y estudiarlo desde el navegador.</p>
    </div>
  `;
}

function breadcrumb(items) {
  return `
    <div class="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500">
      ${items.map((item, index) => `
        ${item.go
          ? `<button class="rounded-md px-1.5 py-1 text-slate-500 transition hover:bg-white hover:text-brand-navy" type="button" data-go="${escapeAttr(item.go)}">${escapeHtml(item.label)}</button>`
          : `<span class="rounded-md px-1.5 py-1 ${index === items.length - 1 ? "text-brand-navy" : ""}">${escapeHtml(item.label)}</span>`}
        ${index < items.length - 1 ? `<span class="text-slate-300">/</span>` : ""}
      `).join("")}
    </div>
  `;
}

function renderVersionButtons() {
  const session = currentSession();
  elements.deckVersions.innerHTML = session.decks.map((deck, deckIndex) => {
    const active = deckIndex === state.deckIndex;
    return `<button class="${ui.versionBase} ${active ? ui.versionActive : ui.versionInactive}" type="button" data-deck="${deckIndex}" title="${escapeAttr(deck.title)}">${escapeHtml(deck.label)}</button>`;
  }).join("");

  elements.deckVersions.querySelectorAll("[data-deck]").forEach((button) => {
    button.addEventListener("click", () => {
      state.deckIndex = Number(button.dataset.deck);
      state.slideIndex = 0;
      loadCurrentDeck();
      renderTopbar();
    });
  });
}

function goBack() {
  if (state.view === "deck") {
    state.view = "sessions";
    state.focusMode = false;
    render();
    return;
  }

  if (state.view === "sessions") {
    state.view = "modules";
    render();
    return;
  }

  if (state.view === "modules") {
    state.view = "courses";
    render();
  }
}

async function downloadCurrentDeckPdf() {
  if (state.view !== "deck") return;

  const frame = document.querySelector("#slideFrame");
  const frameWindow = frame?.contentWindow;
  const frameDocument = frame?.contentDocument;
  if (!frameWindow || !frameDocument) return;

  const course = currentCourse();
  const module = currentModule();
  const session = currentSession();
  frameDocument.title = `${course.shortTitle} - ${module.title} - ${session.title}`;
  frameDocument.documentElement.classList.add("is-printing");

  await waitForFrameAssets(frameDocument);
  await nextPaint();
  frameWindow.focus();
  frameWindow.print();
}

function waitForFrameAssets(doc) {
  const pendingImages = Array.from(doc.images).filter((image) => !image.complete);
  if (!pendingImages.length) return Promise.resolve();

  return Promise.all(pendingImages.map((image) => new Promise((resolve) => {
    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  })));
}

function nextPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

async function loadCurrentDeck() {
  const course = currentCourse();
  const module = currentModule();
  const session = currentSession();
  const deck = currentDeck();

  elements.screen.className = "min-h-0 overflow-hidden";
  elements.screen.innerHTML = `
    <section class="flex h-full min-h-0 items-center justify-center overflow-hidden bg-slate-900 p-2" id="stageShell">
      <div class="relative overflow-visible" id="stageViewport">
        <div class="origin-top-left overflow-hidden rounded-xl bg-white shadow-stage" id="stage" style="width:${SLIDE_WIDTH}px;height:${SLIDE_HEIGHT}px;">
          <iframe class="block h-full w-full border-0" id="slideFrame" title="${escapeAttr(`${course.shortTitle} · ${module.title} · ${session.title}`)}"></iframe>
        </div>
      </div>
    </section>
  `;

  try {
    const response = await fetch(deck.path);
    if (!response.ok) throw new Error(`No se pudo cargar ${deck.path}`);

    const markdown = await response.text();
    const parsed = parseMarpMarkdown(markdown);

    state.frontMatter = parsed.frontMatter;
    state.embeddedCss = parsed.embeddedCss;
    state.slides = parsed.slides;
    state.slideIndex = Math.min(state.slideIndex, Math.max(parsed.slides.length - 1, 0));

    await renderSlideFrame();
  } catch (error) {
    state.slides = [`# No se pudo cargar la presentación\n\n${error.message}`];
    state.embeddedCss = "";
    state.frontMatter = {};
    state.slideIndex = 0;
    await renderSlideFrame();
  }

  applyPresentationLayout();
}

function applyPresentationLayout() {
  const isDeck = state.view === "deck";

  if (!isDeck) {
    elements.app.className = "grid min-h-screen grid-rows-[auto_minmax(0,1fr)_auto]";
    elements.topbar.className = "sticky top-0 z-20 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur";
    return;
  }

  const stageShell = document.querySelector("#stageShell");
  const stage = document.querySelector("#stage");

  if (state.focusMode) {
    elements.app.className = "grid min-h-screen grid-rows-[minmax(0,1fr)_auto] bg-slate-950";
    elements.topbar.className = "hidden";
    elements.focusMode.textContent = "Salir";
    if (stageShell) stageShell.className = "flex h-full min-h-0 items-center justify-center overflow-hidden bg-slate-950 p-1";
    if (stage) stage.className = "origin-top-left overflow-hidden rounded bg-white shadow-stage";
    resizeStage();
    return;
  }

  elements.app.className = "grid min-h-screen grid-rows-[auto_minmax(0,1fr)_auto]";
  elements.topbar.className = "sticky top-0 z-20 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur";
  elements.focusMode.textContent = "Vista limpia";
  if (stageShell) stageShell.className = "flex h-full min-h-0 items-center justify-center overflow-hidden bg-slate-900 p-2";
  if (stage) stage.className = "origin-top-left overflow-hidden rounded-xl bg-white shadow-stage";
  resizeStage();
}

function resizeStage() {
  const stageShell = document.querySelector("#stageShell");
  const stageViewport = document.querySelector("#stageViewport");
  const stage = document.querySelector("#stage");

  if (!stageShell || !stageViewport || !stage) return;

  const bounds = stageShell.getBoundingClientRect();
  const scale = Math.min(bounds.width / SLIDE_WIDTH, bounds.height / SLIDE_HEIGHT);
  const safeScale = Math.max(0.1, Math.min(scale, 1.6));

  stageViewport.style.width = `${SLIDE_WIDTH * safeScale}px`;
  stageViewport.style.height = `${SLIDE_HEIGHT * safeScale}px`;
  stage.style.width = `${SLIDE_WIDTH}px`;
  stage.style.height = `${SLIDE_HEIGHT}px`;
  stage.style.transform = `scale(${safeScale})`;
}

function parseMarpMarkdown(markdown) {
  const front = extractFrontMatter(markdown);
  const css = [];
  const bodyWithoutStyles = front.body.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, content) => {
    css.push(content);
    return "";
  });

  const slides = bodyWithoutStyles
    .split(/\n---\s*(?:\n|$)/)
    .map((slide) => slide.trim())
    .filter(Boolean);

  return {
    frontMatter: front.data,
    embeddedCss: css.join("\n"),
    slides
  };
}

function extractFrontMatter(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");

  if (lines[0]?.trim() !== "---") {
    return { data: {}, body: markdown };
  }

  const end = lines.findIndex((line, index) => index > 0 && line.trim() === "---");

  if (end === -1) {
    return { data: {}, body: markdown };
  }

  const data = {};
  lines.slice(1, end).forEach((line) => {
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (match) data[match[1].trim()] = match[2].trim();
  });

  return {
    data,
    body: lines.slice(end + 1).join("\n")
  };
}

async function renderSlideFrame() {
  const deck = currentDeck();
  const frame = document.querySelector("#slideFrame");
  if (!frame) return;

  const themeCss = await loadThemeCss(state.frontMatter.theme);
  const baseHref = directoryUrl(new URL(deck.path, window.location.href).href);
  const slidesHtml = state.slides.map((slide, index) => {
    const active = index === state.slideIndex ? " is-active" : "";
    return `<section class="marp-slide${active}" data-slide="${index + 1}">${markdownToHtml(slide)}</section>`;
  }).join("\n");

  frame.srcdoc = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <base href="${escapeAttr(baseHref)}">
    <style>${slideRuntimeCss()}</style>
    <style>${themeCss}</style>
    <style>${state.embeddedCss}</style>
    <style>${printOverrideCss()}</style>
  </head>
  <body>
    <article>${slidesHtml}</article>
  </body>
</html>`;

  updateCounter();
}

async function loadThemeCss(themeName) {
  if (!themeName || themeName === "default") return "";
  if (themeCache.has(themeName)) return themeCache.get(themeName);

  const themePath = THEME_PATHS[themeName];
  if (!themePath) return "";

  const response = await fetch(themePath);
  const css = response.ok
    ? (await response.text()).replace(/@import\s+["'][^"']+["'];?/g, "")
    : "";

  themeCache.set(themeName, css);
  return css;
}

function slideRuntimeCss() {
  return `
    * { box-sizing: border-box; }
    @page {
      margin: 0;
      size: 13.333in 7.5in;
    }
    html, body {
      background: #ffffff;
      height: ${SLIDE_HEIGHT}px;
      margin: 0;
      overflow: hidden;
      width: ${SLIDE_WIDTH}px;
    }
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    article {
      height: ${SLIDE_HEIGHT}px;
      overflow: hidden;
      position: relative;
      width: ${SLIDE_WIDTH}px;
    }
    article > section {
      height: ${SLIDE_HEIGHT}px;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      position: absolute;
      visibility: hidden;
      width: ${SLIDE_WIDTH}px;
    }
    article > section.is-active {
      pointer-events: auto;
      visibility: visible;
    }
    img { max-width: 100%; }
    @media print {
      html,
      body {
        height: auto;
        overflow: visible;
        width: auto;
      }
      article {
        height: auto;
        overflow: visible;
        width: auto;
      }
      article > section {
        break-after: page;
        page-break-after: always;
        position: relative;
        visibility: visible !important;
      }
      article > section:last-child {
        break-after: auto;
        page-break-after: auto;
      }
    }
  `;
}

function printOverrideCss() {
  return `
    .is-printing *,
    .is-printing *::before,
    .is-printing *::after {
      animation: none !important;
      transition: none !important;
      filter: none !important;
      backdrop-filter: none !important;
      box-shadow: none !important;
      text-shadow: none !important;
      transform: none !important;
    }

    .is-printing .quiz-slide {
      background: linear-gradient(135deg, #050b34 0%, #14115d 54%, #240047 100%) !important;
    }

    .is-printing .quiz-slide::before,
    .is-printing .quiz-slide::after {
      content: none !important;
      display: none !important;
    }

    .is-printing .question,
    .is-printing .review-quiz ol {
      background: #090c36 !important;
      border: 3px solid #7dd3fc !important;
      box-shadow: none !important;
    }

    .is-printing .question::before {
      color: #ffffff !important;
      content: "🤔" !important;
      display: block !important;
      font-size: 92px !important;
      line-height: 1 !important;
      margin: 0 0 22px !important;
    }

    @media print {
      .is-printing *,
      .is-printing *::before,
      .is-printing *::after,
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }

      .quiz-slide,
      .quiz-slide::before,
      .quiz-slide::after {
        animation: none !important;
        background-image: none !important;
        box-shadow: none !important;
        filter: none !important;
        transition: none !important;
        transform: none !important;
      }

      .quiz-slide {
        background: linear-gradient(135deg, #050b34 0%, #14115d 54%, #240047 100%) !important;
      }

      .quiz-slide::before {
        content: none !important;
        display: none !important;
        opacity: 0 !important;
      }

      .quiz-slide::after {
        content: none !important;
        display: none !important;
      }

      .question,
      .review-quiz ol {
        background: #090c36 !important;
        border: 3px solid #7dd3fc !important;
        box-shadow: none !important;
      }

      .question::before {
        color: #ffffff !important;
        content: "🤔" !important;
        display: block !important;
        font-size: 92px !important;
        line-height: 1 !important;
        margin: 0 0 22px !important;
      }
    }
  `;
}

function markdownToHtml(markdown) {
  if (/<(?:div|section|style|img|pre|table|p|h1|h2|h3)\b/i.test(markdown)) {
    return markdown;
  }

  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      html.push(`<pre><code class="language-${escapeAttr(language)}">${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    if (isTableStart(lines, index)) {
      const table = [];
      while (index < lines.length && isTableLine(lines[index])) {
        table.push(lines[index]);
        index += 1;
      }
      html.push(renderTable(table));
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote><p>${renderInline(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const items = [];
      const pattern = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;
      while (index < lines.length && pattern.test(lines[index])) {
        items.push(lines[index].replace(pattern, ""));
        index += 1;
      }
      const tag = ordered ? "ol" : "ul";
      html.push(`<${tag}>${items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</${tag}>`);
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      html.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      index += 1;
      continue;
    }

    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith("```") &&
      !isTableStart(lines, index) &&
      !/^>\s?/.test(lines[index]) &&
      !/^\s*[-*]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !/^(#{1,3})\s+/.test(lines[index])
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

function isTableStart(lines, index) {
  return isTableLine(lines[index]) && Boolean(lines[index + 1]?.match(/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/));
}

function isTableLine(line) {
  return /^\s*\|.*\|\s*$/.test(line);
}

function renderTable(lines) {
  const rows = lines
    .filter((_, index) => index !== 1)
    .map((line) => splitTableRow(line));

  const head = rows[0] || [];
  const body = rows.slice(1);

  return `
    <table>
      <thead><tr>${head.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead>
      <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function splitTableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function renderInline(value) {
  let output = escapeHtml(value);

  output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
    const image = parseImageAlt(alt);
    const style = image.width ? ` style="width:${escapeAttr(image.width)}"` : "";
    return `<img src="${escapeAttr(src)}" alt="${escapeAttr(image.alt)}"${style}>`;
  });

  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");

  return output;
}

function parseImageAlt(alt) {
  const width = alt.match(/width:([0-9]+px|[0-9]+%)/);
  return {
    alt: width ? "" : alt,
    width: width ? width[1] : ""
  };
}

function goToSlide(nextIndex) {
  if (!state.slides.length || state.view !== "deck") return;

  const bounded = Math.max(0, Math.min(nextIndex, state.slides.length - 1));
  if (bounded === state.slideIndex) return;

  state.slideIndex = bounded;
  renderSlideFrame();
}

function updateCounter() {
  elements.slideCounter.textContent = `${state.slideIndex + 1} / ${state.slides.length}`;
  elements.firstSlide.disabled = state.slideIndex === 0;
  elements.prevSlide.disabled = state.slideIndex === 0;
  elements.nextSlide.disabled = state.slideIndex >= state.slides.length - 1;
  elements.lastSlide.disabled = state.slideIndex >= state.slides.length - 1;
}

function directoryUrl(url) {
  return url.slice(0, url.lastIndexOf("/") + 1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}
