function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay(value){
    document.getElementById('display').value = '';
}

function calculate() {
    const displayValue = document.getElementById('display').value;
    try {
      const result = eval(displayValue); // Using eval to evaluate the expression
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }