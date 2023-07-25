# Backend CRUD de Personas/Estudiantes

Este es un backend desarrollado en Express con TypeScript y Mongoose para realizar un CRUD completo de personas o estudiantes en una base de datos MongoDB en la nube.

## Requisitos previos

- Node.js y npm instalados en tu sistema.
- Acceso a una instancia de MongoDB en la nube (puedes utilizar MongoDB Atlas u otro proveedor de servicios).

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias necesarias.

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con la siguiente información:
2. Asegúrate de remplazar `DB` con la URL de tu base de datos MongoDB en la nube.
3. Asegúrate de remplazar `PORT` con el puerto en donde quieras que se inicie el servidor.
   
## Uso

- Ejecuta `npm run dev` para iniciar el servidor en modo de desarrollo.
- Ejecuta `npm run start` para iniciar el servidor en modo de produccion.
- Accede a `http://localhost:4000` (o el puerto que hayas configurado) para interactuar con el backend.

## Rutas y modelos

Las rutas y modelos están organizados de la siguiente manera:
/models/Student
- student.ts

/routes/students
- routes.ts

El modelo `student.ts` define la estructura de los datos de estudiantes en la base de datos. 
Las rutas para realizar las operaciones CRUD están definidas en el archivo `routes.ts`.
