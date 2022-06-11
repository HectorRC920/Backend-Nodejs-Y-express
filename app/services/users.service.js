const getConection = require('../libs/postgres')
async function find() {
    // const {id} = params
    const client = await getConection()
    const rta = await client.query('SELECT * FROM task')
    return rta.rows
}

module.exports = find