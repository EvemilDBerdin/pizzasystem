class home {
    static async get() {
        let str =  ''
        str += `<div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h3 class="text-themecolor">Home</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Home</li>
                        </ol>
                    </div>  
                </div> 
            <div class="row"> 
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex p-10 no-block">
                                <div class="align-self-center display-6 m-r-20"><i class="text-success icon-Target-Market"></i></div>
                                <div class="align-slef-center">
                                    <h2 class="m-b-0">2346 <small><i class="ti-angle-down text-danger"></i></small></h2>
                                    <h6 class="text-muted m-b-0">Total Visits</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex p-10 no-block">
                                <div class="align-self-center display-6 m-r-20"><i class="text-info icon-Dollar-Sign"></i></div>
                                <div class="align-slef-center">
                                    <h2 class="m-b-0">$8,759 <small><i class="ti-angle-up text-success"></i></small></h2>
                                    <h6 class="text-muted m-b-0">Total Revenue</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex p-10 no-block">
                                <div class="align-self-center display-6 m-r-20"><i class="text-primary icon-Inbox-Forward"></i></div>
                                <div class="align-slef-center">
                                    <h2 class="m-b-0">2,356 <small><i class="ti-angle-up text-success"></i></small></h2>
                                    <h6 class="text-muted m-b-0">Emails Sent</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex p-10 no-block">
                                <div class="align-self-center display-6 m-r-20"><i class="text-danger icon-Contrast"></i></div>
                                <div class="align-slef-center">
                                    <h2 class="m-b-0">38% <small><i class="ti-angle-down text-danger"></i></small></h2>
                                    <h6 class="text-muted m-b-0">Bounce Rate</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>`
        return str
    }
}


export default home