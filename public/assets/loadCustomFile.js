
let base_url = window.location.origin
let type = ''
const arrScript = ["node_modules/jquery/jquery.min.js", "node_modules/bootstrap/js/popper.min.js", "node_modules/bootstrap/js/bootstrap.min.js", "node_modules/ps/perfect-scrollbar.jquery.min.js", "js/waves.js", "js/sidebarmenu.js", "js/custom.min.js", "node_modules/sparkline/jquery.sparkline.min.js", "node_modules/raphael/raphael.min.js", "node_modules/morrisjs/morris.min.js", "node_modules/d3/d3.min.js", "node_modules/c3-master/c3.min.js", "node_modules/vectormap/jquery-jvectormap-2.0.2.min.js", "node_modules/vectormap/jquery-jvectormap-world-mill-en.js", "js/dashboard2.js", "node_modules/styleswitcher/jQuery.style.switcher.js"]
const arrLink = ["uploads/index.ico", "node_modules/bootstrap/css/bootstrap.min.css", "css/pages/login-register-lock.css", "css/colors/default.css", "css/pages/dashboard2.css", "node_modules/c3-master/c3.min.css" , "node_modules/vectormap/jquery-jvectormap-2.0.2.css", "node_modules/morrisjs/morris.css", "node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css"]

const loadScript = (FILE_URL, async = false, type = "text/javascript") => {
    return new Promise((resolve, reject) => {
        try {
            const myScript = document.createElement("script");
            myScript.type = type;
            myScript.async = async;
            myScript.src = FILE_URL;

            myScript.addEventListener("load", (ev) => {
                resolve({ status: true });
            });

            myScript.addEventListener("error", (ev) => {
                reject({
                    status: false,
                    message: `Failed to load the script ${FILE_URL}`
                });
            });

            document.body.appendChild(myScript);
        } catch (error) {
            reject(error);
        }
    });
};


const loadLink = (FILE_URL, type) => {
    return new Promise((resolve, reject) => {
        try {
            const loadLink = document.createElement("link");
            if (type == 'image/png') {

                loadLink.type = type
                loadLink.rel = 'icon'
                loadLink.sizes = '16x16'
                loadLink.href = FILE_URL
            }
            else {
                loadLink.rel = type
                loadLink.href = FILE_URL
            }


            loadLink.addEventListener("load", (ev) => {
                resolve({ status: true });
            });

            loadLink.addEventListener("error", (ev) => {
                reject({
                    status: false,
                    message: `Failed to load the script ${FILE_URL}`
                });
            });

            document.head.appendChild(loadLink);
        } catch (error) {
            reject(error);
        }
    });
};




// Loading script dynamically
for (let i = 0; i < arrScript.length; i++) {
    loadScript(`${base_url}/portfolio/pizzawebapp/public/assets/${arrScript[i]}`).then(data => { console.log("Script loaded successfully", data) }).catch(err => { console.error(err) })
}

// Loading link dynamically
for (let i = 0; i < arrLink.length; i++) {
    (i == 0) ? type = 'image/png' : type = 'stylesheet'
    loadLink(`${base_url}/portfolio/pizzawebapp/public/assets/${arrLink[i]}`, type).then(data => { console.log("Link loaded successfully", data) }).catch(err => { console.error(err) })
}