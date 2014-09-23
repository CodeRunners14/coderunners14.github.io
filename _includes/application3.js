$( document ).ready(function() {
 console.log("ready"); 
  $.ajax({
   
    url: "http://content.guardianapis.com/search?api-key=test",
    success: function(data) {
      $.each(data.response.results, function(i, result) {
        var str = '<li> <a href="'+ this["webUrl"] + '">' + this["webTitle"] + "</a> </li>";
        console.log(str);
        $( "#tabs-1" ).append(str);
      });
    }  
  })
         
$.ajax({
   
    url: "http://content.guardianapis.com/football?api-key=test",
    success: function(data) {
      $.each(data.response.results, function(i, result) {
        var str = '<li> <a href="'+ this["webUrl"] + '">' + this["webTitle"] + "</a> </li>";
        $( "#tabs-2" ).append(str);
      });
    }  
  })

$.ajax({
   
    url: "http://content.guardianapis.com/uk-news?api-key=test",
    success: function(data) {
      $.each(data.response.results, function(i, result) {
        var str = '<li> <a href="'+ this["webUrl"] + '">' + this["webTitle"] + "</a> </li>";
        $( "#tabs-3" ).append(str);
      });
    }  
  })
       
  
});