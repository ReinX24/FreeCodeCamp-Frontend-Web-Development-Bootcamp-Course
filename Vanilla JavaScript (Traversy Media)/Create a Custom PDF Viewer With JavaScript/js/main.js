const url = '../docs/pdf.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1.5,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// Render the page
const renderPage = (pageNum) => {
    pageIsRendering = true;

    // Get the page
    pdfDoc.getPage(pageNum).then(currentPage => {
        // Set scale
        const viewPort = currentPage.getViewport({ scale })
        canvas.height = viewPort.height;
        canvas.width = viewPort.width;

        // For rendering the pdf on the screen
        const renderContext = {
            canvasContext: ctx,
            viewport: viewPort
        };

        // Rendering the current page and additional pages
        currentPage.render(renderContext).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        })

        // Output current page
        document.querySelector('#page-num').textContent = pageNum;
    });

}

// Check for pages rendering
const queueRenderPage = (currentPageNumber) => {
    if (pageIsRendering) {
        pageNumIsPending = currentPageNumber;
    } else {
        renderPage(currentPageNumber)
    }
}

// Show Prev Page
const showPrevPage = () => {
    // If the pageNum is less than or equal than 1, do nothing
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

// Get document
pdfjsLib.getDocument(url).promise.then(loadedPdf => {
    pdfDoc = loadedPdf;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
});