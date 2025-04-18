# Proyecto entrevista técnica 'TodosGamers'

Este es un proyecto construido con **Next.js 15** que implementa un sistema de autenticación básico utilizando **JWT, cookies y middleware** para proteger rutas. Las credenciales de los usuarios se almacenan en una base de datos **SQLite** a través de **Prisma ORM**.

## Funcionalidades principales

- Registro e inicio de sesión de usuarios
- Validación de formularios del lado del servidor
- Sesiones con JWT almacenadas en cookies
- Rutas públicas y protegidas con redirección automática
- Persistencia de datos con SQLite y Prisma

## Requisitos

- Node.js 18 o superior
- npm (o yarn/pnpm/bun)

Para esta explicación utilizaré pnpm como ejemplo.

## Instalación y ejecución

1. **Clonar el repositorio:**

- git clone https://github.com/mateopautasso/todos-gamers-technical-interview.git
- cd tu-repo

- pnpm install

## Configurar las variables de entorno

En el archivo '.env.example' se encuentra la estructura de variables de entorno necesarias para ejecutar el proyecto.

## Inicializar la base de datos SQLite con Prisma

pnpx prisma migrate dev --name init

## Ejecutar el servidor en modo desarrollo

pnpm run dev
