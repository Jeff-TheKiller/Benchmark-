$(document).ready(function(){
    var T = $(".data");
    var aux = $(".data");
    var L = $(".l").text();
    var Y = $(".y");
    var aux2 = $(".y");
    var X = $(".x");
    var a1,b1,c1,d1,e1,a2,b2,c2,d2,e2;
    $(".border border dark").click(function(){ 
        Restarter();
        if(this.attr('id') == "1"){
            a1 = 11; a2 = 6;
            b1 = 2;  b2 = 2;
            c1 = 1;  c2 = 1;
            d1 = 1;  d2 = 2;
            e1 = 0;  e2 = 1;
            L = "250.000";
        }
        if(this.attr('id') == "2"){
           a1 = 6; a2 = 0;
           b1 = 5; b2 = 0;
           c1 = 6; c2 = 0;
           d1 = 6; d2 = 0;
           e1 = 3; e2 = 0;
           L = "12";
        }
        if(this.attr('id') == "3"){
            a1 = 2; a2 = 0;
            b1 = 2; b2 = 0;
            c1 = 2; c2 = 0;
            d1 = 2; d2 = 0;
            e1 = 1; e2 = 0;
            L = "12";
         }

        Alternator(a1,a2,b1,b2,c1,c2,d1,d2,e1,e2);
    });
    function Restarter(){
        for(var i = 0; i <= 9; i++){
            T[i].css() = aux[i].css();
            if(Y[i].lenght <= 0){X.append(Y[i]);}}
    }
    function Alternator(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9){
        for(var i = 0; i <= 9; i++){
            if((t+i) == 0){Y[i].remove();} 
            else{T[i].removeClass("col-sm").addClass("col-sm-"+t+i);}
        }
    }
});