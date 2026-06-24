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
    <div class="subtitle">Módulo 3 · Sesión 4</div>
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
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 4</strong>
      <span>Monitoreo y eventos</span>
    </div>
    <div class="agenda">
      CloudWatch metrics y logs<br>
      Alarmas operativas<br>
      AWS X-Ray para trazabilidad<br>
      EventBridge para respuestas ante eventos
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Objetivos de aprendizaje</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Distinguir métricas, logs y trazas</strong><span>Qué responde cada tipo de señal.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Crear alarmas útiles</strong><span>Detectar problemas antes de que los reporte el usuario.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Entender X-Ray</strong><span>Seguir una solicitud entre servicios.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Automatizar respuestas ante eventos</strong><span>Usar EventBridge para reaccionar con reglas.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/observabilidad-eventos-cloud.png" alt="Ilustración de observabilidad cloud con métricas, logs, trazas y eventos">
  <div class="visual-title">Operar es ver, entender y reaccionar</div>
</div>

---

<div class="slide">
  <h1>Observabilidad en una frase</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Saber qué pasa</p>
      <p class="muted">Observabilidad permite diagnosticar comportamiento real de sistemas usando señales generadas por la aplicación e infraestructura.</p>
    </div>
    <div class="cards three">
      <div class="card accent"><strong>Métricas</strong><span>Números en el tiempo.</span></div>
      <div class="card accent"><strong>Logs</strong><span>Eventos escritos por servicios.</span></div>
      <div class="card accent"><strong>Trazas</strong><span>Ruta de una solicitud.</span></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>CloudWatch</h1>
  <div class="two-col centered">
    <div class="photo-card">
      <img src="../../recursos/imagenes/web/unsplash-performance-dashboard.jpg" alt="Dashboard de métricas de rendimiento en una pantalla">
      <div class="caption">Las métricas convierten comportamiento real en señales accionables.</div>
    </div>
    <div class="stack">
      <div class="step"><div class="num">1</div><div><strong>Metrics</strong><span>CPU, errores, latencia, requests y más.</span></div></div>
      <div class="step"><div class="num">2</div><div><strong>Logs</strong><span>Registros de aplicación e infraestructura.</span></div></div>
      <div class="step"><div class="num">3</div><div><strong>Alarms</strong><span>Alertas cuando una métrica cruza un umbral.</span></div></div>
    </div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si una app está lenta, ¿qué mirarías primero: métricas, logs o trazas?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Métricas: síntomas medibles</h1>
  <div class="vocab">
    <div class="term"><strong>CPU</strong><span>Puede indicar saturación de cómputo.</span></div>
    <div class="term"><strong>Memory</strong><span>Requiere agente o servicio que la emita.</span></div>
    <div class="term"><strong>Latency</strong><span>Tiempo de respuesta percibido.</span></div>
    <div class="term"><strong>Errors</strong><span>Fallos 4xx, 5xx o excepciones.</span></div>
    <div class="term"><strong>Connections</strong><span>Útil en base de datos y balanceadores.</span></div>
    <div class="term"><strong>Storage</strong><span>Alerta antes de quedarse sin espacio.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Logs: historia de lo que pasó</h1>
  <div class="two-col centered">
    <div>
      <p>Los logs muestran eventos, errores y contexto generado por la aplicación o servicio.</p>
      <div class="callout">Un buen log debe ayudar a responder qué ocurrió, cuándo, dónde y con qué contexto.</div>
    </div>
    <div class="code-window">
      <span class="file">ejemplo</span>
<pre><code>{
  "level": "error",
  "route": "/orders",
  "status": 500
}</code></pre>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Alarmas</h1>
  <div class="two-col centered">
    <div>
      <p>Una alarma evalúa una métrica contra una condición durante un periodo.</p>
      <div class="callout">Una alarma útil evita ruido y apunta a una acción clara.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo de apoyo</h3>
      <p><code>04-cloudwatch-alarm-cli.sh</code></p>
      <ul>
        <li>Alarma de CPU.</li>
        <li>Umbral sostenido.</li>
        <li>Acción hacia SNS.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>X-Ray: seguir una solicitud</h1>
  <div class="two-col centered">
    <div>
      <p>AWS X-Ray ayuda a analizar solicitudes mientras atraviesan servicios, dependencias y bases de datos.</p>
      <div class="callout">Cuando una API lenta tiene muchas piezas, una traza ayuda a encontrar dónde se pierde tiempo.</div>
    </div>
    <div class="diagram">
      <div class="box"><strong>API</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-X-Ray_64.png" alt="AWS X-Ray"><strong>Trace</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="RDS"><strong>DB</strong></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>EventBridge: reaccionar a eventos</h1>
  <div class="cards three">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EventBridge_64.png" alt="EventBridge"><strong>Event bus</strong><span>Canal donde llegan eventos.</span></div>
    <div class="card accent"><strong>Rule</strong><span>Filtra eventos que importan.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Lambda_64.png" alt="Lambda"><strong>Target</strong><span>Servicio que ejecuta una acción.</span></div>
  </div>
  <div class="callout">Evento no es solo error: también puede ser despliegue, cambio de estado o tarea programada.</div>
</div>

---

<div class="slide">
  <h1>Automatización de respuestas</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Señal</strong><span>Métrica, log, evento o cambio de estado.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Regla</strong><span>Condición que decide si algo importa.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Acción</strong><span>Notificar, ejecutar función o abrir flujo operativo.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Revisión</strong><span>Confirmar que la respuesta ayudó y no generó ruido.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Flujo práctico de la sesión</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Revisar métricas</strong><span>Beanstalk, EC2 o RDS según recursos disponibles.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Consultar logs</strong><span>Buscar errores y contexto de aplicación.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Crear alarma</strong><span>Umbral simple con acción de notificación.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Diseñar evento</strong><span>Plantear una respuesta automática ante un cambio.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>No mirar logs</strong><span>Se cambia infraestructura cuando el error era aplicación.</span></div>
    <div class="card accent"><strong>Alarmas ruidosas</strong><span>Demasiadas alertas hacen que nadie las atienda.</span></div>
    <div class="card accent"><strong>Sin contexto</strong><span>Logs sin request id o ruta complican diagnóstico.</span></div>
    <div class="card accent"><strong>Confundir síntoma y causa</strong><span>CPU alta puede ser consecuencia, no raíz.</span></div>
    <div class="card accent"><strong>No probar eventos</strong><span>La automatización falla justo cuando se necesita.</span></div>
    <div class="card accent"><strong>Guardar logs sin retención</strong><span>El costo crece sin control.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas</h1>
  <div class="summary">
    <div><strong>Definir señales clave antes de tener incidentes.</strong></div>
    <div><strong>Crear alarmas con acción clara y poco ruido.</strong></div>
    <div><strong>Usar logs estructurados cuando sea posible.</strong></div>
    <div><strong>Agregar trazas cuando hay múltiples servicios involucrados.</strong></div>
    <div><strong>Automatizar respuestas simples, medibles y reversibles.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>CloudWatch centraliza métricas, logs y alarmas para operación diaria.</strong></div>
    <div><strong>Las métricas muestran síntomas; los logs aportan contexto; las trazas muestran recorrido.</strong></div>
    <div><strong>X-Ray ayuda a diagnosticar solicitudes distribuidas.</strong></div>
    <div><strong>EventBridge permite reaccionar a eventos con reglas y objetivos.</strong></div>
    <div><strong>El módulo 3 deja una aplicación desplegada, conectada a datos y lista para observarse.</strong></div>
  </div>
</div>
