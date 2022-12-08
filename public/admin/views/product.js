
class product {
    static async get() {
        let str = ''
        str += `<div class="row page-titles" >
                    <div class="col-md-5 align-self-center">
                        <h3 class="text-themecolor">Product</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Product</li>
                        </ol>
                    </div>
                    <div class="col-md-7 align-self-center text-right d-none d-md-block">
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#addProductModal"><i class="fa fa-plus-circle"></i>Add Product</button>
                    </div> 
                </div > 
            <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Product</h4>
                        <h6 class="card-subtitle">Export data to Copy, CSV, Excel, PDF & Print</h6>
                        <div class="table-responsive m-t-40">
                            <table id="example23"
                                class="display nowrap table table-hover table-striped table-bordered"
                                cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead> 
                                <tbody>`

        let res = await fetch('http://localhost:9000/product', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            for (let i = 0; i < data.length; i++) {
                str += `<tr>
                                            <td>${data[i].name}</td> 
                                            <td>${data[i].price}</td> 
                                            <td>${data[i].description}</td> 
                                            <td><button type="button" data-helper="${data[i].id}" class="edit-product">Edit</button><button type="button" data-helper="${data[i].id}" class="delete-product">Delete</button></td>
                                        </tr>`
            }
        })

        str += `</tbody>
                </table>
            </div>
        </div>
        </div> 
        <div class="card"></div>
        </div>
        </div>`
        return str
    }
}

export default product