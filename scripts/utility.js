function setBgColorByID(elementId) {
  elementId.classList.toggle('bg-[#F7F8F8]');
  elementId.classList.toggle('bg-[#1DD100]');
}
function setTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = parseInt(element.innerText);
  const setElementText = elementText - 1;
  element.innerText = setElementText;
}
function setTotalPriceById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = parseInt(element.innerText);
  const setElementText = elementText + 550;
  element.innerText = setElementText;
}
function enableButtonById(elementId) {
  const element = document.getElementById(elementId);
  element.removeAttribute('disabled');
}
function setElementsById(elementId, value) {
  const element = document.getElementById(elementId);
  const td = document.createElement('td');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  p1.innerText = value;
  p2.innerText = 'Economoy';
  p3.innerText = 550;
  td.appendChild(p1);
  td.appendChild(p2);
  td.appendChild(p3);
  element.appendChild(td);
}
