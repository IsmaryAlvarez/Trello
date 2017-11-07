	var textarea = document.getElementById('comment');

	textarea.addEventListener('click', function(){
		
		var formulario = document.getElementById('formu');
	formulario.style.display = 'block';

	})

var newComments = document.createElement('div');
		newComments.setAttribute('id', 'divPadre');

	var botoncito = document.getElementById('btn');

	botoncito.addEventListener('click', function(){
		//tenemos q tomar el texto ingresado en el textarea
		var comments = document.getElementById('comment').value;
		
		//limpiar el textarea
		document.getElementById('comment').value= '';

		//contenedor que esta en el html
		var cont = document.getElementById('cont');

		//creamos el div que contiene cada comentario
		//var newComments = document.createElement('div');
		//newComments.setAttribute('id', 'divPadre');

		//validar que textarea no tenga un mensaje
		if(comments.length=== 0 || comments ==null || comments.value ===''){
			document.getElementById("btn").disabled = true;
			return;
		} 
		
		//crear checkbox

		var chck = document.createElement('input');
		chck.type = 'checkbox';

		//creamos icono de corazon
		var heart = document.createElement('i');
		heart.classList.add('fa', 'fa-heart', 'heart');

		//creamos icono de basura
		var trash = document.createElement('i');
		trash.classList.add('fa', 'fa-trash', 'trash');

		//nodos de texto del textarea
		var textNewComment = document.createTextNode(comments);

		// fecha
		var dateSpan = document.createElement("span");
		dateSpan.textContent = new Date();

		//crear otro añade link Lista

		var lista = document.createElement('div');
		lista.innerHTML = '<a href="">Añadir otra lista</a>';

		// añadiendole clase
		lista.setAttribute("onclick", "function2()");

		var contenedorElemento= document.createElement('p');
		contenedorElemento.appendChild(textNewComment);
		newComments.appendChild(chck);
		newComments.appendChild(trash);
		newComments.appendChild(heart);
		newComments.appendChild(dateSpan);
		newComments.appendChild(contenedorElemento);
		newComments.appendChild(lista);

		cont.appendChild(newComments)
var form2 = document.getElementById('form1');
	document.getElementsByClassName('text')[0].removeChild(form2);
	});
		function function2(){		
	var formulario = document.getElementById('formu2');
	formulario.style.display = 'block';
	}


var boton2 = document.getElementById('btn2');

	boton2.addEventListener('click', function(){
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

		cont.appendChild(newComments)

		
	});
	 







