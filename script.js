function validar() {
    let cedula = document.getElementById("cedula").value;
    let resultado = document.getElementById("resultado");

    if (cedula.length !== 11 || isNaN(cedula)) {
        resultado.textContent = "CÉDULA INCORRECTA (Debe tener 11 dígitos)";
        resultado.style.color = "red";
        return;
    }

    let suma = 0;
    for (let i = 0; i < 10; i++) {
        let num = parseInt(cedula[i]);
        if (i % 2 === 0) { // Posiciones impares (según índice)
            num *= 1;
        } else { // Posiciones pares
            num *= 2;
            if (num > 9) num -= 9;
        }
        suma += num;
    }

    let digitoVerificador = (10 - (suma % 10)) % 10;
    let ultimoDigito = parseInt(cedula[10]);

    if (digitoVerificador === ultimoDigito) {
        resultado.textContent = "CÉDULA ES CORRECTA";
        resultado.style.color = "blue";
    } else {
        resultado.textContent = "CÉDULA ES INCORRECTA";
        resultado.style.color = "red";
    }
}
