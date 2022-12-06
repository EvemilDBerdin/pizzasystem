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
                            <button type="button" class="btn btn-info"><i class="fa fa-plus-circle"></i>Add Customer</button>
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
                                            <th>Status</th>
                                        </tr>
                                    </thead> 
                                    <tbody>`

        let tmp = `</tbody>
                                </table>
                            </div>
                        </div>
                    </div> 
                    <div class="card"></div>
                </div>
            </div>`

        fetch('http://127.0.0.1:9000/user', {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": name.value.replace("\"", ""),
                "password": md5(password.value.replace("\"", "")),
                "email": email.value.replace("\"", "")
            }),
            method: "POST"
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            alert(data.message);
            name.value = "";
            password.value = "";
            email.value = "";
        })
        return str
    }
}

export default users