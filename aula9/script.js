const formul= document.getElementById("formulario")

formul.addEventListener("submit",(e)=>{
    e.preventDefault();
    let elementos = e.target.elements
    console.log(elementos[0].value);
})