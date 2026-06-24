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
    <div class="subtitle">Módulo 1 · Sesión 2</div>
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
        <li>Más de 7 años construyendo APIs, microservicios y plataformas cloud.</li>
        <li>Experiencia en Java Spring Boot, Node.js, Docker, serverless y contenedores.</li>
        <li>Foco en llevar conceptos técnicos a decisiones prácticas de arquitectura.</li>
      </ul>
      <h3>En esta sesión</h3>
      <ul>
        <li>Configuraremos una base segura para empezar a trabajar en AWS.</li>
        <li>Veremos cómo evitar los errores iniciales más costosos.</li>
      </ul>
    </div>
  </div>
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
  <h1>Dónde estamos en el módulo</h1>
  <div class="module-list">
    <div class="module-row">
      <div class="module-name"><strong>Sesión 1</strong><span>Conceptos básicos de AWS</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">AWS, cuenta, regiones, modelos cloud e infraestructura como código.</div>
    </div>
    <div class="module-row active">
      <div class="module-name"><strong>Sesión 2</strong><span>Servicios base</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Consola, IAM, seguridad inicial, costos y facturación.</div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Sesión 3</strong><span>Automatización</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">AWS CLI, SDKs, CloudFormation, Terraform y despliegue automatizado.</div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Sesión 4</strong><span>Mejorar infraestructura</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Optimización de costos, capacidad, escalabilidad y caso práctico.</div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Objetivos de aprendizaje</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Navegar la consola de AWS con criterio</strong><span>Entender región, búsqueda de servicios, recursos y configuración básica.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Distinguir identidades y permisos</strong><span>Usuarios, grupos, roles y políticas sin mezclar responsabilidades.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Aplicar seguridad inicial</strong><span>MFA, mínimo privilegio, root protegido y acceso responsable.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Evitar sorpresas de costo</strong><span>Presupuestos, alertas, etiquetas y hábitos de laboratorio.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>La sesión en una frase</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Preparar la cuenta</p>
      <p class="muted">Antes de crear servidores, bases de datos o dominios, necesitamos que la cuenta sea navegable, segura y observable en costos.</p>
    </div>
    <div class="cards two">
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/AWS-Account_32.png" alt="AWS Account">
        <strong>Cuenta</strong>
        <span>Centro de seguridad, recursos y facturación.</span>
      </div>
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="AWS IAM">
        <strong>Permisos</strong>
        <span>Controlan quién puede hacer qué.</span>
      </div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>La consola no es AWS completo</h1>
  <div class="two-col centered">
    <div>
      <p>AWS se puede usar desde la consola web, comandos, SDKs, plantillas y herramientas externas.</p>
      <div class="callout">La consola ayuda a aprender, explorar y validar. Producción necesita hábitos repetibles.</div>
    </div>
    <div class="panel blue">
      <h3>Al entrar, mira siempre</h3>
      <ul>
        <li>La cuenta activa.</li>
        <li>La región seleccionada.</li>
        <li>El servicio que estás usando.</li>
        <li>Los recursos que quedan creados.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Región: pequeño selector, gran impacto</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Region_32.png" alt="AWS Region">
      <strong>Ubicación</strong>
      <span>Los recursos viven en una región específica.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="Amazon RDS">
      <strong>Servicios</strong>
      <span>No todos los servicios o características están en todas las regiones.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="Amazon CloudWatch">
      <strong>Costos y monitoreo</strong>
      <span>Precios, métricas y alarmas también dependen del lugar donde trabajas.</span>
    </div>
  </div>
  <div class="callout">Si “no encuentro mi recurso”, muchas veces estás mirando otra región.</div>
</div>

---

