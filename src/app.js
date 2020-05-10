$(document).ready(function() {

  $.ajax({

    url:'database.php',
    method:'GET',
    success: function(data){
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var traduci = JSON.parse(data);
      for (var i = 0; i < traduci.length; i++) {
        var album = traduci[i];
        console.log(album);
        var generato = template({
          title : album.title,
          poster : album.poster,
          author : album.author,
          year : album.year

        });

        $(".cds-container container").append(generato);
      }




    },
    error: function(err){

    }
  })


});
