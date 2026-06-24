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
    <div class="subtitle">Módulo 2 · Sesión 3</div>
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
        <li>Uso de S3 para sitios estáticos, archivos de aplicación, backups y distribución de contenido.</li>
        <li>Diseño de permisos y ciclos de vida para almacenamiento operativo.</li>
      </ul>
      <h3>En esta sesión</h3>
      <ul>
        <li>Organizaremos archivos como objetos, no como carpetas tradicionales.</li>
        <li>Configuraremos seguridad, versionado y costos con criterio.</li>
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
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 3</strong>
      <span>Almacenamiento con S3</span>
    </div>
    <div class="agenda">
      Buckets y objetos<br>
      Versionado y lifecycle<br>
      Políticas de acceso<br>
      Integración con aplicaciones
    </div>
  </div>
  <div class="module-row">
    <div class="module-name"><strong>Sesión 4</strong><span>CloudFront</span></div>
    <div class="chevrons">&gt;&gt;&gt;</div>
    <div class="agenda">CDN, distribuciones, caché, monitoreo y troubleshooting</div>
  </div>
</div>

---

<div class="slide">
  <h1>Objetivos de aprendizaje</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Comprender almacenamiento de objetos</strong><span>Buckets, objetos, claves y metadatos.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Configurar buckets con seguridad</strong><span>Bloqueo público, permisos, cifrado y tags.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Usar versionado y lifecycle</strong><span>Recuperar cambios y controlar costos con clases de almacenamiento.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Conectar S3 con otros servicios</strong><span>Aplicaciones, CloudFront, logs y procesos automatizados.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/s3-almacenamiento-objetos.png" alt="Ilustración de almacenamiento de objetos en contenedores cloud">
  <div class="visual-title">S3: guardar objetos, no servidores</div>
</div>

---

<div class="slide">
  <h1>S3 en una frase</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Almacenamiento de objetos</p>
      <p class="muted">S3 guarda archivos como objetos dentro de buckets, con alta durabilidad y acceso vía API.</p>
    </div>
    <div class="cards two">
      <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>Bucket</strong><span>Contenedor lógico con nombre único.</span></div>
      <div class="card accent"><strong>Objeto</strong><span>Archivo + clave + metadatos + versión opcional.</span></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>No es un disco tradicional</h1>
  <div class="compare">
    <div class="panel">
      <h3>Disco o carpeta</h3>
      <ul>
        <li>Jerarquía real de directorios.</li>
        <li>Operaciones típicas de sistema de archivos.</li>
        <li>Depende de servidor o volumen.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>S3</h3>
      <ul>
        <li>Objetos con claves como <code>img/logo.png</code>.</li>
        <li>Acceso por API, consola, SDK o CLI.</li>
        <li>Servicio administrado y escalable.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Partes principales</h1>
  <div class="vocab">
    <div class="term"><strong>Bucket</strong><span>Contenedor donde viven los objetos.</span></div>
    <div class="term"><strong>Key</strong><span>Nombre completo del objeto dentro del bucket.</span></div>
    <div class="term"><strong>Metadata</strong><span>Información asociada al objeto.</span></div>
    <div class="term"><strong>Version ID</strong><span>Identificador cuando el versionado está activo.</span></div>
    <div class="term"><strong>Storage class</strong><span>Clase de almacenamiento según acceso y costo.</span></div>
    <div class="term"><strong>Policy</strong><span>Reglas de acceso al bucket o recursos.</span></div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si un bucket guarda imágenes de usuarios, ¿debería ser público completo?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Seguridad: público no debería ser el default</h1>
  <div class="cards three">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="IAM"><strong>IAM</strong><span>Permisos para usuarios, roles y servicios.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>Bucket policy</strong><span>Reglas directas sobre bucket y objetos.</span></div>
    <div class="card accent"><strong>Block Public Access</strong><span>Protección para evitar exposición accidental.</span></div>
  </div>
  <div class="callout">Para contenido público moderno, muchas veces conviene exponer por CloudFront y no abrir S3 directo.</div>
</div>

---

