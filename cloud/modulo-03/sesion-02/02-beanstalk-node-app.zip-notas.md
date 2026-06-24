# Paquete de ejemplo para Elastic Beanstalk

Para una aplicación Node.js simple, el archivo `.zip` que se sube a Elastic Beanstalk suele incluir:

- `package.json`
- `package-lock.json`
- `server.js` o archivo principal equivalente
- Código fuente necesario para ejecutar la API

No incluyas:

- `node_modules/`
- `.env` con secretos
- archivos temporales
- carpetas de build innecesarias

Elastic Beanstalk instalará dependencias según la plataforma elegida.

