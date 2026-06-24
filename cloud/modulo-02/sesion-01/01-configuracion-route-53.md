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
    <div class="subtitle">Módulo 2 · Sesión 1</div>
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
        <li>Diseño de despliegues web con dominios, certificados, CDN y almacenamiento cloud.</li>
        <li>Foco en explicar infraestructura como decisiones prácticas para producción.</li>
      </ul>
      <h3>En esta sesión</h3>
      <ul>
        <li>Conectaremos nombres de dominio con recursos reales en AWS.</li>
        <li>Aprenderemos a leer DNS sin tratarlo como una caja negra.</li>
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
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 1</strong>
      <span>Configuración de Route 53</span>
    </div>
    <div class="agenda">
      Conceptos de DNS<br>
      Dominios y registros<br>
      Zonas hospedadas<br>
      Alias y redirecciones
    </div>
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
    <div class="step"><div class="num">1</div><div><strong>Entender qué problema resuelve DNS</strong><span>Traducir nombres humanos a destinos técnicos.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Diferenciar dominio, zona y registro</strong><span>No mezclar compra del dominio con configuración DNS.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Crear registros con criterio</strong><span>A, CNAME, TXT, MX y alias según el destino.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Evitar errores de propagación</strong><span>TTL, región del servicio y nombre exacto del subdominio.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/route53-dns-routing.png" alt="Ilustración de DNS y Route 53 como mapa global de enrutamiento">
  <div class="visual-title">DNS: el mapa de direcciones de internet</div>
</div>

---

<div class="slide">
  <h1>DNS en una frase</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Nombre → destino</p>
      <p class="muted">DNS permite que una persona escriba un dominio y llegue al recurso correcto sin recordar direcciones técnicas.</p>
    </div>
    <div class="diagram">
      <div class="box"><strong>app.tudominio.com</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Route-53_64.png" alt="Route 53"><strong>Route 53</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>Destino</strong></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Dominio, DNS y hosting no son lo mismo</h1>
  <div class="cards three">
    <div class="card accent"><strong>Dominio</strong><span>El nombre que compras o administras: ejemplo.com.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Route-53_64.png" alt="Route 53"><strong>DNS</strong><span>La guía que dice a dónde apunta cada nombre.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>Hosting</strong><span>El lugar donde vive el contenido o la aplicación.</span></div>
  </div>
  <div class="callout">Puedes tener el dominio en un proveedor, el DNS en Route 53 y la app en otro servicio.</div>
</div>

---

