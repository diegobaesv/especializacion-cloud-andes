---
marp: true
theme: default
size: 16:9
paginate: false
---

<style>
@import url("../../recursos/estilos/aws-course-v1.css");
</style>

<div class="slide cover">
  <div class="brandbar">
    <img class="logo-usmp" src="../../recursos/imagenes/logousmp_60.png" alt="USMP">
    <img class="logo-andes" src="../../recursos/imagenes/logo-andes.png" alt="ANDES">
  </div>
  <div class="center">
    <h1 class="title-main">Cloud AWS y despliegues productivos</h1>
    <div class="underline"></div>
    <div class="subtitle">Módulo 3 · Sesión 1</div>
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
    <div class="module-row">
      <div class="module-name"><strong>Módulo 1</strong><span>Introducción a AWS</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Conceptos base, cuenta AWS, seguridad inicial, automatización y optimización</div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Módulo 2</strong><span>Dominio y almacenamiento</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Route 53, certificados SSL, S3 y CloudFront</div>
    </div>
    <div class="module-row active">
      <div class="module-name"><strong>Módulo 3</strong><span>Despliegue de aplicaciones</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">
        Sesión 1 - Despliegue de frontend en AWS<br>
        Sesión 2 - Backend con Elastic Beanstalk<br>
        Sesión 3 - Bases de datos con RDS<br>
        Sesión 4 - Monitoreo y eventos
      </div>
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
  <h1 class="section-title">Módulo 3 - Despliegue de aplicaciones</h1>
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 1</strong>
      <span>Despliegue de frontend en AWS</span>
    </div>
    <div class="agenda">
      Opciones de hosting frontend<br>
      AWS Amplify y S3<br>
      CI/CD para frontend<br>
      Buenas prácticas de entrega continua
    </div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 2</strong><span>Backend</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">Elastic Beanstalk, plataformas, entornos, escalabilidad y monitoreo</div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 3</strong><span>Datos</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">RDS, MySQL/PostgreSQL, backups, seguridad y conexión backend</div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 4</strong><span>Operación</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">CloudWatch, alarmas, logs, X-Ray y respuestas ante eventos</div>
  </div>
</div>

---

<div class="slide">
  <h1>Objetivos de aprendizaje</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Distinguir opciones de hosting frontend</strong><span>Amplify, S3, CloudFront y cuándo usarlos.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Entender el flujo build → deploy</strong><span>Del repositorio al sitio publicado.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Configurar dominio y HTTPS</strong><span>Conectar lo visto en Route 53, ACM y CloudFront.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Aplicar buenas prácticas de entrega</strong><span>Ramas, builds reproducibles, rollback y variables.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/frontend-deployment-pipeline.png" alt="Ilustración de pipeline de despliegue frontend hacia hosting global">
  <div class="visual-title">Frontend: del código al usuario</div>
</div>

---

