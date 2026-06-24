# Guía práctica - Módulo 3, Sesión 3: Bases de datos con RDS

## Objetivo práctico

Crear una base de datos RDS de laboratorio, configurarla de forma segura, validar conexión desde backend y revisar backups, métricas y limpieza.

## Antes de empezar

- Tener cuenta AWS con permisos para RDS, EC2/VPC y CloudWatch.
- Tener claro si usarás MySQL o PostgreSQL.
- Tener una aplicación backend que pueda conectarse por variables de entorno.
- Tener definido un presupuesto de laboratorio.
- Recordar que RDS puede generar costo mientras la instancia exista.

## Paso 1: Elegir motor y configuración mínima

1. Abre Amazon RDS.
2. Elige Create database.
3. Selecciona Standard create.
4. Elige motor:
   - MySQL
   - PostgreSQL
5. Para laboratorio, selecciona una configuración pequeña.
6. Define nombre de base de datos inicial si la consola lo permite.

## Paso 2: Configurar credenciales

1. Define usuario administrador.
2. Crea una contraseña segura.
3. Guarda la contraseña en un lugar seguro.
4. No subas credenciales al repositorio.
5. No las pegues en las diapositivas ni en archivos públicos.

## Paso 3: Configurar red

1. Selecciona la VPC por defecto si es laboratorio simple.
2. Para Public access, prefiere No.
3. Revisa subnets seleccionadas.
4. Configura o crea Security Group para RDS.
5. Permite entrada solo desde el Security Group del backend.

Para práctica temporal desde tu máquina, si necesitas conexión directa, limita la regla a tu IP pública y elimínala al terminar.

## Paso 4: Configurar backups

1. Activa backups automáticos.
2. Define retención baja para laboratorio.
3. Revisa ventana de backup.
4. Activa o revisa protección contra eliminación solo si corresponde.
5. Para producción, define retención y estrategia de restauración con más cuidado.

## Paso 5: Crear la instancia

1. Revisa resumen de configuración.
2. Confirma clase de instancia, almacenamiento y región.
3. Crea la base de datos.
4. Espera a que el estado sea Available.
5. Copia endpoint y puerto.

## Paso 6: Probar conexión

Desde un cliente SQL o desde backend:

1. Usa endpoint de RDS.
2. Usa puerto:
   - MySQL: `3306`
   - PostgreSQL: `5432`
3. Usa usuario y contraseña configurados.
4. Si falla, revisa:
   - Security Group
   - Public access
   - Usuario/contraseña
   - Nombre de base de datos
   - Red desde donde conectas

## Paso 7: Conectar backend

Configura variables de entorno:

```text
DB_HOST=endpoint-rds
DB_PORT=5432
DB_NAME=appdb
DB_USER=usuario
DB_PASSWORD=valor-seguro
```

No guardes `DB_PASSWORD` en GitHub.

## Paso 8: Revisar métricas

1. En RDS, abre Monitoring.
2. Revisa CPU.
3. Revisa conexiones.
4. Revisa almacenamiento libre.
5. Revisa latencia o throughput si está disponible.
6. Identifica qué métricas deberían tener alarma en producción.

## Paso 9: Crear snapshot manual

1. Selecciona la instancia.
2. Elige Take snapshot.
3. Usa un nombre descriptivo.
4. Espera a que el snapshot finalice.
5. Revisa cómo se restauraría, sin restaurar si no es necesario.

## Paso 10: Limpieza

Si la base fue solo de práctica:

1. Detén o elimina la instancia según el caso.
2. Decide si conservar snapshot final.
3. Elimina snapshots que no necesitarás.
4. Elimina reglas temporales de Security Group.
5. Revisa costos.

## Checklist de cierre

- Motor elegido con criterio.
- La base no quedó pública innecesariamente.
- Security Group restringe origen.
- Backups automáticos están configurados.
- Endpoint y puerto fueron identificados.
- Backend tiene variables de conexión.
- No hay credenciales en el repositorio.
- Recursos de práctica fueron limpiados si no continuarán.

## Referencias oficiales

- Amazon RDS User Guide: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html
- Crear una instancia de base de datos: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html
- Seguridad en Amazon RDS: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html
- Backups de Amazon RDS: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
- Monitoreo de Amazon RDS: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Monitoring.html

