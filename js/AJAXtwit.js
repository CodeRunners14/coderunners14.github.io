$( document ).ready(function(){
$.ajax({
    url: "http://chrome-firefly-45-146848.euw1-2.nitrousbox.com:8080/",
    success: function(data) {
       var str = data;
        $( "#ajaxy" ).append(str)

  }
});
});