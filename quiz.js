
// let checkAnswer = function() {

//     let correctAnswer = 4";
    
//     const userAnswer = document.querySelector(`input[name="quiz"]:checked');

// }



// // const userAnswer = document.querySelector(`input[ name ="quiz"]:checked');


// // const Feedback = document.getElementById('feedback');

// // if (userAnswer) {
// //     if ( correctAnswer === userAnswer.value) {
// //           Feedback.textContent = "Your Answer is Correct";
// //     } else {

// //           Feedback.textContent = "That's Incorrect, Try again!";

// //     } 

// // }

let checkAnswer = function () {
    
    correctAnswer = "4";

    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    const Feedback = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {

          Feedback.textContent = "Correct! Well done.";

        } else  {

          Feedback.textContent = "That's incorrect. Try again!";
    
        }
} 

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    
// let Btn = document.getElementById ('submit-answer');
    
//     Btn.addEventListener ('click', function (checkAnswer) {

//         console.log(checkAnswer.target)
//         console.log(checkAnswer);

        
//     })

