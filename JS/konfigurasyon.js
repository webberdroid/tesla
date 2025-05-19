var fiyat = 2000000;
var fiyat2 = 0
var fiyat3 = 0
var checkRed = 0;
var checkGreen = 0;
var checkBlack = 0;
var checkBlue = 0

var icSiyah = 0;
var icBeyaz = 0;

function kirmizi(){
   
    document.getElementById("arabaRenk").src="IMG/ChatGPT Image 11 May 2025 13_24_57.png"
    document.getElementById("sonRenk").src="IMG/ChatGPT Image 11 May 2025 13_24_57.png"
    document.getElementById("tabloRenk").innerHTML = "Kırmızı"
    document.getElementById("tabloRenk").style.color = "red"
    document.getElementById("tabloRenkFiyat").innerHTML = "+150,000" + " TL"
    
    

    if(checkRed == 0){
         fiyat = fiyat - fiyat2;
         fiyat = fiyat + 150000
         document.getElementById("startingPrice").innerHTML = Number(fiyat) + " TL"
         document.getElementById("tabloFiyat").innerHTML = fiyat + " TL"
         fiyat2 = 150000;
         checkRed = 1;
         checkGreen = 0;
         checkBlack = 0;
         checkBlue = 0
        
    }
    
}



function yeşil(){

    document.getElementById("arabaRenk").src="IMG/ChatGPT Image 11 May 2025 13_28_49.png";
    document.getElementById("sonRenk").src="IMG/ChatGPT Image 11 May 2025 13_28_49.png";
    document.getElementById("tabloRenk").innerHTML = "Yeşil"
    document.getElementById("tabloRenk").style.color = "green"
     document.getElementById("tabloRenkFiyat").innerHTML = "+180,000" + " TL"
   

    if(checkGreen == 0 ){

         fiyat = fiyat - fiyat2;
         fiyat = fiyat + 180000;
         document.getElementById("startingPrice").innerHTML = Number(fiyat) + " TL" 
          document.getElementById("tabloFiyat").innerHTML = fiyat + " TL"
         fiyat2 = 180000
         checkGreen = 1;
         checkRed = 0;
         checkBlack = 0;
         checkBlue = 0
    
    }
    


}

function siyah(){

    document.getElementById("arabaRenk").src="IMG/ChatGPT Image 11 May 2025 13_34_58.png"
    document.getElementById("sonRenk").src="IMG/ChatGPT Image 11 May 2025 13_34_58.png"
    document.getElementById("tabloRenk").innerHTML = "Siyah"
    document.getElementById("tabloRenk").style.color = "black"
    document.getElementById("tabloRenkFiyat").innerHTML = "+130,000" + " TL"
    
    
    if(checkBlack == 0 ){

        
         fiyat = fiyat - fiyat2;
         fiyat = fiyat + 130000;
         document.getElementById("startingPrice").innerHTML = Number(fiyat) + " TL"
         document.getElementById("tabloFiyat").innerHTML = fiyat + " TL"
         fiyat2 = 130000
         checkBlack = 1;
         checkRed = 0;
         checkGreen = 0;
         checkBlue = 0
    
    }
    

}



function mavi(){

    document.getElementById("arabaRenk").src="IMG/ChatGPT Image 11 May 2025 13_29_04.png"
    document.getElementById("sonRenk").src="IMG/ChatGPT Image 11 May 2025 13_29_04.png"
    document.getElementById("tabloRenk").innerHTML = "Mavi"
    document.getElementById("tabloRenk").style.color = "blue"
    document.getElementById("tabloRenkFiyat").innerHTML = "+0" + " TL"
    
    if(checkBlue == 0){
         
         fiyat = fiyat - fiyat2;
         fiyat = fiyat + 0;
         document.getElementById("startingPrice").innerHTML = Number(fiyat) + " TL";
         document.getElementById("tabloFiyat").innerHTML = fiyat + " TL"
         fiyat2 = 0
         checkBlack = 0;
         checkRed = 0;
         checkGreen = 0;
         checkBlue = 0
        
    }

  
}

function icMekanBeyaz(){
    
   document.getElementById("sonIcMekan").src = "IMG/Ekran görüntüsü 2025-05-13 215540.png"
   document.getElementById("tabloIcMekan").innerHTML = "Siyah Beyaz"
   document.getElementById("tabloIcMekanFiyat").innerHTML = "+100,000" + " TL"

    if(icBeyaz == 0){
    fiyat3 = 100000
    fiyat = fiyat + fiyat3
    document.getElementById("startingPrice").innerHTML = Number(fiyat)
    document.getElementById("tabloFiyat").innerHTML = fiyat + " TL"
    icBeyaz = 1;
    icSiyah = 0;
    alert("Fiyat = " + document.getElementById("startingPrice").innerHTML + " TL");
    }

    
}

function icMekanSiyah(){
    
    document.getElementById("sonIcMekan").src = "IMG/Ekran görüntüsü 2025-05-13 215509.png"
    document.getElementById("tabloIcMekan").innerHTML = "Siyah"
    document.getElementById("tabloIcMekanFiyat").innerHTML = "+0" + " TL"

    if(icSiyah == 0 && icBeyaz==1){
    fiyat = fiyat - 100000
    document.getElementById("startingPrice").innerHTML = Number(fiyat)
    document.getElementById("tabloFiyat").innerHTML = fiyat + " TL"
    icSiyah = 1;
    icBeyaz = 0;
    }
}

function belirt(){

 
   document.getElementById("sonRenk").style.boxShadow= "3px 3px 3px 3px black"
   document.getElementById("sonRenk").style.transform= "translateY(-10px)"
    document.getElementById("sonRenk").style.backgroundColor= "red"
  
   
   document.getElementById("sonIcMekan").style.filter = "blur(4px)"

}

function belirt2(){
   
    document.getElementById("sonIcMekan").style.boxShadow= "3px 3px 3px 3px black"
   document.getElementById("sonIcMekan").style.transform= "translateY(-10px)"
    document.getElementById("sonIcMekan").style.backgroundColor= "red"
   
   
   
   document.getElementById("sonRenk").style.filter = "blur(4px)"

}

function belirtme(){

   document.getElementById("sonRenk").style.boxShadow= "none"
   document.getElementById("sonRenk").style.transform= "none"
    document.getElementById("sonRenk").style.backgroundColor= "none"
  
   
   document.getElementById("sonIcMekan").style.filter = "blur(0px)"
   

}

function belirtme2(){

    document.getElementById("sonIcMekan").style.boxShadow= "none"
   document.getElementById("sonIcMekan").style.transform= "none"
    
     
    document.getElementById("sonRenk").style.filter = "blur(0px)"
   
   
}

function ehliyetYas(){

   document.getElementById("ehliyet").innerHTML = document.getElementById("yas").value
   

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
