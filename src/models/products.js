const con = require('../util/database');

module.exports = class Products {
    static get(){
        return con.execute(`SELECT * FROM tbl_product`);
    }
    static getId(id){
        return con.execute(`SELECT * FROM tbl_product WHERE id="${id}"`);
    }
    static post(params){
        let status = 0
        return con.execute(`INSERT INTO tbl_product (name, price, description, status) VALUES("${params.name}", "${params.price}", "${params.description}", ${status})`); 
    }
    static update(params){
        return con.execute(`UPDATE tbl_product SET name="${params.name}", price="${params.price}", description="${params.description}" WHERE id="${params.id}"`);
    }
    static delete(id){
        return con.execute(`DELETE from tbl_product WHERE id="${id}"`);
    }
};