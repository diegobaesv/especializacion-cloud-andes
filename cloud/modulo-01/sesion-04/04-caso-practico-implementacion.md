# Caso práctico: tienda online pequeña

## Contexto

Una tienda online quiere lanzar una primera versión en AWS.

- Tráfico inicial bajo, pero con campañas puntuales.
- Equipo pequeño.
- Presupuesto limitado.
- Necesita evitar caídas durante promociones.
- El proyecto debe poder crecer sin rediseñar todo desde cero.

## Decisiones esperadas

- Empezar con recursos pequeños y medibles.
- Activar presupuesto y alertas antes de desplegar.
- Usar tags para identificar recursos del laboratorio.
- Separar archivos estáticos, backend y base de datos.
- Monitorear métricas antes de escalar.
- Evaluar escalabilidad horizontal si el tráfico crece.

## Preguntas para discutir

1. ¿Qué recursos conviene crear primero?
2. ¿Qué recursos deberían apagarse o eliminarse al terminar el laboratorio?
3. ¿Qué métrica usarías para decidir si escalar?
4. ¿Qué componente sería más riesgoso dejar en una sola instancia?
5. ¿Qué decisión tomarías distinto si la tienda ya tiene miles de usuarios?
