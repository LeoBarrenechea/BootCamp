function divided()
{
    let numDivided;

    while (true)
    {
        num = parseInt(prompt("escribe el primer numero"));
        n = parseInt(prompt("escribe el segundo numero"));
        if (n == 0)
            break;
        numDivided = num / n;
        alert(numDivided);
    }
}

divided();