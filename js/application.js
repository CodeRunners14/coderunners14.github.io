$( document ).ready(function() {

var fillNews=function(sect){
  
$.ajax({
   
    url: "http://content.guardianapis.com/search?api-key=test&show-fields=all&order-by=newest&section=" + sect,
    success: function(data) {
      
      for(var i=0; i<5; i++) {
        
   var str = '<li class="row gtableline"><a class="col-md-8" href="'+
            data.response.results[i].webUrl + '">'+'<img src="'+
            data.response.results[i].fields.thumbnail + '" class="col-md-4" />' +
            data.response.results[i].webTitle + "</a>" +
            data.response.results[i].fields.trailText.substr(0,130)+"..." + '</li>'
        
        $( "#" + sect ).append(str);
        }
      }
    });
  };
    fillNews("football");
  
    fillNews("uk-news");
  
    fillNews("travel");
});