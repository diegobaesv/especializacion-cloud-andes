# Guía práctica - Sesión 4: Mejorando la infraestructura

## Objetivo práctico

Tomar decisiones de mejora sobre una infraestructura AWS inicial: costos, capacidad, monitoreo, escalabilidad y preparación para producción.

## Antes de empezar

- Tener acceso a la cuenta de laboratorio.
- Tener presupuesto activo.
- Tener clara la región de trabajo `us-east-1`.
- Tener la guía de tags definida en sesiones anteriores.
- Revisar el archivo `04-caso-practico-implementacion.md`.

## Paso 1: Revisar costos actuales

1. Abre Billing and Cost Management.
2. Entra a Bills o Cost Explorer si está disponible.
3. Identifica si ya existen cargos por servicio.
4. Revisa si los cargos están asociados a EC2, S3, RDS, CloudWatch u otros servicios.
5. Anota qué servicios generan costo aunque no haya usuarios reales.

## Paso 2: Revisar el presupuesto

1. Abre AWS Budgets.
2. Confirma que el presupuesto creado en la sesión 2 está activo.
3. Verifica el monto configurado.
4. Verifica los correos de alerta.
5. Si el presupuesto no existe, créalo antes de continuar.

## Paso 3: Buscar recursos olvidados

Revisa estos servicios en `us-east-1`:

1. EC2: instancias, volúmenes EBS, elastic IPs y snapshots.
2. S3: buckets de laboratorio y archivos cargados.
3. RDS: bases de datos activas, snapshots y backups.
4. CloudWatch: logs, métricas y alarmas.
5. CloudFormation: stacks creados en prácticas.

Para cada recurso encontrado, responde:

- ¿Tiene dueño?
- ¿Tiene tag de proyecto?
- ¿Sigue siendo necesario?
- ¿Tiene fecha de eliminación?
- ¿Puede apagarse o eliminarse?

## Paso 4: Clasificar capacidad

Usa esta tabla para discutir decisiones:

| Tipo de capacidad | Cuándo usarla | Riesgo principal |
| --- | --- | --- |
| On-Demand | Laboratorios, pruebas, cargas variables | Mayor costo si se deja encendida |
| Reserved | Cargas estables y predecibles | Compromiso antes de conocer demanda |
| Spot | Trabajos tolerantes a interrupciones | La capacidad puede interrumpirse |

## Paso 5: Revisar señales antes de escalar

En CloudWatch o en la vista del servicio correspondiente, busca señales como:

1. CPU alta por periodos sostenidos.
2. Latencia creciente.
3. Errores 5xx o timeouts.
4. Conexiones rechazadas.
5. Almacenamiento cerca del límite.
6. Incremento de costo sin incremento de uso.

La decisión de escalar debe partir de señales, no de suposiciones.

## Paso 6: Resolver el caso práctico

Abre `04-caso-practico-implementacion.md` y responde:

1. ¿Qué recursos crearías primero para lanzar rápido?
2. ¿Qué parte debe ser más fácil de escalar?
3. ¿Qué parte no debería depender de una sola instancia?
4. ¿Qué métrica usarías para decidir un cambio?
5. ¿Qué recursos tendrían fecha de limpieza?
6. ¿Qué tags usarías para controlar costo y responsabilidad?

## Paso 7: Proponer una arquitectura inicial

Diseña una primera versión con estos bloques:

1. Entrada web o dominio.
2. Aplicación o backend.
3. Almacenamiento de archivos.
4. Base de datos.
5. Monitoreo.
6. Presupuesto y alertas.
7. Estrategia de limpieza.

No hace falta sobrediseñar. La primera arquitectura debe ser entendible, medible y mejorable.

## Paso 8: Definir mejoras progresivas

Orden sugerido:

1. Base segura: MFA, permisos, presupuesto y tags.
2. Primer despliegue funcional.
3. Monitoreo mínimo: logs, métricas y alarmas.
4. Ajuste de tamaño según uso real.
5. Escalabilidad horizontal si la demanda lo justifica.
6. Automatización cuando el proceso se repite.
7. Alta disponibilidad cuando el impacto de caída lo exige.

## Paso 9: Checklist de cierre del módulo

- Los recursos de laboratorio tienen tags.
- Los recursos innecesarios fueron apagados o eliminados.
- El presupuesto sigue activo.
- La cuenta no usa root para trabajo diario.
- Las credenciales de CLI están protegidas.
- Hay una idea clara de cuándo usar automatización.
- Hay una idea clara de cuándo escalar.

## Referencias oficiales

- AWS Budgets: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html
- AWS Cost Explorer: https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html
- Opciones de compra de instancias EC2: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html
- Amazon CloudWatch: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
- AWS Well-Architected Framework: https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html

