// Add this at the top of your script.js file
const { jsPDF } = window.jspdf;

// Function to generate and download PDF
document.getElementById('downloadPdf').addEventListener('click', function () {
  const doc = new jsPDF();

  // Add company name
  const companyName = document.getElementById('displayCompanyName').textContent;
  doc.setFontSize(18);
  doc.text(companyName, 10, 10);

  // Add quotation details
  const date = document.getElementById('displayDate').textContent;
  doc.setFontSize(12);
  doc.text(`Date: ${date}`, 10, 20);

  // Add client details
  const clientName = document.getElementById('displayClientName').textContent;
  const clientEmail = document.getElementById('displayClientEmail').textContent;
  doc.text(`To: ${clientName} (${clientEmail})`, 10, 30);

  // Add services table
  const services = document.querySelectorAll('#displayServices tr');
  let yPos = 50; // Starting Y position for the table
  doc.setFontSize(12);

  // Table headers
  doc.text('#', 10, yPos);
  doc.text('Description', 20, yPos);
  doc.text('Quantity', 80, yPos);
  doc.text('Unit Price', 110, yPos);
  doc.text('Total', 140, yPos);
  yPos += 10;

  // Table rows
  services.forEach((service, index) => {
    const cells = service.querySelectorAll('td');
    doc.text(cells[0].textContent, 10, yPos); // #
    doc.text(cells[1].textContent, 20, yPos); // Description
    doc.text(cells[2].textContent, 80, yPos); // Quantity
    doc.text(cells[3].textContent, 110, yPos); // Unit Price
    doc.text(cells[4].textContent, 140, yPos); // Total
    yPos += 10;
  });

  // Add grand total
  const grandTotal = document.getElementById('displayTotal').textContent;
  doc.text(`Grand Total: $${grandTotal}`, 10, yPos + 10);

  // Save the PDF
  doc.save('quotation.pdf');
});