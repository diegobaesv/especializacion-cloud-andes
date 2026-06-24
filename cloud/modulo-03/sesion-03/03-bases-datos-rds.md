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
    <div class="subtitle">Módulo 3 · Sesión 3</div>
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
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 3</strong>
      <span>Bases de datos con RDS</span>
    </div>
    <div class="agenda">
      MySQL y PostgreSQL<br>
      Backups automáticos<br>
      Replicación y Multi-AZ<br>
      Seguridad y conexión backend
    </div>
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
    <div class="step"><div class="num">1</div><div><strong>Entender RDS como base administrada</strong><span>Qué delegamos a AWS y qué configuramos nosotros.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Crear una instancia con criterio</strong><span>Motor, tamaño, red, backups y costo.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Proteger acceso a datos</strong><span>Security Groups, credenciales y no exposición pública.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Conectar backend con RDS</strong><span>Variables, endpoint y pruebas de conectividad.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/rds-database-managed.png" alt="Ilustración de base de datos relacional administrada con backups y monitoreo">
  <div class="visual-title">RDS: datos cuidados sin operar el motor a mano</div>
</div>

---

<div class="slide">
  <h1>RDS en una frase</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Base relacional administrada</p>
      <p class="muted">RDS permite ejecutar motores como MySQL o PostgreSQL delegando tareas operativas como backups, parches y monitoreo.</p>
    </div>
    <div class="cards two">
      <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="Amazon RDS"><strong>Motor</strong><span>MySQL, PostgreSQL, MariaDB, SQL Server, Oracle u otros.</span></div>
      <div class="card accent"><strong>Instancia</strong><span>Capacidad, almacenamiento, red y configuración.</span></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Qué administra AWS</h1>
  <div class="two-col centered">
    <div class="stack">
      <div class="step"><div class="num">1</div><div><strong>Backups y snapshots</strong><span>Copias para recuperar datos ante errores o cambios riesgosos.</span></div></div>
      <div class="step"><div class="num">2</div><div><strong>Parches y mantenimiento</strong><span>Ventanas controladas para cuidar el motor de base de datos.</span></div></div>
      <div class="step"><div class="num">3</div><div><strong>Monitoreo y disponibilidad</strong><span>Métricas, almacenamiento, conexiones y opciones Multi-AZ.</span></div></div>
    </div>
    <div class="photo-card">
      <img src="../../recursos/imagenes/web/unsplash-data-center-aisle.jpg" alt="Pasillo con racks de infraestructura en un centro de datos">
      <div class="caption">RDS reduce operación física y tareas repetitivas, pero no elimina las decisiones de diseño.</div>
    </div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>¿Por qué una base de datos no debería estar abierta a todo internet?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>MySQL o PostgreSQL</h1>
  <div class="compare">
    <div class="panel">
      <h3>MySQL</h3>
      <ul>
        <li>Muy usado en aplicaciones web tradicionales.</li>
        <li>Amplio soporte en frameworks y hosting.</li>
        <li>Buena opción si el equipo ya lo domina.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>PostgreSQL</h3>
      <ul>
        <li>Potente para datos relacionales complejos.</li>
        <li>Buenas capacidades SQL y extensiones.</li>
        <li>Muy usado en productos modernos.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Red y seguridad</h1>
  <div class="diagram">
    <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Elastic-Beanstalk_64.png" alt="Elastic Beanstalk"><strong>Backend</strong></div>
    <div class="next">&gt;</div>
    <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Virtual-Private-Cloud_64.png" alt="VPC"><strong>Security Group</strong></div>
    <div class="next">&gt;</div>
    <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="RDS"><strong>RDS privado</strong></div>
  </div>
  <div class="callout">La regla correcta no es “abrir el puerto”, sino permitir acceso desde el backend que realmente lo necesita.</div>
</div>

---

