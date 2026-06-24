# Guía práctica - Módulo 2, Sesión 3: Almacenamiento con S3

## Objetivo práctico

Crear un bucket S3 privado, subir objetos, activar versionado, configurar lifecycle y revisar permisos básicos para integrarlo luego con CloudFront o una aplicación.

## Antes de empezar

- Tener acceso a la cuenta AWS de laboratorio.
- Tener permisos para S3.
- Usar la región `us-east-1` salvo que el proyecto indique otra.
- Tener AWS CLI configurado con el perfil `curso-cloud` si se harán pruebas por terminal.
- Definir un nombre único para el bucket.

## Paso 1: Crear bucket privado

1. Abre Amazon S3.
2. Elige Create bucket.
3. Usa un nombre globalmente único, por ejemplo `curso-cloud-s3-tu-nombre-20260619`.
4. Selecciona región `us-east-1`.
5. Mantén Block all public access activado.
6. Agrega tags:
   - `Proyecto = curso-cloud`
   - `Ambiente = laboratorio`
   - `Sesion = modulo-02-sesion-03`
   - `Responsable = tu-nombre`
7. Crea el bucket.

## Paso 2: Subir objetos

1. Abre el bucket.
2. Elige Upload.
3. Sube un archivo `index.html` o una imagen de prueba.
4. Revisa el objeto cargado.
5. Copia su key.
6. Observa que no puedes abrirlo públicamente si el bucket sigue privado.

## Paso 3: Probar con AWS CLI

Reemplaza el nombre del bucket por el tuyo:

```bash
aws s3 ls s3://curso-cloud-s3-tu-nombre-20260619 --profile curso-cloud --region us-east-1
```

Sube un archivo:

```bash
aws s3 cp index.html s3://curso-cloud-s3-tu-nombre-20260619/index.html --profile curso-cloud --region us-east-1
```

Descarga el archivo:

```bash
aws s3 cp s3://curso-cloud-s3-tu-nombre-20260619/index.html ./descargado-index.html --profile curso-cloud --region us-east-1
```

## Paso 4: Activar versionado

1. Entra al bucket.
2. Abre Properties.
3. Busca Bucket Versioning.
4. Activa versioning.
5. Sube nuevamente un archivo con el mismo nombre.
6. En la vista de objetos, activa Show versions.
7. Observa las versiones disponibles.

## Paso 5: Probar recuperación de versión

1. Sube una versión modificada del mismo archivo.
2. Revisa las versiones.
3. Descarga una versión anterior.
4. Comprueba que puedes recuperar contenido previo.

## Paso 6: Configurar lifecycle

Usa el archivo `03-s3-lifecycle-demo.json` como referencia conceptual.

Desde consola:

1. Abre Management dentro del bucket.
2. Crea una lifecycle rule.
3. Usa un prefijo como `logs/`.
4. Configura transición a Standard-IA después de 30 días.
5. Configura transición a Glacier Instant Retrieval después de 90 días.
6. Configura expiración después de 365 días.
7. Guarda la regla.

Desde CLI, la estructura del JSON de apoyo puede aplicarse con:

```bash
aws s3api put-bucket-lifecycle-configuration --bucket curso-cloud-s3-tu-nombre-20260619 --lifecycle-configuration file://03-s3-lifecycle-demo.json --profile curso-cloud
```

## Paso 7: Revisar CORS

Usa `03-s3-cors-demo.json` como ejemplo de CORS restringido.

1. Abre Permissions.
2. Busca Cross-origin resource sharing.
3. Pega el contenido del archivo de apoyo.
4. Cambia `https://app.example.com` por el dominio real de tu frontend.
5. Guarda.

No uses `*` como origen en producción si ya conoces el dominio de tu aplicación.

## Paso 8: Revisar cifrado y acceso público

1. En Properties, revisa Default encryption.
2. Confirma que el bucket tiene cifrado por defecto.
3. En Permissions, confirma que Block Public Access sigue activo.
4. Revisa si existe bucket policy.
5. Evita ACLs salvo que exista una razón clara.

## Paso 9: Limpieza del laboratorio

1. Elimina objetos de prueba.
2. Elimina versiones si ya no se necesitan.
3. Elimina reglas CORS de prueba si no se usarán.
4. Si el bucket no se usará en la siguiente sesión, vacíalo y elimínalo.
5. Si se usará con CloudFront, conserva el bucket privado y documenta su nombre.

## Checklist de cierre

- El bucket fue creado privado.
- Los objetos fueron cargados y leídos por consola o CLI.
- Versionado fue probado.
- Lifecycle fue configurado o revisado.
- CORS fue entendido y restringido.
- No quedó exposición pública accidental.

## Referencias oficiales

- Amazon S3 User Guide: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html
- Crear buckets: https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html
- Versioning: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html
- Lifecycle configuration: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
- Block Public Access: https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html
- CORS en S3: https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html

