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


function nuevoItem(){
    var lista = d.getElementById("listaDeLista");
    var listitim = d.createElement("li");
    var textin = d.createElement("textarea");
    textin.className = "itemLista";
    lista.appendChild(listitim);
    listitim.appendChild(textin);
}


function nuevaLista(){
    var cosote = d.createElement("tr");
    var cosotin = d.createElement("td");
    var cosoUL = d.createElement("ul");
    
    var element = d.getElementById("ACA");
    element.appendChild(cosote);
    
    var cositosLista = [];
    cositosLista = d.getElementsByClassName("itemLista");
    
    
    var i = 0;
    do{ 
        var coso = d.createElement("li");
        coso.className = "listita";
        var node = document.createTextNode(cositosLista[i].value)
        coso.appendChild(node);
        cosoUL.appendChild(coso);    
        i++;
    }while (i < cositosLista.length);
    
    cosotin.appendChild(cosoUL);
    cosote.appendChild(cosotin);
    
    
    var x = 0;
    do{ 
        cositosLista[x].value = "";
        x++;
    }while (x < cositosLista.length);
    
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