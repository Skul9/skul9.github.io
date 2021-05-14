const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.getElementsByClassName("create-card")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const subject = document.getElementById("category");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);

function divMaker(text){
  var div = document.createElement("div");
  var h2_question = document.createElement('h2');
  var h2_answer = document.createElement('h3');
  let para_subject = document.createElement('h4');
  let para_text = document.createTextNode(subject.value);

  para_subject.appendChild(para_text);
  div.appendChild(para_subject);

  div.className = 'flashcard';

  
  h2_question.setAttribute("style", "text-align:center; font-family: 'Texturina', sans-serif;  border-top:1px solid #5899E2; padding: 15px; margin-top:30px");
  h2_question.innerHTML = text.my_question;

  h2_answer.setAttribute("style", "text-align:center; display:none; color:#1b1d27");
  h2_answer.innerHTML = text.my_answer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  
  

  div.addEventListener("click", function(){
    if(h2_answer.style.display == "none")
      h2_answer.style.display = "block";
    else
      h2_answer.style.display = "none";
  })

  flashcards.appendChild(div);
}

function addFlashcard(){
  var flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.length - 1]);
  question.value = '';
  answer.value = '';

}


function delFlashcards(){
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
}


function showCreateCardBox(){
  createCard.style.display = "block";
}

function hideCreateCardBox(){
  createCard.style.display = "none";
}

