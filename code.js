const zona = document.querySelector(".zona");

zona.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

zona.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("B");
    
    //Elije el número del 1-n para elegir el fondo
    zona.style.background = `url("./img/${n}B.png")`;
    //Estilos para el fondo añadido
    zona.style.backgroundSize= "100% 100%";
    zona.style.backgroundRepeat= "no-repeat";
    zona.style.backgroundPosition= "center";
    
})

for (let i=1; i<document.querySelector(".contenedor-dragones").children.length + 1; i++) {
    document.querySelector(`.dragon${i}`).addEventListener("dragstart", (e)=>cambiaFondo(i,e));
}

//Función que establece "B" y el número de imagen a usar
const cambiaFondo =(n,e) =>{
    e.dataTransfer.setData("B",n);
}