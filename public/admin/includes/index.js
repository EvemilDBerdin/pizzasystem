import home from '../views/home.js'
import users from '../views/users.js'
import product from '../views/product.js'
import purchase from '../views/purchase.js'
import profile from '../views/profile.js'
const urlArr = window.location.href
const wreload = window.location

const loadPage = async (page = '') => {
    switch (page) {
        case '#customer':
            document.querySelector("#pizzaadminbody").innerHTML = ''
            document.querySelector("#pizzaadminbody").innerHTML = await users.get()
            break;
        case '#product':
            document.querySelector("#pizzaadminbody").innerHTML = ''
            document.querySelector("#pizzaadminbody").innerHTML = await product.get()
            break;
        case '#purchase':
            document.querySelector("#pizzaadminbody").innerHTML = ''
            document.querySelector("#pizzaadminbody").innerHTML = await purchase.get()
            break;
        case '#profile':
            document.querySelector("#pizzaadminbody").innerHTML = ''
            document.querySelector("#pizzaadminbody").innerHTML = await profile.get()
            break;
        default:
            document.querySelector("#pizzaadminbody").innerHTML = ''
            document.querySelector("#pizzaadminbody").innerHTML = await home.get()
    }
}

// home
window.addEventListener("load", async function () {
    switch (urlArr.split('/')[7]) {
        case '#customer':
            await new Promise((resolve) => { resolve(loadPage('#customer')) })
            //"Uncaught (in promise) DOMException: An attempt was made to use an object that is not, or is no longer, usable" ->> this error come from promise, because promise needs to fullfill
            editUserModal()
            deleteUserModal()
            break;
        case '#product':
            await new Promise((resolve) => { resolve(loadPage('#product')) })
            //"Uncaught (in promise) DOMException: An attempt was made to use an object that is not, or is no longer, usable" ->> this error come from promise, because promise needs to fullfill
            editProductModal()
            deleteProductModal()
            break;
        case '#purchase':
            loadPage('#purchase')
            break;
        case '#profile':
            loadPage('#profile')
            break;
        default:
            loadPage()
    }
})
document.querySelector('.homenavigationbar').addEventListener('click', async () => { window.location.href = '' })

/* users */
document.querySelector('.usersnavigationbar').addEventListener('click', async () => { window.location.href = '#customer'; wreload.reload() })
const editUserModal = () => {
    document.querySelectorAll('.edit-user').forEach(item => {
        item.addEventListener('click', async function (event) {
            document.getElementById('editCustomerModal').setAttribute('style', 'display: block')
            let result = await fetch('http://localhost:9000/users/' + event.target.getAttribute("data-helper"), { headers: { "Content-Type": "application/json" }, method: "GET" }).then((res) => { return res.json() })
            $('#editCustomerForm').find('input[name="customerid"]').val(event.target.getAttribute("data-helper"))
            $('#editCustomerForm').find('input[name="address"]').val(result[0].address)
            $('#editCustomerForm').find('input[name="age"]').val(result[0].age)
            $('#editCustomerForm').find('input[name="contact"]').val(result[0].contact)
            $('#editCustomerForm').find('input[name="email"]').val(result[0].email)
            $('#editCustomerForm').find('input[name="firstname"]').val(result[0].firstname)
            $('#editCustomerForm').find('input[name="lastname"]').val(result[0].lastname)
            $('#editCustomerForm').find('input[name="password"]').val(result[0].password)
        })
    })
}
const deleteUserModal = () => {
    document.querySelectorAll('.delete-user').forEach(item => {
        item.addEventListener('click', event => {
            Swal.fire({
                title: 'Are you sure you want to delete this?',
                text: 'You will not be able to undo this!',
                showCancelButton: true,
                confirmButtonText: 'Ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch('http://localhost:9000/users/' + event.target.getAttribute("data-helper"), { headers: { "Content-Type": "application/json" }, method: "DELETE" }).then(() => { Swal.fire('Saved!', '', 'success').then(() => { wreload.reload() }) })
                }
            })

        })
    })
}

