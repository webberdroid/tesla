
var price = 2000000;
var checkRed = 0;
var checkGreen = 0;
var checkBlack = 0;
var checkBlue = 0

var icSiyah = 0;
var icBeyaz = 0;

function kirmizi(){
   
    document.getElementById("arabaRenk").src='/IMG/ChatGPT Image 11 May 2025 13_24_57.png'
 
    

    if(checkRed == 0){

        
        document.getElementById("startingPrice").innerHTML = Number(price + 150000) + " TL"
         checkRed = 1;
         checkGreen = 0;
         checkBlack = 0;
         checkBlue = 0
        price = 2000000
    }
    
    

}

function yeşil(){

    document.getElementById("arabaRenk").src='/IMG/ChatGPT Image 11 May 2025 13_28_49.png';


    if(checkGreen == 0){

        
        document.getElementById("startingPrice").innerHTML = Number(price + 180000) + " TL"
         checkGreen = 1;
         checkRed = 0;
         checkBlack = 0;
         checkBlue = 0
        price = 2000000
    }
}

function siyah(){

    document.getElementById("arabaRenk").src='/IMG/ChatGPT Image 11 May 2025 13_34_58.png'
    
    if(checkBlack == 0){

        
        document.getElementById("startingPrice").innerHTML = Number(price + 130000) + " TL"
         checkBlack = 1;
         checkRed = 0;
         checkGreen = 0;
         checkBlue = 0
        price = 2000000
    }

}

function mavi(){

    document.getElementById("arabaRenk").src='/IMG/ChatGPT Image 11 May 2025 13_29_04.png'
    
    if(checkBlue == 0){

        
        document.getElementById("startingPrice").innerHTML = Number(price) 
         checkBlue = 1;
         checkRed = 0;
         checkGreen = 0;
         checkBlack = 0
         price = 2000000
    }

}

function icMekanBeyaz(){
    
    if(icBeyaz == 0){
    document.getElementById("startingPrice").innerHTML = Number(parseInt(document.getElementById("startingPrice").innerHTML) + 100000) + " TL";
    icBeyaz = 1;
    icSiyah = 0;
    alert("Fiyat = " + document.getElementById("startingPrice").innerHTML);
    }

    
}

function icMekanSiyah(){
    
    if(icSiyah == 0 && icBeyaz==1){
    document.getElementById("startingPrice").innerHTML = Number(parseInt(document.getElementById("startingPrice").innerHTML) - 100000) + " TL";
    icSiyah = 1;
    icBeyaz = 0;
    }
}



$(document).ready(function(){
    $("#mt1").mouseover(function(){
         $("#mt1").css("color", "blue");
         $("#mt2").css("filter", "blur(4px)");
         $("#mt3").css("filter", "blur(4px)");
     });

    $("#mt1").mouseleave(function(){
         $("#mt1").css("color", "black");
         $("#mt2").css("filter", "blur()");
         $("#mt3").css("filter", "blur()");
     });

    $("#mt2").mouseover(function(){
         $("#mt2").css("color", "red");
         $("#mt1").css("filter", "blur(4px)");
         $("#mt3").css("filter", "blur(4px)");
     });

    $("#mt2").mouseleave(function(){
         $("#mt2").css("color", "black");
         $("#mt1").css("filter", "blur()");
         $("#mt3").css("filter", "blur()");
     });

    $("#mt3").mouseover(function(){
         $("#mt3").css("color", "green");
         $("#mt1").css("filter", "blur(4px)");
         $("#mt2").css("filter", "blur(4px)");
     });

     $("#mt3").mouseleave(function(){
         $("#mt3").css("color", "black");
         $("#mt1").css("filter", "blur()");
         $("#mt2").css("filter", "blur()");
     }); 


     

     
});

