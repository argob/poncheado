var proveedores =   [
    			{	"empresa": "Movistar - TELEFÓNICA MÓVILES ARGENTINA S.A", 
    				"cuit": "30678814357", 
    				"domicilio":"Av. Independencia 169. Ciudad Autónoma de Buenos Aires",
    				"Código postal": 1099
    			},
    			{	"empresa": "Movistar - TELEFÓNICA MÓVILES URUGUAY S.A", 
    				"cuit": "30678814357", 
    				"domicilio":"Av. Independencia 169. Ciudad Autónoma de Buenos Aires",
    				"Código postal": 1099
    			},
    			{	"empresa": "Personal - TELEFÓNICA MÓVILES ARGENTINA S.A", 
    				"cuit":"32678814351", 
    				"domicilio":"Av. Corrientes 566, C1043AAS CABA",
    				"Código postal": 1099
    			},
    			{	"empresa": "Claro - TELEFÓNICA MÓVILES ARGENTINA S.A", 
    				"cuit": "33678814355", 
    				"domicilio":"Av. de Mayo 878, C1084AAQ CABA",
    				"Código postal": 1099
    			}
    		]

/************************AUTOCOMPLETE*****************************/

function autocomplete(inp, arr, key, btn) {
  /*Tres argumentos, lo que escribe, el array con las opciones disponibles segun lo escrito, y la key del objeto que está llamando*/
  var currentFocus;

	inp.addEventListener("input", function(e) {
      var a, b, i,  val = this.value;
      /*limpia la lista primero*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*Crea el div que va a traer los valores, le pone un id y las clases del autocomplete*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      
      
     
      /*hace un append de ese div dentro de container autocomplete*/
      this.parentNode.appendChild(a);
   		
      for (i = 0; i < arr.length; i++) {
        /*recorre el array y chequea si el item donde está posicionado coincide con lo que se escribe*/
        /*el [key] es dinámico ya que en un primer momento hay que hacerlo coincidir con el key nombre, y luego con cuit*/
        if (arr[i][key].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        	
        	
          /*si machean, crea un div*/
          b = document.createElement("DIV");
          

          /*Pone el bold las letras que machean*/
          b.innerHTML = "<strong>" + arr[i][key].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i][key].substr(val.length);
          /*carga todas las opciones en inputs*/
          b.innerHTML += "<input type='hidden' value='" + arr[i][key] + "'>";
          
              b.addEventListener("click", function(e) {
              /*carga la opción elegida en el input*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*cierra el select con las distintas opciones*/
              closeAllLists();

          });
          a.appendChild(b);
         
        }
        
      }

    });


  	inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  	});
	function addActive(x) {
	    /*a function to classify an item as "active":*/
	    if (!x) return false;
	    /*start by removing the "active" class on all items:*/
	    removeActive(x);
	    if (currentFocus >= x.length) currentFocus = 0;
	    if (currentFocus < 0) currentFocus = (x.length - 1);
	    /*add class "autocomplete-active":*/
	    x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
	    /*a function to remove the "active" class from all autocomplete items:*/
	    for (var i = 0; i < x.length; i++) {
	      x[i].classList.remove("autocomplete-active");
	    }
	}
	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document, except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
	    for (var i = 0; i < x.length; i++) {
	    	if (elmnt != x[i] && elmnt != inp) {
	      		x[i].parentNode.removeChild(x[i]);
	     	}
	     
	    }
	}
	
	document.addEventListener("click", function (e) {
	    closeAllLists(e.target);
	    console.log(e.target)
	   
    })
}