define(['jquery'],function($){
function TimerButton(){
   var $btn =$('<input class="timer-button" type="button" disabled>'),
       cfg={
          container:'body',
          num:6,
          title:'agree',
          onclick:null
       },
num,timer;

  this.show= function(conf) {
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    num=cfg.num;
    $btn.val(cfg.title+'('+cfg.num+'s)');
      timer = setInterval(function() {
      num--;
      if(num === 0) {
        clearInterval(timer);
        $btn.val(cfg.title);
        $btn.removeAttr('disabled');
      }else{
        $btn.val(cfg.title+'('+num+'s)')
      }
    }, 1000);
    $btn.click(cfg.onClick)  
  };
}
  return TimerButton;
})
