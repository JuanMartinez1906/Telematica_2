<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <h1>Registro</h1>
    <?php
    include 'conexion.php';

    // Verifica si se envió el formulario de registro
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $usuario = $_POST['usuario'];
        $contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT); // Encripta la contraseña

        // Inserta el nuevo usuario en la base de datos
        $sql = "INSERT INTO usuarios (usuario, contraseña) VALUES ('$usuario', '$contraseña')";
        
        if ($conn->query($sql) === TRUE) {
            echo "Usuario registrado exitosamente";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
    ?>

    <a href="login.php">Ir a página de inicio de sesión</a>
</body>
</html>
