const con = require('../util/database');

module.exports = class Products {
    static get(){
        return con.execute(`SELECT * FROM tbl_product`);
    }
    static getId(id){
        return con.execute(`SELECT * FROM tbl_product WHERE id="${id}"`);
    }
    static post(params){
        // return con.execute(`INSERT INTO user (username, password, email) VALUES("${params.username}", "${params.password}", "${params.email}")`); 
    }
    static update(params){
        // return con.execute(`UPDATE user SET username="${params.username}", password="${params.password}", email="${params.email}" WHERE id="${params.id}"`);
    }
    static delete(id){
        return con.execute(`DELETE from tbl_product WHERE id="${id}"`);
    }
};