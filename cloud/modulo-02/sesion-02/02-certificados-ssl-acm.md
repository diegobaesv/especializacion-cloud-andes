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
    <div class="subtitle">Módulo 2 · Sesión 2</div>
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
        <li>Implementación de HTTPS para aplicaciones web, APIs y distribuciones CDN.</li>
        <li>Uso de certificados administrados para reducir errores operativos.</li>
      </ul>
      <h3>En esta sesión</h3>
      <ul>
        <li>Entenderemos qué protege HTTPS y qué no protege.</li>
        <li>Emitiremos certificados con ACM usando validación de dominio.</li>
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
  <div class="highlight-box">
    <div class="module-name">
      <strong>Sesión 2</strong>
      <span>Certificados SSL con ACM</span>
    </div>
    <div class="agenda">
      HTTPS y TLS<br>
      Certificados públicos<br>
      Validación DNS<br>
      Integración con servicios AWS
    </div>
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
    <div class="step"><div class="num">1</div><div><strong>Entender HTTPS sin magia</strong><span>Qué protege TLS y por qué el navegador confía.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Solicitar certificados públicos</strong><span>Usar ACM para dominios propios o subdominios.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Validar propiedad del dominio</strong><span>Crear registros DNS de validación con Route 53.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Integrar certificados con servicios AWS</strong><span>CloudFront, load balancers y APIs según el caso.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/acm-certificado-ssl.png" alt="Ilustración de certificado SSL protegiendo una conexión web">
  <div class="visual-title">HTTPS: confianza antes de entrar</div>
</div>

---

<div class="slide">
  <h1>Qué cambia con HTTPS</h1>
  <div class="cards three">
    <div class="card accent"><strong>Cifrado</strong><span>La comunicación viaja protegida entre cliente y servidor.</span></div>
    <div class="card accent"><strong>Identidad</strong><span>El navegador verifica que el certificado corresponde al dominio.</span></div>
    <div class="card accent"><strong>Integridad</strong><span>Reduce el riesgo de modificación del tráfico en camino.</span></div>
  </div>
  <div class="callout">HTTPS no corrige una mala autenticación, permisos excesivos ni una aplicación vulnerable.</div>
</div>

---

<div class="slide">
  <h1>Certificado digital</h1>
  <div class="two-col centered">
    <div>
      <p>Un certificado vincula un dominio con una clave pública y una autoridad de confianza.</p>
      <div class="callout">El navegador no confía porque “se ve seguro”; confía porque puede validar una cadena.</div>
    </div>
    <div class="cards two">
      <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Certificate-Manager_64.png" alt="ACM"><strong>Dominio</strong><span>El nombre que se protege.</span></div>
      <div class="card accent"><strong>Autoridad</strong><span>Entidad que firma y respalda el certificado.</span></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>AWS Certificate Manager</h1>
  <div class="two-col centered">
    <div>
      <p>ACM permite solicitar, administrar y renovar certificados SSL/TLS para servicios integrados de AWS.</p>
      <div class="callout">Su gran valor no es solo emitir: es reducir operación manual y vencimientos olvidados.</div>
    </div>
    <div class="panel blue">
      <h3>Se usa con</h3>
      <ul>
        <li>Amazon CloudFront.</li>
        <li>Application Load Balancer.</li>
        <li>API Gateway.</li>
        <li>Otros servicios integrados.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Certificado público o privado</h1>
  <div class="compare">
    <div class="panel">
      <h3>Público</h3>
      <ul>
        <li>Para sitios y APIs accesibles desde internet.</li>
        <li>El navegador puede validar la confianza.</li>
        <li>Es el caso típico para CloudFront.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Privado</h3>
      <ul>
        <li>Para redes internas y sistemas corporativos.</li>
        <li>Requiere una autoridad privada.</li>
        <li>No es el primer caso de una web pública.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Qué administra ACM</h1>
  <div class="cards three">
    <div class="card aws"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Certificate-Manager_64.png" alt="ACM"><strong>Solicitud</strong><span>Emisión de certificados para dominios propios.</span></div>
    <div class="card accent"><strong>Validación</strong><span>Demostrar control del dominio por DNS o email.</span></div>
    <div class="card accent"><strong>Renovación</strong><span>Renovación administrada cuando la validación se mantiene.</span></div>
  </div>
  <div class="callout">ACM administra certificados, pero no reemplaza una arquitectura segura ni políticas de acceso.</div>
</div>

---

