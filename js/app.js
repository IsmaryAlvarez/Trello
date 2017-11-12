// Habilitando el textarea
var textarea = document.getElementById('comment');
textarea.setAttribute("onclick", "activeTxt()");

// Creando el div contenedor
var newComments = document.createElement('div');
	newComments.setAttribute('id', 'divContainer');

// Agregándole funcionalidad al botón Guardar
var safeBtn = document.getElementById('btn');
	safeBtn.setAttribute('onclick', 'save()');

function save(){

	//Tomando el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;
		
	//Limpiando el textarea
	document.getElementById('comment').value= '';

	//Creando la otra entrada
	var text2 = document.getElementsByClassName('text')[0];
	var cln = text2.cloneNode(true);
		text2.style.display = 'block';
		document.getElementById("text2").appendChild(cln);

	//Contenedor que esta en el html
	var cont = document.getElementById('cont');
		cont.style.backgroundColor= '#E2E4E6';

	//Validando un capo vacio en el textarea
	if(comments.length=== 0 || comments ==null || comments.value ===''){
		document.getElementById("btn").disabled = true;
		return;
	} 
		
	//Creando nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	//Añadiendo otra entrada
	var lista = document.createElement('div');
		lista.setAttribute('class','newList');
		lista.style.backgroundColor= '#F5F5F5';
		lista.setAttribute("onclick", "function2()");
		lista.innerHTML = '<a href="">Añadir otra lista...</a>';

	//Creando contenedor
	var contenedorElemento= document.createElement('p');
		contenedorElemento.appendChild(textNewComment);

	//Ingresando lo creado
	newComments.appendChild(contenedorElemento);
	newComments.appendChild(lista);
	cont.appendChild(newComments);

	//Removiendo el botón de guardar	
	document.getElementsByClassName('text')[0].removeChild(document.getElementById('form1'));

};


function activeTxt() {
	textarea.style.background= 'white';
	var formulario = document.getElementById('formu');
	formulario.style.display = 'block';
	var fondoText= document.getElementsByClassName('text')[0];
	fondoText.style.backgroundColor= '#D3D3D3';
};




var boton2 = document.getElementById('btn2');
	boton2.addEventListener('click', 'save2()');

function save2(){
	//tenemos q tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment2').value;
		
	//limpiar el textarea
	document.getElementById('comment2').value= '';

	//validar que textarea no tenga un mensaje
	if(comments.length=== 0 || comments ==null || comments.value ===''){
		document.getElementById("btn2").disabled = true;
		return;
	} 

	//nodos de texto del textarea
	var textNewComment2 = document.createTextNode(comments);
		
	//crear otro añade link Lista
	var lista = document.createElement('div');
		lista.innerHTML = '<a href="">Añadir otra lista</a>';

	// añadiendole clase
		lista.setAttribute("onclick", "function2()");

	var contenedorElemento= document.createElement('p');
		contenedorElemento.appendChild(textNewComment2);

		newComments.appendChild(contenedorElemento);
		newComments.appendChild(lista);

	cont.appendChild(newComments);
};

function function2(){		
	var formulario = document.getElementById('formu2');
	formulario.style.display = 'block';
};