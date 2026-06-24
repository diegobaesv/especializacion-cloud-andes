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
    <div class="title-main">Cloud AWS y despliegues productivos</div>
    <div class="underline"></div>
    <div class="subtitle">Módulo 2 · Sesión 4</div>
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
      <h3>Experiencia</h3>
      <ul>
        <li>Distribución de aplicaciones frontend y contenido estático con CDN.</li>
        <li>Configuración de dominios, certificados, caché y monitoreo para producción.</li>
      </ul>
      <h3>En esta sesión</h3>
      <ul>
        <li>Conectaremos S3, certificados y DNS para entregar contenido global.</li>
        <li>Aprenderemos a pensar en caché sin romper despliegues.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1 class="section-title">Plan de estudio <span class="small">Curso Cloud AWS y despliegues productivos</span></h1>
  <div class="module-list">
    <div class="module-row">
      <div class="module-name"><strong>Módulo 1</strong><span>Introducción a AWS</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Conceptos base, cuenta AWS, seguridad inicial, automatización y optimización.</div>
    </div>
    <div class="module-row active">
      <div class="module-name"><strong>Módulo 2</strong><span>Dominio y almacenamiento</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">
        Sesión 1 - Configuración de Route 53<br>
        Sesión 2 - Certificados SSL con ACM<br>
        Sesión 3 - Almacenamiento con S3<br>
        Sesión 4 - Distribución con CloudFront
      </div>
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
  <h1 class="section-title">Módulo 2 - Dominio y almacenamiento</h1>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 1</strong><span>Route 53</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">DNS, dominios, zonas hospedadas, registros y alias</div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 2</strong><span>Certificados SSL</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">ACM, validación, integración y buenas prácticas web</div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 3</strong><span>Almacenamiento S3</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">Buckets, versionado, políticas, storage classes e integración</div>
  </div>
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 4</strong>
      <span>Distribución con CloudFront</span>
    </div>
    <div class="agenda">
      CDN y edge locations<br>
      Distribuciones y orígenes<br>
      Caché e invalidaciones<br>
      Monitoreo y troubleshooting
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Objetivos de aprendizaje</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Entender qué aporta una CDN</strong><span>Menos latencia, caché y entrega global.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Configurar una distribución</strong><span>Origen, comportamiento, dominio y certificado.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Manejar caché con criterio</strong><span>TTL, headers e invalidaciones sin improvisar.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Resolver fallos comunes</strong><span>403, 404, certificado, dominio y contenido viejo.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/cloudfront-cdn-global.png" alt="Ilustración de CDN global con edge locations entregando contenido">
  <div class="visual-title">CloudFront: acercar el contenido al usuario</div>
</div>

---

