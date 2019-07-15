
$(function() {
    const table = {
        'Rapidez': {
            't1':{ 
                'Peso':{     
                    '-143 KB' :{}, 
                    '-114 KB' :{}, 
                    '-148 KB' :{}, 
                    '-1150 KB' :{}, 
                    '-3.8 KB' :{}, 
                }, 
            },
            't2':{ 
                'N/A':{
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                },
            },
            't3':{ 
                'N/A':{
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                },
            },    
        },
        'Componentes' : {
            't1':{ 
                'Quantidade':{
                    'Alta':{},
                    'Mediana':{},
                    'Alta':{},
                    'Muito alta':{},
                    'Muito baixa':{},
                },
            },
            't2':{ 
                'Variações de Componentes':{
                    'Alta':{},
                    'Mediana':{},
                    'Alta':{},
                    'Muito alta':{},
                    'Muito baixa':{},
                },
            },
            't3':{ 
                'N/A':{
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                },
            },  
        },
        'Consolidação' : {
            't1':{ 
                'Contribuidores':{
                    '1000':{},
                    '253':{},
                    '985':{},
                    '190':{},
                    '57':{},
                },
            },  
            't2':{ 
                'Versão':{
                    '4.3.1':{},
                    '1.0.0':{},
                    '6.5.3':{},
                    '2.4.1':{},
                    '1.0.1':{},
                },
            },  
            't3':{ 
                'Lançamento':{
                    '2011':{},
                    '2018':{},
                    '2011':{},
                    '2013':{},
                    '2013':{},
                },
            },  
        },
        'Comunidade' : {
            't1':{ 
                'Atividade':{
                    'Muito ativa':{},
                    'Ativa':{},
                    'Muito ativa':{},
                    'Inativa':{},
                    'Pouco ativa':{},
                },
            },  
            't2':{ 
                'Atualizações':{
                    '18759':{},
                    '3866':{},
                    '16324':{},
                    '6684':{},
                    '560':{},
                },
            },  
            't3':{ 
                'Atualizações por Mês':{
                    '40':{},
                    '2':{},
                    '5':{},
                    '0':{},
                    '2':{},
                },
            },  
        },
        'Simplicidade' : {
            't1' : {
                'Comandos' : {
                    'Excelente' : {},
                    'Boa' : {},
                    'Mediana' : {},
                    'Baixa' : {},
                    'Baixa' : {},
                },
            },
            't2' : {
                'Componentes' : {
                    'Mediana' : {},
                    'Mediana' : {},
                    'Mediana' : {},
                    'Mediana' : {},
                    'Excelente' : {},
                },
            },
            't3':{ 
                'N/A':{
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                    '':{},
                },
            },  
        },
    }

    const details = {
        'fama':{
            'bootstrap_t': 'Bootstrap é o framework CSS mais famoso e mais utilizado do mundo segundo o GitHub devido a sua grande documentação e facilidade de aplicação, o que o torna um framework bastante amigável para iniciantes.',
            'materialize_t' : 'Materialize é segundo framework CSS mais famoso segundo o GitHub tendo várias vantegens que o destacam, mas devido a algumas desvantagens que ele possui ele fica pela sombra do bootstrap.',
            'foundation_t' : 'Foundation é o terceiro mais famoso e usado framework CSS que assim como todos acabam ficando na sombra do Bootstrap devido as qualidades do Bootstrap.',
            'semanticui_t' : 'Semantic UI é o quarto mais famoso e usado framework CSS do GitHub que ao se comparar com o Foundation é bastante similar em números de usuários.',
            'purecss_t' : 'É o mais simples frameworks de todos os acima tendo pouquíssimos recursos em comparação ao anteriores porém ele não fica atrás por causa disso já que sua usabilidade é destinada a softwares mais simples que os demais',
        },
        'destaques' :{  
            'bootstrap_t' : 'Bootstrap é um framework muito bem documentado em sua página, no qual seus princípios de usabilidade e design seguem os princípios padrões para a construção de interfaces. Ele possui em vantagem o reuso excessivo de código e o uso de Jumbotron e Card o fazendo único dentre os outros frameworks. Em contrapartida o mesmo possui excesso de códigos não utilizados o que os torna desnecessários para o programador, apenas servindo para pesar no código e sua padronização extrema de uso fazendo a maioria dos sites que usam bootstrap serem muito iguais.',
            'materialize_t' : 'Materialize é um framework bem documentado que possui uma vasta gama de componentes, respomsividade suportada em qualquer dispositivo, em contrapartida ele não possui suporte ao modelo Flex Box e possui um arquivo muito pesado para trabalho.',
            'foundation_t' : 'Foundation é um framework bem documentado que é construído em SASS o que permite a contrução de aplicações rapidamente, possui maior flexibilidade com todas as classes possuindo um estilo alternativo, utiliza REMs ao invés de pixel eleiminando a necessidade explícita de definir altura e largura para cada dispositivo etc. Porém ele é bastante complexo para iniciantes e possui um arquivo relativamente muito grande tendo vários recursos que normalmente não são utilizados.',   
            'semanticui_t' : 'Semantic UI se destaca utilizando Jquery e LESS(pré-processador de CSS) produzindo resultados mais bonitos nas aplicações, possui uma excelente documentação, grande liberdade de customização,Carrega somente os componentes que se necesita na aplicação minimizando o tamanho do arquivo e consequentemente o tempo de carregamento da página entre outros. Por outro lado ele é bastante complexo para inciantes e não sofre mais manutenção.',
            'purecss_t' : 'Pure CSS é um framework extremamente leve permitindo tempos de carregamentos reápidos até mesmo para microprocessadores, possui matrizes flexíveis de módulos CSS. Só que o mesmo contitui-se apenas de CSS não incluindo Jquery ou plug-ins do Java Script.',              
        }
    };

    const type = {
        'style' : {
            'btn-opcoes' : 'btn btn-outline-dark col-sm-4 btn-opcoes',
            'btn-hc' : 'btn btn-outline-dark col-xs-1 btn-hc',
        },
        'stylehc' :{
            'btn-opcoes' : 'btn btn-outline-light col-sm-4 btn-opcoes',
            'btn-hc' : 'btn btn-outline-light col-xs-1 btn-hc'
        },
    };

    const benchmarks = {      
        'fama' : {
            'bootstrap': {
                'bootstrap1': {
                    'skills data boot col-sm-12' : '264.00'
                },
                'bootstrap2': {
                    'skills data bootS col-sm-6' : '132.00'
                }
            },
            'materialize': {
                'materialize1': {'skills data mater col-sm-2' : '44.00' },
                'materialize2': {'skills data materS col-sm-2' : '44.00' }
            },
            'foundation': {
                'foundation1': {'skills data found col-sm-1' : '22.00'},
                'foundation2': {'skills data foundS col-sm-1' : '22.00'}
            },
            'semantic': {
                'semantic1': {'skills data seman col-sm-1' : '22.00'},
                'semantic2': {'skills data semanS col-sm-2' : '44.00'},
            },
            'pure': {
                'pure1': {'skills data pure col-sm-6' : 'dados não fornecidos'},
                'pure2': {'skills data pureS col-sm-1' : '22.00'},
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
    function changeTableTexts(){
        $
    }

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
                    $(id).html(elem);
                });
            });
        });
    };

    function HideShowText(n,table){
        if(n == 0 && table == null){
            $.each(details, function(i, elem){
                $.each(elem, function(i, elem){  
                    let id = "#" + i;
                    $(id).hide();
                });
            });
        }
        else if(n == 1){
            if($('#'+table).is(":visible")){$('#'+table).slideUp(500);}               
            else {$('#'+table).slideDown(500);}         
        }
    };

    function ChangeTextMessages(table){
        $.each(details[table], function(i, elem) {
            let id = "#" + i; 
            $(id).html(elem);
        });    
    };

    function changeSiteColors(style,stylehc){
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
    };
    let $titles = $('.ar');
    let $botoes = $('.btn-opcoes');
    let $hc = $('.btn-hc');
    let t = null;
    let n = 0;
    $botoes.click(function(){    
        n = 0;
        t = null;
        let limit = $(this).data('limit');
        let table = $(this).data('table');
        let tag1 = $(this).data('tag');
        let tag2 = $(this).data('tag2');
        changeLimitValue(limit);
        changeTablesAttributes(table);
        changeTableNames(tag1,tag2);       
        HideShowText(n,t);
        ChangeTextMessages(table);       
    });
    $titles.click(function(){  
        n = 1;                
        t = $(this).data('t');
        HideShowText(n,t);           
    }); 
    
    $hc.click(function(){
        let style = $(this).data('style');
        let stylehc = $(this).data('stylehc');
        changeSiteColors(style,stylehc);
    });
});