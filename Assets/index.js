$(document).ready(function(){
    var T = $(".data");
    var aux = $(".data").css();
    var L = $(".l").text();
    var a1,b1,c1,d1,e1,a2,b2,c2,d2,e2;
    $(".border border dark").click(function(){ 
        Restarter(a1,b1,c1,d1,e1,a2,b2,c2,d2,e2);
        if(this.attr('id') == "1"){
            a1 = 12; a2 = 11;
            b1 = 2;  b2 = 2;
            c1 = 1;  c2 = 4;
            d1 = 3;  d2 = 3;
            e1 = 0;  e2 = 2;
            L = "250.000";
        }
        if(this.attr('id') == "2"){
           a1 = 12;
           b1;
           c1;
           d1;
           e1;
           L = "12";
        }
        if(this.attr('id') == "3"){
            a1 = 12;
            b1;
            c1;
            d1;
            e1;
            L = "12";
         }

        if(a2 == 0){}
        Alternator(a1,b1,c1,d1,e1,a2,b2,c2,d2,e2);
    });
    function Restarter(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9){
        for(var i = 0; i <= 9; i++){T[i].removeClass("col-sm"+t+i).addClass("col-sm");}
    function Alternator(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9){
        for(var i = 0; i <= 9; i++){T[i].removeClass("col-sm").addClass("col-sm-"+t+i);}
    }
});