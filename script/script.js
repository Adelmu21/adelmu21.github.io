/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

// 
var textArray = [""]
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#auto-type").innerHTML = textArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != textArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);

/* a code for interchangeable typing of words in a sentence 
<script>
        var typed = new Typed(".auto-type", {
            strings: ["Hello", "I am", "Adel", "a", "Fullstack", "Developer"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        })
    </script>
<script src="https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js"></script> */


(function ($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }

      return check;
  });


  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

})(jQuery);