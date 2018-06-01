$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    // back-end
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var address2Input = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".address2").text(address2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    var q1i = parseInt($("input:radio[name=q1]:checked").val());
    var q2i = parseInt($("input:radio[name=q2]:checked").val());
    var q3i = parseInt($("input:radio[name=q3]:checked").val());
    var q4i = parseInt($("input:radio[name=q4]:checked").val());
    var ans1 = q1i + q2i + q3i + q4i;
    // front-end
    if (q1i && q2i && q3i && q4i) {
      if (q1i === 3 || q2i === 3 || q3i === 3 || q4i === 3) {
        $("#ruby").hide();
        $("#css").hide();
        $("#sharp").delay(700).fadeIn(1000);
        $("#userData").delay(700).fadeIn(4000);
        $("#surveyForm").fadeOut(500);
        document.body.style.backgroundColor = "#b3f0ff";
      } else if (q1i === 2 && q2i === 2) {
        $("#ruby").hide();
        $("#css").delay(700).fadeIn(1000);
        $("#sharp").hide();
        $("#userData").delay(700).fadeIn(4000);
        $("#surveyForm").fadeOut(500);
        document.body.style.backgroundColor = "#b3ffb3";
      } else if (ans1 >= 6) {
        $("#ruby").hide();
        $("#css").delay(700).fadeIn(1000);
        $("#sharp").hide();
        $("#userData").delay(700).fadeIn(4000);
        $("#surveyForm").fadeOut(500);
        document.body.style.backgroundColor = "#b3ffb3";
      } else if (ans1 < 6) {
        $("#ruby").delay(700).fadeIn(1000);
        $("#css").hide();
        $("#sharp").hide();
        $("#userData").delay(700).fadeIn(4000);
        $("#surveyForm").fadeOut(500);
        document.body.style.backgroundColor = "#ffad99";
      }  else {
        $("#ruby").hide();
        $("#css").hide();
        $("#sharp").hide();
      }
    } else {
        alert("You must select an answer for each Survey question.")
    }
    event.preventDefault();
  });
});
