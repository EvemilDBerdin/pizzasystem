const con = require('../util/database')
const { createToken } = require('../middleware/users')

module.exports = class Users {
    static get() {
        return con.execute(`SELECT * FROM tbl_users`)
    }
    static getId(id) {
        return con.execute(`SELECT * FROM tbl_users WHERE userid="${id}"`)
    }
    static async post(params) {
        let dateNow = new Date()
        let date = `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()}`
        let accessToken = await createToken(params).then((res)=>{ return res })  
        let jsonConvert = JSON.stringify(accessToken)
        console.log(jsonConvert)
        return con.execute(`INSERT INTO tbl_users (firstname, lastname, contact, age, address, email, password, date_created, access_token) VALUES("${params.firstname}", "${params.lastname}", "${params.contact}", "${params.age}", "${params.address}", "${params.email}", "${params.password}", "${date}", ${jsonConvert})`)    
    }
    static async update(params) {
        return con.execute(`UPDATE tbl_users SET firstname="${params.firstname}", lastname="${params.lastname}", contact="${params.contact}", age="${params.age}", address="${params.address}", email="${params.email}", password="${params.password}" WHERE userid="${params.customerid}"`)
    }
    static delete(id) {
        return con.execute(`DELETE from tbl_users WHERE userid="${id}"`)
    }
};