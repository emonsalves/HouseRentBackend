require('dotenv').config();

const toHATEOAS = async ({ props, propName }) => {

    const { totalPages } = props[1]
    const { limits } = props[2]
    const { page } = props[3]
    try {
        const results = props[0].map((item) => ({
            name: item.nombre,
            href: `/props/${propName}/${item.id}`,
        }))

        const next = (Number(page) < Number(totalPages))
            ? `${process.env.DOMAIN}:${process.env.PORT}/props?limits=${limits}&page=${Number(page) + 1}`
            : ""

        const prev = (Number(page) > 1 & Number(page) <= Number(totalPages))
            ? `${process.env.DOMAIN}:${process.env.PORT}/props?limits=${limits}&page=${Number(page - 1)}`
            : ""
        const stockTotal = props[0].reduce((acumulador, valorActual) => acumulador + valorActual.stock, 0
        )
        const HATEOAS = { total, stockTotal, prev, next, results }
        return HATEOAS
    } catch (e) {
        console.log(
            "Error al realizar HATEOAS",
            "Code: ", e.code,
            "Message: ", e.message
        );
        throw new Error(e);
    }
}

module.exports = { toHATEOAS }