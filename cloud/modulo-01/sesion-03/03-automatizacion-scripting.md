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
    <div class="subtitle">Módulo 1 · Sesión 3</div>
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
        <li>Trabajo con despliegues automatizados, CI/CD, contenedores e infraestructura como código.</li>
      </ul>
      <h3>En esta sesión</h3>
      <ul>
        <li>Pasaremos de operar manualmente a repetir acciones con comandos y archivos.</li>
        <li>Conectaremos AWS CLI, SDKs, CloudFormation y Terraform con casos simples.</li>
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
    <div class="module-row active">
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
    <div class="step"><div class="num">1</div><div><strong>Entender cuándo usar AWS CLI</strong><span>Consultar, crear y automatizar acciones desde terminal.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Diferenciar CLI y SDKs</strong><span>Comandos para operadores, librerías para aplicaciones.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Comprender CloudFormation</strong><span>Stacks, plantillas, parámetros y cambios controlados.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Introducir Terraform</strong><span>Provider, estado, plan y apply como flujo de trabajo.</span></div></div>
  </div>
</div>

---

<div class="slide visual-slide">
  <img src="../../recursos/imagenes/ia/automatizacion-cloud.png" alt="Ilustración de automatización cloud creando recursos desde un script">
  <div class="visual-title">Automatizar para repetir sin adivinar</div>
</div>

---

<div class="slide">
  <h1>Por qué automatizar</h1>
  <div class="cards three">
    <div class="card accent"><strong>Repetición</strong><span>Crear lo mismo sin depender de memoria o capturas.</span></div>
    <div class="card accent"><strong>Velocidad</strong><span>Reducir tareas manuales que consumen tiempo.</span></div>
    <div class="card accent"><strong>Control</strong><span>Revisar qué cambia antes de tocar recursos reales.</span></div>
    <div class="card accent"><strong>Auditoría</strong><span>Guardar comandos, archivos y cambios en repositorio.</span></div>
    <div class="card accent"><strong>Aprendizaje</strong><span>Ver con precisión qué acción crea qué resultado.</span></div>
    <div class="card accent"><strong>Limpieza</strong><span>Eliminar recursos de laboratorio de forma ordenada.</span></div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si crear algo a mano toma dos minutos, ¿cuándo sí vale la pena automatizarlo?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Cuatro caminos para automatizar</h1>
  <div class="cards four">
    <div class="card aws">
      <img src="../../recursos/imagenes/tools/aws-command-line-interface.svg" alt="AWS CLI">
      <strong>AWS CLI</strong>
      <span>Comandos desde terminal.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/AWS-Cloud-logo_32.png" alt="AWS SDK">
      <strong>SDKs</strong>
      <span>Librerías para código de aplicación.</span>
    </div>
    <div class="card aws">
      <img src="../../recursos/imagenes/aws-icons/Arch_AWS-CloudFormation_64.png" alt="AWS CloudFormation">
      <strong>CloudFormation</strong>
      <span>Infraestructura declarada en plantillas AWS.</span>
    </div>
    <div class="card accent">
      <img src="../../recursos/imagenes/tools/hashicorp-terraform.svg" alt="Terraform">
      <strong>Terraform</strong>
      <span>Infraestructura declarada para AWS y otros proveedores.</span>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>AWS CLI: consola desde terminal</h1>
  <div class="two-col centered">
    <div>
      <p>La AWS CLI permite ejecutar acciones contra servicios de AWS usando comandos.</p>
      <div class="callout">Es ideal para consultar, probar, automatizar tareas cortas y aprender cómo responde AWS.</div>
    </div>
    <div class="code-window">
      <span class="file">terminal</span>
<pre><code>aws sts get-caller-identity
aws s3 ls
aws ec2 describe-instances</code></pre>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Configurar CLI sin perderse</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Credenciales</strong><span>Quién soy para AWS: access key temporal o perfil configurado.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Región</strong><span>Dónde se ejecutan los comandos por defecto.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Perfil</strong><span>Separar cuentas o ambientes: laboratorio, producción, personal.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Validación</strong><span>Confirmar identidad antes de crear o borrar recursos.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Primer comando importante</h1>
  <div class="two-col centered">
    <div>
      <p class="big-word">¿Quién soy?</p>
      <p class="muted">Antes de operar, valida qué cuenta y qué identidad está usando la terminal.</p>
    </div>
    <div class="code-window">
      <span class="file">validar identidad</span>
