Services = (function() {

	var kanalItems = function(){
		$.getJSON('http://10.92.12.119:8000/api/rsc/scourse?callback=?', function(response) {
				var html = Mustache.to_html(Template.cursoos(), response);
                $('#listado').html(html);
			}
		);
	};

     var cursoHorario = function(cc){
        $.getJSON('http://10.92.12.119:8000/api/rsc/course?code='+cc.id+'&callback=?', function(response) {
                parseCurso(response.objects);
            }
        );
    };


	var parseCurso = function(agenda){

        var horarioo = {horario:[]};

        for(j=0;j<5;j++){
            horarioo.horario[j] = { 
                    dia: agenda[0].weekday_set[j].day,
                    hora1: agenda[0].weekday_set[j].classinfo_set[0].hour,
                    asig1: agenda[0].weekday_set[j].classinfo_set[0].subject,
                    profe1: agenda[0].weekday_set[j].classinfo_set[0].prof,
                    aula1: agenda[0].weekday_set[j].classinfo_set[0].room,
                    hora2: agenda[0].weekday_set[j].classinfo_set[1].hour,
                    asig2: agenda[0].weekday_set[j].classinfo_set[1].subject,
                    profe2: agenda[0].weekday_set[j].classinfo_set[1].prof,
                    aula2: agenda[0].weekday_set[j].classinfo_set[1].room,
                    hora3: agenda[0].weekday_set[j].classinfo_set[2].hour,
                    asig3: agenda[0].weekday_set[j].classinfo_set[2].subject,
                    profe3: agenda[0].weekday_set[j].classinfo_set[2].prof,
                    aula3: agenda[0].weekday_set[j].classinfo_set[2].room,
                    hora4: agenda[0].weekday_set[j].classinfo_set[3].hour,
                    asig4: agenda[0].weekday_set[j].classinfo_set[3].subject,
                    profe4: agenda[0].weekday_set[j].classinfo_set[3].prof,
                    aula4: agenda[0].weekday_set[j].classinfo_set[3].room,
                    hora5: agenda[0].weekday_set[j].classinfo_set[4].hour,
                    asig5: agenda[0].weekday_set[j].classinfo_set[4].subject,
                    profe5: agenda[0].weekday_set[j].classinfo_set[4].prof,
                    aula5: agenda[0].weekday_set[j].classinfo_set[4].room
            };
        }

        var html = Mustache.to_html(Template.horarioos(), horarioo);
        $('#horas').html(html);
        nav(3);
    };

	var Lista = function() {
        var section1 = {noticia:[]};
        var section2 = {noticia:[]};
        var section3 = {noticia:[]};
        var section4 = {noticia:[]};
        var sec1 = -1;
        var sec2 = -1;
        var sec3 = -1;
        var sec4 = -1;
        var url = 'http://10.92.12.119:8000/api/rsc/item/?callback=?';
        var data = {
            limit: "0",
            callback: '?'
        };

        /*$.getJSON(url, function(response) {
            var object;
            console.log(response);
            for(var i=0;i<response.objects.length;i++){
                if (response.objects[i].category == "twitter"){
                object = parseadorTweet(response.objects[i]);
                sec1++;
                section1.noticia.push({
                    id:sec1,
                    widget:0,
                    author: object.author,
                    desc: object.desc,
                    img: object.img,
                    date: object.date,
                    title: object.title
                });}
                if (response.objects[i].category == "rss"){
                object = parseador(response.objects[i]);
                sec2++;
                section2.noticia.push({
                    id:sec2,
                    widget:1,
                    author: object.author,
                    desc: object.desc,
                    img: object.img,
                    date: object.date,
                    title: object.title
                });}
                if (response.objects[i].category == "facebook"){
                object = parseador(response.objects[i]);
                sec3++;
                section3.noticia.push({
                    id:sec3,
                    widget:2,
                    author: object.author,
                    desc: object.desc,
                    img: object.img,
                    date: object.date,
                    title: object.title
                });}
                if (response.objects[i].category == "mail"){
                object = parseadorMail(response.objects[i]);
                sec4++;
                section4.noticia.push({
                    id:sec4,
                    widget:3,
                    author: object.author,
                    desc: object.desc,
                    img: object.img,
                    date: object.date,
                    title: object.title
                });}
            }*/

        var lore = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"

        var joo = {
            noticia:[
                    {
                        id:0,
                        widget:0,
                        author: "Pere Premia",
                        desc: lore,
                        img: "assets/images/noticias.jpg",
                        date: "18/07/2012",
                        title: "Noticia muy importane1"
                    },

                    {
                        id:1,
                        widget:0,
                        author: "Pere Premia",
                        desc: lore,
                        img: "assets/images/noticias.jpg",
                        date: "18/07/2012",
                        title: "Noticia muy importane2"
                    },

                    {
                        id:2,
                        widget:0,
                        author: "Pere Premia",
                        desc: lore,
                        img: "assets/images/noticias.jpg",
                        date: "18/07/2012",
                        title: "Noticia muy importane3rrrrrrrrrrrrrrririririiriririririririririririririririririiriririrrirr"
                    },

                    {
                        id:3,
                        widget:0,
                        author: "Pere Premia",
                        desc: lore,
                        img: "assets/images/noticias.jpg",
                        date: "18/07/2012",
                        title: "Noticia muy importane4"
                    },

                    {
                        id:4,
                        widget:0,
                        author: "Pere Premia",
                        desc: lore,
                        img: "assets/images/noticias.jpg",
                        date: "18/07/2012",
                        title: "Noticia muy importane4"
                    }

            ]
        }

        var html = Mustache.to_html(Template.news(), joo);
        $('#noticias1').html(html);
        var html = Mustache.to_html(Template.news(), section2);
        $('#noticias2').html(html);
        var html = Mustache.to_html(Template.news(), section3);
        $('#noticias3').html(html);
        var html = Mustache.to_html(Template.news(), section4);
        $('#noticias4').html(html);

        //});
    };

    function parseadorTweet (json){
        var imagen;
        var autor;
        if (json.img != "")
            imagen = json.img;
        else
            imagen = "assets/images/noticia.jpg";
        if (json.author != "")
            autor = json.author;
        else
            autor = "Desconocido";

        var o = {
            author: autor,
            desc: json.desc.substring(0,140),
            img: imagen,
            date: json.pub_date.substring(0,10),
            title: "Twitter"
            };

        return o;
    }

    function parseadorMail (json){
        var imagen;
        var autor;
        if (json.img == "")
            imagen = "assets/images/email.jpg";
        else
            imagen = json.img;
        if (json.author != "")
            autor = json.author;
        else
            autor = "Desconocido";

        var o = {
            author: autor,
            desc: json.desc,
            img: imagen,
            date: json.pub_date.substring(0,10),
            title: json.title
            };

        return o;
    }

    function parseador (json){
        var imagen;
        var autor;
        if ((json.img == "") || (!json.img.indexOf("http://www.meneame.net/backend/vote_com_img.php")))
            imagen = "assets/images/noticias.jpg";
        else
            imagen = json.img;
        if (json.author != "")
            autor = json.author;
        else
            autor = "Desconocido";

        var o = {
            author: autor,
            desc: json.desc,
            img: imagen,
            date: json.pub_date.substring(0,10),
            title: json.title
            };

        return o;
    }

    Lista();
    kanalItems();

    return {
        horario: function(cc){ cursoHorario (cc);}
    }
    

}).call(this);