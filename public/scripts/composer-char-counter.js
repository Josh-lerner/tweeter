$(document).ready(function() {
  $("textarea").on("input", function (){
    let counter = 140 - $(this).val().length
    $("output.counter", $(this).parents("form")).text(counter)

    if (counter < 0) {
      $("output.counter", $(this).parents("form")).addClass("error");
    } else {
      $("output.counter", $(this).parents("form")).removeClass("error")
    }


  })
});