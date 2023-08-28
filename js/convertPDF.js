document.getElementById('convertButton').addEventListener('click', () => {
    const pdfContent = document.getElementById('pdfContent');
    const pdfOptions = {
        margin: 10,
        filename: 'ejemplo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(pdfContent).set(pdfOptions).save();
});