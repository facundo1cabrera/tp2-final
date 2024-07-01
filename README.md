
## Pasos a seguir para ejecutar el proyecto

1- clonar el repositorio

2- correr el comando `npm install` para bajar las dependencias

3- ejecutar el projecto con `npm run start`

3- consumir los endpoints

## Persistencia de datos
Para la persistencia de datos se eligió utilizar la propia memoria del servidor.

## Validaciones
El proyecto contiene validaciones para el body de la request del endpoint de crear sonda y validaciones para el id del endpoint getSondaById

## Endpoints
El proyecto contiene los siguientes endpoints:

POST /sonda returns 201/400/500

GET /sonda returns 200/400/500

GET /sonda/:id returns 200/404/500
