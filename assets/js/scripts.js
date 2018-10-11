$(document).ready(function() {
    var $lightbox = $('#lightbox');

    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'),
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };

        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });

    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');

        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});



getJson();
getJson2();
getJson3();
getJson4();
function getJson() {
        // String
        //console.dir(data);\
        var myJSON = ' {"lines":[{"name":"Pizza Quatro Stagione","price":46, "grams":600},{"name":"Pizza Quattro Formaggi","price":43,"grams":600},{"name":"Pizza Con Tutti","price":40,"grams":600},{"name":"Pizza Con Wurst","price":45,"grams":600},{"name":"Pizza Diavola","price":40,"grams":600},{"name":"Pizza Con Ananas","price":40,"grams":600},{"name":"Pizza Prosciutto","price":40,"grams":600},{"name":"Pizza Vegetariana","price":30,"grams":600},{"name":"Pizza Carnivora","price":48,"grams":600}]}';
		var myObj = JSON.parse(myJSON)['lines'];
        for(var i=0; i < myObj.length; i++) {
           var inner = myObj[i].name+ " Pret : "+ myObj[i].price+ ' RON' + "-Gramaj : "+myObj[i].grams;
           var node=document.createElement("li");
        var txNode=document.createTextNode(inner);
        node.appendChild(txNode);
        document.getElementById("pizzaList").appendChild(node);
        }
    };

   function getJson2() {
            // String
            //console.dir(data);\
            var myJSON2 = ' {"lines":[{"name":"Hamburger","price":15, "grams":250},{"name":"Cheeseburger","price":18,"grams":250},{"name":"Wurst","price":15,"grams":200},{"name":"Sausage","price":15,"grams":200},{"name":"Ceafa de Porc","price":20,"grams":300},{"name":"Frigarui de porc","price":14,"grams":200},{"name":"Cotlete de berbec","price":36,"grams":350}]}';
    		var myObj2 = JSON.parse(myJSON2)['lines'];
            for(var j=0; j < myObj2.length;j++) {
               var inner = myObj2[j].name+ " Pret : "+ myObj2[j].price+ ' RON' + "-Gramaj : "+myObj2[j].grams;
               var node=document.createElement("li");
            var txNode=document.createTextNode(inner);
            node.appendChild(txNode);
            document.getElementById("grillList").appendChild(node);
            }
        };

        function getJson3() {
                // String
                //console.dir(data);\
                var myJSON3 = ' {"lines":[{"name":"Espresso","price":6, "grams":250},{"name":"Cafea la Ibric","price":7,"grams":250},{"name":"Frappe","price":10,"grams":330},{"name":"Latte Machiatto","price":7,"grams":300},{"name":"Apa plata/minerala","price":6,"grams":250},{"name":"Cola/Fanta/Sprite/Nestea","price":6,"grams":250},{"name":"Limonada","price":12,"grams":300}]}';
        		    var myObj3 = JSON.parse(myJSON3)['lines'];
                for(var k=0; k < myObj3.length;k++) {
                   var inner = myObj3[k].name+ " Pret : "+ myObj3[k].price+ ' RON ' + "Gramaj : "+myObj3[k].grams+ ' Ml.';
                   var node=document.createElement("li");
                var txNode=document.createTextNode(inner);
                node.appendChild(txNode);
                document.getElementById("drinksList").appendChild(node);
                }
            };
            function getJson4() {
                    // String
                    //console.dir(data);\
                    var myJSON4 = ' {"lines":[{"name":"Guiness Draft","price":15, "grams":500},{"name":"Guiness","price":12,"grams":500},{"name":"Silva Bruna","price":8,"grams":500},{"name":"Silva Blonda","price":7,"grams":500},{"name":"Heineken","price":8,"grams":500},{"name":"Ciuc","price":6,"grams":500},{"name":"Skol","price":6,"grams":500}]}';
                    var myObj4 = JSON.parse(myJSON4)['lines'];
                    for(var k=0; k < myObj4.length;k++) {
                       var inner = myObj4[k].name+ " Pret : "+ myObj4[k].price+ ' RON ' + "Gramaj : "+myObj4[k].grams+ ' Ml.';
                       var node=document.createElement("li");
                    var txNode=document.createTextNode(inner);
                    node.appendChild(txNode);
                    document.getElementById("beerList").appendChild(node);
                    }
                };
