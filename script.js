function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function showContent(materia) {
    const contentDisplay = document.getElementById('content-display');
    let content;

    switch (materia) {
        // PRIMER AÑO
        case 'algebra':
            content = 'Contenido sobre algebra: Introducción a la programación.';
            break;
        case 'edi':
            content = 'Contenido sobre edi: Programación orientada a objetos.';
            break;
        case 'epa':
            content = 'Contenido sobre epa: Desarrollo de aplicaciones web.';
            break;
        case 'ayp1':
            content = 'Contenido sobre ayp1: Aquí puedes aprender sobre SQL, NoSQL y más.';
            break;
        case 'discretas':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'am':
            content = 'Contenido sobre am: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        
        // SEGUNDO AÑO
        case 'ayp2':
            // ALGORITMICA Y PROGRAMACIÓN II
            content = `
            <br><br>
            
            <h1> Algoritmica y Programación II </h1>
            <p><strong>[UNIDADES]</strong></p>
            <ul>
                <li> Unidad 1: Memoria Dinámica</li>
                <li> Unidad 2: Manejo de Excepciones</li>
                <li> Unidad 3: Programación con Recursividad</li>
                <li> Unidad 4: Eficiencia y análisis de algoritmos</li>
                <li> Unidad 5: Verificación y corrección de algoritmos</li>
                <li> Unidad 6: Tipos de Datos Abstractos</li>
                <li> Unidad 7: ADT Lista Ordenada</li>
                <li> Unidad 8: ADT Pila</li>
                <li> Unidad 9: ADT Cola</li>
                <li> Unidad 10: ADT Árbol Binario de Búsqueda (ABB)</li>
                <li> Unidad 11: ADT Grafo Dirigido</li>
                <li> Unidad 12: Algoritmos avanzados de ordenamiento</li>
                <li> Unidad 13: Algoritmos avanzados de búsqueda</li>
                <li> Unidad 14: Estrategia de diseño de algoritmos</li>
            </ul>
            <button><a href="/materias/ayp2.html" style="text-decoration: none; color:black">IR A LA UNIDAD</a></button>`;
            break;
        case 'adc':
            // ARQUITECTURA DE COMPUTADORAS
            content = ` 
                <br><br>
                <h1> Arquitectura de Computadoras</h1>
                <p><strong>[UNIDADES]</strong>
                    <b>Unidad 1:</b> Introducción a la Arquitectura<br>
                    <b>Unidad 2:</b> Técnicas Digitales<br>
                    <b>Unidad 3:</b> Nivel Lógico Digital<br>
                    <b>Unidad 4:</b> Nivel Micro-Arquitectura<br>
                    <b>Unidad 4:</b> Entrada-Salida<br>
                    <b>Unidad 5:</b> Microcontroladores<br>
                    <b>Unidad 6:</b> Arquitecturas no convencionales<br>
                </p>
                <button><a href="materias/adc.html">IR A LA UNIDAD</a></button>
                <button><a href="pdf/arquitectura.pdf" download>Descargar PDF</a></button>`;
            break;
        case 'syo':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'poo':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'bd1':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'ic':
            content = `
            <br><br>
            <h1> Introducción a la Concurrencia </h1>
            <p><strong>[UNIDADES]</strong></p>
            <ul>
                <li>Unidad 1: Introducción a la Arquitectura</li>
                <li>Unidad 2: Técnicas Digitales</li>
                <li>Unidad 3: Nivel Lógico Digital</li>
                
            </ul>
            <p><a href="#">IR A LA UNIDAD</a></p>
            `;
            break;
    
        // TERCER AÑO
        case 'so':
            content = `
            <br><br>
            <h1> Sistemas Operativos </h1>
            <p><strong>[UNIDADES]</strong></p>
            <ul>
                <li>Unidad 1: Introducción a Sistemas Operativos</li>
                <li>Unidad 2: Procesos, Planificación y STR</li>
                <li>Unidad 3: Comunicación entre procesos (IPC)</li>
                <li>Unidad 4: Administración de memoria</li>
                <li>Unidad 5: Sistemas de archivos</li>
                <li>Unidad 6: Entrada - Salida</li>
                <li>Unidad 7: Introducción a los Sistemas Distribuidos</li>
                
            </ul>
            <button><a href="#">IR A LA UNIDAD</a></button>
            `;
            break;
        case 'is1':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'll':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'ds':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'fti':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'is2':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        
        // CURSOS
        case 'html-css-js':
            content = 'Contenido sobre discretas: Aquí puedes aprender sobre estructuras de datos y algoritmos.';
            break;
        case 'diplo-apps':
            content = `
            <br><br>
            <h1> DIPLOMATURA EN PROGRAMACIÓN DE APLICACIONES </h1>
            <p> <strong> [MÓDULOS DE LA DIPLOMATURA]</strong></p>
            <ul> 
                <li> 1: Programación en Lenguaje C (2 meses)</li>
                <li> 2: Base de Datos con PHP - MyAdmin (2 meses)</li>
                <li> 3: Programación de Aplicaciones con Java - Android (2 meses)</li>
            </ul>

            <p> <br> La formación entrega certigicación de la Universidad del Chubut</br></p>
            <button><a href="materias/diplo-apps.html" style="text-decoration: none; color:black">IR A LA UNIDAD</a></button>
            `;
            break;

        default:
            content = 'Selecciona una opción para ver su contenido aquí.';
            break;
    }

    contentDisplay.innerHTML = content;
}

function toggleTheme() {
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleButton = document.querySelector('.toggle-btn');

    body.classList.toggle('dark');
    sidebar.classList.toggle('dark');
    mainContent.classList.toggle('dark');

    // Cambiar el texto del botón según el tema
    if (body.classList.contains('dark')) {
        toggleButton.innerText = 'Cambiar a Modo Claro';
    } else {
        toggleButton.innerText = 'Cambiar a Modo Oscuro';
    }
}
