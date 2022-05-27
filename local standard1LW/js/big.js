window.onload=function () {
            
    var btn=document.getElementsByClassName("btn");
    var back=document.getElementsByClassName("back");
    var login=document.getElementsByClassName("login");
    var close_all=document.getElementsByClassName("close_all");
    btn[0].onclick=function () {
        console.log('aaaaaa')
      back[0].style.display="block";
      login[0].style.display="block";
    }
    close_all[0].onclick=function () {
      back[0].style.display="none";
      login[0].style.display="none";
    }
    btn[1].onclick=function () {
        console.log('aaaaaa')
      back[1].style.display="block";
      login[1].style.display="block";
    }
    close_all[1].onclick=function () {
      back[1].style.display="none";
      login[1].style.display="none";
    }
  }