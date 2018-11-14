<template>
    <div class="main py-2 px-2 col-md-12">
        <section>

            <div class="head-content py-2 px-2">
                <div class="fs-24 text-white">Getting Started with R2H Live</div>
                <div class="span px-5 bg-2 my-2"></div>
                <div class="text-white my-2">
                    You are currently in test mode. Feel free to explore the dashboard or do the following:
                </div>
                <div class="col-sm-7 col-md-4 d-flex bg-1 px-0">
                    <div class="col-2 px-0 d-flex align-items-center justify-content-center"><i class="fa fa-book text-danger fs-24"></i></div>
                    <div class="col-9 px-0 py-2">
                        <div class="fs-12">Activate your account <span class="dgrey pl-1">74%</span></div>
                        <div class="fs-11 dgrey">Complete the Activation form to activate the account</div>
                    </div>
                    <div class="col-1 px-2 d-flex align-items-center"><i class="fa fa-angle-right mygrey px-1"></i></div>
                </div>
            </div>
        </section>
        <section>
            <form class="mt-4">
                <div class="fw fs-18 px-3 my-3">CONTACT INFO</div>
                <div class="d-flex">
                    <div class="form-group col-6">
                        <label for="fname">First Name</label>
                        <input type="text" class="form-control" id="fname" name="fname">
                    </div>
                    <div class="form-group pl-3 col-6">
                        <label for="lname">Last Name</label>
                        <input type="text" class="form-control" id="lname" name="lname">
                    </div>
                </div>
                <div class="form-group col-10">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email">
                </div>
                <div class="form-group pl-3 col-10">
                    <label for="company-name">Company / Production Name</label>
                    <input type="text" class="form-control" id="company-name" name="company-name">
                </div>
                <div class="d-flex">
                    <div class="form-group col-6">
                        <label for="number">Mobile / Contact Number</label>
                        <input type="text" class="form-control" id="number" name="number">
                    </div>
                    <div class="form-group pl-3 col-6">
                        <label for="number2">Alternative Number</label>
                        <input type="text" class="form-control" id="number2" name="number2">
                    </div>
                </div>
                <div class="form-group pl-3">
                    <input type="text" class="form-control my-2" id="address2" name="address2">
                    <input type="text" class="form-control my-2" id="address3" name="address3">
                    <div class="d-flex row">
                        <div class="d-flex flex-column col-6">
                            <input class="form-control mb-2" type="text" name="states" id="states" placeholder="States">
                            <input class="form-control" type="text" name="location" id="location" placeholder="Location : City/Town/District">
                        </div>
                        <div class="d-flex flex-column col-6">
                            <input class="form-control mb-2" type="number" name="pin" id="pin" placeholder="Pin Code">
                            <input class="form-control" type="text" name="country" id="country" placeholder="Country : Country Name">
                        </div>
                    </div>

                </div>
                <div class="px-3 col-12 col-md-8">
                    <div class="fw fs-18 my-3">BANK ACCOUNT</div>
                    <div class="form-group d-flex">
                        <label for="IFSC" class="w-75 text-right mr-4">Branch IFSC Code <span class="col-red">*</span></label>
                        <input type="text" name="IFSC" class="form-control" id="IFSC">
                    </div>
                    <div class="form-group d-flex">
                        <label for="account-number" class="w-75 text-right mr-4">Account Number <span class="col-red">*</span></label>
                        <input type="number" class="form-control" id="account-number">
                    </div>
                    <div class="form-group d-flex">
                        <label for="account-number2" class="w-75 mr-4 text-right">Re-Enter Account Number <span class="col-red">*</span></label>
                        <input type="number" class="form-control" id="account-number2">
                    </div>
                    <div class="form-group d-flex">
                        <label for="beneficiary-name" class="w-75 text-right mr-4">Beneficiary Name <span class="col-red">*</span></label>
                        <input type="text" class="form-control" id="beneficiary-name">
                    </div>
                </div>

                <div class="document px-3 col-12 col-md-8">
                    <div class="fw fs-18 my-3">BANK ACCOUNT</div>
                    <div class="form-group d-flex">
                        <label  class="w-25 text-left ml-4">Identity Proof</label>
                        <div class="w-50">
                            <button type="button" class="form-control w-100" ><i class="fa fa-plus" aria-hidden="true"></i></button>
                            <input type="file" name="" >
                            <small class="dgrey">Upload the scan copy of Govt identity - Driving License / Aadhar / Passport / Voter ID / Other Registration</small>
                        </div>
                    </div>
                    <div class="form-group d-flex">
                        <label for="pan-card" class="w-25 text-left ml-4">PAN Card</label>
                        <button type="button" class="form-control w-50" id="pan-card"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <input type="file" name="pan-card" >
                    </div>
                    <div class="form-group d-flex">
                        <label for="passport" class="w-25 text-left ml-4">Passport Photo</label>
                        <button type="button" class="form-control w-50" id="passport"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <input type="file" name="passport">
                    </div>
                    <div class="form-group d-flex">
                        <label for="cancelled-cheque" class="w-25 text-left ml-4">Cancelled Cheque</label>
                        <button type="button" class="form-control w-50" id="cancelled-cheque"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <input type="file" name="cancelled-cheque" >
                    </div>
                    <div class="form-group d-flex">
                        <label class="w-25 text-left ml-4">Other Documents</label>
                        <div class="w-50">
                            <button type="button" class="form-control w-100" ><i class="fa fa-plus" aria-hidden="true"></i></button>
                            <input type="file" name="" >
                            <small class="dgrey">Upload the scan copy of any other documents if any like Certificates / Awards / Other Private Registration / Accreditations
                                Registration</small>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        name: "activation"
    }
</script>

<style scoped>
    .span{
        height: 10px;
        width: 30px;
        border-radius: 20px;
    }
    .head-content{
        background-color: #52ace0;
    }
    .fs-11{
        font-size: 11px;
    }
    .fs-12{
        font-size: 12px;
    }
    .fs-18{
        font-size: 18px;
    }
    .fs-24{
        font-size: 24px;
        font-weight: 600;
    }
    .dgrey{
        color: #949494;
    }
    .bg-1{
        background-color: #e7ebf6;
    }
    .bg-2{
        background-color: #74bce7;
    }
    .fw{
        font-weight: 600;
    }
    .col-red{
        color: red;
        font-weight: 600;
    }
    .document input{
        display: none;
    }

</style>