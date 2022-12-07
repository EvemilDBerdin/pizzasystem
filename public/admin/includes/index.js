import home from '../views/home.js'
import users from '../views/users.js'
import product from '../views/product.js'
import purchase from '../views/purchase.js'
import profile from '../views/profile.js'
const urlArr = window.location.href

// home
window.addEventListener("load", async function () {     
    switch (urlArr.split('/')[7]) {
        case '#customer':
            new Promise((resolve) => {
                resolve(loadPage('#customer'))
            }).then(() => {
                document.querySelectorAll('.edit-user').forEach(item => {
                    item.addEventListener('click', event => {
                        document.getElementById('editCustomerModal').setAttribute('style', 'display: block')
                        fetch('http://localhost:9000/users/' + event.target.getAttribute("data-helper"), {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "GET"
                        }).then((res)=>{
                            return res.json()
                        }).then((data)=>{ 
                            // $('#editCustomerForm').find('input[name="firstname"]').val(data[0].firstname)
                            // $('#editCustomerForm').find('input[name="lastname"]').val(data[0].lastname)
                            // $('#editCustomerForm').find('input[name="email"]').val(data[0].email)
                            // $('#editCustomerForm').find('input[name="age"]').val(data[0].age)
                            // $('#editCustomerForm').find('input[name="address"]').val(data[0].address)
                            // $('#editCustomerForm').find('input[name="contact"]').val(data[0].contact)
                        })
                    })
                })
                document.querySelectorAll('.delete-user').forEach(item => {
                    item.addEventListener('click', event => {
                        Swal.fire({
                            title: 'Are you sure you want to delete this?',
                            text: 'You will not be able to undo this!',
                            showCancelButton: true,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire('Saved!', '', 'success').then(() => {
                                    fetch('http://localhost:9000/users/' + event.target.getAttribute("data-helper"), {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        method: "DELETE"
                                    }).then(()=>{
                                        window.location.reload()
                                    })
                                })
                            }
                        })

                    })
                })
            })
            break;
        case '#product':
            new Promise((resolve) => {
                resolve(loadPage('#product'))
            }).then(() => {
                document.querySelectorAll('.edit-user').forEach(item => {
                    item.addEventListener('click', event => {
                        let id = event.target.getAttribute("data-helper")
                        document.getElementById('editCustomerModal').setAttribute('style', 'display: block')
                    })
                })
                document.querySelectorAll('.delete-user').forEach(item => {
                    item.addEventListener('click', event => {
                        let userid = event.target.getAttribute("data-helper")
                        var result = false
                        Swal.fire({
                            title: 'Are you sure you want to delete this?',
                            text: 'You will not be able to undo this!',
                            showCancelButton: true,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire('Saved!', '', 'success').then(() => {
                                    let res = fetch('http://localhost:8080/' + userid, {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        method: "DELETE"
                                    }).then(()=>{
                                        window.location.reload()
                                    })
                                })
                            }
                        })

                    })
                })
            })
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
document.querySelector('.homenavigationbar').addEventListener('click', async () => {
    window.location.href = ''
    loadPage()
})

// users
document.querySelector('.usersnavigationbar').addEventListener('click', async () => {
    window.location.href = '#customer'
    loadPage('#customer')
})

// product
document.querySelector('.productnavigationbar').addEventListener('click', async () => {
    window.location.href = '#product'
    loadPage('#product')
})

// purchase
document.querySelector('.purchasenavigationbar').addEventListener('click', async () => {
    window.location.href = '#purchase'
    loadPage('#purchase')
})

// profile
document.querySelector('.profilenavigationbar').addEventListener('click', async () => {
    window.location.href = '#profile'
    loadPage('#profile')
})

// logout
document.querySelector('.adminlogoutnavigationbar').addEventListener('click', () => {
    Swal.fire({
        title: 'Do you want to Logout?',
        text: 'Please confirm to logging out',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Logging out!', '', 'success').then(() => {

            })
        }
    })
})


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

