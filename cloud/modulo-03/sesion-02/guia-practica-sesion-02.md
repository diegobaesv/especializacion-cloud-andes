# Guía práctica - Módulo 3, Sesión 2: Backend con Elastic Beanstalk

## Objetivo práctico

Desplegar una API backend simple en Elastic Beanstalk, configurar variables de entorno, revisar estado del entorno, consultar logs y limpiar recursos si el laboratorio termina.

## Antes de empezar

- Tener una API simple en Node.js, Java o Python.
- Tener un endpoint raíz y un endpoint de salud, por ejemplo `/health`.
- Tener cuenta AWS con permisos para Elastic Beanstalk, EC2, IAM y CloudWatch.
- Tener claro si el entorno será de laboratorio o continuará para el proyecto.
- Recordar que Elastic Beanstalk puede crear EC2, balanceadores y otros recursos con costo.

## Paso 1: Validar la API localmente

1. Ejecuta la aplicación local.
2. Abre el endpoint raíz.
3. Abre `/health`.
4. Confirma que responde correctamente.
5. Revisa qué puerto usa la aplicación.

## Paso 2: Preparar el paquete

Para Node.js:

1. Verifica que `package.json` tenga un script de inicio.
2. No incluyas `node_modules`.
3. No incluyas `.env` con secretos.
4. Comprime los archivos necesarios en `.zip`.
5. Usa `02-beanstalk-node-app.zip-notas.md` como referencia.

## Paso 3: Crear aplicación en Elastic Beanstalk

1. Abre Elastic Beanstalk.
2. Elige Create application.
3. Define un nombre, por ejemplo `curso-backend`.
4. Selecciona plataforma:
   - Node.js
   - Java
   - Python
   - Docker, si aplica
5. Sube el paquete de aplicación.
6. Elige un entorno web server.
7. Para laboratorio, usa configuración simple y de bajo costo.

## Paso 4: Revisar creación del entorno

1. Espera a que el entorno termine de crearse.
2. Revisa el estado de salud.
3. Copia la URL generada por Beanstalk.
4. Abre la URL en navegador.
5. Prueba `/health`.

## Paso 5: Configurar variables de entorno

1. Entra al entorno.
2. Abre Configuration.
3. Busca Software.
4. Agrega variables necesarias:
   - `NODE_ENV`
   - `API_PREFIX`
   - `DB_HOST` si ya existe base de datos
   - `DB_NAME`
5. Guarda cambios.
6. Espera a que el entorno se actualice.

## Paso 6: Consultar logs

1. Entra al entorno de Beanstalk.
2. Busca Logs.
3. Solicita logs recientes.
4. Descarga o visualiza los logs.
5. Identifica errores de arranque, puerto o dependencias.

## Paso 7: Subir nueva versión

1. Realiza un cambio pequeño en la API.
2. Genera un nuevo paquete.
3. En Beanstalk, sube una nueva application version.
4. Despliega esa versión en el entorno.
5. Valida la URL y `/health`.

## Paso 8: Revisar escalabilidad básica

1. En Configuration, revisa Capacity.
2. Observa si el entorno es single instance o load balanced.
3. Para laboratorio, single instance suele ser suficiente.
4. Para producción, evalúa balanceador, Auto Scaling y múltiples zonas.

## Paso 9: Revisar monitoreo

1. Entra a Monitoring.
2. Revisa CPU, requests, errores y health.
3. Abre CloudWatch si necesitas más detalle.
4. Toma nota de señales que deberían tener alarma.

## Paso 10: Limpieza

Si el entorno fue solo de práctica:

1. Termina el entorno.
2. Espera a que AWS elimine recursos asociados.
3. Revisa EC2 para confirmar que no quedaron instancias.
4. Revisa Load Balancers si creaste entorno balanceado.
5. Revisa CloudWatch logs si quieres aplicar retención o limpieza.

## Checklist de cierre

- La API corre localmente.
- El paquete no incluye secretos.
- El entorno Beanstalk fue creado.
- La URL pública responde.
- `/health` funciona.
- Variables de entorno fueron configuradas.
- Logs fueron revisados.
- Recursos de laboratorio fueron eliminados si no se usarán.

## Referencias oficiales

- Elastic Beanstalk Developer Guide: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html
- Crear una aplicación Elastic Beanstalk: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html
- Plataformas Elastic Beanstalk: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html
- Variables de entorno: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html
- Logs en Elastic Beanstalk: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html

