$document.ready(function(){
    var a1,b1,c1,d1,e1,a2,b2,c2,d2,e2;
    var T = $(".data");
    var aux = $(".data").css();
    $(".border border dark").click(function(){ 
        RT();
        if(this.attr('id') == "0"){
            a1 = 12; a2 = 11;
            b1 = 2;  b2 = 2;
            c1 = 1;  c2 = 4;
            d1 = 3;  d2 = 3;
            e1 = 0;  e2 = 2;
        }
        if(this.attr('id') == "1"){
            a1 = 12; a2 = 11;
            b1 = 2;  b2 = 2;
            c1 = 1;  c2 = 4;
            d1 = 3;  d2 = 3;
            e1 = 0;  e2 = 2;
        }
        if(this.attr('id') == "2"){
            a1 = 12; a2 = 11;
            b1 = 2;  b2 = 2;
            c1 = 1;  c2 = 4;
            d1 = 3;  d2 = 3;
            e1 = 0;  e2 = 2;
         }
         CD(a1,b1,c1,d1,e1,a2,b2,c2,d2,e2);
    })
    function RT(){for(var i = 0;i<=9;i++){T[i].css() = aux[i];}}
    function CD(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9){ 
        for(var i = 0;i<=9;i++){       
            T[i].removeClass("col-xs").addClass("col-xs-"+t+i);
        }
    }
})