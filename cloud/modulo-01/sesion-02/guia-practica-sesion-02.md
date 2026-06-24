# Guía práctica - Sesión 2: Configuración de servicios base

## Objetivo práctico

Configurar una base segura para trabajar en AWS: acceso administrativo separado del root, permisos iniciales, MFA, presupuesto y hábitos de identificación de recursos.

## Antes de empezar

- Tener acceso a la cuenta AWS creada o validada en la sesión 1.
- Tener MFA activo para el root user.
- Usar la región `us-east-1` como referencia de laboratorio.
- Tener a la mano la convención de nombres del curso.

## Paso 1: Verificar acceso root protegido

1. Entra a la consola de AWS como root solo para esta configuración inicial.
2. Confirma que MFA está activo.
3. Revisa que no existan access keys creadas para root.
4. Si existen access keys de root y no hay una razón clara para conservarlas, elimínalas.

## Paso 2: Habilitar acceso de IAM a facturación

1. Abre Billing and Cost Management.
2. Entra a las preferencias o configuración de la cuenta de facturación.
3. Busca la opción para activar acceso de IAM a la información de facturación.
4. Activa el acceso para que usuarios o roles autorizados puedan revisar costos.
5. Guarda los cambios.

## Paso 3: Crear un presupuesto básico

1. Abre AWS Budgets.
2. Crea un presupuesto de costo mensual.
3. Define un monto bajo para laboratorio, por ejemplo `5 USD` o el valor acordado en clase.
4. Configura una alerta al 80% del presupuesto.
5. Configura otra alerta al 100% del presupuesto.
6. Agrega el correo donde se deben recibir las alertas.
7. Guarda el presupuesto.

## Paso 4: Crear grupo administrativo de laboratorio

1. Abre IAM.
2. Entra a User groups.
3. Crea un grupo llamado `CursoCloudAdministradores`.
4. Asigna la política administrada `AdministratorAccess`.
5. Guarda el grupo.

Este grupo se usa para el laboratorio del curso. En ambientes reales se deben diseñar permisos más específicos y aplicar mínimo privilegio.

## Paso 5: Crear usuario administrativo para clase

1. En IAM, entra a Users.
2. Crea un usuario llamado `curso-admin`.
3. Habilita acceso a la consola de AWS.
4. Define una contraseña temporal segura.
5. Agrega el usuario al grupo `CursoCloudAdministradores`.
6. Finaliza la creación.
7. Entra con el nuevo usuario y cambia la contraseña si AWS lo solicita.
8. Activa MFA para este usuario.

## Paso 6: Crear un grupo de solo lectura

1. En IAM, crea un grupo llamado `CursoCloudLectura`.
2. Asigna la política administrada `ReadOnlyAccess`.
3. Crea un usuario llamado `curso-lectura`.
4. Agrega ese usuario al grupo `CursoCloudLectura`.
5. Entra con ese usuario y valida que puede ver recursos, pero no debería poder crear infraestructura.

## Paso 7: Comparar permisos

1. Con `curso-lectura`, intenta entrar a EC2 y ubicar el botón de creación de instancia.
2. Observa que el usuario puede navegar, pero no debería operar como administrador.
3. Con `curso-admin`, confirma que sí tiene permisos administrativos.
4. Regresa al usuario administrativo para continuar el curso.

## Paso 8: Revisar access keys

1. En IAM, entra al usuario `curso-admin`.
2. Revisa la pestaña de credenciales de seguridad.
3. No crees access keys todavía si no se usarán en esta sesión.
4. Deja la creación de access keys para la sesión de AWS CLI.
5. Confirma que root no tiene access keys.

## Paso 9: Definir tags obligatorios del curso

Usa estos tags en recursos de laboratorio:

| Clave | Valor sugerido |
| --- | --- |
| `Proyecto` | `curso-cloud` |
| `Ambiente` | `laboratorio` |
| `Responsable` | nombre del estudiante |
| `Sesion` | `modulo-01-sesion-02` |
| `Eliminar` | fecha estimada de limpieza |

## Paso 10: Revisión final de seguridad y costos

1. Root tiene MFA.
2. Root no tiene access keys.
3. Existe un usuario administrativo separado.
4. El usuario administrativo tiene MFA.
5. Existe un presupuesto con alertas.
6. Hay una convención de tags para recursos.
7. La región de laboratorio está clara.

## Referencias oficiales

- Usuarios IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
- Grupos IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
- Políticas y permisos: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
- AWS Budgets: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html
- MFA en AWS: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html

