window.onload = function() {
  let basePyramid = 17;
  let numberOfLines = (basePyramid + 1) / 2;
  let controlLeft = numberOfLines; 
  let controlRight = numberOfLines;
  //acessando onde ficará o corpo da pirâmide
  let triangle = document.querySelector(".triangle");

   for (let count = 0; count < numberOfLines; count += 1){
    // criando a quantidade de linhas dinamicamente 
    let lineDiv = document.createElement('div')
    lineDiv.className = 'line'
    // adicionando cada linha ao corpo
    triangle.appendChild(lineDiv)
   }
  //acessando todas as linhas para serem preenchidas
  let lines = document.querySelectorAll(".line");

  updateVisit();

  fillTriangle(lines);
  
  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        let count = parseInt(localStorage.count);
        count+=1;
        localStorage.count = count;
        document.getElementById("count").innerHTML = count;
      } else {
        localStorage.count = 1;
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }

  // Passa por todos as linhas (div com class line) e preenche o triangulo
  function fillTriangle(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
      controlRight += 1;
      controlLeft -= 1;
    }
  }

  // Cria uma caixa com base nas diferentes classes
  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }
}
