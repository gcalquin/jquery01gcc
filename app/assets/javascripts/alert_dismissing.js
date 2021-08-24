$(document).ready(function(){
   console.log("Estoy leyendo el archivo alert_dismissing.js")

   $(".alert-close").click(function(){
      $(".alert").fadeOut("slow", function(){
          $(this).remove()
      })
   })


});


