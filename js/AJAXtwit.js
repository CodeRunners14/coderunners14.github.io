$( document ).ready(function(){
$.ajax({
    url: "http://chrome-firefly-45-146848.euw1-2.nitrousbox.com:8080/",
    success: function(data) {
       var array = JSON.parse(data);
      
      var str = '';
        for(var i=0; i<array.length; i++) {
           str += '<li class="row gtableline"><img src="'
               + array[i] + '" class="col-md-4" /></li>';
        }
      console.log(str)
        $( "#ajaxy" ).append(str)
  }
});
});
