$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    var spiceInput = $("input:radio[name=spice]:checked").val();
    var ans1 = parseInt($("#q1").val()) + parseInt($("#q2").val()) + parseInt($("#q3").val()) + parseInt($("#q4").val());

    if (ans1 >= 12) {
      $("#bird").hide();
      $("#cookie").hide();
      $("#grouch").show();
    } else if (ans1 > 8) {
      $("#bird").hide();
      $("#cookie").show();
      $("#grouch").hide();
    } else if (ans1 >= 4) {
      $("#bird").show();
      $("#cookie").hide();
      $("#grouch").hide();
    } else {
      $("#bird").hide();
      $("#cookie").hide();
      $("#grouch").hide();
    }
    event.preventDefault();
  });
});
