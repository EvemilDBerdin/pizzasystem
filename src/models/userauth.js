const con = require('../util/database'); 

module.exports = class Userauth {  
    static auth(params){
        return con.execute(`SELECT * FROM tbl_users WHERE email="${params.email}" AND password="${params.password}" AND status=0`)
    }
};