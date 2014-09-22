$( document ).ready(function() {

  $.ajax({
    url: "http://content.guardianapis.com/search?api-key=test",
    success: function(data) {
      $.each(data.response.results, function(i, result) {
        var str = '<a href="'+ this["webUrl"] + '">' + this["webTitle"] + "</a>";
        $( "#weather2" ).append(str);
      });
    }
  }
);  
});