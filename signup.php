<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
</head>
<body>
    <h1>Sign Up</h1>
    <form action="registro.php" method="post">
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" required><br>
        <label for="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" required><br>
        <button type="submit">Registrarse</button>
    </form>
    <script src="signup.js"></script>
</body>
</html>
