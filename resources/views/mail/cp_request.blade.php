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
        <p>Hello from {{ config('app.name') }}!</p>
        <p>{{$req->email}} is requesting to become a content provider</p>
        <hr>
        <p>Name: {{$req->first_name}} {{$req->last_name}}</p>
        <p>Company Name: {{$req->company_name}}</p>
        <p>Mobile Number: {{$req->mobile_number}}</p>
        <p>Content Types: {{ucwords($req->content_types) }}</p>
        <p>Date: {{$req->created_at}}</p>

        <div style="margin-top: 2rem; display: flex; ">
        	<a href="/administrator#/cp/requests" style="padding: 8px 25px; color: white; background-color: green; text-decoration: none; border: solid 1px #00af00;">Accept</a>
        	<a href="/administrator#/cp/requests" style=" margin-left: 15px; color:white; padding: 8px 25px; text-decoration: none; background-color: red; border: solid 1px #af0000;"> Reject</a>
        </div>
    </div>
    <!-- END BODY -->

    <div class="footer" style="margin-top: 100px;background: #e8e8e8;padding: 20px;">
        <p>Please do not reply to this email. Emails sent to this address will not be answered.
        </p>
        <p>Copyright © {{ date('Y') }} {{ config('app.name') }}  </p>
    </div>
</div>
</body>
</html>