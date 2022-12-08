const con = require('../util/database');
const bcrypt = require('bcrypt')

module.exports = class Userauth {  
    static async get(params){ 
        // let hash = await bcrypt.hash(params.password, 10).then((hash)=>{ return hash })  
        return con.execute(`SELECT * FROM tbl_users WHERE email="${params.email}" AND password="${params.password}" `); 
    } 
};