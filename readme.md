# Sesión 0 - Entorno de desarrollo con nodejs
1. Hemos arrastrado una nueva carpeta a vscode
2. Hemos abierto la terminal con `ctrl+mayus+ñ`
3. Hemos iniciado el proyecto con `npm init` (y por lo tanto creado el package.json)
4. Hemos instalado una libreria `lite-server` con `npm install lite-server` y se nos ha creado la carpeta `node_modules` (esta libreria nos permite levantar un servidor local localhost:puerto)
5. Creamos archivo `.gitignore` y escribimos dentro el nombre de los archivos y carpetas que no queremos que se suban a github
6. Añadimos a 'scripts' de mi archivo `package.json` lo siguiente: `"dev" : "lite-server"` y con `npm run dev`ejecutamos el lite-server para que nos levante un servidor en el puerto 3000 con nuestro proyecto
7. 