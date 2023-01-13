function trueOrFalse(num, n)
{
    let s;

    if (num > n)
        s = true;
    else
        s = false;
    return s;
}

let s = trueOrFalse(2, 2);

if (s == true)
    console.log("El primer numero es mas grande.");
else
    console.log("El primer numero no es mas grande.");