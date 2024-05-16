<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directorio de Cursos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Directorio de Cursos en Línea</h1>
    <!-- Barra de búsqueda -->
    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Buscar cursos...">
        <button onclick="searchCourses()">Buscar</button>
    </div>

    <!-- Contenedor de filtros -->
    <div class="filter-container">
        <label for="platform">Plataforma:</label>
        <select id="platform">
            <option value="">Todas</option>
            <option value="Udemy">Udemy</option>
            <option value="JavaScript. Info">JavaScript. Info</option>
            <option value="Coursera">Coursera</option>
            <option value="LACNIC">LACNIC</option>
            <option value="Edutin Academy">Edutin Academy</option>
            <option value="OpenWebinars">OpenWebinars</option>
            <option value="Platzi">Platzi</option>
            <!-- Agrega más opciones de plataforma aquí -->
        </select>
        <!-- Agrega más filtros según sea necesario -->
        <button onclick="filterCourses()">Aplicar Filtro</button>
    </div>

    <!-- Contenedor de la lista de cursos -->
    <div id="courses-list">
        <!-- Aquí se cargarán dinámicamente los cursos -->
    </div>








    <script src="scripts.js"></script>


</body>
</html>
