player_1_name=localStorage.getItem("player_1");
player_2_name=localStorage.getItem("player_2");
player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name+" :";
document.getElementById("player_2_name").innerHTML=player_2_name+" :";
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question Turn :"+player_1_name;
document.getElementById("player_ans").innerHTML="Answer turn :"+player_2_name;

function send(){
    get_num1=document.getElementById("num1").value;
    console.log(get_num1);

    get_num2=document.getElementById("num2").value;
    console.log(get_num2);

    answer=get_num2*get_num1;

    question_word="<h4 id='word_display'>Q."+get_num1+"x"+get_num2+"</h4>";
    input_box="<br>answer:<input id='input_box' type='text'>";
    button='<br><br><button class="btn btn-info" onclick="check()">Check</button>';
    row=question_word+input_box+button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("num1").value=" ";
    document.getElementById("num2").value=" ";
}

answer_turn="player2";
question_turn="player1";

function check(){
    get_answer=document.getElementById("input_box").value;

    if(get_answer==answer){
        if(answer_turn=="player1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
        }
    }

    if(question_turn=="player2"){
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn:"+player_1_name;
    }
    else{
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn:"+player_2_name;
    }

    if(answer_turn=="player2"){
        answer_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer turn:"+player_1_name;
    }
    else{
        answer_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer turn:"+player_2_name;
    }  

    document.getElementById("output").innerHTML=" ";
}