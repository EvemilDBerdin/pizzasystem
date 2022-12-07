class users {
    static async get() {
        let str = ''
        str += `<div class="row page-titles" >
                        <div class="col-md-5 align-self-center">
                            <h3 class="text-themecolor">Customer</h3>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li class="breadcrumb-item active">Customer</li>
                            </ol>
                        </div>
                        <div class="col-md-7 align-self-center text-right d-none d-md-block">
                            <button type="button" data-toggle="modal" data-target="#addCustomerModal" class="btn btn-info"><i class="fa fa-plus-circle"></i>Add Customer</button>
                        </div> 
                    </div > 
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Customer Information</h4>
                            <h6 class="card-subtitle">Export data to Copy, CSV, Excel, PDF & Print</h6>
                            <div class="table-responsive m-t-40">
                                <table class="display nowrap table table-hover table-striped table-bordered"
                                    cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Age</th>
                                            <th>Address</th>
                                            <th>Contact</th>
                                            <th>Image</th>
                                            <th>Date Created</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead> 
                                    <tbody>`
        let res = await fetch('http://localhost:8080/', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        }).then(function (response) {
            return response.json();
        }).then(function (data) { 
            for(let i=0; i<data.length; i++){
                str += `<tr>
                    <td>${data[i].firstname}</td>
                    <td>${data[i].lastname}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].age}</td>
                    <td>${data[i].address}</td>
                    <td>${data[i].contact}</td>
                    <td>${data[i].user_image}</td>
                    <td>${data[i].date_created}</td>
                    <td><button type="button" data-helper="${data[i].userid}" class="edit-user">Edit</button><button type="button" data-helper="${data[i].userid}" class="delete-user">Delete</button></td>
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

export default users