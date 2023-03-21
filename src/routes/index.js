const express = require('express')
const router = express.Router()
const fs = require('fs')

const PATH_ROUTER = __dirname

// retiramos el .js 
const cleanFileName = (fileName) => {
    const clean = fileName.split(".").shift()
    return clean
}
// cargamos las rutas en relacion a los archivos dentro de esta carpeta excepto index
fs.readdirSync(PATH_ROUTER).filter(fileName => {
    const prefixRoute = cleanFileName(fileName)
    if (prefixRoute !== "index") {
        console.log(`Cargando Ruta... ${prefixRoute}`)
        router.use(`/${prefixRoute}`, require(`./${prefixRoute}.js`))
    }
})

module.exports = router