
p = document.querySelector("#paragraph");
p.innerHTML = `la variable es false`;
button = document.querySelector("#btn");
button.addEventListener("click", change);

function change(){
    if (p.innerHTML == `la variable es false`)
        p.innerHTML = `la variable es true`;
    else
        p.innerHTML = `la variable es false`;
}