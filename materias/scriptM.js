// Alterna la visibilidad del menú lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Cierra el menú si se hace clic fuera de él (en modo responsive)
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const showMenuBtn = document.getElementById('show-menu-btn');

    // Si se hace clic fuera del menú y del botón, oculta el menú
    if (!sidebar.contains(event.target) && !showMenuBtn.contains(event.target)) {
        sidebar.classList.remove('show');
    }
});

// Función para volver atrás
//function goBack() {
//    window.location.hash = "";
//}

// Desplaza al inicio de la sección indicada
function scrollToTop(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


// Cambia entre tema claro y oscuro
function toggleTheme() {
    document.body.classList.toggle('dark');
}

function volverAtras(){
    window.location.hash="../index.html";
}

let pdfDocs = [null, null]; // Almacena los documentos PDF para cada sección
let currentPages = [1, 1]; // Página actual para cada sección

function loadPDF(pdfUrl, section) {
    if (pdfUrl) {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        loadingTask.promise.then(pdf => {
            pdfDocs[section - 1] = pdf; // Almacena el documento PDF en la posición correspondiente
            console.log('PDF loaded');
            renderPage(currentPages[section - 1], section); // Renderiza la primera página
        }, reason => {
            // Error de carga del PDF
            console.error(reason);
        });
    }
}

// Función para renderizar una página
function renderPage(pageNum, section) {
    const pdfDoc = pdfDocs[section - 1]; // Obtiene el documento PDF correspondiente
    pdfDoc.getPage(pageNum).then(page => {
        const canvas = document.getElementById(`pdf-canvas-${section}`);
        const context = canvas.getContext('2d');

        // Calcula la escala en función del ancho del canvas
        const viewport = page.getViewport({ scale: 1 });
        const desiredWidth = canvas.clientWidth; // Ancho deseado del canvas
        const desiredHeight = canvas.clientHeight; // Altura deseada del canvas

        // Ajuste de escala basado en el tamaño de la pantalla
        let scale;
        if (window.innerWidth <= 600) { // Pantallas pequeñas (móviles)
            scale = desiredWidth / viewport.width; // Escala normal
        } else if (window.innerWidth <= 1024) { // Pantallas medianas (tablets)
            scale = Math.min(desiredWidth / viewport.width, 1.2); // Ligeramente más grande
        } else { // Pantallas grandes (computadoras)
            // Calcula un tamaño máximo que puedes usar, puedes ajustar estos valores
            const maxWidth = 1200; // Ancho máximo en píxeles para computadoras
            const maxHeight = 800; // Altura máxima en píxeles para computadoras
            const widthScale = maxWidth / viewport.width;
            const heightScale = maxHeight / viewport.height;
            scale = Math.min(widthScale, heightScale); // Usa la escala más pequeña
        }

        const scaledViewport = page.getViewport({ scale: scale });

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        // Renderiza la página PDF en el contexto del canvas
        const renderContext = {
            canvasContext: context,
            viewport: scaledViewport
        };
        page.render(renderContext);

        // Actualiza la información de la página
        document.getElementById(`page-info-${section}`).textContent = `Página ${pageNum} de ${pdfDoc.numPages}`;
    });
}




// Función para navegar a una página específica
function goToPage(section, direction) {
    const pdfDoc = pdfDocs[section - 1]; // Obtiene el documento PDF correspondiente
    if (pdfDoc) {
        const newPage = currentPages[section - 1] + direction;
        if (newPage > 0 && newPage <= pdfDoc.numPages) {
            currentPages[section - 1] = newPage; // Actualiza la página actual
            renderPage(newPage, section); // Renderiza la nueva página
        }
    }
}

function hideMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.remove('show');
    }
}