<div class="slide">
  <h1>Backups y recuperación</h1>
  <div class="cards three">
    <div class="card accent"><strong>Backup automático</strong><span>Recuperación a un punto dentro del periodo de retención.</span></div>
    <div class="card accent"><strong>Snapshot manual</strong><span>Foto puntual antes de cambios importantes.</span></div>
    <div class="card accent"><strong>Restore</strong><span>Normalmente crea una nueva instancia desde el backup.</span></div>
  </div>
  <div class="callout">Backup que nunca se prueba es una promesa, no una estrategia.</div>
</div>

---

<div class="slide">
  <h1>Multi-AZ y réplicas</h1>
  <div class="compare">
    <div class="panel">
      <h3>Multi-AZ</h3>
      <ul>
        <li>Alta disponibilidad dentro de una región.</li>
        <li>Failover administrado.</li>
        <li>Enfocado en continuidad.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Read replica</h3>
      <ul>
        <li>Ayuda a escalar lecturas.</li>
        <li>Puede servir reportes o consultas pesadas.</li>
        <li>No reemplaza backups ni diseño de escritura.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Conexión desde backend</h1>
  <div class="two-col centered">
    <div>
      <p>El backend usa endpoint, puerto, usuario, contraseña y nombre de base de datos.</p>
      <div class="callout">Estos valores deben ir como configuración del entorno, no escritos en el código.</div>
    </div>
    <div class="code-window">
      <span class="file">variables</span>
<pre><code>DB_HOST=...
DB_PORT=5432
DB_NAME=appdb
DB_USER=app_user</code></pre>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Checklist de seguridad</h1>
  <div class="two-col centered">
    <div>
      <p>La conexión a RDS mezcla red, permisos, credenciales y configuración de aplicación.</p>
      <div class="callout">El archivo de apoyo resume lo mínimo que se debe revisar antes de probar producción.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo de apoyo</h3>
      <p><code>03-rds-security-group-checklist.md</code></p>
      <ul>
        <li>Security Groups.</li>
        <li>Acceso público.</li>
        <li>Puertos y credenciales.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Flujo práctico de la sesión</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Crear RDS de laboratorio</strong><span>Motor, tamaño, storage y backups.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Configurar red</strong><span>Security Group para permitir solo backend.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Probar conexión</strong><span>Cliente SQL o backend con variables.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Revisar métricas y backup</strong><span>Confirmar estado antes de cerrar.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Base pública por comodidad</strong><span>Aumenta riesgo sin resolver arquitectura.</span></div>
    <div class="card accent"><strong>Puerto abierto a todos</strong><span>Regla 0.0.0.0/0 en base de datos es una mala señal.</span></div>
    <div class="card accent"><strong>Sin backups</strong><span>Un error humano se vuelve pérdida real.</span></div>
    <div class="card accent"><strong>Credenciales en código</strong><span>Terminan en GitHub, logs o builds.</span></div>
    <div class="card accent"><strong>Clase muy grande</strong><span>Costos innecesarios para laboratorio.</span></div>
    <div class="card accent"><strong>No limpiar instancia</strong><span>RDS puede seguir cobrando aunque no haya usuarios.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas</h1>
  <div class="summary">
    <div><strong>Mantener la base privada salvo excepción bien justificada.</strong></div>
    <div><strong>Permitir acceso desde el backend, no desde todo internet.</strong></div>
    <div><strong>Activar backups automáticos y saber cómo restaurar.</strong></div>
    <div><strong>Guardar credenciales fuera del código fuente.</strong></div>
    <div><strong>Monitorear conexiones, CPU, almacenamiento y latencia.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>RDS permite usar bases relacionales sin operar todo el motor manualmente.</strong></div>
    <div><strong>El diseño correcto empieza por red, seguridad y backups.</strong></div>
    <div><strong>Multi-AZ, réplicas y snapshots resuelven problemas distintos.</strong></div>
    <div><strong>El backend debe conectarse mediante configuración segura.</strong></div>
    <div><strong>Una base de datos mal expuesta puede ser el punto más crítico de toda la aplicación.</strong></div>
  </div>
</div>