<div class="slide">
  <h1>CDN en una frase</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Copias cerca del usuario</p>
      <p class="muted">Una CDN entrega contenido desde ubicaciones cercanas para reducir latencia y carga del origen.</p>
    </div>
    <div class="diagram">
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>Origen</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>Edge</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><strong>Usuario</strong></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Qué es una distribución</h1>
  <div class="cards three">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>Distribution</strong><span>Configuración principal de entrega global.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>Origin</strong><span>Fuente real del contenido o aplicación.</span></div>
    <div class="card accent"><strong>Behavior</strong><span>Reglas de caché, rutas, métodos y headers.</span></div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si cambiaste un archivo y los usuarios siguen viendo el anterior, ¿qué sospecharías?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Orígenes comunes</h1>
  <div class="cards four">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>S3</strong><span>Archivos estáticos, imágenes y frontend compilado.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="EC2"><strong>EC2 o ALB</strong><span>Aplicaciones web o APIs detrás de servidores.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-API-Gateway_64.png" alt="API Gateway"><strong>API Gateway</strong><span>APIs administradas con rutas HTTP.</span></div>
    <div class="card accent"><strong>Origen externo</strong><span>Servidor fuera de AWS cuando el caso lo requiere.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>OAC: S3 privado detrás de CloudFront</h1>
  <div class="two-col centered">
    <div>
      <p>Origin Access Control permite que CloudFront lea desde S3 sin hacer público el bucket completo.</p>
      <div class="callout">El usuario entra por CloudFront; S3 queda protegido como origen.</div>
    </div>
    <div class="diagram">
      <div class="box"><strong>Usuario</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>CloudFront</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>S3 privado</strong></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Caché: velocidad con responsabilidad</h1>
  <div class="vocab">
    <div class="term"><strong>TTL</strong><span>Tiempo que un objeto puede permanecer cacheado.</span></div>
    <div class="term"><strong>Cache key</strong><span>Qué elementos diferencian una respuesta de otra.</span></div>
    <div class="term"><strong>Headers</strong><span>Pueden controlar caché y comportamiento.</span></div>
    <div class="term"><strong>Query strings</strong><span>Algunas rutas cambian según parámetros.</span></div>
    <div class="term"><strong>Cookies</strong><span>Usarlas en caché puede complicar respuestas.</span></div>
    <div class="term"><strong>Invalidation</strong><span>Forzar salida de contenido cacheado.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Invalidaciones</h1>
  <div class="two-col centered">
    <div>
      <p>Una invalidación le dice a CloudFront que deje de servir una ruta cacheada y consulte nuevamente al origen.</p>
      <div class="callout">Úsala para despliegues puntuales; no como reemplazo de una estrategia de nombres y caché.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo de apoyo</h3>
      <p><code>04-cloudfront-invalidation.sh</code></p>
      <ul>
        <li>Invalida <code>/index.html</code>.</li>
        <li>Invalida archivos bajo <code>/assets/*</code>.</li>
        <li>Usa AWS CLI.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Dominio y certificado</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Certificado en ACM us-east-1</strong><span>Necesario para CloudFront con dominio propio.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Alternate domain name</strong><span>Agregar el dominio o subdominio a la distribución.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Registro alias en Route 53</strong><span>Apuntar el dominio a la distribución.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Redirección HTTPS</strong><span>Forzar acceso seguro desde el viewer protocol policy.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Monitoreo y troubleshooting</h1>
  <div class="cards three">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="CloudWatch"><strong>Métricas</strong><span>Requests, errores 4xx/5xx, bytes y cache hit rate.</span></div>
    <div class="card accent"><strong>Logs</strong><span>Ayudan a entender rutas, códigos y usuarios afectados.</span></div>
    <div class="card accent"><strong>Headers</strong><span>Permiten revisar caché, origen y comportamiento.</span></div>
  </div>
  <div class="callout">Cuando CloudFront falla, separa el problema: DNS, certificado, distribución, caché, origen o permisos.</div>
</div>

---

<div class="slide">
  <h1>Flujo práctico de la sesión</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Preparar origen</strong><span>Bucket S3 con archivo <code>index.html</code>.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Crear distribución</strong><span>Origen, comportamiento y viewer protocol policy.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Conectar dominio</strong><span>Certificado ACM y alias en Route 53.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Probar caché</strong><span>Actualizar archivo, invalidar y verificar cambio.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Certificado en región equivocada</strong><span>CloudFront no lo puede usar.</span></div>
    <div class="card accent"><strong>S3 público sin necesidad</strong><span>El origen queda expuesto directo.</span></div>
    <div class="card accent"><strong>No configurar default root object</strong><span>La raíz puede devolver error o listado no esperado.</span></div>
    <div class="card accent"><strong>Cachear demasiado agresivo</strong><span>El despliegue parece no actualizar.</span></div>
    <div class="card accent"><strong>Invalidar todo siempre</strong><span>Funciona, pero puede ser costoso e innecesario.</span></div>
    <div class="card accent"><strong>No separar origen y CDN</strong><span>Se culpa a CloudFront por problemas del origen.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas</h1>
  <div class="summary">
    <div><strong>Usa S3 privado con OAC cuando CloudFront entrega el contenido.</strong></div>
    <div><strong>Configura HTTPS y redirección desde el inicio.</strong></div>
    <div><strong>Versiona nombres de assets para evitar invalidaciones excesivas.</strong></div>
    <div><strong>Monitorea errores, cache hit rate y bytes transferidos.</strong></div>
    <div><strong>Prueba dominio, certificado, caché y origen por separado.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>CloudFront acerca contenido al usuario usando edge locations y caché.</strong></div>
    <div><strong>Una distribución conecta dominio, certificado, comportamiento y origen.</strong></div>
    <div><strong>S3 puede permanecer privado si CloudFront accede mediante OAC.</strong></div>
    <div><strong>Las invalidaciones resuelven contenido viejo, pero deben usarse con criterio.</strong></div>
    <div><strong>El módulo 2 deja preparada la base de dominio, HTTPS, almacenamiento y CDN para desplegar aplicaciones.</strong></div>
  </div>
</div>