<pre><code>aws sts get-caller-identity \
  --profile curso-cloud</code></pre>
    </div>
  </div>
  <div class="callout">Muchos errores nacen por ejecutar comandos en la cuenta, perfil o región equivocada.</div>
</div>

---

<div class="slide">
  <h1>Archivo auxiliar de comandos</h1>
  <div class="two-col centered">
    <div>
      <p>No vamos a llenar la diapositiva con todos los comandos de laboratorio.</p>
      <div class="callout">El archivo completo está junto a esta presentación.</div>
    </div>
    <div class="panel blue">
      <h3>Disponible en el repositorio</h3>
      <p><code>03-aws-cli-ejemplos.sh</code></p>
      <ul>
        <li>Verificar versión.</li>
        <li>Validar identidad.</li>
        <li>Listar buckets.</li>
        <li>Crear, subir y limpiar un recurso demo.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>SDKs: cuando la aplicación habla con AWS</h1>
  <div class="two-col centered">
    <div>
      <p>Un SDK es una librería para que tu código use servicios de AWS sin escribir llamadas HTTP manuales.</p>
      <div class="callout">La CLI ayuda al operador. El SDK vive dentro de la aplicación.</div>
    </div>
    <div class="cards two">
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-Simple-Storage-Service_64.png" alt="Amazon S3">
        <strong>Subir archivos</strong>
        <span>Guardar imágenes, documentos o backups desde backend.</span>
      </div>
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/Arch_Amazon-RDS_64.png" alt="Amazon RDS">
        <strong>Consultar datos</strong>
        <span>Conectarse a servicios administrados de forma segura.</span>
      </div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>CloudFormation: declarar recursos AWS</h1>
  <div class="two-col centered">
    <div>
      <p>CloudFormation permite definir recursos en una plantilla y administrarlos como un stack.</p>
      <div class="callout">La plantilla describe el destino; AWS se encarga de crear o actualizar los recursos.</div>
    </div>
    <div class="cards two">
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/Arch_AWS-CloudFormation_64.png" alt="AWS CloudFormation">
        <strong>Template</strong>
        <span>Archivo YAML o JSON con recursos y parámetros.</span>
      </div>
      <div class="card aws">
        <img src="../../recursos/imagenes/aws-icons/Arch_AWS-CloudFormation_64.png" alt="AWS CloudFormation stack">
        <strong>Stack</strong>
        <span>Conjunto de recursos creados desde la plantilla.</span>
      </div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>CloudFormation en 4 pasos</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong>Escribir plantilla</strong><span>Definir recursos, parámetros, tags y salidas.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong>Crear stack</strong><span>AWS interpreta la plantilla y crea recursos.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong>Actualizar con control</strong><span>Los cambios se aplican al stack, no a clics sueltos.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong>Eliminar stack</strong><span>La limpieza puede ser más ordenada que borrar recurso por recurso.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Plantilla de ejemplo</h1>
  <div class="two-col centered">
    <div>
      <p>La plantilla completa queda en un archivo separado para revisarla con calma.</p>
      <div class="callout">Hoy nos interesa el patrón mental: archivo → stack → recursos.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo</h3>
      <p><code>03-cloudformation-s3-bucket.yaml</code></p>
      <ul>
        <li>Define un bucket S3.</li>
        <li>Recibe el nombre como parámetro.</li>
        <li>Agrega tags de laboratorio.</li>
        <li>Expone una salida simple.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Terraform: planificar antes de aplicar</h1>
  <div class="two-col centered">
    <div>
      <p>Terraform usa archivos de configuración para describir infraestructura y calcula los cambios antes de aplicarlos.</p>
      <div class="callout">La palabra clave es plan: revisar antes de tocar AWS.</div>
    </div>
    <div class="cards two">
      <div class="card accent">
        <img src="../../recursos/imagenes/tools/hashicorp-terraform.svg" alt="Terraform">
        <strong>Provider</strong>
        <span>Plugin que sabe hablar con AWS.</span>
      </div>
      <div class="card accent">
        <img src="../../recursos/imagenes/tools/hashicorp-terraform.svg" alt="Terraform state">
        <strong>State</strong>
        <span>Registro de lo que Terraform administra.</span>
      </div>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Flujo básico de Terraform</h1>
  <div class="stack">
    <div class="step"><div class="num">1</div><div><strong><code>terraform init</code></strong><span>Prepara providers y carpeta de trabajo.</span></div></div>
    <div class="step"><div class="num">2</div><div><strong><code>terraform plan</code></strong><span>Muestra qué se creará, cambiará o eliminará.</span></div></div>
    <div class="step"><div class="num">3</div><div><strong><code>terraform apply</code></strong><span>Ejecuta los cambios aprobados.</span></div></div>
    <div class="step"><div class="num">4</div><div><strong><code>terraform destroy</code></strong><span>Elimina lo administrado cuando termina el laboratorio.</span></div></div>
  </div>
