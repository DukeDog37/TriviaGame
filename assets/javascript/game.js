
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
    var key = JSON.parse('{"q":"4. If George was a porn star what did he say his name would be?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 4:
    var key = JSON.parse('{"q":"5. Where did Jerrys parents live?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 5:
    var key = JSON.parse('{"q":"6. Who is Jerrys nemesis in his building?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 6:
    var key = JSON.parse('{"q":"7. What does Kramer do for a living?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 7:
    var key = JSON.parse('{"q":"8.  When George and Jerry write a pilot for NBC, what is it about?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 8:
    var key = JSON.parse('{"q":"9. At one time George worked for the New York Mets?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 9:
    var key = JSON.parse('{"q":"10. What are Georges parents names?" ,"Opta":"a. Joe", "Optb":"b. Frank","Optc":"c. Cosmo","Optd":"d. Xavier","Ans":"c. Cosmo"}');
    break;
  case 10:
    var key = JSON.parse('{"q":"Trivia Game Completed" ,"Opta":"", "Optb":"","Optc":"","Optd":"","Ans":""}');
    break;

}
  return key;

}

function fnSetUpQuestion(question){

  var strInjectResult = "<p>"+ question + "</p>";
  return strInjectResult;
}

function fnPopulateQuiz(data){

  $("#q").html(data.q);
  $("#lbl1").html("<input id = 'rdo1' type='radio' name='optradio' value='"+ data.Opta +"'>"+data.Opta);
  $("#lbl2").html("<input id = 'rdo2' type='radio' name='optradio' value='"+ data.Optb +"'>"+data.Optb);
  $("#lbl3").html("<input id = 'rdo3' type='radio' name='optradio' value='"+ data.Optc +"'>"+data.Optc);
  $("#lbl4").html("<input id = 'rdo4' type='radio' name='optradio' value='"+ data.Optd +"'>"+data.Optd);
  
}
/*    
      
      <p>5. Where did Jerry's parents live?</p>
      <form>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">a. Queens</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">b. Florida</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">c. New Jersey</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">d. Brooklyn</label>
        </div>
      </form>
      <p>6. Who is Jerry's nemesis in his building?</p>
      <form>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">a. The super</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">b. Kramer</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">c. Manny</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">d. Newman</label>
        </div>
      </form>
      <p>7. What does Kramer do for a living?</p>
      <form>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">a. Mailman</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">b. Banker</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">c. No one really knows</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">d. Comedian</label>
        </div>
      </form>
      <p>8.  When George and Jerry write a pilot for NBC, what is it about?</p>
      <form>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">a. Living in New York</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">b. College</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">c. Dating</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">d. Nothing</label>
        </div>
      </form>
      
      <p>9. At one time George worked for the New York Mets?</p>
      <form>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">a. True</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">b. False</label>
        </div>
      </form>
      <p>10. What are George's parents names?</p>
      <form>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">a. Frank and Estelle</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">b. Steve and Flossy</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">c. Morty and Helen</label>
        </div>
        <div class="radio-inline">
          <label><input type="radio" name="optradio">d. Bob and Jane</label>
        </div>*/