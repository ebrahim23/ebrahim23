let text="I’m Ibrahim Khaled, I’m a web developer / designer",place=document.querySelector(".typewriter"),i=0;window.onload=function(){let e=setInterval(function(){place.textContent+=text[i],(i+=1)>text.length-1&&clearInterval(e)},100)};