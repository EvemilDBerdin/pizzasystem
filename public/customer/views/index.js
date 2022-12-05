import home from './home.js'; 
import product from './product.js'; 
import profile from './profile.js';

// home
window.addEventListener("load", async function(){
    document.querySelector("#pizzaadminbody").innerHTML = ''
    document.querySelector("#pizzaadminbody").innerHTML = await home.get();
});
document.querySelector('.homenavigationbar').addEventListener('click', async ()=>{
    document.querySelector("#pizzaadminbody").innerHTML = ''
    document.querySelector("#pizzaadminbody").innerHTML = await home.get();
})
 

// product
document.querySelector('.productnavigationbar').addEventListener('click', async ()=>{
    document.querySelector("#pizzaadminbody").innerHTML = ''
    document.querySelector("#pizzaadminbody").innerHTML = await product.get();
})
 

// profile
document.querySelector('.profilenavigationbar').addEventListener('click', async ()=>{
    document.querySelector("#pizzaadminbody").innerHTML = ''
    document.querySelector("#pizzaadminbody").innerHTML = await profile.get();
})

// logout
document.querySelector('.adminlogoutnavigationbar').addEventListener('click', ()=>{
    Swal.fire({
        title: 'Do you want to Logout?', 
        text: 'Please confirm to logging out', 
        showCancelButton: true,
        confirmButtonText: 'Confirm', 
      }).then((result) => { 
        if (result.isConfirmed) {
          Swal.fire('Logging out!', '', 'success').then(()=>{
            
          })
        }  
      })
})