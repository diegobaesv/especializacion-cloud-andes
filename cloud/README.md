# Presentaciones del curso Cloud AWS

Las presentaciones están en formato Marp Markdown (`.md`) y se abren directamente desde VS Code con la extensión **Marp for VS Code**.

## Estructura

- `modulo-01/sesion-01/01-conceptos-basicos-aws.md`: presentación de la sesión 1.
- `modulo-01/sesion-01/guia-practica-sesion-01.md`: guía práctica de la sesión 1.
- `modulo-01/sesion-02/02-configuracion-servicios-base.md`: presentación de la sesión 2.
- `modulo-01/sesion-02/guia-practica-sesion-02.md`: guía práctica de la sesión 2.
- `modulo-01/sesion-03/03-automatizacion-scripting.md`: presentación de la sesión 3.
- `modulo-01/sesion-03/guia-practica-sesion-03.md`: guía práctica de la sesión 3.
- `modulo-01/sesion-03/03-aws-cli-ejemplos.sh`: comandos de apoyo para la sesión 3.
- `modulo-01/sesion-03/03-cloudformation-s3-bucket.yaml`: plantilla de apoyo para la sesión 3.
- `modulo-01/sesion-03/03-terraform-s3-bucket.tf`: ejemplo Terraform de apoyo para la sesión 3.
- `modulo-01/sesion-04/04-mejorando-infraestructura.md`: presentación de la sesión 4.
- `modulo-01/sesion-04/guia-practica-sesion-04.md`: guía práctica de la sesión 4.
- `modulo-01/sesion-04/04-caso-practico-implementacion.md`: caso práctico de apoyo para la sesión 4.
- `modulo-02/sesion-01/01-configuracion-route-53.md`: presentación de la sesión 1 del módulo 2.
- `modulo-02/sesion-01/guia-practica-sesion-01.md`: guía práctica de Route 53.
- `modulo-02/sesion-02/02-certificados-ssl-acm.md`: presentación de la sesión 2 del módulo 2.
- `modulo-02/sesion-02/guia-practica-sesion-02.md`: guía práctica de certificados SSL con ACM.
- `modulo-02/sesion-03/03-almacenamiento-s3.md`: presentación de la sesión 3 del módulo 2.
- `modulo-02/sesion-03/guia-practica-sesion-03.md`: guía práctica de almacenamiento con S3.
- `modulo-02/sesion-03/03-s3-lifecycle-demo.json`: ejemplo de lifecycle para S3.
- `modulo-02/sesion-03/03-s3-cors-demo.json`: ejemplo de CORS para S3.
- `modulo-02/sesion-04/04-distribucion-cloudfront.md`: presentación de la sesión 4 del módulo 2.
- `modulo-02/sesion-04/guia-practica-sesion-04.md`: guía práctica de distribución con CloudFront.
- `modulo-02/sesion-04/04-cloudfront-invalidation.sh`: comando de apoyo para invalidaciones CloudFront.
- `modulo-03/sesion-01/01-despliegue-frontend-aws.md`: presentación de la sesión 1 del módulo 3.
- `modulo-03/sesion-01/guia-practica-sesion-01.md`: guía práctica de despliegue frontend.
- `modulo-03/sesion-01/01-amplify-build-settings.yml`: ejemplo de build settings para Amplify.
- `modulo-03/sesion-02/02-backend-elastic-beanstalk.md`: presentación de la sesión 2 del módulo 3.
- `modulo-03/sesion-02/guia-practica-sesion-02.md`: guía práctica de backend con Elastic Beanstalk.
- `modulo-03/sesion-02/02-beanstalk-node-app.zip-notas.md`: notas para empaquetar una API Node.js.
- `modulo-03/sesion-03/03-bases-datos-rds.md`: presentación de la sesión 3 del módulo 3.
- `modulo-03/sesion-03/guia-practica-sesion-03.md`: guía práctica de bases de datos con RDS.
- `modulo-03/sesion-03/03-rds-security-group-checklist.md`: checklist de seguridad para RDS.
- `modulo-03/sesion-04/04-monitoreo-eventos.md`: presentación de la sesión 4 del módulo 3.
- `modulo-03/sesion-04/guia-practica-sesion-04.md`: guía práctica de monitoreo y eventos.
- `modulo-03/sesion-04/04-cloudwatch-alarm-cli.sh`: comando de apoyo para crear una alarma CloudWatch.
- `recursos/imagenes/`: logos institucionales e imágenes reutilizables del curso.
- `recursos/imagenes/aws-icons/`: íconos oficiales de arquitectura AWS usados en las diapositivas.
- `recursos/estilos/aws-course-v1.css`: estilo compartido por las presentaciones principales nuevas.

