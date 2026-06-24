# Guía práctica - Módulo 3, Sesión 1: Despliegue de frontend en AWS

## Objetivo práctico

Publicar una aplicación frontend en AWS, validar su build, conectarla a un flujo de despliegue continuo y dejar preparada la conexión con dominio, HTTPS y CDN.

## Antes de empezar

- Tener una cuenta AWS de laboratorio.
- Tener un repositorio Git con una aplicación frontend simple.
- Tener definido el comando de instalación, por ejemplo `npm ci`.
- Tener definido el comando de build, por ejemplo `npm run build`.
- Saber cuál es la carpeta de salida: `dist`, `build`, `out` u otra.
- Tener dominio y certificado si se conectará un dominio propio.

## Paso 1: Validar build local

1. Abre el proyecto frontend.
2. Instala dependencias:

```bash
npm ci
```

3. Ejecuta el build:

```bash
npm run build
```

4. Confirma que se genera la carpeta de salida.
5. Revisa que no existan errores de variables o rutas.

## Paso 2: Identificar variables públicas

1. Revisa qué variables necesita la aplicación.
2. Identifica la URL del backend o API.
3. Confirma que no hay secretos dentro del frontend.
4. Documenta variables públicas como:
   - `VITE_API_URL`
   - `NEXT_PUBLIC_API_URL`
   - `REACT_APP_API_URL`

El nombre exacto depende del framework usado.

## Paso 3: Crear aplicación en Amplify Hosting

1. Abre AWS Amplify.
2. Entra a Hosting.
3. Selecciona la opción para conectar repositorio Git.
4. Autoriza el proveedor del repositorio si AWS lo solicita.
5. Selecciona repositorio y rama.
6. Revisa los build settings detectados.
7. Si es necesario, usa como referencia `01-amplify-build-settings.yml`.
8. Agrega variables públicas de entorno.
9. Crea la aplicación.

## Paso 4: Esperar primer despliegue

1. Revisa las fases del build.
2. Confirma que instalación, build y deploy terminan correctamente.
3. Abre la URL temporal generada por Amplify.
4. Valida:
   - Carga inicial.
   - Navegación entre rutas.
   - Assets visibles.
   - Llamadas a la API si aplica.

## Paso 5: Revisar rutas SPA

Si el frontend usa rutas internas:

1. Abre una ruta distinta a la raíz, por ejemplo `/dashboard`.
2. Refresca el navegador.
3. Si aparece 404, revisa reglas de rewrite/redirect.
4. Configura una regla para enviar rutas internas a `index.html`.

## Paso 6: Conectar dominio propio

1. En Amplify, entra a Domain management.
2. Agrega el dominio o subdominio.
3. Selecciona la rama que se publicará.
4. Si el dominio está en Route 53, permite que AWS cree los registros.
5. Si el dominio está fuera de AWS, copia los registros DNS indicados.
6. Espera la validación y propagación.
7. Abre la URL final con HTTPS.

## Paso 7: Alternativa S3 + CloudFront

Si no usarás Amplify:

1. Ejecuta build local.
2. Sube la carpeta de salida a S3.
3. Mantén S3 privado cuando se distribuya por CloudFront.
4. Crea o usa una distribución CloudFront.
5. Configura dominio y certificado.
6. Invalida `index.html` cuando publiques una nueva versión.

## Paso 8: Probar cambio automático

1. Realiza un cambio pequeño en el frontend.
2. Haz commit y push a la rama conectada.
3. Observa si Amplify dispara un nuevo build.
4. Abre la URL publicada.
5. Confirma que el cambio aparece.

## Paso 9: Limpieza o conservación

Si el despliegue es temporal:

1. Desconecta dominio si fue de prueba.
2. Elimina la app de Amplify si no se usará.
3. Elimina buckets o distribuciones creadas solo para laboratorio.
4. Revisa costos después de cerrar.

Si continuará:

1. Documenta URL temporal, dominio final y rama conectada.
2. Documenta variables públicas.
3. Define quién puede desplegar.
4. Mantén el presupuesto activo.

## Checklist de cierre

- El frontend compila localmente.
- La carpeta de salida está identificada.
- Amplify publica la aplicación.
- Las variables públicas están configuradas.
- No hay secretos en el frontend.
- Rutas internas funcionan al refrescar.
- Dominio y HTTPS funcionan si fueron configurados.

## Referencias oficiales

- AWS Amplify Hosting: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
- Build settings de Amplify: https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html
- Dominios personalizados en Amplify: https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html
- Amazon S3 User Guide: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html
- Amazon CloudFront Developer Guide: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html

