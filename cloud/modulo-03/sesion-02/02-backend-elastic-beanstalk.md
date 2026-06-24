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
    <div class="subtitle">Módulo 3 · Sesión 2</div>
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
  <div class="module-row">
    <div class="module-name"><strong>Sesión 1</strong><span>Frontend</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">Amplify, S3, CloudFront, dominio y entrega continua</div>
  </div>
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 2</strong>
      <span>Backend con Elastic Beanstalk</span>
    </div>
    <div class="agenda">
      Plataformas Node.js, Java o Python<br>
      Aplicaciones y entornos<br>
      Variables y configuración<br>
      Escalabilidad y monitoreo
    </div>
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
    <div class="step"><div class="num">1</div><div><strong>Entender Elastic Beanstalk</strong><span>Qué administra y qué no administra por nosotros.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Desplegar una API sencilla</strong><span>Empaquetado, plataforma, entorno y URL.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Manejar configuración</strong><span>Variables, logs, health checks y versiones.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Preparar operación básica</strong><span>Escalabilidad, monitoreo y rollback.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/backend-beanstalk-managed.png" alt="Ilustración de backend desplegado en plataforma administrada con servidores saludables">
  <div class="visual-title">Backend: publicar sin armar todo a mano</div>
</div>

---

<div class="slide">
  <h1>Elastic Beanstalk en una frase</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Subes código, AWS arma el entorno</p>
      <p class="muted">Beanstalk provisiona recursos como EC2, balanceador, Auto Scaling y monitoreo según la configuración.</p>
    </div>
    <div class="cards two">
      <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Elastic-Beanstalk_64.png" alt="Elastic Beanstalk"><strong>Aplicación</strong><span>Contenedor lógico de versiones y entornos.</span></div>
      <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="EC2"><strong>Entorno</strong><span>Recursos reales que ejecutan la app.</span></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Qué abstrae Beanstalk</h1>
  <div class="two-col centered">
    <div class="photo-card">
      <img src="../../recursos/imagenes/web/unsplash-server-rack-close.jpg" alt="Rack de servidores en un centro de datos">
      <div class="caption">Beanstalk evita operar cada pieza de infraestructura manualmente.</div>
    </div>
    <div class="stack">
      <div class="step"><div class="num">1</div><div><strong>Servidores</strong><span>Instancias que ejecutan la aplicación.</span></div></div>
      <div class="step"><div class="num">2</div><div><strong>Balanceo y escala</strong><span>Más capacidad cuando el entorno lo necesita.</span></div></div>
      <div class="step"><div class="num">3</div><div><strong>Health y monitoreo</strong><span>Señales para saber si el entorno está sano.</span></div></div>
    </div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si Beanstalk crea servidores por nosotros, ¿qué responsabilidades siguen siendo nuestras?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Aplicación vs entorno</h1>
  <div class="compare">
    <div class="panel">
      <h3>Aplicación</h3>
      <ul>
        <li>Nombre del proyecto backend.</li>
        <li>Versiones del código.</li>
        <li>Puede tener varios entornos.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Entorno</h3>
      <ul>
        <li>Dev, staging o producción.</li>
        <li>Recursos reales desplegados.</li>
        <li>URL, configuración y health.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Plataformas soportadas</h1>
  <div class="cards four">
    <div class="card accent"><strong>Node.js</strong><span>APIs Express, NestJS o servidores JavaScript.</span></div>
    <div class="card accent"><strong>Java</strong><span>Spring Boot u otras apps JVM.</span></div>
    <div class="card accent"><strong>Python</strong><span>Flask, Django o servicios ligeros.</span></div>
    <div class="card accent"><strong>Docker</strong><span>Cuando prefieres empaquetar runtime y app.</span></div>
  </div>
  <div class="callout">La plataforma define cómo AWS ejecuta, instala dependencias y arranca la aplicación.</div>
</div>

---