<div class="slide">
  <h1>Estados que debes reconocer</h1>
  <div class="vocab">
    <div class="term"><strong>Pending validation</strong><span>Falta demostrar que controlas el dominio.</span></div>
    <div class="term"><strong>Issued</strong><span>Certificado emitido y listo para asociarse.</span></div>
    <div class="term"><strong>In use</strong><span>Algún servicio AWS ya lo está usando.</span></div>
    <div class="term"><strong>Expired</strong><span>Ya no sirve para una conexión confiable.</span></div>
    <div class="term"><strong>Validation timed out</strong><span>No se completó la validación a tiempo.</span></div>
    <div class="term"><strong>Renewal eligible</strong><span>Puede renovarse si la configuración sigue correcta.</span></div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>¿Qué puede pasar si un certificado vence en producción?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Validación: demostrar que el dominio es tuyo</h1>
  <div class="compare">
    <div class="panel">
      <h3>Validación DNS</h3>
      <ul>
        <li>Crear registro CNAME de validación.</li>
        <li>Recomendado para renovación administrada.</li>
        <li>Funciona bien con Route 53.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Validación por email</h3>
      <ul>
        <li>Requiere acceso a correos del dominio.</li>
        <li>Puede ser incómoda para equipos grandes.</li>
        <li>Menos práctica para automatizar.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Región importante: CloudFront usa us-east-1</h1>
  <div class="two-col centered">
    <div>
      <p>Para usar un certificado con CloudFront, el certificado público debe estar en la región Norte de Virginia: <code>us-east-1</code>.</p>
      <div class="callout">Este detalle explica muchos “no aparece mi certificado”.</div>
    </div>
    <div class="diagram">
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Certificate-Manager_64.png" alt="ACM"><strong>ACM us-east-1</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>CloudFront</strong></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Certificado wildcard</h1>
  <div class="two-col centered">
    <div>
      <p>Un certificado wildcard protege varios subdominios del mismo nivel.</p>
      <div class="callout"><code>*.example.com</code> cubre <code>app.example.com</code>, pero no cubre <code>api.dev.example.com</code>.</div>
    </div>
    <div class="vocab">
      <div class="term"><strong>example.com</strong><span>Dominio raíz.</span></div>
      <div class="term"><strong>www.example.com</strong><span>Subdominio común.</span></div>
      <div class="term"><strong>*.example.com</strong><span>Wildcard de primer nivel.</span></div>
      <div class="term"><strong>api.dev.example.com</strong><span>Necesita otra cobertura.</span></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Integración típica</h1>
  <div class="diagram">
    <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Route-53_64.png" alt="Route 53"><strong>Dominio</strong></div>
    <div class="next">&gt;</div>
    <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Certificate-Manager_64.png" alt="ACM"><strong>Certificado</strong></div>
    <div class="next">&gt;</div>
    <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront"><strong>Servicio</strong></div>
  </div>
  <div class="callout">Primero se valida el dominio, luego se asocia el certificado al servicio que recibirá tráfico HTTPS.</div>
</div>

---

<div class="slide">
  <h1>Redirigir HTTP a HTTPS</h1>
  <div class="two-col centered">
    <div>
      <p>Emitir el certificado no obliga automáticamente a los usuarios a usar HTTPS.</p>
      <div class="callout">La redirección se configura en el servicio que recibe tráfico: CloudFront, load balancer o aplicación.</div>
    </div>
    <div class="stack">
      <div class="step"><div class="num">1</div><div><strong>Usuario entra por HTTP</strong><span>La solicitud llega sin cifrado inicial.</span></div></div>
      <div class="step"><div class="num">2</div><div><strong>Servicio responde redirección</strong><span>El navegador cambia a HTTPS.</span></div></div>
      <div class="step"><div class="num">3</div><div><strong>Tráfico queda protegido</strong><span>Las siguientes solicitudes usan TLS.</span></div></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas para seguridad web</h1>
  <div class="summary">
    <div><strong>Usa validación DNS cuando sea posible.</strong></div>
    <div><strong>Solicita certificados en la región correcta para cada servicio.</strong></div>
    <div><strong>Incluye dominio raíz y subdominios que realmente usarás.</strong></div>
    <div><strong>Evita certificados manuales si ACM puede renovarlos automáticamente.</strong></div>
    <div><strong>Fuerza redirección HTTP a HTTPS en la capa adecuada.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Certificado en región equivocada</strong><span>CloudFront no lo mostrará si no está en us-east-1.</span></div>
    <div class="card accent"><strong>Falta validar DNS</strong><span>El certificado queda pendiente.</span></div>
    <div class="card accent"><strong>No cubrir www</strong><span>El dominio principal funciona, pero www falla.</span></div>
    <div class="card accent"><strong>Confundir HTTPS con seguridad total</strong><span>La aplicación aún necesita permisos, autenticación y controles.</span></div>
    <div class="card accent"><strong>Eliminar registros de validación</strong><span>Puede afectar renovaciones automáticas.</span></div>
    <div class="card accent"><strong>No probar desde navegador</strong><span>El certificado puede estar emitido pero mal asociado.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>HTTPS protege la comunicación y ayuda al navegador a confiar en el dominio.</strong></div>
    <div><strong>ACM administra certificados SSL/TLS para servicios AWS integrados.</strong></div>
    <div><strong>La validación DNS suele ser la opción más práctica para producción.</strong></div>
    <div><strong>Para CloudFront, el certificado debe estar en us-east-1.</strong></div>
    <div><strong>La seguridad web combina certificado, dominio correcto, redirección y configuración del servicio.</strong></div>
  </div>
</div>