## Cómo revisar

1. Abrir el repositorio en VS Code.
2. Instalar o habilitar la extensión **Marp for VS Code**.
3. Abrir el archivo `.md` de la sesión.
4. Usar la vista previa de Marp para presentar o revisar.

No es necesario exportar a PDF ni PPTX para usar el material.

## Fuentes conceptuales base

- AWS Documentation: What is cloud computing? https://docs.aws.amazon.com/whitepapers/latest/aws-overview/what-is-cloud-computing.html
- AWS Documentation: Six advantages of cloud computing. https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html
- AWS Documentation: Types of cloud computing. https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html
- AWS Documentation: Global infrastructure. https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html
- AWS IAM User Guide: Security best practices in IAM. https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
- AWS IAM User Guide: AWS account root user. https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html
- AWS IAM User Guide: IAM users. https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
- AWS IAM User Guide: IAM groups. https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
- AWS IAM User Guide: Policies and permissions. https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
- AWS IAM User Guide: Multi-factor authentication. https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
- AWS Billing and Cost Management User Guide: AWS Budgets. https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html
- AWS Billing and Cost Management User Guide: Cost Explorer. https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html
- AWS CLI User Guide: Configuration and credential file settings. https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
- AWS CLI Command Reference: S3 commands. https://docs.aws.amazon.com/cli/latest/reference/s3/
- AWS CloudFormation User Guide: What is CloudFormation? https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
- AWS CloudFormation User Guide: Creating a stack. https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-stack.html
- Amazon EC2 User Guide: Instance purchasing options. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html
- Amazon CloudWatch User Guide: What is Amazon CloudWatch? https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
- AWS Well-Architected Framework. https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
- HashiCorp Terraform Documentation: Providers. https://developer.hashicorp.com/terraform/language/providers
- Terraform Registry: AWS Provider. https://registry.terraform.io/providers/hashicorp/aws/latest/docs
- Amazon Route 53 Developer Guide: What is Amazon Route 53? https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html
- Amazon Route 53 Developer Guide: Working with hosted zones. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-working-with.html
- Amazon Route 53 Developer Guide: Choosing a routing policy. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html
- Amazon Route 53 Developer Guide: Alias and non-alias records. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html
- AWS Certificate Manager User Guide: What is AWS Certificate Manager? https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html
- AWS Certificate Manager User Guide: Requesting a public certificate. https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html
- AWS Certificate Manager User Guide: DNS validation. https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html
- Amazon S3 User Guide: What is Amazon S3? https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html
- Amazon S3 User Guide: Bucket overview. https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html
- Amazon S3 User Guide: Versioning. https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html
- Amazon S3 User Guide: Lifecycle configuration. https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
- Amazon S3 User Guide: Block Public Access. https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html
- Amazon S3 User Guide: CORS. https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html
- Amazon CloudFront Developer Guide: What is Amazon CloudFront? https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html
- Amazon CloudFront Developer Guide: Getting started. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html
- Amazon CloudFront Developer Guide: Using HTTPS. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html
- Amazon CloudFront Developer Guide: Alternate domain names and HTTPS. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html
- Amazon CloudFront Developer Guide: Restrict access to an Amazon S3 origin. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html
- Amazon CloudFront Developer Guide: Invalidating files. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html
- AWS Amplify Hosting User Guide: What is Amplify Hosting? https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
- AWS Amplify Hosting User Guide: Build settings. https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html
- AWS Amplify Hosting User Guide: Custom domains. https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html
- AWS Elastic Beanstalk Developer Guide: What is Elastic Beanstalk? https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html
- AWS Elastic Beanstalk Developer Guide: Getting started. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html
- AWS Elastic Beanstalk Developer Guide: Platforms. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html
- AWS Elastic Beanstalk Developer Guide: Software settings. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html
- AWS Elastic Beanstalk Developer Guide: Logs. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html
- Amazon RDS User Guide: What is Amazon RDS? https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html
- Amazon RDS User Guide: Creating a DB instance. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html
- Amazon RDS User Guide: Security in Amazon RDS. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html
- Amazon RDS User Guide: Automated backups. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
- Amazon RDS User Guide: Monitoring. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Monitoring.html
- Amazon CloudWatch Logs User Guide: What is CloudWatch Logs? https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html
- Amazon CloudWatch User Guide: Creating alarms. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html
- AWS X-Ray Developer Guide: What is AWS X-Ray? https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html
- Amazon EventBridge User Guide: What is Amazon EventBridge? https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html