<div class="slide">
  <h1>Paquete de despliegue</h1>
  <div class="two-col centered">
    <div>
      <p>Beanstalk recibe una versión de aplicación: normalmente un archivo comprimido con el código necesario.</p>
      <div class="callout">No subas secretos ni dependencias pesadas si la plataforma puede instalarlas.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo de apoyo</h3>
      <p><code>02-beanstalk-node-app.zip-notas.md</code></p>
      <ul>
        <li>Qué incluir.</li>
        <li>Qué evitar.</li>
        <li>Cómo pensar el paquete.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Variables de entorno</h1>
  <div class="two-col centered">
    <div>
      <p>El backend necesita configuración que cambia por ambiente: puerto, URL de base de datos, flags y credenciales.</p>
      <div class="callout">No hardcodees valores de producción dentro del repositorio.</div>
    </div>
    <div class="code-window">
      <span class="file">ejemplo</span>
<pre><code>NODE_ENV=production
API_PREFIX=/api
DB_HOST=...
DB_NAME=curso_app</code></pre>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Health checks</h1>
  <div class="two-col centered">
    <div>
      <p>El entorno necesita saber si la aplicación está sana para enrutar tráfico o reiniciar recursos.</p>
      <div class="callout">Un endpoint <code>/health</code> simple puede ahorrar mucho diagnóstico.</div>
    </div>
    <div class="code-window">
      <span class="file">respuesta esperada</span>
<pre><code>{
  "status": "ok",
  "service": "backend"
}</code></pre>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Escalabilidad del entorno</h1>
  <div class="cards three">
    <div class="card accent"><strong>Single instance</strong><span>Más simple y económico para laboratorio.</span></div>
    <div class="card accent"><strong>Load balanced</strong><span>Mejor para producción y múltiples instancias.</span></div>
    <div class="card accent"><strong>Auto Scaling</strong><span>Ajusta cantidad de instancias según señales.</span></div>
  </div>
  <div class="callout">Para aprender, empieza simple. Para producción, piensa en fallos, tráfico y actualizaciones.</div>
</div>

---

<div class="slide">
  <h1>Flujo práctico de la sesión</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Preparar API</strong><span>Endpoint raíz y endpoint de health.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Crear aplicación Beanstalk</strong><span>Elegir plataforma y entorno.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Subir versión</strong><span>Desplegar paquete y validar URL pública.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Revisar health y logs</strong><span>Observar estado antes de tocar configuración.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Puerto mal configurado</strong><span>La app corre local, pero Beanstalk no la encuentra.</span></div>
    <div class="card accent"><strong>Subir secretos</strong><span>Credenciales quedan dentro del paquete.</span></div>
    <div class="card accent"><strong>Ignorar logs</strong><span>Se reinicia la app sin entender la causa.</span></div>
    <div class="card accent"><strong>Elegir plataforma incorrecta</strong><span>Runtime incompatible con el proyecto.</span></div>
    <div class="card accent"><strong>No limpiar entornos</strong><span>EC2 y balanceadores pueden generar costo.</span></div>
    <div class="card accent"><strong>No tener health endpoint</strong><span>El diagnóstico queda lento y confuso.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas</h1>
  <div class="summary">
    <div><strong>Usar variables por ambiente y no secretos en código.</strong></div>
    <div><strong>Crear endpoint de health simple y confiable.</strong></div>
    <div><strong>Revisar logs antes de cambiar infraestructura.</strong></div>
    <div><strong>Elegir single instance para laboratorio y balanceado para producción.</strong></div>
    <div><strong>Eliminar entornos de prueba cuando termina la práctica.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>Elastic Beanstalk despliega backend administrando parte de la infraestructura.</strong></div>
    <div><strong>Aplicación y entorno son conceptos diferentes.</strong></div>
    <div><strong>La plataforma define cómo se ejecuta el código.</strong></div>
    <div><strong>Variables, logs y health checks son claves para operar.</strong></div>
    <div><strong>Beanstalk simplifica despliegue, pero no elimina responsabilidad de configuración y seguridad.</strong></div>
  </div>
</div>
