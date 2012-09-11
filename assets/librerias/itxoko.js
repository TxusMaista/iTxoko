document.addEventListener('touchstart', function(event) {
        // Prevent text selection
        //event.preventDefault();
        }, false);

        document.addEventListener('mousedown', function(event) {
        // Prevent text selection
        event.preventDefault();
        }, false);

function expand(a){
            elemtens = document.getElementsByClassName('widget');
            elemtens2 = document.getElementsByClassName('widget_img');
            if(elemtens[a].style.maxWidth == "320px"){
                elemtens[a].style.maxWidth = "750px";
                elemtens2[a].src = "assets/images/nexpand_w.png";
            }
            else{
                elemtens[a].style.maxWidth = "320px";
                elemtens2[a].src = "assets/images/expand_w.png";
            }
    
}

function noticiaMax(w,n){
            var temp;
            widget = document.getElementsByClassName('widget');
            image = document.getElementsByClassName('widget_img');
            image_back = document.getElementsByClassName('widget_img_back');
            noticia = widget[w].getElementsByClassName('lista');
            lista = widget[w].getElementsByClassName("sc");

            lista[0].insertBefore(noticia[n], lista[0].firstChild);
            
            widget[w].style.maxWidth = "750px";
            image[w].style.display = "none";
            image_back[w].setAttribute("onClick", "noticiaMin("+w+","+n+")");
            image_back[w].style.display = "inline";

            noticia[0].style.minHeight = "342px";
            lista[0].scrollTop = 0;
            lista[0].style.overflow = "hidden";

            var texto = noticia[0].getElementsByClassName('noticia_resumen');
            var foto = noticia[0].getElementsByClassName('imagen_resumen');
            var fecha = noticia[0].getElementsByClassName('fecha_resumen');
            var autor = noticia[0].getElementsByClassName('autor_resumen');
            texto[0].style.minHeight = "280px";
            texto[0].style.padding = "0% 2%";
            texto[0].style.fontSize = "90%";
            texto[0].style.overflow = "scroll";

            foto[0].style.width = "80px";
            foto[0].style.marginLeft = "10px";

            fecha[0].style.fontSize = "80%";
            autor[0].style.fontSize = "80%";

            var titulo = widget[w].getElementsByClassName('title');
            var titulo2 = noticia[0].getElementsByClassName('titulo_resumen');
            titulo[0].firstChild.nodeValue = titulo2[0].firstChild.nodeValue;
            titulo2[0].style.visibility = "hidden";
}

function noticiaMin(w,n){
            var temp;
            widget = document.getElementsByClassName('widget');
            image = document.getElementsByClassName('widget_img');
            image_back = document.getElementsByClassName('widget_img_back');
            noticia = widget[w].getElementsByClassName('lista');
            lista = widget[w].getElementsByClassName("sc");
            var titulo2 = noticia[0].getElementsByClassName('titulo_resumen');
            var titulo = widget[w].getElementsByClassName('title');

            lista[0].style.overflow = "scroll";
            noticia[0].style.minHeight = "75px";

            var texto = noticia[0].getElementsByClassName('noticia_resumen');
            var foto = noticia[0].getElementsByClassName('imagen_resumen');
            var fecha = noticia[0].getElementsByClassName('fecha_resumen');
            var autor = noticia[0].getElementsByClassName('autor_resumen');
            texto[0].style.minHeight = "36px";
            texto[0].style.padding = "0px";
            texto[0].style.fontSize = "65%";
            texto[0].style.overflow = "hidden";

            foto[0].style.width = "60px";
            foto[0].style.marginLeft = "0px";

            fecha[0].style.fontSize = "70%";
            autor[0].style.fontSize = "70%";
            
            lista[0].insertBefore(lista[0].firstChild, noticia[n+1]);
            lista[0].scrollTop = 0;
            titulo2[0].style.visibility = "visible";

            image_back[w].style.display= "none";
            image[w].src = "assets/images/nexpand_w.png";
            image[w].style.display = "inline"

            switch(w){
                case 0:titulo[0].firstChild.nodeValue = "Twitter";break;
                case 1:titulo[0].firstChild.nodeValue = "RSS";break;
                case 2:titulo[0].firstChild.nodeValue = "Facebook";break;
                case 3:titulo[0].firstChild.nodeValue = "Mail";break;
                default:break;
            }
}

function nav(n){
            switch(n)
            {
                case 1:
                widget = document.getElementById('listadoCursos');
                widget.style.display = "none";
                widget = document.getElementById('tablaHoras');
                widget.style.display = "none";
                widget = document.getElementById('noticias');
                widget.style.display = "inline";
                break;
                case 2:
                widget = document.getElementById('noticias');
                widget.style.display = "none";
                widget = document.getElementById('tablaHoras');
                widget.style.display = "none";
                widget = document.getElementById('listadoCursos');
                widget.style.display = "inline";
                break;
                case 3:
                widget = document.getElementById('noticias');
                widget.style.display = "none";
                widget = document.getElementById('listadoCursos');
                widget.style.display = "none";
                widget = document.getElementById('tablaHoras');
                widget.style.display = "inline";
                break;
                default:
                break;
            }
}