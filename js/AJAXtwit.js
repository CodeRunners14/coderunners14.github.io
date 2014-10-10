$( document ).ready(function(){
$.ajax({
    url: "http://mytwitterapi.herokuapp.com/",
    success: function(data) {
      var array = JSON.parse(data);
      
      var str = '';
        for(var i=0; i<array.length; i++) {
           str += '<div class=" col-lg-3 col-md-4 col-xs-6 thumbnail id="outer" ><img src="'
               + array[i] + '"img-resposive"  /></div>';
        }
      console.log(str)
        $( "#ajaxy" ).append(str)
  }
});
});
