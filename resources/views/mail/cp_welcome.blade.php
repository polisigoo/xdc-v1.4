<html>
<style>
    .content {
        background:#fff;
        width:80%;
        margin: 50px auto;
        padding:50px;
    }
    .logo {
        width:25%;
        margin:0 auto;
        text-align: center;
    }
    .logo span {
        margin-top:50px;
    }
    .logo p  {
        display: inline-block;
        position: relative;
        color: #404040;
        font-size: 25px;
        font-family: sans-serif;
    }
    .footer {
        margin-top:100px;
        background:#e8e8e8;
        padding:20px;
    }
</style>
<body>
<div class="content" style="background: #fff;width: 50%;margin: 50px auto;padding: 50px;">
    <div class="header">
        <div class="logo" style="width: 25%;margin: 0 auto;text-align: center;">
            <p style="display: inline-block;position: relative;color: #404040;font-size: 25px;font-family: sans-serif;">{{ config('app.name') }} </p>
        </div>
    </div>
    <hr>
    <!-- END Header -->

    <div class="body">
        <p>Dear Mr {{ $req->first_name }} {{$req->last_name}} </p>
        <p>R2H Membership Number: {{$req->id}}</p>
        
        <p>Welcome to the R2H CINE FAMILY</p>

        <p>Thank you for registering as a Content Provider. We trust that this relationship will be mutually beneficial.</p>
        <p>Please use the following temporary password <em><strong>{{$password}}</strong></em> and your membership number  to login into your R2H CINE FAMILY account, once you have logged in, you will be prompted to change your password to a custom one of your choice.</p>
        <p>Your new R2H Membership Card is attached hereto.</p>
        <p>
            Please do not hesitate to contact our Call Centre at 1800-XXXXXX (toll free within India) or Mobile Number +91-9819 724 722 should you have any queries. You can also visit our website www.r2h.in for the program terms and conditions as well as frequently asked questions.
        </p>

        <p>
            Kind Regards. <br>
            R2H CINE FAMILY Program <br>
            info.r2hlive@gmail.com <br>
            D-98, Pocket D, Okhla Phase I,  <br>
            Okhla Industrial Area, New Delhi, Delhi 110020

        </p>
    </div>
    <!-- END BODY -->

    
    </div>
</div>
</body>
</html>