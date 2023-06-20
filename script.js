// Currency rates (as of September 2021)
const rates = {
    PKR: 287.50, // Pakistani Rupee
    EUR: 0.92,   // Euro
    INR: 81.98,  // Indian Rupee
    GBP: 0.78,   // British Pound
    AED: 3.67    // UAE Dirham
  };
  
  // Function to perform currency conversion
  function convertCurrency() {
    const amountInput = document.getElementById('amount');
    const currencySelect = document.getElementById('currency');
    const resultDiv = document.getElementById('result');
  
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;
  
    if (isNaN(amount)) {
      resultDiv.textContent = 'Please enter a valid amount';
      return;
    }
  
    if (!rates.hasOwnProperty(currency)) {
      resultDiv.textContent = 'Invalid currency selected';
      return;
    }
  
    const convertedAmount = amount * rates[currency];
    resultDiv.textContent = convertedAmount.toFixed(2) + ' ' + currency;
  }
  
  // Attach click event listener to the convert button
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertCurrency);
  