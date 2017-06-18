
function fnGetQuestion(intQuestion){

	
switch (intQuestion){
  case 0:
    var key = JSON.parse('{"q":"1. The character Kramer.  What is his first name?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 1:
    var key = JSON.parse('{"q":"2. What catalog did Elaine run when her boss moved to Burma?" ,"Opta":"a. L.L. Bean", "Optb":"b. Pottery Barn","Optc":"c. Victoria Secret","Optd":"d. J. Peterman","Ans":"d. J. Peterman"}');
    break;
  case 2:
    var key = JSON.parse('{"q":"3. Jerrys older brother is named?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. He has no brother","Optd":"d. Xavier","Ans":"c. He has no brother"}');
    break;
  case 3:
    var key = JSON.parse('{"q":"4. If George was a porn star what did he say his name would be?" ,"Opta":"a. Buck Naked", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"a. Buck Naked"}');
    break;
  case 4:
    var key = JSON.parse('{"q":"5. Where did Jerrys parents live?" ,"Opta":"a. Kanasas", "Optb":"b. New York","Optc":"c. Maine","Optd":"d. Florida","Ans":"d. Florida"}');
    break;
  case 5:
    var key = JSON.parse('{"q":"6. Who is Jerrys nemesis in his building?" ,"Opta":"a. The super", "Optb":"b. Manny","Optc":"c. Kramer","Optd":"d. Newman","Ans":"d. Newman"}');
    break;
  case 6:
    var key = JSON.parse('{"q":"7. What does Kramer do for a living?" ,"Opta":"a. Mailman", "Optb":"b. Banker","Optc":"c. No one really knows","Optd":"d. Comedian","Ans":"c. No one really knows"}');
    break;
  case 7:
    var key = JSON.parse('{"q":"8.  When George and Jerry write a pilot for NBC, what is it about?" ,"Opta":"a. College", "Optb":"b. Nothing","Optc":"c. Political Drama","Optd":"d. Single Parents","Ans":"b. Nothing"}');
    break;
  case 8:
    var key = JSON.parse('{"q":"9. What baseball team did George work for?" ,"Opta":"a. New York Mets", "Optb":"b. Washignton Nationals","Optc":"c. New York Yankees","Optd":"d. Cleveland Indians","Ans":"c. New York Yankees"}');
    break;
  case 9:
    var key = JSON.parse('{"q":"10. What are Georges parents names?" ,"Opta":"a. Frank and Estelle", "Optb":"b. Steve and Flossy","Optc":"c. Morty and Helen","Optd":"d. Bob and Jane","Ans":"a. Frank and Estelle"}');
    
    break;
  case 10:
    var key = JSON.parse('{"q":"Thanks for taking the Quiz.  We are processing your results" ,"Opta":"", "Optb":"","Optc":"","Optd":"","Ans":""}');
    break;

}
  return key;

}

function fnSetUpQuestion(question){

  var strInjectResult = "<p>"+ question + "</p>";
  return strInjectResult;
}

function fnPopulateQuiz(data, intQR){

  $("#q").html(data.q);
  $("#Correct").text("");
  $("#InCorrect").text("");
  $("#UnAnswered").text("");
  //Need to clear out radio buttons for processing results message
  if(intQR < 10){
      $("#lbl1").html("<input id = 'rdo1' type='radio' name='optradio' value='"+ data.Opta +"'>"+data.Opta);
      $("#lbl2").html("<input id = 'rdo2' type='radio' name='optradio' value='"+ data.Optb +"'>"+data.Optb);
      $("#lbl3").html("<input id = 'rdo3' type='radio' name='optradio' value='"+ data.Optc +"'>"+data.Optc);
      $("#lbl4").html("<input id = 'rdo4' type='radio' name='optradio' value='"+ data.Optd +"'>"+data.Optd);
  }
  else{
      $("#lbl1").html("");
      $("#lbl2").html("");
      $("#lbl3").html("");
      $("#lbl4").html("");

  }
  
}

function fnImages(imgIdx){
//Cycle through images on right of page
  var arrayImages = ["assets/images/Kramer_Crazy.jpg", "assets/images/Elaine_crazy.jpg", "assets/images/George_amICrazy.jpg","assets/images/Kramer_Crazy.jpg", "assets/images/Elaine_crazy.jpg", "assets/images/George_amICrazy.jpg","assets/images/Kramer_Crazy.jpg", "assets/images/Elaine_crazy.jpg", "assets/images/George_amICrazy.jpg", "assets/images/George_amICrazy.jpg"];
  //console.log(arrayImages[imgIdx]);
  $("#imgScroll").attr('src', ''); // Clear the src
  $("#imgScroll").attr('src', arrayImages[imgIdx]);
  
}

function fnResults(uScore, uWrong){

  var Unanswered = 10 - (uScore+uWrong);
  $("#Correct").text("Correct Answers: "+uScore);
  $("#InCorrect").text("Incorrect Answers: "+uWrong);
  $("#UnAnswered").text("Unanswered Questions: "+Unanswered);
  $("#q").html("");
  $("#lbl1").html("");
  $("#lbl2").html("");
  $("#lbl3").html("");
  $("#lbl4").html("");

} 

function CycleGif(rndNum){

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=Seinfeld&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        
        //console.log(response);
        var results = response.data;
        console.log(results);
        var gifScroll = $("#GifScroll");
        gifScroll.attr("src", results[rndNum].images.fixed_height.url);
      });
}   
      
      