<div class="slide">
  <h1>Qué se despliega en un frontend moderno</h1>
  <div class="two-col centered">
    <div class="photo-card">
      <img src="../../recursos/imagenes/web/unsplash-frontend-code-laptop.jpg" alt="Código frontend abierto en una laptop">
      <div class="caption">El código se transforma en archivos estáticos listos para publicar.</div>
    </div>
    <div class="stack">
      <div class="step"><div class="num">1</div><div><strong>Código fuente</strong><span>HTML, CSS, JavaScript, assets y configuración pública.</span></div></div>
      <div class="step"><div class="num">2</div><div><strong>Build</strong><span>El framework genera una carpeta final como <code>dist</code> o <code>build</code>.</span></div></div>
      <div class="step"><div class="num">3</div><div><strong>Hosting</strong><span>AWS publica esos archivos para que el navegador los descargue.</span></div></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Opciones de hosting frontend</h1>
  <div class="cards three">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Amplify_64.png" alt="AWS Amplify"><strong>AWS Amplify</strong><span>Hosting administrado con conexión a repositorio y CI/CD.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="Amazon S3"><strong>S3 website</strong><span>Hosting estático simple para sitios sin lógica de servidor.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="Amazon CloudFront"><strong>CloudFront</strong><span>CDN para entregar contenido con HTTPS, caché y dominio propio.</span></div>
  </div>
  <div class="callout">En producción, S3 y CloudFront suelen ir juntos. Amplify simplifica el flujo desde el repositorio.</div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si tu frontend funciona localmente pero falla publicado, ¿qué revisarías primero?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Amplify Hosting</h1>
  <div class="two-col centered">
    <div>
      <p>Amplify Hosting conecta un repositorio, ejecuta build y publica la aplicación en una URL administrada.</p>
      <div class="callout">Es una ruta rápida para frontend moderno con despliegue continuo.</div>
    </div>
    <div class="panel blue">
      <h3>Ideal cuando</h3>
      <ul>
        <li>El frontend vive en Git.</li>
        <li>Quieres preview por rama o ambiente.</li>
        <li>Necesitas CI/CD sin armar pipeline desde cero.</li>
        <li>Buscas dominio y HTTPS administrados.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>S3 + CloudFront</h1>
  <div class="two-col centered">
    <div>
      <p>Una alternativa clásica es guardar los archivos compilados en S3 y distribuirlos con CloudFront.</p>
      <div class="callout">Más piezas, pero también más control sobre caché, origen, dominios y despliegues.</div>
    </div>
    <div class="diagram">
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>S3</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>CDN</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Route-53_64.png" alt="Route 53"><strong>Dominio</strong></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>CI/CD para frontend</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Commit</strong><span>El equipo sube cambios al repositorio.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Build</strong><span>Instala dependencias y genera archivos estáticos.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Deploy</strong><span>Publica la nueva versión en hosting.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Validación</strong><span>Revisa URL, assets, variables y llamadas a API.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Build settings</h1>
  <div class="two-col centered">
    <div>
      <p>El archivo de configuración describe cómo construir y publicar el frontend.</p>
      <div class="callout">No llenamos la slide con YAML: el ejemplo completo está junto a la sesión.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo de apoyo</h3>
      <p><code>01-amplify-build-settings.yml</code></p>
      <ul>
        <li>Instala dependencias.</li>
        <li>Ejecuta build.</li>
        <li>Publica carpeta <code>dist</code>.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Variables de entorno</h1>
  <div class="compare">
    <div class="panel">
      <h3>Frontend</h3>
      <ul>
        <li>Variables públicas incluidas en build.</li>
        <li>URLs de API o flags de entorno.</li>
        <li>No deben contener secretos.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Backend</h3>
      <ul>
        <li>Puede manejar secretos con más control.</li>
        <li>Conexiones a base de datos.</li>
        <li>Tokens y credenciales fuera del código.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Dominio, HTTPS y caché</h1>
  <div class="cards three">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Route-53_64.png" alt="Route 53"><strong>Route 53</strong><span>Apunta el dominio al hosting.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Certificate-Manager_64.png" alt="ACM"><strong>ACM</strong><span>Certificado SSL/TLS para HTTPS.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>CloudFront</strong><span>Caché y entrega global de assets.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Flujo práctico de la sesión</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Preparar frontend</strong><span>Repositorio, build local y carpeta de salida.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Crear app en Amplify</strong><span>Conectar rama, build settings y variables públicas.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Publicar primera versión</strong><span>Validar URL, assets y navegación.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Conectar dominio</strong><span>Usar Route 53/ACM cuando corresponda.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Carpeta de build incorrecta</strong><span>Se publica vacío o con archivos equivocados.</span></div>
    <div class="card accent"><strong>Variables mal nombradas</strong><span>La app apunta a una API incorrecta.</span></div>
    <div class="card accent"><strong>Subir secretos al frontend</strong><span>Todo lo que llega al navegador puede verse.</span></div>
    <div class="card accent"><strong>No manejar rutas SPA</strong><span>Al refrescar una ruta interna aparece 404.</span></div>
    <div class="card accent"><strong>Caché agresiva</strong><span>Usuarios siguen viendo archivos antiguos.</span></div>
    <div class="card accent"><strong>No probar producción</strong><span>Local no representa dominio, HTTPS ni headers reales.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas</h1>
  <div class="summary">
    <div><strong>Build reproducible: si falla en CI, también debe fallar localmente.</strong></div>
    <div><strong>Separar variables públicas de secretos reales.</strong></div>
    <div><strong>Usar ramas o ambientes para validar antes de producción.</strong></div>
    <div><strong>Configurar dominio, HTTPS y rutas SPA desde el inicio.</strong></div>
    <div><strong>Versionar assets para evitar invalidaciones innecesarias.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>Un frontend publicado es un conjunto de archivos estáticos entregados correctamente.</strong></div>
    <div><strong>Amplify simplifica hosting y CI/CD desde un repositorio.</strong></div>
    <div><strong>S3 + CloudFront da más control sobre origen, caché y distribución.</strong></div>
    <div><strong>Las variables públicas no deben contener secretos.</strong></div>
    <div><strong>El despliegue frontend conecta lo aprendido: dominio, certificado, CDN y entrega continua.</strong></div>
  </div>
</div>
