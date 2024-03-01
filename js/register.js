const inputs=document.querySelectorAll('input');

const expresiones ={
    email: /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/,
    psw: /^.{8,10}$/,
    telefono: /^\d{10}$/,
    username:  /^[a-zA-ZÀ-ÿ\s]{2,40}$/
}

const campos = {
    email: false,
    psw: false,
    telefono: false,
    username: false
}

const validarFormularioRegister = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampo(expresiones.email, e.target, "email");
            break;
        case "psw":
            validarCampo(expresiones.psw, e.target, "psw");
            validarpassword();
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
            break;
        case "username":
            validarCampo(expresiones.username, e.target,"username");
            break;
        case "confirmacion":
            validarpassword(); 
            break;   
    }
}

function validarCampo(expresion,input,campo){
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('is-invalid');
        document.getElementById(`${campo}`).classList.add('is-valid');
        campos[campo]=true;
    }
    else{
        document.getElementById(`${campo}`).classList.add('is-invalid');
        document.getElementById(`${campo}`).classList.remove('is-valid');
        campos[campo]=false;
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormularioRegister);
    input.addEventListener('blur',validarFormularioRegister);

})
const validarpassword = () => { 
const contrasena = document.getElementById ("psw");
const valid = document.getElementById ("valida");
if (contrasena.value !== valid.value || contrasena.value === '' || valid.value === '')
{
    document.getElementById("valida").classList.add('is-invalid');
    document.getElementById("valida").classList.remove('is-valid');
    campos["password"]=false;   
}
else{
    document.getElementById("valida").classList.add('is-valid');
    document.getElementById("valida").classList.remove('is-invalid');
    campos["password"]=true; 
}
}