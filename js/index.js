function login() {

    var mensaje = "Clave incorrecta...";
    var claves = new Array(3);

    claves[0] = "111";
    claves[1] = "hola";
    claves[2] = "jamhouse17";

    var pass = document.getElementById("clave");
    for (var i = 0; i < claves.length; i++) {
        if (claves[i] === pass.value) {
            mensaje = "Bienvenido al sistema...";
            location = "menu.html";
            break;
        }
    }

    alert(mensaje);
    document.getElementById("clave").value = "";
}
