/* global comList: true */
/* eslint no-console: ["error", { allow: ["log"]   }] */
var $dlgGoto = (function(){
  var $html=$(''+'<div class="titlebar">'
            +'<div class="titles">'
            +'<p class="title1">文件(F)</p>'
            +'<p class="title2">编辑(E)</p>'
            +'<p class="title3">格式(O)</p>'
            +'<p class="title4">查看(V)</p>'
            +'<p class="title5">帮助(H)</p>'
            +'</div>'
            +'<div class="opt">'
            +'<div class="files">'
              +' <option>新建</option>'
              +'<option>保存</option>'
              +'<option>打开</option>'
            +'</div>'
           +'<div class="edits">'
              +'<option>剪切</option>'
              +'<option>复制</option>'
              +'<option>粘贴</option>'
              +'<option>删除</option>'
           +'</div>'
            +'<div class="forms">'
             +' <option class="fontsize">字体</option>'
              +'<option>自动换行</option>'
            +'</div>'
            +'<div class="views">'
              +'<option>缩放</option>'
              +'<option>状态栏</option>'
            +'</div> ' 
            +'<div class="helps">'
             +'<option>查看帮助</option>'
              +'<option>问题反馈</option>'
             +' <option>关于记事本</option>'
            +'</div>'
         +'</div>'
           +'<textarea class="edit"></textarea>'
  +'</div>');
var $dlg = $(''
      + '<div class="notepad-dlg-mask notepad-dlg-font">'
        + '<div class="dialogbox notepad-dlgbox">'
          + '<div class="notepad-dlg-titlebar">'
            + '<span class="title">字体</span>'
            + '<span class="close-btn" title="关闭">✖</span>'
          + '</div>'
          + '<div class="main notepad-dlg-main">'
            + '<div class="font-family"><p>字体(F):</p></div>'
            + '<div class="font-style"><p>字形(Y):</p></div>'
            + '<div class="font-size"><p>大小(S):</p></div>'
            + '<fieldset class="sample">'
              + '<legend>示例</legend>'
              + '<p class="sample-txt">AaBbYyZz</p>'
            + '</fieldset>'
            + '<div class="script">'
              + '<label>'
                + '脚本(R):<br>'
                + '<select>'
                  + '<option value="西欧语言">西欧语言</option>'
                  + '<option value="中文 GB2312">中文 GB2312</option>'
                + '</select>'
              + '</label>'
            + '</div>'
            + '<input class="btn-ok btn" type="button" value="确定">'
            + '<input class="btn-cancel btn" type="button" value="取消">'
          + '</div>'
        + '</div>'
      + '</div>');
 var $titf=$html.find('.title1'),
    $tits=$html.find('.title2'),
    $titles=$html.find('.titlebar'),
    $titt=$html.find('.title3'),
    $titf=$html.find('.title4'),
    $titv=$html.find('.title5'),
    $fs=$html.find('.fontsize'),
    $edit=$html.find('.editk');
  function destory() { $dlg.remove();  }
   var $btnOk = $dlg.find('.btn-ok'),
       $btnClose = $dlg.find('.close-btn'),
       $btnCancel = $dlg.find('.btn-cancel'),
       $sample = $dlg.find('.sample-txt'),
       $titleBar = $dlg.find('.notepad-dlg-titlebar');
  function show(){
    $btnClose.click(destory);
    $btnCancel.click(destory);
    $dlg.click(function(e) {
      e.stopPropagation();
    });
    $tits.click(function(){
      $('.edits').css({display:'block'})
    })
    $tits.mouseout(function(){
      $('.edits').css({display:'none'})
    })
    $titt.click(function(){
      $('.forms').css({display:'block'})
    })
    $fs.click(function(){
      $('body').append($dlg);
      $('.forms').css({display:'none'})
    })
       $titf.click(function(){
      $('.views').css({display:'block'})
    })
    $titf.mouseout(function(){
      $('.views').css({display:'none'})
    })
    $titv.click(function(){
      $('.helps').css({display:'block'})
    })
    $titv.mouseout(function(){
      $('.helps').css({display:'none'})
    })
    $('body').append($html);
   }
  return {
    show:show
  };
})();
