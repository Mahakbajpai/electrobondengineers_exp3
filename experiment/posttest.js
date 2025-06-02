/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: " What role does the acid catalyst play in ester hydrolysis?",  ///// Write the question inside double quotes
      answers: {
        a: "It speeds up the reaction without being consumed",                  ///// Write the option 1 inside double quotes
        b: "It gets consumed during the reaction",                  ///// Write the option 2 inside double quotes
        c: "It prevents the reaction",                  ///// Write the option 3 inside double quotes
        d: " It converts ester to ketone"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "Which graph is used to determine the rate constant for a first-order ester hydrolysis reaction?",  ///// Write the question inside double quotes
      answers: {
        a: " Concentration vs. time",                  ///// Write the option 1 inside double quotes
        b: " Logarithm of concentration vs. time",                  ///// Write the option 2 inside double quotes
        c: " Rate vs. concentration ",       ///// Write the option 3 inside double quotes
        d: "Volume vs. time"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
      {
      question: " If the rate constant doubles when temperature increases by 10°C, what does this imply?",  ///// Write the question inside double quotes
      answers: {
        a: "  The reaction is temperature-independent",                  ///// Write the option 1 inside double quotes
        b: "The reaction is highly sensitive to temperature",                  ///// Write the option 2 inside double quotes
        c: " The reaction is zero order",                  ///// Write the option 3 inside double quotes
        d: "The catalyst is ineffective"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },    
    {
      question: "What units are typically used for the rate constant in a first-order reaction?",  ///// Write the question inside double quotes
      answers: {
        a: " mol/L",                  ///// Write the option 1 inside double quotes
        b: " L/mol·s",                  ///// Write the option 2 inside double quotes
        c: " s⁻¹ ",                  ///// Write the option 3 inside double quotes
        d: " mol/L·s"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },    
    {
      question: "Which of these can cause errors in determining the rate constant of ester hydrolysis? ",  ///// Write the question inside double quotes
      answers: {
        a: " Impurities in reagents",                  ///// Write the option 1 inside double quotes
        b: " Inaccurate temperature control ",                  ///// Write the option 2 inside double quotes
        c: " Errors in pH measurement",                  ///// Write the option 3 inside double quotes
        d: "  All of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                      


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////It accounts for molecular volume and attractive forces",         ////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////