console.log("Alura");
//Seleccion de elementos//
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")
const txtEntrada = document.querySelector(".entrada")
const minusculas = document.querySelector(".texto-minusculas")
const respuesta = document.querySelector(".entrada2");
const seccion2 = document.querySelector(".figura")
const btnCopiar = document.querySelector(".btn-copiar")



//Boton de encriptar//

btnEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let texto = txtEntrada.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,)

    if(texto == ""){
        minusculas.style.backround = "#0a3871";
        minusculas.style.color = "#ffff";
        minusculas.style.fontWeight = "600";
        minusculas.textContent = "No deje este espacio vacio";

        setTimeout(()=>{
            minusculas.removeAttribute("style")
        },2000);
    }
    else if(texto !== txt){
        minusculas.style.backround = "#0a3871";
        minusculas.style.color = "#ffff";
        minusculas.style.fontWeight = "600";
        minusculas.textContent = "No incluya acentos y caracteres especiales";
        setTimeout(()=>{
            minusculas.removeAttribute("style")
        },2000);
    }
    
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        seccion2.remove("hidden");
    }
   
})

//Boton de Desencriptar//

   btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEntrada.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,)

    if(texto == ""){
        minusculas.style.backround = "#0a3871";
        minusculas.style.color = "#ffff";
        minusculas.style.fontWeight = "600";
        minusculas.textContent = "No deje este espacio vacio";

        setTimeout(()=>{
            minusculas.removeAttribute("style")
        },2000);
    }
    else if(texto !== txt){
        minusculas.style.backround = "#0a3871";
        minusculas.style.color = "#ffff";
        minusculas.style.fontWeight = "700";
        minusculas.textContent = "No incluya acentos y caracteres especiales";
        setTimeout(()=>{
            minusculas.removeAttribute("style")
        },2000);
    }
    
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        seccion2.remove();
    }
   
})

btnCopiar.addEventListener("click", ()=>{
    let textoAgregado = respuesta.textContent;
    navigator.clipboard.writeText(textoAgregado).then(()=>{
       
    })
});


//"e" es convertida para "enter"
// "i" es convertida para "imes"
// "a" es convertida para "ai"
// "o" es convertida para "ober"
// "u" es convertida para "ufat"


