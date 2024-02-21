const pwd = document.getElementById("pwd");
const chBox = document.getElementById("check");

const eye = document.getElementById("see");
/*chBox.addEventListener("change",function(e) {
    if (chBox.checked) {
        pwd.setAttribute("type","text");
    }
    else {
        pwd.setAttribute("type","password");
    }
})
*/

eye.addEventListener("click",function(e){
    pwd.type = "text";

eye.src = "/img/cerrar-ojo.png";
}) 
