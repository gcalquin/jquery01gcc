$(document).ready(function(){
   console.log("Estoy leyendo el archivo accordion.js")

   $(".acordeon").click(function(){
      var div_id = $(this).data("target")
      var div_acordeon = $ ("#"+div_id)
      if (div_acordeon.is(":visible")){
         div_acordeon.hide("slow")
      }else{
         div_acordeon.show("slow")
      }
   })


});


