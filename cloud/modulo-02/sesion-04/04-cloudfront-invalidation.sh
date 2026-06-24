#!/usr/bin/env bash

# Reemplaza DISTRIBUTION_ID por el ID real de la distribución.
# Usa invalidaciones con cuidado: son útiles para despliegues, pero no reemplazan una estrategia de cache bien definida.

aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION_ID \
  --paths "/index.html" "/assets/*" \
  --profile curso-cloud

