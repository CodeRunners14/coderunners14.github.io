$( document ).ready(function() {

var fillNews=function(sect){
  
$.ajax({
   
    url: "http://content.guardianapis.com/search?api-key=test&show-fields=all&order-by=newest&section=" + sect,
    success: function(data) {
      
      for(var i=0; i<5; i++) {
        
        var str = '<ul><a href="'+
            data.response.results[i].webUrl + '">'+
            data.response.results[i].webTitle + "</a></ul>";
        
        $( "#" + sect ).append(str);
        }
      }
    });
  };
    fillNews("football");
  
    fillNews("uk-news");
  
    fillNews("travel");
});