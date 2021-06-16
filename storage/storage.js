//localStorage.setItem('test', 1);

function local(){
var localCount=parseInt(localStorage.getItem('test')); // 1
localStorage.test=localCount+1;
console.log(localStorage.getItem('test'));
document.getElementById('inc').value=localStorage.getItem('test');
}
function session(){
//sessionStorage.setItem('check',0);
if(sessionStorage.check){
   console.log("session  exists"); 

}
else{
    sessionStorage.setItem('check',0);
}
var localSessionCount=parseInt(sessionStorage.getItem('check'));
sessionStorage.check=localSessionCount+1;
console.log(sessionStorage.getItem('check'));
document.getElementById('count').value=sessionStorage.getItem('check');
}