<div class="slide">
  <h1>Recursos que debes reconocer</h1>
  <div class="vocab">
    <div class="term"><strong>Servicio</strong><span>Producto de AWS: EC2, S3, IAM, RDS, CloudWatch.</span></div>
    <div class="term"><strong>Recurso</strong><span>Objeto creado dentro de un servicio: instancia, bucket, usuario, alarma.</span></div>
    <div class="term"><strong>ARN</strong><span>Identificador único de un recurso dentro de AWS.</span></div>
    <div class="term"><strong>Tag</strong><span>Etiqueta clave/valor para ordenar costos, dueños y ambientes.</span></div>
    <div class="term"><strong>Región</strong><span>Lugar donde se crea y opera el recurso.</span></div>
    <div class="term"><strong>Dashboard</strong><span>Vista para monitorear estado, métricas o costos.</span></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/iam-permisos-llaves.png" alt="Ilustración de permisos IAM como llaves específicas para recursos cloud">
  <div class="visual-title">IAM: cada persona con la llave correcta</div>
</div>

---

<div class="slide">
  <h1>IAM responde una pregunta simple</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">¿Quién puede hacer qué?</p>
      <p class="muted">IAM permite administrar identidades y permisos para trabajar con recursos de AWS.</p>
    </div>
    <div class="panel blue">
      <h3>No es solo “crear usuarios”</h3>
      <ul>
        <li>Reduce errores humanos.</li>
        <li>Evita accesos innecesarios.</li>
        <li>Separa tareas administrativas.</li>
        <li>Ayuda a auditar acciones.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>¿Qué pasaría si todo el equipo usa el mismo usuario administrador?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Usuarios, grupos, roles y políticas</h1>
  <div class="cards four">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/AWS-Account_32.png" alt="AWS Account">
      <strong>Usuario</strong>
      <span>Identidad para una persona o caso puntual.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="AWS IAM">
      <strong>Grupo</strong>
      <span>Conjunto de usuarios con permisos comunes.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="AWS IAM Role">
      <strong>Rol</strong>
      <span>Permisos temporales asumidos por servicios o identidades.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="AWS IAM Policy">
      <strong>Política</strong>
      <span>Documento que permite o niega acciones.</span>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Usuarios: para personas, no para aplicaciones modernas</h1>
  <div class="compare">
    <div class="panel">
      <h3>Uso aceptable</h3>
      <ul>
        <li>Persona que entra a consola.</li>
        <li>Laboratorio controlado.</li>
        <li>Acceso temporal de aprendizaje.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Evitar</h3>
      <ul>
        <li>Compartir usuarios entre varias personas.</li>
        <li>Crear access keys permanentes sin necesidad.</li>
        <li>Usar un usuario admin para todo.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Roles: permisos que se asumen</h1>
  <div class="two-col centered">
    <div>
      <p>Un rol permite que una identidad o servicio actúe con permisos definidos, normalmente sin credenciales permanentes.</p>
      <div class="callout">En AWS, los servicios suelen trabajar mejor con roles que con llaves guardadas en código.</div>
    </div>
    <div class="diagram">
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="EC2"><strong>EC2</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_AWS-Identity-and-Access-Management_64.png" alt="IAM Role"><strong>Rol IAM</strong></div>
      <div class="next">&gt;</div>
      <div class="box"><img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="S3"><strong>S3</strong></div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Políticas: permisos escritos</h1>
  <div class="two-col">
    <div>
      <p>Una política define acciones permitidas o denegadas sobre recursos.</p>
      <div class="callout">No basta con “permitir S3”: conviene precisar acciones y recursos.</div>
    </div>
    <div class="code-window">
      <span class="file">idea-politica.json</span>
