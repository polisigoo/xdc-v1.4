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
        <p>Hello {{ $req->first_name }}!</p>
        <p>Your request to become a content provider has been approved</p>
        <hr>
        <p>You can log in to your dashboard using your email address and this auto generated password which can be changed later by you if you wish
            <em><strong>{{$password}}</strong></em>
        </p>

        <div style="margin-top: 2rem;">
        	<a href="#" style="padding: 8px 25px; color: white; background-color: green; text-decoration: none; border: solid 1px #00af00;">Go to Dashboard</a>
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