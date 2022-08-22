function getInputFieldValue(inputId) {
  const fieldValueString = document.getElementById(inputId).value;
  //validation check
  if (isNaN(fieldValueString) || fieldValueString == "") {
    return "null";
  }
  const fieldValue = parseFloat(fieldValueString);
  return fieldValue;
}

function getElementValue(inputId) {
  const elementValueString = document.getElementById(inputId).innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function setElementValue(inputId, value) {
  const element = document.getElementById(inputId);
  element.innerText = value;
}
