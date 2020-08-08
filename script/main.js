function onElementClick() {
  let number = this.getAttribute('data-number')
  let element = window.tableData[number - 1]
  window.location = element.url

  return false
}

function getStarRank(count) {
  return Math.ceil(Math.min(count, 1000) / 200)
}

const colors = {
  404: '#ffffff',
  200: '#003262ff',
}

const textColors = {
  404: '#000000ff',
  200: '#FDB515ff'
}

function checkExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status;
}

function addElementToTable(data, tableDiv) {
  let elDiv = document.createElement('div')
  let symbol = document.createTextNode(data.symbol)
  let bgColor = colors[checkExists(data.url)]
  let textColor = textColors[checkExists(data.url)]

  elDiv.appendChild(symbol)
  elDiv.setAttribute('class', 'table-element')
  elDiv.setAttribute('style', `grid-column:${data.col}; grid-row:${data.row}; background-color:${bgColor}; color:${textColor}`)
  elDiv.setAttribute('data-number', data.number)
  elDiv.setAttribute('href', data.url)
  tableDiv.appendChild(elDiv)
  elDiv.addEventListener('click', onElementClick)
}

window.onload = () => {
  let tableDiv = document.querySelector('#periodic-table')

  window.tableData.forEach((e) => {
    addElementToTable(e, tableDiv)
  })

  showElementDetails(window.tableData[0])
}
