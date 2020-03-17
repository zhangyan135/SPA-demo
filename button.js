 $(function(){
   var $btn=$('#btn'),
      num=60,
      timer;
$btn.click(function(){
  timer=window.setInterval(function() {
      num=--num;
      $btn.attr('disabled','disabled');
      $btn.html(num+'S')
      if(num <= -1) {
        window.clearInterval(timer);
          $btn.html('获取验证码');
          $btn.removeAttr('disabled');
      }          
  }, 1000);
})
})
