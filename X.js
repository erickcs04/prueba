let x = "X";


function VERTICAL() {
    for (let i = 0; i < 4; i++) {
        console.log(x);
    }
}

function HORIZONTAL() {
    let fila = "";
    for (let j = 0; j < 4; j++) {
        fila += x + " ";
    }
    console.log(fila);
}


VERTICAL();
HORIZONTAL();