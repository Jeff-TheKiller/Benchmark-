$document.ready(function(){
    var a1,b1,c1,d1,e1,a2,b2,c2,d2,e2;
    $(".border border dark").click(function(){ 
        if(this.attr('name') == "1"){
            a1 = 12; a2 = 11;
            b1 = 2;  b2 = 2;
            c1 = 1;  c2 = 4;
            d1 = 3;  d2 = 3;
            e1 = 0;  e2 = 2;
        }
        if(this.attr('name') == "2"){
           a1 = 12;
           b1;
           c1;
           d1;
           e1;
        }
    })
})