var palindrome = function(input) {
  var test_string = input.toString().toLowerCase();

  if(test_string === test_string.split("").reverse().join("")){
    return true
  } else {
    return false
  }
};


$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var raw_input = $("input#raw_input").val();

    var result = "";
    if (palindrome(raw_input)){
      result = "YES";
    }else{
      result = "NO";
    };

    $(".output").text(result);
    event.preventDefault();
  });
});
