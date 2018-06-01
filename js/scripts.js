$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var address2Input = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var q1i = parseInt($("input:radio[name=q1]:checked").val());
    var q2i = parseInt($("input:radio[name=q2]:checked").val());
    var q3i = parseInt($("input:radio[name=q3]:checked").val());
    var q4i = parseInt($("input:radio[name=q4]:checked").val());
    var ans1 = q1i + q2i + q3i + q4i;
    // debugger;
    if (q1i === 3 || q2i === 3 || q3i === 3 || q4i === 3) {
      $("#ruby").hide();
      $("#css").hide();
      $("#sharp").show();
      $("#userData").show();
      $("#surveyForm").hide();
    } else if (q1i === 2 && q2i === 2) {
      $("#ruby").hide();
      $("#css").show();
      $("#sharp").hide();
      $("#userData").show();
      $("#surveyForm").hide();
    } else if (ans1 >= 6) {
      $("#ruby").hide();
      $("#css").show();
      $("#sharp").hide();
      $("#userData").show();
      $("#surveyForm").hide();
    } else if (ans1 < 6) {
      $("#ruby").show();
      $("#css").hide();
      $("#sharp").hide();
      $("#userData").show();
      $("#surveyForm").hide();
    }  else {
      $("#ruby").hide();
      $("#css").hide();
      $("#sharp").hide();
    }
    event.preventDefault();
  });
});