<pre><code>{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::mi-bucket/*"
}</code></pre>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Mínimo privilegio</h1>
  <div class="summary">
    <div><strong>Dar solo los permisos necesarios para una tarea concreta.</strong></div>
    <div><strong>Empezar pequeño y ampliar cuando exista una razón clara.</strong></div>
    <div><strong>Preferir permisos por rol o grupo antes que permisos sueltos por usuario.</strong></div>
    <div><strong>Revisar accesos cuando cambian tareas, equipos o proyectos.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>MFA: segunda barrera</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">Algo que sabes + algo que tienes</p>
      <p class="muted">La contraseña sola no debería ser la única defensa de una cuenta AWS.</p>
    </div>
    <div class="panel blue">
      <h3>Prioridad</h3>
      <ul>
        <li>Root user con MFA.</li>
        <li>Usuarios administrativos con MFA.</li>
        <li>Acceso separado por persona.</li>
        <li>Recuperación documentada.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Access keys: útiles, pero delicadas</h1>
  <div class="compare">
    <div class="panel">
      <h3>Sirven para</h3>
      <ul>
        <li>AWS CLI.</li>
        <li>Scripts locales de laboratorio.</li>
        <li>Integraciones muy controladas.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Riesgos</h3>
      <ul>
        <li>Subirlas por error a GitHub.</li>
        <li>Dejarlas en una laptop compartida.</li>
        <li>No rotarlas ni eliminarlas.</li>
      </ul>
    </div>
  </div>
  <div class="callout">Una llave filtrada puede crear recursos y generar costos sin que te des cuenta.</div>
</div>

---

<div class="slide">
  <h1>Seguridad base de una cuenta de laboratorio</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Root protegido</strong><span>MFA activo y uso excepcional.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Usuario administrativo separado</strong><span>No usar root para trabajo diario.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Permisos por grupos o roles</strong><span>Evitar permisos sueltos y difíciles de rastrear.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Presupuesto y alerta</strong><span>Configurar control de costos antes de experimentar.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Facturación: no esperes al final del mes</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/AWS-Account_32.png" alt="Billing">
      <strong>Billing</strong>
      <span>Vista general de cargos, métodos de pago y facturas.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="Budget">
      <strong>Budgets</strong>
      <span>Alertas cuando el gasto real o previsto supera un límite.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="Cost Explorer">
      <strong>Cost Explorer</strong>
      <span>Análisis visual de costos por servicio, fecha y etiquetas.</span>
    </div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si un recurso de laboratorio queda encendido una semana, ¿cómo lo detectarías antes de que duela?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Tags: nombres que ayudan a no perderse</h1>
  <div class="two-col centered">
    <div>
      <p>Las etiquetas permiten clasificar recursos para saber quién los creó, a qué ambiente pertenecen y cuándo deberían eliminarse.</p>
      <div class="callout">Sin tags, el costo se vuelve una sopa difícil de explicar.</div>
    </div>
    <div class="code-window">
      <span class="file">tags sugeridos</span>
<pre><code>Proyecto = curso-cloud
Ambiente = laboratorio
Responsable = estudiante
Eliminar = 2026-07-01</code></pre>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes en la sesión 2</h1>
  <div class="cards three">
    <div class="card accent"><strong>Usar root a diario</strong><span>La cuenta queda expuesta a errores de alto impacto.</span></div>
    <div class="card accent"><strong>Compartir credenciales</strong><span>Después no se sabe quién hizo qué.</span></div>
    <div class="card accent"><strong>Permisos demasiado amplios</strong><span>Facilitan trabajo rápido, pero aumentan riesgo.</span></div>
    <div class="card accent"><strong>No activar MFA</strong><span>Una contraseña robada basta para entrar.</span></div>
    <div class="card accent"><strong>No revisar región</strong><span>Recursos “perdidos” o costos inesperados.</span></div>
    <div class="card accent"><strong>No crear presupuesto</strong><span>El costo se descubre tarde.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas desde hoy</h1>
  <div class="summary">
    <div><strong>Usa MFA para root y cuentas administrativas.</strong></div>
    <div><strong>Trabaja con usuarios separados y permisos mínimos.</strong></div>
    <div><strong>Prefiere roles para servicios y automatizaciones.</strong></div>
    <div><strong>Crea un presupuesto antes de desplegar laboratorios.</strong></div>
    <div><strong>Etiqueta recursos y elimina lo que ya no uses.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>La consola es una puerta de entrada, pero no reemplaza hábitos repetibles.</strong></div>
    <div><strong>IAM controla identidades, permisos y acceso a recursos.</strong></div>
    <div><strong>MFA, mínimo privilegio y roles reducen riesgos desde el inicio.</strong></div>
    <div><strong>Budgets, Cost Explorer y tags ayudan a controlar costos.</strong></div>
    <div><strong>Una cuenta bien preparada evita problemas antes de crear infraestructura real.</strong></div>
  </div>
</div>
