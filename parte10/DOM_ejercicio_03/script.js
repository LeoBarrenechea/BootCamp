
img = document.querySelector("#img");
button = document.querySelector("#btn");
button.addEventListener("click", change);

function change(){
    if (img.src = "reverso.png")
        img.src = "anverso.jpg";
    else
        img.src = "reverso.png";
}