</div>

---

<div class="slide">
  <h1>Ejemplo Terraform del laboratorio</h1>
  <div class="two-col centered">
    <div>
      <p>El ejemplo completo está separado para evitar una slide saturada de HCL.</p>
      <div class="callout">Misma idea que CloudFormation: declarar antes de crear.</div>
    </div>
    <div class="panel blue">
      <h3>Archivo</h3>
      <p><code>03-terraform-s3-bucket.tf</code></p>
      <ul>
        <li>Configura provider AWS.</li>
        <li>Recibe nombre del bucket como variable.</li>
        <li>Crea bucket S3 con tags.</li>
        <li>Expone una salida.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="slide">
  <h1>Comparación rápida</h1>
  <div class="vocab">
    <div class="term"><strong>CLI</strong><span>Excelente para consultas, pruebas y scripts cortos.</span></div>
    <div class="term"><strong>SDK</strong><span>Ideal cuando la aplicación necesita usar AWS desde código.</span></div>
    <div class="term"><strong>CloudFormation</strong><span>Nativo de AWS, administra stacks dentro del ecosistema AWS.</span></div>
    <div class="term"><strong>Terraform</strong><span>Muy usado para infraestructura multi-proveedor y flujo plan/apply.</span></div>
    <div class="term"><strong>Consola</strong><span>Buena para explorar; peligrosa si se vuelve la única forma de producción.</span></div>
    <div class="term"><strong>Git</strong><span>Permite revisar, versionar y discutir cambios de infraestructura.</span></div>
  </div>
</div>

---

<div class="slide quiz-slide">
  <div class="question">
    <h1>Si un cambio de infraestructura rompe producción, ¿qué ventaja tiene haberlo definido en archivos?</h1>
  </div>
</div>

---

<div class="slide">
  <h1>Buenas prácticas al automatizar</h1>
  <div class="summary">
    <div><strong>Validar identidad y región antes de ejecutar comandos.</strong></div>
    <div><strong>No guardar credenciales en código ni subirlas al repositorio.</strong></div>
    <div><strong>Usar nombres y tags claros para laboratorios.</strong></div>
    <div><strong>Revisar planes o cambios antes de aplicar.</strong></div>
    <div><strong>Probar limpieza: crear también implica saber eliminar.</strong></div>
  </div>
</div>

---

<div class="slide">
  <h1>Errores comunes</h1>
  <div class="cards three">
    <div class="card accent"><strong>Ejecutar en el perfil equivocado</strong><span>Terminas creando recursos en otra cuenta o ambiente.</span></div>
    <div class="card accent"><strong>No revisar región</strong><span>El recurso aparece donde no lo esperabas.</span></div>
    <div class="card accent"><strong>Subir llaves a GitHub</strong><span>Es uno de los errores más caros de corregir.</span></div>
    <div class="card accent"><strong>Ignorar el estado</strong><span>Terraform depende del state para saber qué administra.</span></div>
    <div class="card accent"><strong>No etiquetar</strong><span>La limpieza y el análisis de costos se vuelven difíciles.</span></div>
    <div class="card accent"><strong>Automatizar sin entender</strong><span>Repetir errores rápido sigue siendo repetir errores.</span></div>
  </div>
</div>

---

<div class="slide">
  <h1>Resumen de la sesión</h1>
  <div class="summary">
    <div><strong>Automatizar permite repetir infraestructura con menos errores manuales.</strong></div>
    <div><strong>AWS CLI sirve para operar AWS desde comandos y scripts.</strong></div>
    <div><strong>Los SDKs conectan aplicaciones con servicios AWS desde código.</strong></div>
    <div><strong>CloudFormation y Terraform permiten declarar infraestructura en archivos.</strong></div>
    <div><strong>Antes de aplicar cambios, valida identidad, región, permisos y limpieza.</strong></div>
  </div>
</div>