<div class="slide">
  <h1>Versionado</h1>
  <div class="two-col centered">
    <div>
      <p>El versionado conserva variantes de un objeto cuando se modifica o elimina.</p>
      <div class="callout">Ayuda a recuperarse de errores, pero también puede aumentar almacenamiento si nadie limpia versiones antiguas.</div>
    </div>
    <div class="stack">
      <div class="step"><div class="num">1</div><div><strong>logo.png v1</strong><span>Primera carga.</span></div></div>
      <div class="step"><div class="num">2</div><div><strong>logo.png v2</strong><span>Objeto actualizado.</span></div></div>
      <div class="step"><div class="num">3</div><div><strong>Delete marker</strong><span>La eliminación también se registra.</span></div></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Storage classes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Standard</strong><span>Acceso frecuente y baja latencia.</span></div>
    <div class="card accent"><strong>Intelligent-Tiering</strong><span>Optimiza costo cuando el acceso cambia.</span></div>
    <div class="card accent"><strong>Standard-IA</strong><span>Acceso poco frecuente, recuperación rápida.</span></div>
    <div class="card accent"><strong>One Zone-IA</strong><span>Menor costo, menor resiliencia por zona.</span></div>
    <div class="card accent"><strong>Glacier</strong><span>Archivo y recuperación menos frecuente.</span></div>
    <div class="card accent"><strong>Lifecycle</strong><span>Mueve o elimina objetos por reglas.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Lifecycle: ordenar el costo</h1>
  <div class="two-col centered">
    <div>
      <p>Las reglas de lifecycle permiten mover objetos a clases más económicas o eliminarlos después de cierto tiempo.</p>
      <div class="callout">No todo archivo viejo debe vivir para siempre en almacenamiento frecuente.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo de apoyo</h3>
      <p><code>03-s3-lifecycle-demo.json</code></p>
      <ul>
        <li>Mueve logs a IA.</li>
        <li>Luego a Glacier Instant Retrieval.</li>
        <li>Elimina después de un año.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>CORS: cuando el navegador bloquea</h1>
  <div class="two-col centered">
    <div>
      <p>CORS controla qué orígenes web pueden leer recursos desde el bucket en un navegador.</p>
      <div class="callout">Si una app frontend no puede leer archivos de S3, no siempre es IAM: puede ser CORS.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo de apoyo</h3>
      <p><code>03-s3-cors-demo.json</code></p>
      <ul>
        <li>Permite GET y HEAD.</li>
        <li>Restringe el origen.</li>
        <li>Expone encabezados necesarios.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Integraciones comunes</h1>
  <div class="cards four">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>CloudFront</strong><span>Distribuir archivos con caché global.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Lambda_64.png" alt="Lambda"><strong>Lambda</strong><span>Procesar eventos de carga de objetos.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="EC2"><strong>Aplicaciones</strong><span>Subir y leer archivos mediante SDK.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="CloudWatch"><strong>Logs</strong><span>Almacenar archivos operativos o auditoría.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Flujo práctico de la sesión</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Crear bucket privado</strong><span>Nombre único, región definida y tags.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Subir objetos</strong><span>Probar desde consola y AWS CLI.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Activar versionado</strong><span>Actualizar objeto y observar versiones.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Aplicar lifecycle</strong><span>Configurar regla para controlar costo futuro.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Bucket público por comodidad</strong><span>Puede exponer datos sensibles.</span></div>
    <div class="card accent"><strong>No usar nombres únicos</strong><span>Los nombres de bucket son globales.</span></div>
    <div class="card accent"><strong>Olvidar versionado</strong><span>Un overwrite puede borrar evidencia útil.</span></div>
    <div class="card accent"><strong>Activar versionado sin lifecycle</strong><span>El costo puede crecer sin notarlo.</span></div>
    <div class="card accent"><strong>Confundir carpetas con prefijos</strong><span>S3 organiza por claves, no directorios reales.</span></div>
    <div class="card accent"><strong>Dejar CORS abierto</strong><span>Permitir todos los orígenes puede ser innecesario.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas</h1>
  <div class="summary">
    <div><strong>Crear buckets privados por defecto.</strong></div>
    <div><strong>Usar tags para proyecto, ambiente, responsable y limpieza.</strong></div>
    <div><strong>Activar versionado cuando el contenido importa.</strong></div>
    <div><strong>Configurar lifecycle para versiones, logs y archivos antiguos.</strong></div>
    <div><strong>Conectar contenido público mediante CloudFront cuando aplique.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>S3 almacena objetos dentro de buckets, no servidores ni discos tradicionales.</strong></div>
    <div><strong>La seguridad se diseña con IAM, políticas y bloqueo de acceso público.</strong></div>
    <div><strong>Versionado ayuda a recuperar cambios, pero requiere estrategia de limpieza.</strong></div>
    <div><strong>Storage classes y lifecycle ayudan a controlar costos.</strong></div>
    <div><strong>S3 se vuelve más poderoso al integrarse con CloudFront, aplicaciones y eventos.</strong></div>
  </div>
</div>

