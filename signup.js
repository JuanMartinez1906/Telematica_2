document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Aquí puedes realizar la lógica de autenticación
    // Por ejemplo, verificar si el nombre de usuario y la contraseña son correctos

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "registro.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById("mensaje").innerHTML = xhr.responseText;
            } else {
                console.error("Error en la solicitud: " + xhr.status);
            }
        }
    };
    xhr.send("usuario=" + usuario + "&contraseña=" + contraseña);
    // Redirigir al usuario a index.html después de iniciar sesión
});
