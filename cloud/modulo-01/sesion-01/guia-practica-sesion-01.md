# Guía práctica - Sesión 1: Conceptos básicos de AWS

## Objetivo práctico

Crear o revisar una cuenta AWS de laboratorio, proteger el acceso inicial y reconocer las primeras zonas de la consola sin crear recursos innecesarios.

## Antes de empezar

- Tener un correo disponible para la cuenta AWS.
- Tener acceso a un teléfono para verificación.
- Tener un método de pago válido para el registro.
- Instalar una aplicación de MFA, por ejemplo Google Authenticator, Microsoft Authenticator, Authy o similar.
- Usar un gestor de contraseñas o una contraseña robusta y única.

## Paso 1: Crear la cuenta AWS

1. Ingresa a `https://portal.aws.amazon.com/billing/signup`.
2. Registra el correo que será el usuario root de la cuenta.
3. Define un nombre de cuenta reconocible, por ejemplo `curso-cloud-nombre-apellido`.
4. Completa la información de contacto.
5. Registra el método de pago solicitado por AWS.
6. Completa la verificación de identidad.
7. Elige el plan de soporte básico si la cuenta será usada para aprendizaje.
8. Espera la confirmación de creación de la cuenta.

## Paso 2: Entrar como root solo para configuración inicial

1. Ingresa a `https://console.aws.amazon.com/`.
2. Elige acceso como usuario root.
3. Usa el correo registrado y la contraseña de la cuenta.
4. Verifica que estás dentro de la cuenta correcta revisando el menú superior derecho.

## Paso 3: Activar MFA para root

1. En el menú superior derecho, entra a las opciones de seguridad de la cuenta.
2. Busca la sección de credenciales de seguridad.
3. En Multi-factor authentication, elige asignar un dispositivo MFA.
4. Selecciona aplicación autenticadora.
5. Escanea el código QR con la aplicación MFA.
6. Ingresa los códigos solicitados para confirmar la activación.
7. Guarda los mecanismos de recuperación de la cuenta en un lugar seguro.

## Paso 4: Reconocer la consola de AWS

1. Observa la barra superior de la consola.
2. Ubica el buscador de servicios.
3. Cambia la región a `us-east-1` para usarla como región de laboratorio inicial.
4. Busca estos servicios sin crear recursos todavía:
   - IAM
   - S3
   - EC2
   - RDS
   - CloudWatch
   - Billing and Cost Management
5. Identifica si cada servicio muestra recursos globales o recursos por región.

## Paso 5: Entender cuenta, región y recurso

1. Abre EC2 y revisa la región seleccionada.
2. Cambia a otra región y observa que la vista cambia.
3. Vuelve a `us-east-1`.
4. Abre S3 y observa que los buckets tienen nombres globalmente únicos.
5. Abre IAM y observa que no depende de una región específica.

## Paso 6: Preparar una convención de trabajo

Usa esta convención durante el curso:

- Región principal: `us-east-1`
- Prefijo de recursos: `curso-cloud`
- Ambiente: `laboratorio`
- Responsable: tu nombre o usuario
- Fecha de limpieza: fecha estimada de fin del laboratorio

## Checklist de cierre

- La cuenta AWS fue creada o validada.
- El root user tiene MFA activo.
- Se identificó la región principal de trabajo.
- Se reconocieron los servicios base en la consola.
- No quedaron recursos creados durante esta sesión.

## Referencias oficiales

- Crear una cuenta AWS: https://portal.aws.amazon.com/billing/signup
- Root user de AWS: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html
- Buenas prácticas de seguridad en IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

