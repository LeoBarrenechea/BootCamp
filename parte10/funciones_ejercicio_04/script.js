function change(amount)
{
    let libras = amount * 0.89 + " libras es " + amount + "€";
    let dollars = amount * 1.08 + " dolares es " + amount + "€";
    let yenes = amount * 138.46 + " yenes es " + amount + "€";

    console.log(libras + "\n" + dollars + "\n" + yenes);
}

let amout = parseFloat(prompt("¿que valor quieres verificar el cambio?"));
change(amout);