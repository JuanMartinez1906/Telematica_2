document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo de cursos
    var courses = [
        { name: "Curso de HTML y CSS", platform: "Udemy", link: "https://www.udemy.com/course/curso-de-diseno-web-html-y-css-desde-cero-hasta-avanzado/" },
        { name: "Introducción a JavaScript Moderno", platform: "JavaScript. Info", link: "https://es.javascript.info" },
        { name: "Curso de Python para Principiantes", platform: "Coursera", link: "https://www.coursera.org/learn/python" },
        { name: "Curso Introductorio de Seguridad en Redes", platform: "LACNIC", link: "https://campus.lacnic.net/cursos/curso-introductorio-de-seguridad-en-redes/" },
        { name: "Curso de Redes", platform: "Edutin Academy", link: "https://edutin.com/curso-de-redes-4158" },
        { name: "Curso de fundamentos de Redes: TCP/IP", platform: "OpenWebinars", link: "https://openwebinars.net/cursos/tcp-ip/"},
        { name: "Curso Completo de Bases de Datos. Aprende SQL y MySQL", platform: "Udemy", link: "https://www.udemy.com/course/curso-completo-de-bases-de-datos-sql-y-mysql/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA-WebIndex_la.ES_cc.LATAM&campaigntype=Search&portfolio=LATAM&language=ES&product=Course&test=&audience=DSA&topic=&priority=&utm_content=deal4584&utm_term=_._ag_120316893258_._ad_504879908808_._kw__._de_c_._dm__._pl__._ti_dsa-1254542836277_._li_1003653_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDjvIw58gPf2qJvT8XI5s7jSTJyrbwPL5ZtleAM2I_esEDz7SpsiJ3RcaAsgsEALw_wcB&couponCode=2021PM25" },
        { name: "Certificado profesional de Ciberseguridad de Google", platform: "Coursera", link: "https://www.coursera.org/professional-certificates/google-cybersecurity?utm_medium=sem&utm_source=gg&utm_campaign=B2C_LATAM_google-cybersecurity_google_FTCOF_professional-certificates_countrygroup-1&campaignid=20860268620&adgroupid=153955586102&device=c&keyword=cybersecurity&matchtype=b&network=g&devicemodel=&adposition=&creativeid=684288691578&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDjv7ymj3cQxeMLeBpnYLsdY6SEnnFinbOBYB4BfD25obafAEQFIYJpEaAheOEALw_wcB"},
        { name: "IPv6 en Redes Masivas", platform: "LACNIC", link: "https://campus.lacnic.net/cursos/ipv6-en-redes-masivas/"},
        { name: "Estructuras de Datos", platform: "Platzi", link: "https://platzi.com/clases/1469-algoritmos-practico/16967-estructuras-de-datos/"},
        { name: "Master en AWS Amazon Web Services", platform: "Udemy", link: "https://www.udemy.com/course/master-en-amazon-web-services-curso-completo-desde-cero/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.ES_cc.LATAM&campaigntype=Search&portfolio=LATAM&language=ES&product=Course&test=&audience=DSA&topic=&priority=&utm_content=deal4584&utm_term=_._ag_121424001579_._ad_515898216167_._kw__._de_c_._dm__._pl__._ti_dsa-1237025622372_._li_1003654_._pd__._&matchtype=&gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zx2NwWn3yGdOtApFeSaP7Qo_XeJfVgJG6g4c7sPFFssdJb3C4Y9eyQxoC2xkQAvD_BwE&couponCode=2021PM25"}
        ];
    // Función para mostrar los cursos en la página
    function displayCourses() {
        var coursesList = document.getElementById('courses-list');
        courses.forEach(function(course) {
            var courseDiv = document.createElement('div');
            courseDiv.classList.add('course');
            var courseHTML = `
                <h2>${course.name}</h2>
                <p>Plataforma: ${course.platform}</p>
                <a href="${course.link}" target="_blank">Ver Curso</a>
            `;
            courseDiv.innerHTML = courseHTML;
            coursesList.appendChild(courseDiv);
        });
    }

    // Llama a la función para mostrar los cursos al cargar la página
    displayCourses();
});

function searchCourses() {
    var input, filter, courses, course, title, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    courses = document.getElementsByClassName('course');

    for (i = 0; i < courses.length; i++) {
        course = courses[i];
        title = course.getElementsByTagName('h2')[0];
        txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo de cursos
    var courses = [
        // Tu array de cursos aquí...
    ];

    // Función para mostrar los cursos en la página
    function displayCourses() {
        var coursesList = document.getElementById('courses-list');
        courses.forEach(function(course) {
            var courseDiv = document.createElement('div');
            courseDiv.classList.add('course');
            var courseHTML = `
                <h2>${course.name}</h2>
                <p>Plataforma: ${course.platform}</p>
                <a href="${course.link}" target="_blank">Ver Curso</a>
            `;
            courseDiv.innerHTML = courseHTML;
            coursesList.appendChild(courseDiv);
        });
    }

    // Llama a la función para mostrar los cursos al cargar la página
    displayCourses();
});

function searchCourses() {
    var input, filter, courses, course, title, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    courses = document.getElementsByClassName('course');

    for (i = 0; i < courses.length; i++) {
        course = courses[i];
        title = course.getElementsByTagName('h2')[0];
        txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    }
}

function filterCourses() {
    var platformFilter = document.getElementById('platform').value;
    var courses = document.getElementsByClassName('course');

    for (var i = 0; i < courses.length; i++) {
        var course = courses[i];
        var coursePlatform = course.querySelector('p').textContent.split(': ')[1]; // Obtiene la plataforma del curso

        // Aplica el filtro de plataforma
        if (platformFilter === '' || coursePlatform === platformFilter) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    }
}
