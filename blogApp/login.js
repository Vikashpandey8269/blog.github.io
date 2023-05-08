document.getElementsByClassName('logIn')[0].addEventListener('click',function(){
    document.getElementsByClassName('home')[0].style.display="block";
    document.getElementsByClassName('loginSection')[0].style.display="none";
    document.getElementsByClassName('creat')[0].style.display="none";
   

})
/** for new post */
document.getElementsByClassName('postBtn')[0].addEventListener('click',function(){
    document.getElementsByClassName('creat')[0].style.display="block";
    document.getElementsByClassName('home')[0].style.display="none";
    document.getElementsByClassName('loginSection')[0].style.display="none";
   

})
document.getElementsByClassName('homeBtn')[0].addEventListener('click',function(){
    document.getElementsByClassName('creat')[0].style.display="none";
    document.getElementsByClassName('home')[0].style.display="block";
    document.getElementsByClassName('loginSection')[0].style.display="none";
   

})
/**login */
