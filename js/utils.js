function getInputFieldValue(inputId) {
  const fieldValueString = document.getElementById(inputId).value;
  const fieldValue = parseFloat(fieldValueString);
  return fieldValue;
}

function getElementValue(inputId) {
  const elementValueString = document.getElementById(inputId).innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}
