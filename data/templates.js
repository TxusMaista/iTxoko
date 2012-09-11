Template = (function() {
	
	var markup = '{{#objects}}<li id="{{code}}">\
                              <a class="button" onclick="Services.horario({{code}})">\
                              <div style="align=center;line-height:30px;">{{name}}</div>\
                              </a>\
                        </li>{{/objects}}';

	var dia = '{{#horario}}<div class="agenda">\
            	<table border="0" cellpadding="0" cellspacing="0" width="100%">\
                  <tbody>\
                        <tr>\
                              <td class="horarioDia" align="CENTER" width="19%">{{dia}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioExcep" align="CENTER">{{hora1}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{asig1}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{profe1}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{aula1}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioExcep" align="CENTER">{{hora2}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{asig2}}</span></td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{profe2}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{aula2}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioExcep" align="CENTER">{{hora3}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{asig3}}</span></td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{profe3}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{aula3}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioExcep" align="CENTER">{{hora4}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{asig4}}</span></td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{profe4}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{aula4}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioExcep" align="CENTER">{{hora5}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{asig5}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{profe5}}</td>\
                        </tr>\
                        <tr>\
                              <td class="horarioCelda" align="CENTER">{{aula5}}</td>\
                        </tr>\
                  </tbody>\
                  </table>\
            </div>{{/horario}}';
            
      var news = '{{#noticia}}<div class="lista" onClick="noticiaMax({{widget}},{{id}})">\
            <img class="imagen_resumen" src="{{img}}"/><i class="fecha_resumen">{{date}}</i><div class="titulo_resumen">{{title}}</div>\
            <p class="noticia_resumen">{{desc}}</p>\
            <small class="autor_resumen">{{author}}</small>\
        </div>{{/noticia}}'; 

    return{
    	cursoos: function(){ return (markup);},
    	horarioos: function(){ return (dia);},
      news: function(){ return (news);} 
    }

}).call(this);