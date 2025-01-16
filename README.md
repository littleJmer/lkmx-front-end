# Prueba de Código Front-End para LKMX

Este repositorio contiene una prueba de código diseñada para evaluar habilidades en el desarrollo de aplicaciones front-end. Si has recibido acceso a este repositorio, sigue las instrucciones a continuación para configurarlo y ejecutarlo correctamente.

## Requisitos previos

Asegúrate de tener instalado en tu sistema:

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Docker](https://www.docker.com/) (para crear y ejecutar la imagen Docker)

## Instrucciones de configuración

### Ejecutar el proyecto localmente

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone git@github.com:littleJmer/lkmx-front-end.git
   cd lkmx-front-end
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador y accede a la aplicación en `http://localhost:{PUERTO_INDICADO_EN_TERMINAL}`.

### Crear y ejecutar una imagen Docker

1. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

2. Genera una versión optimizada para producción:
   ```bash
   npm run build
   ```

3. Crea la imagen Docker:
   ```bash
   docker build -t lkmx/front-end:latest .
   ```

4. Ejecuta el contenedor Docker:
   ```bash
   docker run -p 80:3000 lkmx/front-end:latest
   ```

5. Accede a la aplicación en `http://localhost`.

## Estructura del proyecto

El repositorio está organizado de la siguiente manera:

- **/src**: Contiene el código fuente de la aplicación.
- **/public**: Archivos estáticos como imágenes y recursos públicos.
- **package.json**: Definiciones de dependencias y scripts.

## Contacto

Si tienes preguntas o necesitas más información sobre esta prueba, no dudes en contactarnos a través de [juanmanueler@gmail.com](mailto:juanmanueler@gmail.com).

