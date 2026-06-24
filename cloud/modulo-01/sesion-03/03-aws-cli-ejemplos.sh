#!/usr/bin/env bash

# Ejemplos de lectura para la sesión 3.
# Reemplaza los nombres de bucket/perfil/región antes de ejecutar.

aws --version

aws configure list

aws sts get-caller-identity \
  --profile curso-cloud

aws s3 ls \
  --profile curso-cloud \
  --region us-east-1

aws s3 mb s3://mi-bucket-demo-clase-aws \
  --profile curso-cloud \
  --region us-east-1

aws s3 cp ./index.html s3://mi-bucket-demo-clase-aws/index.html \
  --profile curso-cloud \
  --region us-east-1

aws s3 rm s3://mi-bucket-demo-clase-aws/index.html \
  --profile curso-cloud \
  --region us-east-1

aws s3 rb s3://mi-bucket-demo-clase-aws \
  --profile curso-cloud \
  --region us-east-1
