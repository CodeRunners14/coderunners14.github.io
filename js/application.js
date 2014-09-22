$( document ).ready(function() {

  $.ajax({
    url: "http://content.guardianapis.com/search?api-key=test",
    success: function(data) {
      window.alert("Working!");
      var arr = [
        [data.response.results[0].webTitle,  data.response.results[0].webUrl],
        [data.response.results[1].webTitle,  data.response.results[1].webUrl],
        [data.response.results[2].webTitle,  data.response.results[2].webUrl],
        [data.response.results[3].webTitle,  data.response.results[3].webUrl],
        [data.response.results[4].webTitle,  data.response.results[4].webUrl]
      ];
      var str = '<a href="'+ arr[0][1] + '">' + arr[0][0] + "</a>";
      window.alert(str)
      $( "#weather2" ).html(str);
    }
});
  
     
});