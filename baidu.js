$(function(){
 var $username=$('#username'),
     $telephone=$('#telephone'),
     $password=$('#password'),
     $reg=$('#reg');

$reg.click(function(){
  if(!validate('#username')||!validate('#telephone')||!validate('#password')) return;
})     
$username.focusout(function(){
  if(!validate('#username')) $username.select();
});
$telephone.focusout(function(){
  if(!validate('#telephone')) $telephone.select();
});
$password.focusout(function(){
  if(!validate('#password')) $password.select();
})

  function validate(field){
      var $data=$(field),
          $msg=$(field+'-validation-message');
  
if($data.val()===''){
  $msg.html('不能为空');
  $data.select();
  return false;
}
if(field=='#telephone'&!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
  $msg.html('格式不正确');
  $data.select();
  return false;
}
$msg.html('');
       return true;
  }
})
