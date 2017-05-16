$(document).ready(function(){
	$("section").hide();
    $("#Hgc").click(function(){
       
       $("section").hide();
       $("#gc").fadeToggle("slow");
       $("#formcréercontact").hide();
       $("#formmodifiercontact").hide();
       $("#formsupprimercontact").hide();
      // $("#formmodifiercategorie").hide();
    });
    $("#Hgg").click(function(){
       
       $("section").hide();
       $("#gg").fadeToggle("slow");
       $("#formcréergroupe").hide();
       $("#formmodifiergroupe").hide();
       $("#formsupprimergroupe").hide();
      // $("#formmodifiercategorie").hide();
    });
    $("#Hlc").click(function(){
       
       $("section").hide();
       $("#lc").fadeToggle("slow");
       $("#formcréercontact").hide();
       $("#formmodifiercontact").hide();
       $("#formsupprimercontact").hide();
      // $("#formmodifiercategorie").hide();
    });
    $("#Hlg").click(function(){
       
       $("section").hide();
       $("#lg").fadeToggle("slow");
       $("#formcréercontact").hide();
       $("#formmodifiercontact").hide();
       $("#formsupprimercontact").hide();
      // $("#formmodifiercategorie").hide();
    });
    $("#cc").click(function(){
       
       $("#formmodifiercontact").hide();
       $("#formsupprimercontact").hide();
       $("#formcréercontact").fadeToggle("slow");

   });

    $("#mc").click(function(){
       
       $("#formcréercontact").hide();
       $("#formsupprimercontact").hide();
       $("#formmodifiercontact").fadeToggle("slow");
   });

    $("#sc").click(function(){
       
       $("#formcréercontact").hide();
       $("#formmodifiercontact").hide();
       $("#formsupprimercontact").fadeToggle("slow");
   });

    $("#cg").click(function(){
       
       $("#formmodifiergroupe").hide();
       $("#formsupprimergroupe").hide();
       $("#formcréergroupe").fadeToggle("slow");

   });

    $("#mg").click(function(){
       
       $("#formcréergroupe").hide();
       $("#formsupprimergroupe").hide();
       $("#formmodifiergroupe").fadeToggle("slow");
   });

    $("#sg").click(function(){
       
       $("#formcréergroupe").hide();
       $("#formmodifiergroupe").hide();
       $("#formsupprimergroupe").fadeToggle("slow");
   });
 
});
