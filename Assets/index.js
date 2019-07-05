
$(function() {
    const benchmarks = {
        'fama' : {
            'bootstrap': {
                'bootstrap1': {
                    'col-sm-11' : '252.00'
                },
                'bootstrap2': {
                    'col-sm-6' : '132.00'
                }
            },
            'materialize': {
                'materialize1': {'col-sm-5' : '36.00' },
                'materialize2': {'col-sm-2' : '36.00' }
            },
            'foundation': {
                'foundation1': {'col-sm-6' : '24.00'},
                'foundation2': {'col-sm-2' : '24.00'}
            },
            'semantic': {
                'semantic1': {'col-sm-6' : '12.00'},
                'semantic2': {'col-sm-2' : '48.00'},
            },
            'pure': {
                'pure1': '',
                'pure2': {'col-sm-1' : '12.00'},
            }, 
        },         
        
        'destaques' : {
            'bootstrap': {
                'bootstrap1': {'col-sm-6' : '6'},
                'bootstrap2': {'col-sm-2' : '2'},
            },
            'materialize': {
                'materialize1': {'col-sm-2' : '2'},
                'materialize2': {'col-sm-2' : '2'},
            },
            'foundation': {
                'foundation1': {'col-sm-1' : '1'},
                'foundation2': {'col-sm-1' : '1'},
            },
            'semantic': {
                'semantic1': {'col-sm-1' : '1'},
                'semantic2': {'col-sm-2' : '1'},
            },
            'pure': {
                'pure1': {'col-sm-3' : '3'},
                'pure2': {'col-sm-1' : '1'},
            },          
        }
    };
    
    function changeTableNames(n1,n2){
        $('.t').html(n1);
        $('.y').html(n2);
    }

    function changeLimitValue(limit) {
        $('#target-limit').html(limit);
    }

    function changeTablesAttributes(table)
    {
        $.each(benchmarks[table], function(i, elem) {
            $.each(elem, function(i, elem){
                let id = "#" + i;
                console.log(elem);
                console.log(i);
                $(id).removeClass("col-sm").addClass(elem);
                $.each(elem, function(i, elem){
                    if($(id)!= ""){$(id).html(elem);}
                    else $(id).html("Dados não fornecidos");
                })
            })
        });
    }


    let $botoes = $('.btn-opcoes');
    $botoes.click(function(){
        let limit = $(this).data('limit');
        let table = $(this).data('table');
        let tag1 = $(this).data('tag');
        let tag2 = $(this).data('tag2');
        changeLimitValue(limit);
        changeTablesAttributes(table);
        changeTableNames(tag1,tag2);
    });
});