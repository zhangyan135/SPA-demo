$(function(){
  var $box=$('#boox');
  var init;
  var html=['<img class="img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg" />',
  '<img class="img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1731472669,4215674773&fm=26&gp=0.jpg"/> ',
  '<img class="img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2509999802,3104701489&fm=26&gp=0.jpg"/>'];
function Carousel(){}
var options={
  width:'',
  height:'',
  anim:'default',
  autoplay:true,
  delay:1000,
  idx:0,
  pagePation:'insider',
  trigger:'click'
}
var Carouselfn=Carousel.prototype;

Carouselfn.init =function(option){
  this.option=$.entend({},options,option);
  this.$dom=$(this.option.elem);
  this.carousel_list=this.$dom.find($box+'>*')
  this.option.idx=this.option.idx<this.carousel_list.length;
  this.$dom.attr('kui-anim',this.option.anim);
  this.$dom.css({width:this.option.width,height:this.option.height})
  this.autoplay();
  return this;
}
Carouselfn.autoplay=function(){
  var self=this;
  if(!self.option.autoplay) return;
  self.Timer=setInterval(_setIntervalfn,self.option.delay);
  self.carousel_list.on('mouseover',function(){
    clearIntervar(self.Timer)
  })
  self.carousel_list.on('mouseout',function(){
    self.Timer=setInterval(_setIntervalfn,self.option.delay)
  })
  function _setIntervalfn(){
    self.option.idx+=1;
    if(self.option.idx>=self.carousel_list.length){
      self.option.idx=0;
    }
    }
 }
return new swiper();

})
