function tabla() {
    for (let x = 1; x <= 10; x++) {
        for (let i = 1; i <= 10; i++){
            let resultado = x * i; 
            console.log(x + " X " + i + " = " + resultado); 
        }
    }
}

tabla();