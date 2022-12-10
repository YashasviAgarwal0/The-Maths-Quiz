player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send() 
{
   var number_1 = document.getElementById("number_1").value;
   var number_2 = document.getElementById("number_2").value;
   actual_answer = parseInt(number_1)*parseInt(number_2);
   var question_number = "<h4> Question : " + number_1 + "X" + number_2 + "</h4><br>";
   var input_box = "Answer : <input type= 'text' class='form-control' id= 'input_check_box'>";
   var check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
   var row = question_number + input_box + check_button;
   document.getElementById("output").innerHTML = row; 

   document.getElementById("number_1").value = ""; 
   document.getElementById("number_2").value = ""; 
}

question_turn = "player1";
answer_turn = "player2";

function check() 
{
   get_answer = document.getElementById("input_check_box").value;
   if(get_answer == actual_answer) 
   {
      if(answer_turn == "player1")
      {
         player1_score = player1_score + 1;
         document.getElementById("player1_score").innerHTML =player1_score;
      }
      else
      {
         player2_score = player2_score +1;
         document.getElementById("player2_score").innerHTML = player2_score;
      }
   }

   if(question_turn == "player1")
   {
      question_turn = "player2"
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
   }
   else
   {
      question_turn = "player1"
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
   }
   if(answer_turn == "player1")
   {
      answer_turn = "player2"
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
   }
   else
   {
      answer_turn = "player1"
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
   }
   document.getElementById("output").innerHTML = "";
}