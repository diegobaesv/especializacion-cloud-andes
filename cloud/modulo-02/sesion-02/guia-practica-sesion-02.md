# Guía práctica - Módulo 2, Sesión 2: Certificados SSL con ACM

## Objetivo práctico

Solicitar un certificado público en AWS Certificate Manager, validarlo por DNS y dejarlo listo para servicios como CloudFront o un balanceador de carga.

## Antes de empezar

- Tener acceso a la cuenta AWS de laboratorio.
- Tener un dominio o subdominio disponible para validar.
- Tener acceso a la hosted zone de Route 53 o al proveedor DNS externo.
- Para CloudFront, trabajar en la región `us-east-1`.
- No eliminar registros DNS de validación después de emitir el certificado.

## Paso 1: Abrir ACM en la región correcta

1. Entra a la consola de AWS.
2. Cambia la región a `us-east-1` si el certificado será usado con CloudFront.
3. Busca `Certificate Manager`.
4. Entra a AWS Certificate Manager.

## Paso 2: Solicitar certificado público

1. Elige Request certificate.
2. Selecciona Public certificate.
3. Ingresa el dominio principal, por ejemplo `example.com`.
4. Agrega subdominios necesarios:
   - `www.example.com`
   - `app.example.com`
   - `*.example.com` si se usará wildcard
5. Continúa con la solicitud.

## Paso 3: Elegir validación DNS

1. Selecciona DNS validation.
2. Revisa los registros CNAME que ACM solicita crear.
3. Si el dominio está en Route 53, usa la opción para crear los registros automáticamente.
4. Si el dominio está en otro proveedor, copia nombre y valor del CNAME.
5. Crea esos registros en el proveedor DNS externo.

## Paso 4: Esperar validación

1. Revisa el estado del certificado.
2. Debe pasar de Pending validation a Issued.
3. Si no cambia, revisa:
   - Que el registro CNAME esté en la zona correcta.
   - Que el nombre esté escrito completo.
   - Que no falte el subdominio.
   - Que el proveedor DNS no haya duplicado el dominio al final.

## Paso 5: Revisar dominios cubiertos

1. Abre el certificado emitido.
2. Revisa la lista de nombres incluidos.
3. Confirma que cubre el dominio que usarás en el navegador.
4. Si falta `www` o un subdominio, solicita un nuevo certificado o agrega el nombre según corresponda.

## Paso 6: Asociar el certificado a un servicio

Para CloudFront:

1. Abre o crea una distribución CloudFront.
2. En Alternate domain name, agrega el dominio.
3. Selecciona el certificado ACM emitido en `us-east-1`.
4. Configura viewer protocol policy para redirigir HTTP a HTTPS.
5. Guarda cambios y espera despliegue.

Para Application Load Balancer:

1. Abre EC2.
2. Entra a Load Balancers.
3. Revisa el listener HTTPS.
4. Asocia el certificado ACM correspondiente.
5. Guarda cambios.

## Paso 7: Probar en navegador

1. Abre `https://tu-dominio`.
2. Revisa que el navegador muestre conexión segura.
3. Abre el detalle del certificado.
4. Confirma:
   - Dominio cubierto.
   - Autoridad emisora.
   - Fecha de expiración.
   - Cadena de confianza válida.

## Paso 8: Mantener renovación administrada

1. Conserva los registros DNS de validación.
2. No elimines la hosted zone donde vive la validación.
3. Revisa eventos o alertas si ACM informa problemas.
4. Documenta qué servicio usa cada certificado.

## Checklist de cierre

- El certificado fue solicitado en la región correcta.
- La validación DNS fue creada.
- El estado del certificado es Issued.
- El certificado cubre dominio raíz y subdominios necesarios.
- El certificado está asociado al servicio correcto.
- HTTPS fue probado desde navegador.

## Referencias oficiales

- AWS Certificate Manager User Guide: https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html
- Solicitar un certificado público: https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html
- Validación DNS: https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html
- CloudFront y certificados: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html

