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
    <div class="subtitle">Módulo 1 · Sesión 4</div>
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
        <li>Diseño de arquitecturas cloud para aplicaciones web y APIs productivas.</li>
        <li>Optimización de despliegues, costos, observabilidad y escalabilidad.</li>
      </ul>
      <h3>En esta sesión</h3>
      <ul>
        <li>Aprenderemos a mirar infraestructura como sistema vivo: costo, demanda y riesgo.</li>
        <li>Usaremos un caso práctico para tomar decisiones progresivas.</li>
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
      <div class="module-name"><strong>Sesión 1</strong><span>Conceptos básicos</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">AWS, cuenta, modelos cloud e infraestructura como código.</div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Sesión 2</strong><span>Servicios base</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">Consola, IAM, seguridad inicial, costos y facturación.</div>
    </div>
    <div class="module-row">
      <div class="module-name"><strong>Sesión 3</strong><span>Automatización</span></div>
      <div class="chevrons">&gt;&gt;&gt;</div>
      <div class="agenda">AWS CLI, SDKs, CloudFormation, Terraform y despliegue automatizado.</div>
    </div>
    <div class="module-row active">
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
    <div class="step"><div class="num">1</div><div><strong>Identificar costos evitables</strong><span>Recursos ociosos, tamaños incorrectos y laboratorios olvidados.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Distinguir opciones de capacidad</strong><span>On-Demand, Reserved, Spot y uso según contexto.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Entender escalabilidad</strong><span>Vertical, horizontal, automática, caché y servicios administrados.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Aplicar decisiones a un caso</strong><span>Elegir una arquitectura inicial con criterio de costo y crecimiento.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/optimizacion-escalabilidad.png" alt="Ilustración de optimización de costos y escalabilidad cloud">
  <div class="visual-title">Mejorar no siempre es agrandar</div>
</div>

---

<div class="slide">
  <h1>Mejorar infraestructura es balancear</h1>
  <div class="cards three">
    <div class="card accent"><strong>Costo</strong><span>Pagar por lo que aporta valor y eliminar lo que sobra.</span></div>
    <div class="card accent"><strong>Rendimiento</strong><span>Responder bien cuando llegan usuarios reales.</span></div>
    <div class="card accent"><strong>Disponibilidad</strong><span>Reducir puntos únicos de falla.</span></div>
    <div class="card accent"><strong>Seguridad</strong><span>No sacrificar permisos, cifrado o aislamiento por rapidez.</span></div>
    <div class="card accent"><strong>Operación</strong><span>Monitorear antes de adivinar.</span></div>
    <div class="card accent"><strong>Simplicidad</strong><span>No sobrediseñar antes de tener señales.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Optimización de costos: mirar antes de recortar</h1>
  <div class="summary">
    <div><strong>Identificar qué servicios generan costo y por qué.</strong></div>
    <div><strong>Separar laboratorio, desarrollo y producción con tags.</strong></div>
    <div><strong>Revisar recursos encendidos sin tráfico o sin dueño.</strong></div>
    <div><strong>Comparar tamaño real contra uso real.</strong></div>
    <div><strong>Tomar decisiones con métricas, no con intuición.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Costos que aparecen sin avisar</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="Amazon EC2">
      <strong>Instancias encendidas</strong>
      <span>Servidores de laboratorio que nadie apagó.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="Amazon RDS">
      <strong>Bases de datos</strong>
      <span>Capacidad, almacenamiento y backups crecen con el tiempo.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="Amazon S3">
      <strong>Almacenamiento</strong>
      <span>Archivos, versiones y transferencias también cuentan.</span>
    </div>
  </div>
  <div class="callout">El primer ahorro serio casi siempre es apagar, borrar o ajustar lo que no se usa.</div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si tienes que bajar costos hoy sin romper la aplicación, ¿qué revisarías primero?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas preguntas de costo</h1>
  <div class="vocab">
    <div class="term"><strong>¿Tiene dueño?</strong><span>Todo recurso debería tener responsable.</span></div>
    <div class="term"><strong>¿Tiene ambiente?</strong><span>Laboratorio, desarrollo, pruebas o producción.</span></div>
    <div class="term"><strong>¿Tiene tráfico?</strong><span>Si no recibe uso, tal vez puede apagarse.</span></div>
    <div class="term"><strong>¿Está sobredimensionado?</strong><span>El tamaño elegido debe coincidir con la carga real.</span></div>
    <div class="term"><strong>¿Tiene fecha de limpieza?</strong><span>Los recursos temporales necesitan final claro.</span></div>
    <div class="term"><strong>¿Tiene alerta?</strong><span>Sin alerta, el costo se descubre tarde.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Opciones de capacidad</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="On-Demand">
      <strong>On-Demand</strong>
      <span>Pagas mientras usas. Flexible para empezar y aprender.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="Reserved Instances">
      <strong>Reserved</strong>
      <span>Compromiso a largo plazo para cargas estables y predecibles.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="Spot Instances">
      <strong>Spot</strong>
      <span>Capacidad con descuento, útil si toleras interrupciones.</span>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Cuándo usar cada una</h1>
  <div class="compare">
    <div class="panel">
      <h3>Empieza simple</h3>
      <ul>
        <li>On-Demand para laboratorios y primeras pruebas.</li>
        <li>Sin compromiso antes de conocer la demanda.</li>
        <li>Más fácil de explicar y apagar.</li>
      </ul>
    </div>
    <div class="panel blue">
      <h3>Optimiza con señales</h3>
      <ul>
        <li>Reserved para carga constante.</li>
        <li>Spot para trabajos tolerantes a interrupción.</li>
        <li>Ajustes cuando ya tienes métricas.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Escalar no es solo poner una máquina más grande</h1>
  <div class="cards two">
    <div class="card accent">
      <strong>Escalabilidad vertical</strong>
      <span>Aumentar tamaño de una instancia: más CPU, memoria o capacidad.</span>
    </div>
    <div class="card accent">
      <strong>Escalabilidad horizontal</strong>
      <span>Agregar más instancias o réplicas para repartir carga.</span>
    </div>
  </div>
  <div class="callout">Vertical suele ser rápido. Horizontal suele ser más resiliente, pero exige diseño.</div>
