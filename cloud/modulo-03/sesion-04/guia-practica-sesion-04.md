# Guía práctica - Módulo 3, Sesión 4: Monitoreo y gestión de eventos

## Objetivo práctico

Revisar métricas, logs y alarmas con CloudWatch, entender trazabilidad con X-Ray y diseñar una respuesta automática simple con EventBridge.

## Antes de empezar

- Tener algún recurso desplegado: Beanstalk, EC2, RDS, Lambda o similar.
- Tener permisos para CloudWatch, X-Ray, EventBridge y SNS si se usarán notificaciones.
- Tener presupuesto activo.
- Tener claro qué recurso se usará para la práctica.

## Paso 1: Revisar métricas en CloudWatch

1. Abre CloudWatch.
2. Entra a Metrics.
3. Busca métricas del servicio disponible:
   - EC2
   - Elastic Beanstalk
   - RDS
   - CloudFront
4. Revisa CPU, errores, requests, conexiones o almacenamiento según el servicio.
5. Identifica una métrica candidata para alarma.

## Paso 2: Revisar logs

1. En CloudWatch, entra a Log groups.
2. Busca logs del recurso desplegado.
3. Abre el log stream más reciente.
4. Busca errores o eventos de arranque.
5. Revisa si los logs tienen fecha, nivel y contexto suficiente.

## Paso 3: Crear alarma desde consola

1. En CloudWatch, entra a Alarms.
2. Elige Create alarm.
3. Selecciona una métrica.
4. Define umbral.
5. Define periodo y cantidad de evaluaciones.
6. Configura notificación con SNS si corresponde.
7. Nombra la alarma de forma clara.

## Paso 4: Crear alarma por CLI

Usa `04-cloudwatch-alarm-cli.sh` como referencia.

1. Reemplaza `INSTANCE_ID`.
2. Reemplaza `SNS_TOPIC_ARN`.
3. Ajusta región y perfil si corresponde.
4. Ejecuta el comando.
5. Revisa que la alarma aparezca en CloudWatch.

## Paso 5: Diseñar logs útiles

En una aplicación, procura registrar:

- Ruta o acción.
- Código de estado.
- Identificador de solicitud.
- Usuario o contexto no sensible.
- Tiempo de respuesta.
- Error controlado.

Evita registrar:

- Contraseñas.
- Tokens.
- Datos personales innecesarios.
- Secrets de configuración.

## Paso 6: Entender X-Ray

1. Abre AWS X-Ray.
2. Revisa el concepto de traces y service map.
3. Si tu servicio lo soporta, habilita tracing.
4. Genera algunas solicitudes.
5. Observa dónde se consume más tiempo.

Si no hay aplicación instrumentada, usa esta parte como lectura guiada y diseño conceptual.

## Paso 7: Revisar EventBridge

1. Abre Amazon EventBridge.
2. Entra a Rules.
3. Revisa qué fuentes de eventos existen.
4. Crea una regla de ejemplo solo si tienes un objetivo seguro.
5. Posibles objetivos:
   - SNS para notificación.
   - Lambda para acción controlada.
   - CloudWatch Logs para registrar evento.

## Paso 8: Diseñar una respuesta automática

Ejemplos de diseño:

- Si una alarma entra en estado ALARM, enviar notificación.
- Si una instancia cambia de estado, registrar evento.
- Si una tarea programada se ejecuta, invocar Lambda.
- Si ocurre un error crítico, crear una señal operativa.

La automatización debe ser simple, reversible y fácil de auditar.

## Paso 9: Ajustar retención de logs

1. Abre un Log group.
2. Revisa retention setting.
3. Define retención razonable para laboratorio.
4. Evita guardar logs indefinidamente si no hay necesidad.
5. Documenta la decisión.

## Paso 10: Limpieza

1. Elimina alarmas de laboratorio que no se usarán.
2. Elimina reglas EventBridge de prueba.
3. Elimina topics SNS de prueba si no se usarán.
4. Ajusta retención de logs.
5. Revisa que no quedaron recursos de práctica activos.

## Checklist de cierre

- Métricas revisadas.
- Logs consultados.
- Alarma creada o diseñada.
- Se entendió cuándo usar X-Ray.
- Se diseñó una regla EventBridge.
- Retención de logs revisada.
- Recursos de prueba limpiados.

## Referencias oficiales

- Amazon CloudWatch User Guide: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
- CloudWatch Logs: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html
- CloudWatch alarms: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html
- AWS X-Ray Developer Guide: https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html
- Amazon EventBridge User Guide: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html

