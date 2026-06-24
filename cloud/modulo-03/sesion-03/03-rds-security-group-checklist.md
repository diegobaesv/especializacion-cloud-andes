# Checklist de seguridad para conectar backend con RDS

- La base de datos no debe estar pública salvo que exista una razón controlada.
- El Security Group de RDS debe permitir entrada solo desde el Security Group del backend.
- No abrir MySQL `3306` o PostgreSQL `5432` a `0.0.0.0/0`.
- Usar credenciales fuera del código fuente.
- Activar backups automáticos para ambientes importantes.
- Revisar almacenamiento, motor, versión y ventana de mantenimiento antes de crear la instancia.