<div class="slide">
  <h1>Qué hace Route 53</h1>
  <div class="cards four">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Route-53_64.png" alt="Route 53"><strong>DNS administrado</strong><span>Responde consultas de nombres de dominio.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/AWS-Cloud-logo_32.png" alt="AWS Cloud"><strong>Registro de dominios</strong><span>Permite registrar y administrar dominios compatibles.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="Health checks"><strong>Health checks</strong><span>Ayudan a decidir si un destino está sano.</span></div>
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Region_32.png" alt="Routing"><strong>Políticas de routing</strong><span>Controlan cómo se responde según el caso.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Zona hospedada</h1>
  <div class="two-col centered">
    <div>
      <p>Una hosted zone es el contenedor de registros DNS para un dominio.</p>
      <div class="callout">Si el dominio es el edificio, la zona hospedada es el tablero de direcciones.</div>
    </div>
    <div class="panel blue">
      <h3>Dentro encuentras</h3>
      <ul>
        <li>Registros para el dominio raíz.</li>
        <li>Registros para subdominios.</li>
        <li>Servidores de nombres asignados.</li>
        <li>Configuraciones de validación y correo.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Registros DNS que verás mucho</h1>
  <div class="vocab">
    <div class="term"><strong>A</strong><span>Apunta un nombre a una dirección IPv4.</span></div>
    <div class="term"><strong>AAAA</strong><span>Apunta un nombre a una dirección IPv6.</span></div>
    <div class="term"><strong>CNAME</strong><span>Apunta un nombre a otro nombre.</span></div>
    <div class="term"><strong>TXT</strong><span>Sirve para validaciones y verificación de dominio.</span></div>
    <div class="term"><strong>MX</strong><span>Define servidores de correo del dominio.</span></div>
    <div class="term"><strong>NS</strong><span>Indica qué servidores responden por la zona.</span></div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si escribes un dominio y llega a una web antigua, ¿qué revisarías primero?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Alias: atajo útil dentro de AWS</h1>
  <div class="two-col centered">
    <div>
      <p>Un alias de Route 53 permite apuntar a recursos AWS como CloudFront, load balancers o S3 website endpoints.</p>
      <div class="callout">Para el dominio raíz, alias suele ser mejor opción que CNAME.</div>
    </div>
    <div class="cards two">
      <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Route-53_64.png" alt="Route 53"><strong>example.com</strong><span>Registro alias hacia un recurso AWS.</span></div>
      <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>Distribución</strong><span>Entrega contenido desde una URL técnica.</span></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>TTL: cuánto se recuerda una respuesta</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Time To Live</p>
      <p class="muted">Indica cuánto tiempo puede quedar en caché una respuesta DNS antes de consultarse otra vez.</p>
    </div>
    <div class="panel blue">
      <h3>Regla práctica</h3>
      <ul>
        <li>TTL bajo antes de cambios importantes.</li>
        <li>TTL más alto cuando el destino ya es estable.</li>
        <li>La propagación no siempre es inmediata.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Políticas de enrutamiento</h1>
  <div class="cards three">
    <div class="card accent"><strong>Simple</strong><span>Una respuesta directa para un nombre.</span></div>
    <div class="card accent"><strong>Weighted</strong><span>Divide tráfico por porcentaje entre destinos.</span></div>
    <div class="card accent"><strong>Latency</strong><span>Busca responder desde una ubicación más conveniente.</span></div>
    <div class="card accent"><strong>Failover</strong><span>Usa destino secundario si el principal falla.</span></div>
    <div class="card accent"><strong>Geolocation</strong><span>Responde según ubicación del usuario.</span></div>
    <div class="card accent"><strong>Multivalue</strong><span>Devuelve varios destinos sanos.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Flujo práctico de la sesión</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Identificar dominio</strong><span>Dominio registrado en Route 53 o en proveedor externo.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Crear o revisar zona hospedada</strong><span>Confirmar NS, SOA y registros existentes.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Crear subdominio</strong><span>Usar un registro simple para una prueba controlada.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Validar resolución</strong><span>Probar con herramientas de DNS antes de culpar a la aplicación.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Redirección no siempre es DNS</h1>
  <div class="compare">
    <div class="panel">
      <h3>DNS apunta</h3>
      <ul>
        <li>Resuelve nombre a destino.</li>
        <li>No cambia la URL por sí solo.</li>
        <li>Trabaja antes de la conexión HTTP.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>HTTP redirige</h3>
      <ul>
        <li>El servidor responde 301 o 302.</li>
        <li>El navegador cambia de URL.</li>
        <li>Requiere una capa web o servicio de redirección.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes con DNS</h1>
  <div class="cards three">
    <div class="card accent"><strong>Editar la zona equivocada</strong><span>El dominio apunta a otros name servers.</span></div>
    <div class="card accent"><strong>Confundir CNAME y alias</strong><span>Especialmente en el dominio raíz.</span></div>
    <div class="card accent"><strong>Esperar cambios inmediatos</strong><span>El TTL y cachés intermedios influyen.</span></div>
    <div class="card accent"><strong>Crear registros duplicados</strong><span>Varias respuestas pueden producir resultados raros.</span></div>
    <div class="card accent"><strong>Olvidar el punto final</strong><span>Algunos proveedores interpretan nombres de forma distinta.</span></div>
    <div class="card accent"><strong>No validar con herramientas</strong><span>Sin prueba DNS solo estamos adivinando.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas</h1>
  <div class="summary">
    <div><strong>Documenta qué zona responde por cada dominio.</strong></div>
    <div><strong>Usa subdominios para laboratorios y pruebas.</strong></div>
    <div><strong>Baja TTL antes de cambios importantes.</strong></div>
    <div><strong>Prefiere alias para recursos AWS compatibles.</strong></div>
    <div><strong>Valida DNS antes de revisar aplicación, SSL o CDN.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>DNS traduce nombres humanos a destinos técnicos.</strong></div>
    <div><strong>Route 53 administra zonas hospedadas, registros y políticas de routing.</strong></div>
    <div><strong>Dominio, DNS y hosting son piezas distintas del despliegue.</strong></div>
    <div><strong>Alias ayuda a conectar dominios con recursos AWS.</strong></div>
    <div><strong>TTL, zona correcta y validación evitan la mayoría de errores iniciales.</strong></div>
  </div>
</div>

