<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/admin/main.css">
        <link rel="icon" sizes="100x100" href="/images/r2h_favicon_100px.png">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer>
</script> 
  </head>
  <body class="admin">
    @if (! Auth::guest())
    <div class="col-12 p-4">
        <div id="administrator"> </div>
    </div>
   @endif
</script>
</body>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
    <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>

  @if (! Auth::guest())
  <script src="/js/admin-js/manifest.js"></script>
  <script src="/js/admin-js/vendor.js"></script>
  <script src="{{asset('js/admin-js/app.js')}}"></script>
 @endif

</html>