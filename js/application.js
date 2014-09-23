$( document ).ready(function() {
         
$.ajax({
   
    url: "http://content.guardianapis.com/football?api-key=test",
    success: function(data) {
      $.each(data.response.results, function(i, result) {
        var str = '<a href="'+ this["webUrl"] + '">' + this["webTitle"] + "</a>";
        $( "#sport" ).append(str);
      });
    }  
  })

$.ajax({
   
    url: "http://content.guardianapis.com/travel?api-key=test",
    success: function(data) {
      $.each(data.response.results, function(i, result) {
        var str = '<a href="'+ this["webUrl"] + '">' + this["webTitle"] + "</a>";
        $( "#travel" ).append(str);
      });
    }  
  })

$.ajax({
   
    url: "http://content.guardianapis.com/uk-news?api-key=test",
    success: function(data) {
      $.each(data.response.results, function(i, result) {
        var str = '<a href="'+ this["webUrl"] + '">' + this["webTitle"] + "</a>";
        $( "#uk-news" ).append(str);
      });
    }  
  })
       
  
});