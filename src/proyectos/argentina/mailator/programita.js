var d = document;

function nuevoTitulo(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    coso.className = "titulo";
    var textito = d.getElementById("titulo");
    var node = document.createTextNode(titulo.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    titulo.value="";
}

function nuevoTitulito(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    coso.className = "titulito";
    var textito = d.getElementById("titulito");
    var node = document.createTextNode(titulito.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    titulito.value="";
}

function nuevoParrafo(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    coso.className = "parrafo";
    var textito = d.getElementById("parrafo");
    var node = document.createTextNode(parrafo.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    parrafo.value="";
}

function nuevaLista(){
    var cosote = d.createElement("tr");
    var cosotin = d.createElement("td");
    var cosoUL = d.createElement("ul");
  
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    
    var coso1 = document.createElement("li");
    var coso2 = document.createElement("li");
    var coso3 = document.createElement("li");
    var coso4 = document.createElement("li");
    var coso5 = document.createElement("li");
    coso1.className = "listita";
    coso2.className = "listita";
    coso3.className = "listita";
    coso4.className = "listita";
    coso5.className = "listita";
    var item1 = d.getElementById("item1");
    var item2 = d.getElementById("item2");
    var item3 = d.getElementById("item3");
    var item4 = d.getElementById("item4");
    var item5 = d.getElementById("item5");
    var node = document.createTextNode(item1.value);
    coso1.appendChild(node);
    cosoUL.appendChild(coso1);
    node = document.createTextNode(item2.value);
    coso2.appendChild(node);
    cosoUL.appendChild(coso2);
    node = document.createTextNode(item3.value);
    coso3.appendChild(node);
    cosoUL.appendChild(coso3);
    node = document.createTextNode(item4.value);
    coso4.appendChild(node);
    cosoUL.appendChild(coso4);
    node = document.createTextNode(item5.value);
    coso5.appendChild(node);
    cosoUL.appendChild(coso5);
    cosotin.appendChild(cosoUL);
    cosote.appendChild(cosotin);
    item1.value="";
    item2.value="";
    item3.value="";
    item4.value="";
    item5.value="";
}

function NuevaImagen(){
    var cosote = d.createElement("tr");
    var cosotin = d.createElement("td");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("img");
    var node = document.createTextNode(imagen.value);
    var textito = d.getElementById("imagen");
    coso.src = textito.value;
    coso.className = "imagen";
    
    coso.appendChild(node);
    cosotin.appendChild(coso);
    cosote.appendChild(cosotin);
    
    imagen.value="";
}

function NuevoPie(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    coso.className = "pie";
    var textito = d.getElementById("pie");
    var node = document.createTextNode(pie.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    
    pie.value="";
}