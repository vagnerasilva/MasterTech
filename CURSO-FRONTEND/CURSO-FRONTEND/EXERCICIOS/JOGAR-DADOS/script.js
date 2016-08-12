$(function(){

    $(".botao-sorte").click(function(){
        dado();
    });
            
    var dado = function(){
        var escolhe = Math.floor((Math.random()*5)+1);
        var imagem = $(".imagem-dado");

        imagem.attr("src" , "dado-"+escolhe+".jpg" );
    };
});