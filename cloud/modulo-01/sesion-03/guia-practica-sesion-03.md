# Guía práctica - Sesión 3: Automatización y scripting

## Objetivo práctico

Configurar AWS CLI, validar la identidad activa y ejecutar un flujo pequeño de automatización con CLI, CloudFormation y Terraform.

## Antes de empezar

- Tener un usuario IAM de laboratorio creado en la sesión 2.
- Tener permisos administrativos para laboratorio.
- Tener AWS CLI instalado.
- Tener Terraform instalado si se realizará la parte de Terraform.
- Usar la región `us-east-1`.
- No usar credenciales del root user.

## Paso 1: Crear access key para el usuario de laboratorio

1. Entra a la consola con el usuario administrativo del curso.
2. Abre IAM.
3. Entra al usuario `curso-admin`.
4. Abre la pestaña de credenciales de seguridad.
5. Crea una access key para uso con CLI local.
6. Copia el Access key ID y Secret access key en un lugar temporal seguro.
7. No subas estas credenciales a GitHub ni las pegues en archivos del proyecto.

## Paso 2: Configurar perfil de AWS CLI

Ejecuta:

```bash
aws configure --profile curso-cloud
```

Completa:

- AWS Access Key ID
- AWS Secret Access Key
- Default region name: `us-east-1`
- Default output format: `json`

## Paso 3: Validar identidad

Ejecuta:

```bash
aws sts get-caller-identity --profile curso-cloud
```

Verifica:

- Que aparece el Account correcto.
- Que el ARN corresponde al usuario de laboratorio.
- Que no estás usando root.

## Paso 4: Probar comandos de lectura

Ejecuta:

```bash
aws configure list --profile curso-cloud
aws s3 ls --profile curso-cloud --region us-east-1
aws ec2 describe-regions --profile curso-cloud --output table
```

El objetivo es confirmar que la terminal puede consultar AWS antes de crear recursos.

## Paso 5: Crear y limpiar un bucket con AWS CLI

Elige un nombre globalmente único para el bucket. En los comandos siguientes reemplaza `curso-cloud-demo-tu-nombre-20260619` por un nombre propio.

Crea el bucket:

```bash
aws s3 mb s3://curso-cloud-demo-tu-nombre-20260619 --profile curso-cloud --region us-east-1
```

Crea un archivo local simple:

```bash
echo "Hola AWS CLI" > index.html
```

Sube el archivo:

```bash
aws s3 cp index.html s3://curso-cloud-demo-tu-nombre-20260619/index.html --profile curso-cloud --region us-east-1
```

Lista el contenido:

```bash
aws s3 ls s3://curso-cloud-demo-tu-nombre-20260619 --profile curso-cloud --region us-east-1
```

Limpia el laboratorio:

```bash
aws s3 rm s3://curso-cloud-demo-tu-nombre-20260619/index.html --profile curso-cloud --region us-east-1
aws s3 rb s3://curso-cloud-demo-tu-nombre-20260619 --profile curso-cloud --region us-east-1
```

El archivo de apoyo `03-aws-cli-ejemplos.sh` contiene una versión resumida de estos comandos.

## Paso 6: Crear un stack con CloudFormation

Usa la plantilla `03-cloudformation-s3-bucket.yaml`.

Define un nombre único para el bucket. En el ejemplo se usa `curso-cloud-cfn-tu-nombre-20260619`.

Crea el stack:

```bash
aws cloudformation create-stack --stack-name curso-cloud-s3-demo --template-body file://03-cloudformation-s3-bucket.yaml --parameters ParameterKey=BucketName,ParameterValue=curso-cloud-cfn-tu-nombre-20260619 --profile curso-cloud --region us-east-1
```

Consulta el estado:

```bash
aws cloudformation describe-stacks --stack-name curso-cloud-s3-demo --profile curso-cloud --region us-east-1
```

Elimina el stack:

```bash
aws cloudformation delete-stack --stack-name curso-cloud-s3-demo --profile curso-cloud --region us-east-1
```

## Paso 7: Ejecutar el ejemplo con Terraform

Usa el archivo `03-terraform-s3-bucket.tf`.

Inicializa Terraform:

```bash
terraform init
```

Revisa formato:

```bash
terraform fmt
```

Genera un plan:

```bash
terraform plan -var="bucket_name=curso-cloud-tf-tu-nombre-20260619"
```

Aplica cambios:

```bash
terraform apply -var="bucket_name=curso-cloud-tf-tu-nombre-20260619"
```

Cuando termine la práctica, elimina lo creado:

```bash
terraform destroy -var="bucket_name=curso-cloud-tf-tu-nombre-20260619"
```

## Paso 8: Cierre de seguridad

1. Revisa que no quedaron buckets creados.
2. Revisa que no quedaron stacks activos.
3. Revisa que no quedaron archivos con credenciales.
4. Si la access key fue temporal para clase, desactívala o elimínala al finalizar.
5. Conserva solo perfiles y credenciales necesarias para continuar el curso.

## Referencias oficiales

- Configuración de AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
- Comandos S3 en AWS CLI: https://docs.aws.amazon.com/cli/latest/reference/s3/
- Crear stacks con CloudFormation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-stack.html
- Terraform AWS Provider: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
- Terraform providers: https://developer.hashicorp.com/terraform/language/providers
