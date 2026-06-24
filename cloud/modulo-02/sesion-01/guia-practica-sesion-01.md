# Guía práctica - Módulo 2, Sesión 1: Configuración de Route 53

## Objetivo práctico

Entender cómo un dominio llega a un recurso en AWS, crear o revisar una zona hospedada en Route 53 y practicar registros DNS básicos sin perder de vista costos y propagación.

## Antes de empezar

- Tener acceso a la cuenta AWS de laboratorio.
- Tener permisos para Route 53.
- Tener claro si se usará un dominio propio, un dominio de prueba o solo revisión conceptual.
- Recordar que registrar dominios y usar hosted zones puede generar costos.
- Usar nombres de laboratorio, por ejemplo `dev`, `test` o `m2s1`.

## Paso 1: Revisar si usarás un dominio real

1. Define si el dominio está registrado en Route 53 o en otro proveedor.
2. Si el dominio está en otro proveedor, identifica dónde se administran los name servers.
3. Si no tienes dominio, realiza la práctica de lectura y simulación sin registrar uno nuevo.
4. Si vas a comprar un dominio, revisa precio, renovación y datos de contacto antes de confirmar.

## Paso 2: Abrir Route 53

1. Entra a la consola de AWS.
2. Busca `Route 53`.
3. Revisa el menú lateral:
   - Hosted zones
   - Registered domains
   - Health checks
4. Entra a Hosted zones.

## Paso 3: Crear o revisar una hosted zone

Si ya existe una zona:

1. Abre la zona del dominio.
2. Revisa los registros `NS` y `SOA`.
3. Confirma que los name servers coinciden con el proveedor donde apunta el dominio.

Si crearás una zona nueva:

1. Elige Create hosted zone.
2. Ingresa el dominio, por ejemplo `example.com`.
3. Selecciona Public hosted zone.
4. Crea la zona.
5. Copia los name servers asignados.
6. Configura esos name servers en el registrador del dominio si corresponde.

## Paso 4: Crear un registro de prueba

1. Dentro de la hosted zone, elige Create record.
2. Usa un subdominio de prueba, por ejemplo `test.example.com`.
3. Selecciona tipo `A` si tienes una IP IPv4 de prueba.
4. Si no tienes IP real, revisa el flujo sin guardar el registro.
5. Define un TTL bajo para pruebas, por ejemplo `60` o `300` segundos.
6. Guarda el registro solo si tienes un destino válido.

## Paso 5: Crear un registro CNAME de prueba

1. Elige Create record.
2. Usa un nombre como `www.example.com`.
3. Selecciona tipo `CNAME`.
4. Apunta hacia otro nombre, por ejemplo el dominio técnico de un servicio.
5. Guarda el registro.

No uses CNAME en el dominio raíz si necesitas apuntar a recursos AWS compatibles con alias.

## Paso 6: Revisar alias hacia servicios AWS

1. Elige Create record.
2. Activa Alias.
3. Revisa los servicios disponibles como destino:
   - CloudFront
   - Elastic Load Balancer
   - S3 website endpoint
4. Observa que Route 53 permite seleccionar destinos AWS sin copiar una IP manualmente.
5. Si todavía no tienes el destino creado, no guardes el registro.

## Paso 7: Validar resolución DNS

Usa una terminal o herramienta web para revisar DNS.

Ejemplos:

```bash
nslookup test.example.com
nslookup -type=NS example.com
nslookup -type=CNAME www.example.com
```

También puedes usar:

```bash
dig test.example.com
dig NS example.com
```

Si `dig` no está instalado, usa `nslookup` o una herramienta web de DNS.

## Paso 8: Revisar propagación y TTL

1. Cambia un registro de prueba.
2. Espera el tiempo definido por el TTL.
3. Vuelve a consultar con `nslookup` o `dig`.
4. Observa que algunas redes pueden conservar respuestas por más tiempo.
5. Documenta qué cambiaste y a qué hora.

## Paso 9: Limpiar registros de prueba

1. Elimina registros que no usarás.
2. Conserva los registros `NS` y `SOA` creados por la zona.
3. Si creaste una hosted zone solo para práctica y no la usarás, elimínala para evitar costos recurrentes.
4. No elimines una hosted zone de un dominio en uso sin confirmar qué servicios dependen de ella.

## Checklist de cierre

- Identificaste dónde se administra DNS del dominio.
- Entendiste la diferencia entre dominio, hosted zone y registro.
- Reconociste registros A, CNAME, TXT, MX, NS y alias.
- Validaste DNS con una herramienta externa a la consola.
- Eliminaste registros o zonas de prueba que no se usarán.

## Referencias oficiales

- Route 53 Developer Guide: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html
- Hosted zones: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-working-with.html
- Choosing routing policy: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html
- Alias records: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html

