const reporting = (req, res, next) => {
    const params = req.params;
    const query = req.query;
    const body = req.body;
    const url = req.url;

    console.log(`Hoy ${new Date()} Se ha recibido una consulta en la ruta ${url} con los siguientes datos: `)
    if (Object.values(params) != "") {
        console.log("Via params :", params)
    }
    if (Object.values(query) != "") {
        console.log("Via query :", query)
    }
    if (Object.values(body) != "") {
        console.log("Via body :", body)
    }

    next()
}
module.exports = { reporting };