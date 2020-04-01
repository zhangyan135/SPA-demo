requirejs.config({
  'paths':{
    "jquery":'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
})
require(['jquery'],function($){
  $(function(){
    var $btnadd=$('#add');
    $btnadd.click(function(){
      require(['timer-button'],function(TimerButton){
        var tb=new TimerButton();
        tb.show({
          num:6,
          title:'agree',
          onClick:function(){
            alert('同意')
          }
        })
      })
    })
  })
})
