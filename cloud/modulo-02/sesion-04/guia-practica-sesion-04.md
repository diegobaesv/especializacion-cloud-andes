# Guía práctica - Módulo 2, Sesión 4: Distribución de contenido con CloudFront

## Objetivo práctico

Crear una distribución CloudFront para entregar contenido desde S3, conectar dominio y certificado, configurar caché básica, probar invalidaciones y revisar problemas comunes.

## Antes de empezar

- Tener un bucket S3 privado con al menos un `index.html`.
- Tener un certificado ACM emitido en `us-east-1` si usarás dominio propio.
- Tener una hosted zone en Route 53 si conectarás dominio.
- Tener permisos para CloudFront, S3, ACM y Route 53.
- Tener AWS CLI configurado si usarás el archivo de invalidación.

## Paso 1: Preparar el origen S3

1. Abre Amazon S3.
2. Entra al bucket creado en la sesión 3.
3. Sube o confirma que existe `index.html`.
4. Mantén Block Public Access activado.
5. No hagas público el bucket para esta práctica.

## Paso 2: Crear distribución CloudFront

1. Abre CloudFront.
2. Elige Create distribution.
3. En Origin domain, selecciona el bucket S3.
4. Configura Origin access con Origin Access Control si está disponible.
5. Permite que CloudFront actualice la bucket policy o copia la política sugerida.
6. En Default root object, escribe `index.html`.
7. En Viewer protocol policy, selecciona Redirect HTTP to HTTPS.
8. Crea la distribución.

## Paso 3: Esperar despliegue

1. Revisa el estado de la distribución.
2. Espera hasta que indique Deployed.
3. Copia el dominio técnico de CloudFront, por ejemplo `dxxxxx.cloudfront.net`.
4. Abre ese dominio en el navegador.
5. Confirma que carga `index.html`.

## Paso 4: Asociar certificado y dominio propio

Si usarás dominio propio:

1. Abre la distribución CloudFront.
2. En Settings, agrega Alternate domain name, por ejemplo `cdn.example.com`.
3. Selecciona el certificado ACM emitido en `us-east-1`.
4. Guarda cambios.
5. Espera el despliegue.

## Paso 5: Crear alias en Route 53

1. Abre Route 53.
2. Entra a la hosted zone del dominio.
3. Crea un registro para el subdominio, por ejemplo `cdn.example.com`.
4. Activa Alias.
5. Selecciona la distribución CloudFront.
6. Guarda el registro.
7. Prueba `https://cdn.example.com`.

## Paso 6: Revisar caché

1. Modifica `index.html`.
2. Sube el archivo actualizado al bucket.
3. Abre el dominio CloudFront.
4. Si ves contenido antiguo, identifica que puede estar en caché.
5. Revisa los headers desde el navegador o con:

```bash
curl -I https://cdn.example.com
```

## Paso 7: Crear invalidación

Desde consola:

1. Abre la distribución.
2. Entra a Invalidations.
3. Crea una invalidación para `/index.html`.
4. Espera a que finalice.
5. Vuelve a probar el navegador.

Desde CLI:

1. Abre `04-cloudfront-invalidation.sh`.
2. Reemplaza `DISTRIBUTION_ID` por el ID real.
3. Ajusta las rutas si es necesario.
4. Ejecuta el script.

## Paso 8: Revisar errores frecuentes

Si ves 403:

1. Revisa permisos entre CloudFront y S3.
2. Confirma que OAC está configurado.
3. Revisa la bucket policy.

Si ves 404:

1. Confirma que `index.html` existe.
2. Revisa Default root object.
3. Revisa que el path solicitado exista.

Si el dominio no resuelve:

1. Revisa el alias en Route 53.
2. Confirma que el dominio alternativo está agregado en CloudFront.
3. Revisa propagación DNS.

Si HTTPS falla:

1. Confirma que el certificado está en `us-east-1`.
2. Confirma que cubre el dominio exacto.
3. Espera a que CloudFront termine el despliegue.

## Paso 9: Monitoreo básico

1. Abre la distribución.
2. Revisa métricas de requests.
3. Revisa errores 4xx y 5xx.
4. Observa bytes descargados.
5. Si está habilitado, revisa logs para analizar rutas y códigos.

## Paso 10: Limpieza o conservación

Si la distribución no se usará:

1. Deshabilita la distribución.
2. Espera el despliegue del estado disabled.
3. Elimina la distribución.
4. Elimina registros DNS de prueba.
5. Vacía y elimina el bucket si ya no se usará.

Si la distribución continuará:

1. Documenta dominio, bucket origen y certificado.
2. Mantén el bucket privado.
3. Define estrategia de caché e invalidaciones para despliegues.
4. Conserva tags y presupuesto activo.

## Checklist de cierre

- CloudFront carga contenido desde S3.
- El bucket no quedó público.
- El dominio propio apunta a CloudFront si se configuró.
- HTTPS funciona con certificado válido.
- Se probó invalidación de contenido.
- Se revisaron métricas o errores básicos.

## Referencias oficiales

- Amazon CloudFront Developer Guide: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html
- Crear distribución: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html
- Usar HTTPS con CloudFront: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html
- Alternate domain names y HTTPS: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html
- Restringir acceso a origen S3: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html
- Invalidar archivos: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html

