
$(function() {


    const type = {
        'style' : {

            'btn-hc' : 'btn btn-outline-dark col-xs-1 btn-hc',
            'a': 'a bg-dark text-white',
            'b': 'b bg-light',

        },
        'stylehc' :{
            'btn-hc' : 'btn btn-outline-light col-xs-1 btn-hc',
            'a': 'a bg-light text-black',
            'b': 'b bg-dark text-white',
        },
    };


    function changeSiteColors(){
        if($("#css").attr('href') == "./Assets/stylehc.css"){
            let a = ($('#css').attr('href'));
            let b = a.replace( a ,"./Assets/style.css");
            $('#css').attr('href', b);
            $.each(type["style"], function(i, elem) {
                let c = "." + i;
                $(c).removeClass($(c).attr('class')).addClass(elem);
            })
        }
        else{
            let a = ($('#css').attr('href'));
            let b = a.replace( a ,"./Assets/stylehc.css");
            $('#css').attr('href', b);
            $.each(type["stylehc"], function(i, elem) {
                let c = "." + i;
                $(c).removeClass($(c).attr('class')).addClass(elem);
            })
        }
    }
    let $hc = $('.btn-hc');

    $hc.click(function(){
        changeSiteColors();
    });
})