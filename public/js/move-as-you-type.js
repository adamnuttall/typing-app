var text = "The quick brown fox jumps over the lazy dog."
// var text = "Adam"
var index = 0;
var letters = 0;

function processText(t){
  var  processedText = ""
  processedText =  processedText + '<div class="char focused">'+ t[0] +'</div>'
  for(var x=1; x<t.length; x++){
    processedText = processedText + '<div class="char">'+ t[x] +'</div>'
  }
  return processedText
}

$(document).ready(function(){
  winWidth = $(document).width()
  margin = (winWidth/2) - 20
  $('.content').css({"margin-left": margin.toString() + "px"})
  $('.start').css({"margin-left": margin.toString() + "px"})
  $('.content').append(processText(text))
})

$(document).keypress(function(e){
  if(String.fromCharCode(e.keyCode) == text[index]) {
    current = $('.focused')
    next = $('.focused').next()
    $('.focused').removeClass('focused')
    current.addClass('done')
    next.addClass('focused')
    $('.content').animate({
      'marginLeft' : "-=29px"
    }, 50)
    index++
    letters++
  } else {
    p = $('.focused')
    p.effect('highlight', { color: 'red'} )
  }

})