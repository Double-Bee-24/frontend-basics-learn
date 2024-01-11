"use strict"
function DataTable(config, data) {
  const tableDiv = document.querySelector(config.parent);
  const table = document.createElement("table");
  tableDiv.appendChild(table);
  table.style.width = "100%";  
  table.style.height = "auto";
  table.style.margin = "50px 0";
  table.setAttribute("class","table");
  table.setAttribute("border","1");
  
  createTitleRow(table, config);
  createMainRows(table, config, data);
  sortAll(table, users, config);
}
 
const config1 = {
   parent: '#usersTable',
   columns: [
     {title: 'Ім’я', value: 'name'},
     {title: 'Прізвище', value: 'surname'},
     {title: 'Вік', value: 'age'},
    ]
  };
 
const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
  {id: 30052, name: 'Ігор', surname: 'Ігоренко', age: 25},
  {id: 30053, name: 'Ольга', surname: 'Олійник', age: 30},
  {id: 30054, name: 'Михайло', surname: 'Михайлик', age: 18},
];

DataTable(config1, users);
DataTable(config1, users);

function createTitleRow(table, config) {
  let thead = document.createElement("thead");
  table.appendChild(thead);

  // Add symbol "№"
  const titleRow = thead.insertRow(0);
  const numberSymbolTh = document.createElement("th");
  const numberSymbolNode = document.createTextNode("№");
  numberSymbolTh.appendChild(numberSymbolNode);
  titleRow.appendChild(numberSymbolTh);
  numberSymbolTh.classList.add("id");
  let arrowUp = document.createElement("img");
  arrowUp.setAttribute("src","images/arrow-up.png");
  numberSymbolTh.appendChild(arrowUp);

  for(let i = 1; i <= config.columns.length; i++){
    const th = document.createElement("th");
    const node = document.createTextNode(config.columns[i - 1].title);
    th.appendChild(node);
    th.classList.add(config.columns[i - 1].value);
    titleRow.appendChild(th);

    arrowUp = document.createElement("img");
    arrowUp.setAttribute("src","images/arrow-up.png");
    th.appendChild(arrowUp);
  }  
}

function createMainRows(table, config, data) {
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  // Create row
  for(let i = 0; i < data.length; i++){
    const tableRow = tbody.insertRow(i);

    const numberTd = document.createElement("td");
    const numberTdNode = document.createTextNode((data[i].id % 10) + 1); // Reminder of id
    numberTd.appendChild(numberTdNode);
    tableRow.appendChild(numberTd);
    numberTd.classList.add("id");

    // Create sells
    for(let j = 1; j <= config.columns.length; j++){
      const td = document.createElement("td");
      const columnValue = config.columns[j - 1].value; // get value from config to use them like a key while creating node
      const node = document.createTextNode(data[i][columnValue]);
      td.classList.add(columnValue); // aaa
      td.appendChild(node);
      tableRow.appendChild(td);
    }   
  }
}

function sortAll(table, data, config){
  const titleCells = table.querySelectorAll("th");
  for(let i = 0; i < titleCells.length; i++){
    titleCells[i].addEventListener("click", sort.bind(titleCells[i]));
  } 
  
  function sort() {
    table.querySelector("tbody").remove();
    const dataCopy = JSON.stringify(data);
    const image = table.querySelector("img");
    let valueToCompare = this.className;

    if(valueToCompare === "age" || valueToCompare === "id"){
      data.sort((a, b) => a[valueToCompare] - b[valueToCompare]);
      if(JSON.stringify(data) === dataCopy){ // Make reverse sort if it's already sorted
        data.sort((a, b) => b[valueToCompare] - a[valueToCompare]);
        image.setAttribute("src","images/arrow-down.png")  
      }
    } else {
      data.sort((a, b) => a[valueToCompare].localeCompare(b[valueToCompare]));
      if(JSON.stringify(data) === dataCopy){ // Make reverse sort if it's already sorted
        data.sort((a, b) => b[valueToCompare].localeCompare(a[valueToCompare]));
        image.setAttribute("src","images/arrow-down.png")  
      }
    }
    
    console.log(data);
    createMainRows(table, config, data);
  }
}