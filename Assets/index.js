
$(function() {

    const benchmarks = {      
        'fama' : {
            'bootstrap': {
                'bootstrap1': {
                    'skills data boot col-sm-11' : '252.00'
                },
                'bootstrap2': {
                    'skills data bootS col-sm-6' : '132.00'
                }
            },
            'materialize': {
                'materialize1': {'skills data mater col-sm-5' : '36.00' },
                'materialize2': {'skills data materS col-sm-2' : '36.00' }
            },
            'foundation': {
                'foundation1': {'skills data found col-sm-6' : '24.00'},
                'foundation2': {'skills data foundS col-sm-2' : '24.00'}
            },
            'semantic': {
                'semantic1': {'skills data seman col-sm-6' : '12.00'},
                'semantic2': {'skills data semanS col-sm-2' : '48.00'},
            },
            'pure': {
                'pure1': {'skills data pure col-sm-3' : 'Dados não Fornecidos'},
                'pure2': {'skills data pureS col-sm-1' : '12.00'},
            }, 
        },         
        
        'destaques' : {
            'bootstrap': {
                'bootstrap1': {'skills data boot col-sm-6' : '6'},
                'bootstrap2': {'skills data bootS col-sm-2' : '2'},
            },
            'materialize': {
                'materialize1': {'skills data mater col-sm-2' : '2'},
                'materialize2': {'skills data materS col-sm-2' : '2'},
            },
            'foundation': {
                'foundation1': {'skills data found col-sm-1' : '1'},
                'foundation2': {'skills data foundS col-sm-1' : '1'},
            },
            'semantic': {
                'semantic1': {'skills data seman col-sm-1' : '1'},
                'semantic2': {'skills data semanS col-sm-1' : '1'},
            },
            'pure': {
                'pure1': {'skills data pure col-sm-3' : '3'},
                'pure2': {'skills data pureS col-sm-1' : '1'},
            },          
        }
    };
    function changeTableNames(n1,n2){
        $('.t').html(n1);
        $('.y').html(n2);
    }

    function changeLimitValue(limit) {
        $('#target-limit').html("Limite: "+limit);
    }

    function changeTablesAttributes(table)
    {
        $.each(benchmarks[table], function(i, elem) {
            $.each(elem, function(i, elem){
                let id = "#" + i;      
                $.each(elem, function(i, elem){                
                    $(id).removeClass($(id).attr('class')).addClass(i); 
                    let b = $(id).attr('class');                  
                    $(id).html(elem);
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