/* product */
document.querySelector('.productnavigationbar').addEventListener('click', async () => { window.location.href = '#product'; wreload.reload() })
const editProductModal = () => {
    document.querySelectorAll('.edit-product').forEach(item => {
        item.addEventListener('click', async function (event) {
            document.getElementById('editProductModal').setAttribute('style', 'display: block')
            let result = await fetch('http://localhost:9000/product/' + event.target.getAttribute("data-helper"), { headers: { "Content-Type": "application/json" }, method: "GET" }).then((res) => { return res.json() })

            $('#editProductForm').find('input[name="id"]').val(event.target.getAttribute("data-helper"))
            $('#editProductForm').find('input[name="name"]').val(result[0].name)
            $('#editProductForm').find('input[name="price"]').val(result[0].price)
            $('#editProductForm').find('input[name="description"]').val(result[0].description)
        })
    })
}
const deleteProductModal = () => {
    document.querySelectorAll('.delete-product').forEach(item => {
        item.addEventListener('click', event => {
            Swal.fire({
                title: 'Are you sure you want to delete this?',
                text: 'You will not be able to undo this!',
                showCancelButton: true,
                confirmButtonText: 'Ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success').then(() => {
                        fetch('http://localhost:9000/product/' + event.target.getAttribute("data-helper"), {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "DELETE"
                        }).then(() => {
                            wreload.reload()
                        })
                    })
                }
            })

        })
    })
}

/* purchase */
document.querySelector('.purchasenavigationbar').addEventListener('click', async () => {
    window.location.href = '#purchase'; wreload.reload()
})

/* profile */
document.querySelector('.profilenavigationbar').addEventListener('click', async () => { window.location.href = '#profile'; wreload.reload() })

/* logout */
document.querySelector('.adminlogoutnavigationbar').addEventListener('click', () => {
    Swal.fire({
        title: 'Do you want to Logout?',
        text: 'Please confirm to logging out',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Logging out!', '', 'success').then(() => {
                window.location.href = '../../public'
            })
        }
    })
})


/* FORM SUBMIT JQUERY */
$(() => {
    $('#addCustomerModalForm').submit(async (e) => {
        e.preventDefault()
        let data = {};
        let formData = new FormData(e.target);
        for (let key of formData.keys()) {
            data[key] = formData.get(key);
        }
        myFetch('http://localhost:9000/users', data, "POST").then((res) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                wreload.reload()
            })
        })
    })
    $('#editCustomerForm').submit(async (e) => {
        e.preventDefault()
        let data = {};
        let formData = new FormData(e.target);
        for (let key of formData.keys()) {
            data[key] = formData.get(key);
        }
        myFetch('http://localhost:9000/users', data, "PUT").then((res) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                wreload.reload()
            })
        })
    })
    $('#addProductModalForm').submit(async (e) => {
        e.preventDefault()
        let data = {};
        let formData = new FormData(e.target);
        for (let key of formData.keys()) {
            data[key] = formData.get(key);
        }
        myFetch('http://localhost:9000/product', data, "POST").then((res) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                wreload.reload()
            })
        })
    })
    $('#editProductForm').submit(async (e) => {
        e.preventDefault()
        let data = {};
        let formData = new FormData(e.target);
        for (let key of formData.keys()) {
            data[key] = formData.get(key);
        }
        myFetch('http://localhost:9000/product', data, "PUT").then((res) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                wreload.reload()
            })
        })
    })
})

const myFetch = (url, data = {}, dataMethod) => {
    let promise = new Promise(function (resolve, reject) {
        fetch(url, { headers: { "Content-Type": "application/json" }, method: dataMethod, body: JSON.stringify(data), }).then((res) => { resolve(res.json()) })
    });
    return promise;
}