let n;

n = prompt("escribe un numero");
p = document.querySelector("#num");
p.innerHTML = `${n}`;
button = document.querySelector("#btn");
button.addEventListener("click", addOne);


function addOne()
{
    p.innerHTML = parseInt(p.innerHTML)+ 1;
}
