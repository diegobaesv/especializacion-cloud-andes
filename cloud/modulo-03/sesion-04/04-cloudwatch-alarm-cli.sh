#!/usr/bin/env bash

# Reemplaza INSTANCE_ID y SNS_TOPIC_ARN antes de ejecutar.
# Ejemplo de alarma básica de CPU para una instancia EC2.

aws cloudwatch put-metric-alarm \
  --alarm-name "curso-cloud-cpu-alta" \
  --alarm-description "CPU alta sostenida en laboratorio" \
  --metric-name CPUUtilization \
  --namespace AWS/EC2 \
  --statistic Average \
  --period 300 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold \
  --dimensions Name=InstanceId,Value=INSTANCE_ID \
  --evaluation-periods 2 \
  --alarm-actions SNS_TOPIC_ARN \
  --profile curso-cloud \
  --region us-east-1

