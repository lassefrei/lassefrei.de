$(document).ready(function(){

            //Drop-down Content beruehrbar

            $('#ber_weiter').click(function(){
                if($(this).text() == 'weiter lesen ...') {
                    $(this).text('... schließen');
                    $('#ber_drop').slideDown(1000);
                }
                else {
                    $(this).text('weiter lesen ...');
                    $('#ber_drop').slideUp(1000);
                }
            });

            $('#ber_schliessen').click(function(){
                    $('#ber_weiter').text('weiter lesen ...');
                    $('#ber_drop').slideUp(1000);
            });



            $('#pha_weiter').click(function(){
                if($(this).text() == 'weiter lesen ...') {
                    $(this).text('... schließen');
                    $('#pha_drop').slideDown(1000);
                }
                else {
                    $(this).text('weiter lesen ...');
                    $('#pha_drop').slideUp(1000);
                }
            });

            $('#pha_schliessen').click(function(){
                    $('#pha_weiter').text('weiter lesen ...');
                    $('#pha_drop').slideUp(1000);
            });



            $('#erk_weiter').click(function(){
                if($(this).text() == 'weiter lesen ...') {
                    $(this).text('... schließen');
                    $('#erk_drop').slideDown(1000);
                }
                else {
                    $(this).text('weiter lesen ...');
                    $('#erk_drop').slideUp(1000);
                }
            });

            $('#erk_schliessen').click(function(){
                    $('#erk_weiter').text('weiter lesen ...');
                    $('#erk_drop').slideUp(1000);
            });



            $('#hor_weiter').click(function(){
                if($(this).text() == 'weiter lesen ...') {
                    $(this).text('... schließen');
                    $('#hor_drop').slideDown(1000);
                }
                else {
                    $(this).text('weiter lesen ...');
                    $('#hor_drop').slideUp(1000);
                }
            });

            $('#hor_schliessen').click(function(){
                    $('#hor_weiter').text('weiter lesen ...');
                    $('#hor_drop').slideUp(1000);
            });



            $('#rit_weiter').click(function(){
                if($(this).text() == 'weiter lesen ...') {
                    $(this).text('... schließen');
                    $('#rit_drop').slideDown(1000);
                }
                else {
                    $(this).text('weiter lesen ...');
                    $('#rit_drop').slideUp(1000);
                }
            });

            $('#rit_schliessen').click(function(){
                    $('#rit_weiter').text('weiter lesen ...');
                    $('#rit_drop').slideUp(1000);
            });




            $('#about_weiter').click(function(){
                if($(this).text() == 'weiter lesen ...') {
                    $(this).text('... schließen');
                    $('#about_drop').slideDown(1000);
                }
                else {
                    $(this).text('weiter lesen ...');
                    $('#about_drop').slideUp(1000);
                }
            });

            $('#about_schliessen').click(function(){
                    $('#about_weiter').text('weiter lesen ...');
                    $('#about_drop').slideUp(1000);
            });


            //scroll-buttons

            $(window).scroll(function(){
                if($(window).scrollTop() > 200) {
                    $('#back-top').fadeIn(1000);
                }
                else {
                    $('#back-top').fadeOut(2000);
                }
            });
             $('#back-top .circle_button').click(function(){
                $('html,body').animate({scrollTop:0},1000);
                return false;
            });



            //Navigation-scroll

            // alle id in Reihenfolge in das Array! -----------//

            var navlink = new Array( 
                '#mein_angebot', 
                '#ueber_mich', 
                '#kontakt'
            );

            //Höhe der fixierten Navi eintragen (nicht fix = 0)// 

            var navHeigth = 0; //
            var ersterLinkBeiNull = true;

            //ab hier nix mehr ändern
            if(ersterLinkBeiNull == true)$('a[href="'+navlink[0]+'"]').addClass('akt');

            //Wenn gescrollt wird ... 
            $(window).scroll(function(){

            //aktuelle y-Position ////////////////////////////////
            var topnow = $(window).scrollTop();

            //function für die einzelnen Article starten ///////
            var x;
            for(x = 0 ; x < navlink.length ; x++){ //durchläuft alle article-id
            if( x < (navlink.length-1)){ //alle article, aber nicht der letzte
            var anf = $(navlink[x]).offset().top - navHeigth -1;
            var end = $(navlink[(x+1)]).offset().top - navHeigth -1;
            AktLink(navlink[x],anf,end,topnow);
            }
            else { //letzter article
            var anf = $(navlink[x]).offset().top - navHeigth -1;
            var end = $('#ende').offset().top;
            AktLink(navlink[x],anf,end,topnow);
            }
            }
            }); 
            //Klasse akt zuweisen (function) -> per css .akt formatieren ///
            function AktLink(link,idStart,idEnd,pos){
            if(pos >= idStart && pos < idEnd){
            $('nav a[href="'+link+'"]').addClass('akt');
            }
            else {
            $('nav a[href="'+link+'"]').removeClass('akt');
            }
            } 

            $('nav ul a').click(function(){
            var link = $(this).attr('href'); 
            $('html,body').animate({scrollTop:($(link).offset().top - navHeigth)},1000);
            });


        });
