document.getElementById('quotationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const companyName = document.getElementById('companyName').value;
  const clientName = document.getElementById('clientName').value;
  const clientEmail = document.getElementById('clientEmail').value;
  const clientEmail = document.getElementById('client_no').value;
  const service1 = document.getElementById('service1').value;
  const quantity1 = parseFloat(document.getElementById('quantity1').value);
  const price1 = parseFloat(document.getElementById('price1').value);
  const service2 = document.getElementById('service2').value;
  const quantity2 = parseFloat(document.getElementById('quantity2').value) || 0;
  const price2 = parseFloat(document.getElementById('price2').value) || 0;
  const service3 = document.getElementById('service3').value;
  const quantity3 = parseFloat(document.getElementById('quantity3').value) || 0;
  const price3 = parseFloat(document.getElementById('price3').value) || 0;


  // Calculate totals
  const total1 = quantity1 * price1;
  const total2 = quantity2 * price2;
  const total3 = quantity3 * price3;
  const grandTotal = total1 + total2 + total3;

  // Display quotation
  document.getElementById('displayCompanyName').textContent = companyName;
  document.getElementById('displayDate').textContent = new Date().toLocaleDateString();
  document.getElementById('displayClientName').textContent = clientName;
  document.getElementById('displayClientEmail').textContent = clientEmail;
  document.getElementById('displayClient_no').textContent = client_no;
  document.getElementById('displayFooterCompanyName').textContent = companyName;

  // Add services to the table
  const servicesBody = document.getElementById('displayServices');
  servicesBody.innerHTML = `
    <tr>
      <td>1</td>
      <td>${service1}</td>
      <td>${quantity1}</td>
      <td>$${price1.toFixed(2)}</td>
      <td>$${total1.toFixed(2)}</td>
    </tr>
    ${service2 ? `
    <tr>
      <td>2</td>
      <td>${service2}</td>
      <td>${quantity2}</td>
      <td>$${price2.toFixed(2)}</td>
      <td>$${total2.toFixed(2)}</td>
    </tr>
    ` : ''}
    
    ${service3 ? `
    <tr>
      <td>3</td>
      <td>${service3}</td>
      <td>${quantity3}</td>
      <td>$${price3.toFixed(2)}</td>
      <td>$${total3.toFixed(2)}</td>
    </tr>
    ` : ''}
  `;

  // Display grand total
  document.getElementById('displayTotal').textContent = grandTotal.toFixed(2);

  // Show the quotation display
  document.getElementById('quotationDisplay').classList.remove('hidden');
});