</div>

---

<div class="slide">
  <h1>Señales para escalar</h1>
  <div class="cards three">
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="CloudWatch">
      <strong>CPU o memoria</strong>
      <span>Puede indicar saturación de cómputo.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="CloudWatch metrics">
      <strong>Latencia</strong>
      <span>Tiempo de respuesta percibido por usuarios.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudWatch_64.png" alt="CloudWatch alarms">
      <strong>Errores</strong>
      <span>Fallos 5xx, timeouts o rechazos de conexión.</span>
    </div>
  </div>
  <div class="callout">Escalar sin métricas es apostar. Escalar con métricas es operar.</div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si una app responde lento, ¿cómo distinguirías si falta CPU, base de datos o red?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Estrategias de escalabilidad</h1>
  <div class="summary">
    <div><strong>Auto Scaling para ajustar cantidad de instancias según demanda.</strong></div>
    <div><strong>Load Balancer para distribuir tráfico entre instancias sanas.</strong></div>
    <div><strong>Caché o CDN para no recalcular o reenviar lo mismo siempre.</strong></div>
    <div><strong>Servicios administrados para delegar operación repetitiva.</strong></div>
    <div><strong>Arquitectura desacoplada para que una parte no tumbe todo.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Mapa simple de una app escalable</h1>
  <div class="diagram">
    <div class="box">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-CloudFront_64.png" alt="CloudFront">
      <strong>Entrada y contenido</strong>
    </div>
    <div class="next">&gt;</div>
    <div class="box">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-EC2_64.png" alt="EC2">
      <strong>Aplicación escalable</strong>
    </div>
    <div class="next">&gt;</div>
    <div class="box">
      <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="RDS">
      <strong>Datos administrados</strong>
    </div>
  </div>
  <div class="callout">En módulos posteriores reemplazaremos este mapa con servicios concretos y despliegues reales.</div>
</div>

---

<div class="slide">
  <h1>Caso práctico: tienda online</h1>
  <div class="two-col centered">
    <div>
      <p>Una tienda pequeña quiere lanzar rápido, cuidar costos y resistir campañas puntuales.</p>
      <div class="callout">El archivo del caso está junto a esta presentación.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo</h3>
      <p><code>04-caso-practico-implementacion.md</code></p>
      <ul>
        <li>Contexto del negocio.</li>
        <li>Decisiones esperadas.</li>
        <li>Preguntas de discusión.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Implementación progresiva</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Base segura</strong><span>MFA, presupuesto, tags y región definida.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Primer despliegue</strong><span>Frontend, backend y datos con recursos mínimos.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Medición</strong><span>CloudWatch, logs, latencia, errores y costo por servicio.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Escalabilidad</strong><span>Agregar balanceo, réplicas o caché cuando la demanda lo justifique.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Checklist antes de producción</h1>
  <div class="summary">
    <div><strong>¿Hay presupuesto y alertas activas?</strong></div>
    <div><strong>¿Los recursos críticos tienen monitoreo?</strong></div>
    <div><strong>¿Existe estrategia de backup o recuperación?</strong></div>
    <div><strong>¿Los permisos siguen mínimo privilegio?</strong></div>
    <div><strong>¿Está claro cómo escalar y cómo volver atrás?</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes al mejorar infraestructura</h1>
  <div class="cards three">
    <div class="card accent"><strong>Escalar antes de medir</strong><span>Aumenta costo sin resolver la causa.</span></div>
    <div class="card accent"><strong>Optimizar demasiado pronto</strong><span>Complica el diseño antes de tener usuarios.</span></div>
    <div class="card accent"><strong>Ignorar costos pequeños</strong><span>Muchos recursos mínimos también suman.</span></div>
    <div class="card accent"><strong>Usar Spot sin tolerancia</strong><span>Puede interrumpir cargas que no están preparadas.</span></div>
    <div class="card accent"><strong>No probar fallos</strong><span>La resiliencia no se confirma solo en diagramas.</span></div>
    <div class="card accent"><strong>No limpiar laboratorios</strong><span>La deuda de costo empieza en pruebas olvidadas.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas para cerrar el módulo</h1>
  <div class="summary">
    <div><strong>Empieza simple, mide y mejora por señales.</strong></div>
    <div><strong>Usa tags y presupuestos como parte de la arquitectura.</strong></div>
    <div><strong>Elige capacidad según comportamiento de la carga.</strong></div>
    <div><strong>Diseña escalabilidad pensando en usuarios y fallos reales.</strong></div>
    <div><strong>Automatiza lo que vas a repetir o necesitar recuperar.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>Optimizar costos empieza con visibilidad y limpieza.</strong></div>
    <div><strong>On-Demand, Reserved y Spot sirven para escenarios distintos.</strong></div>
    <div><strong>Escalar requiere métricas: CPU, latencia, errores, tráfico y costo.</strong></div>
    <div><strong>La infraestructura mejora por ciclos: desplegar, medir, ajustar y automatizar.</strong></div>
    <div><strong>El módulo 1 deja lista la base para construir despliegues reales en AWS.</strong></div>
  </div>
</div>
