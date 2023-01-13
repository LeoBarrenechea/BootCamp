function hello(num)
{
    let string;

    string = "hola\n";
    for (let i = 1; i < num; i++){
        string += "hola\n";
    }
    return string;
}

let string = hello(5);
let str = hello(3);