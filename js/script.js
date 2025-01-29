// Shuffle function to randomize arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let timeValue = 60;
let que_count = 0;
let userScore = 0;
let counter;
let counterLine;
let shuffledQuestions = [];

// If startQuiz button clicked
start_btn.onclick = () => {
    shuffledQuestions = shuffleArray([...questions]); // Shuffle questions
    info_box.classList.add("activeInfo"); // Show info box
};

// If exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
};

// Timer function to start countdown
function startTimer(duration) {
    let time = duration;
    timeCount.textContent = time;
    counter = setInterval(() => {
        time--;
        timeCount.textContent = time < 10 ? "0" + time : time;

        if (time === 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";
            // autoSelectCorrectAnswer(false);  // If you have this function defined
        }
    }, 1000);
}

// Timer line function
function startTimerLine() {
    let timeLineWidth = 0;
    let totalTime = 60 * 1000; // 60 seconds
    let intervalTime = 10; // Update every 10ms
    let step = (550 / totalTime) * intervalTime;

    clearInterval(counterLine);
    counterLine = setInterval(() => {
        timeLineWidth += step;
        time_line.style.width = timeLineWidth + "px";

        if (timeLineWidth >= 275 && timeLineWidth < 458) {
            time_line.classList.add("orange");
            time_line.classList.remove("red");
        } else if (timeLineWidth >= 458) {
            time_line.classList.add("red");
            time_line.classList.remove("orange");
        }

        if (timeLineWidth >= 550) {
            clearInterval(counterLine);
        }
    }, intervalTime);
}

// If continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(60);
    time_line.style.width = "0";
    startTimerLine();
};

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// If restartQuiz button clicked
restart_quiz.onclick = () => {
    shuffledQuestions = shuffleArray([...questions]);
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 60;
    que_count = 0;
    userScore = 0;
    showQuestions(que_count);
    queCounter(1);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    time_line.style.width = "0";
    startTimerLine();
    timeText.textContent = "Time Left";
};

quit_quiz.onclick = () => {
    window.location.reload();
};

const next_btn = document.querySelector("footer .next_btn");
const submit_btn = document.querySelector("footer .submit_btn"); // No longer getting by ID
const bottom_ques_counter = document.querySelector("footer .total_que");

// Show questions function
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const currentQuestion = shuffledQuestions[index];
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    time_line.className = "time_line";
    time_line.style.width = "0";

    let que_tag = `<span>${index + 1}. ${currentQuestion.question}</span>`;
    que_text.innerHTML = que_tag;

    let option_tag = "";
    shuffledOptions.forEach(option => {
        option_tag += `<div class="option"><span>${option}</span></div>`;
    });

    option_list.innerHTML = option_tag;

    const options = option_list.querySelectorAll(".option");
    options.forEach(option => {
        option.setAttribute("onclick", "optionSelected(this)");
    });

    next_btn.classList.remove("show");

    if (Array.isArray(currentQuestion.answer)) {
        submit_btn.style.display = "block"; // Show for multiple-choice
        submit_btn.classList.remove("show"); // Remove the 'show' class for multiple choice
    } else { // Single-answer question
        submit_btn.style.display = "none"; // Hide for single-answer
        submit_btn.classList.add("show");  // Show the button AND the show class for single answer
    }
}

// If user clicks an option
function optionSelected(answer) {
    let correctAns = shuffledQuestions[que_count].answer;

    if (Array.isArray(correctAns)) {  // Multiple-choice question
        answer.classList.toggle("selected"); // Correctly toggle the 'selected' class

        // No need to disable here for multiple choice, let user change before submit

    } else { // Single-answer question (your existing logic)
        clearInterval(counter);
        clearInterval(counterLine);

        let userAns = answer.textContent.trim();
        if (userAns === correctAns) {
            userScore++;
            answer.classList.add("correct");
        } else {
            answer.classList.add("incorrect");
            option_list.querySelectorAll(".option").forEach(opt => {
                if (opt.textContent.trim() === correctAns) {
                    opt.classList.add("correct");
                }
            });
        }

        option_list.querySelectorAll(".option").forEach(opt => opt.classList.add("disabled")); // Disable all options
        submit_btn.classList.remove("show");
        next_btn.classList.add("show");
    }
}

submit_btn.onclick = () => {
    let correctAns = shuffledQuestions[que_count].answer;
    let selectedOptions = [...option_list.querySelectorAll(".option.selected")];

    if (selectedOptions.length === 0) {
        alert("Please select at least one option before submitting.");
        return;
    }

    if (Array.isArray(correctAns)) {
        let selectedTexts = selectedOptions.map(opt => opt.textContent.trim());

        // 1. Highlight selected answers (GREEN for correct, RED for incorrect)
        selectedOptions.forEach(opt => {
            let optText = opt.textContent.trim();
            let isCorrect = correctAns.some(correctAnswer => correctAnswer === optText);

            if (isCorrect) {
                opt.classList.add("correct");
                opt.classList.remove("incorrect");
            } else {
                opt.classList.add("incorrect");
                opt.classList.remove("correct");
            }
        });

        // 2. Highlight unselected correct answers (GREEN)
        option_list.querySelectorAll(".option").forEach(opt => {
            let optionText = opt.textContent.trim();
            let isCorrect = correctAns.some(correctAnswer => correctAnswer === optionText);

            if (isCorrect && !selectedTexts.includes(optionText)) {
                opt.classList.add("unselected-correct");
            }
        });

        // 3. Check if all selected answers are correct
        let correctCount = 0;
        selectedTexts.forEach(selectedAnswer => {
            if (correctAns.some(correctAnswer => correctAnswer === selectedAnswer)) {
                correctCount++;
            }
        });

        if (correctCount === correctAns.length && selectedTexts.length === correctAns.length) {
            userScore++;
        }

        selectedOptions.forEach(opt => opt.classList.remove("selected")); // Remove selected class
    } else { // Single-answer question
        let selectedOption = option_list.querySelector(".option.selected");
        if (selectedOption) {
            let userAns = selectedOption.textContent.trim();

            if (userAns === correctAns) {
                userScore++;
                selectedOption.classList.add("correct");
                selectedOption.classList.remove("incorrect");
            } else {
                selectedOption.classList.add("incorrect");
                selectedOption.classList.remove("correct");
                option_list.querySelectorAll(".option").forEach(opt => {
                    if (opt.textContent.trim() === correctAns) {
                        opt.classList.add("correct");
                    }
                });
            }
        } else {
            alert("Please select an option before submitting.");
            return;
        }
    }

    option_list.querySelectorAll(".option").forEach(opt => opt.classList.add("disabled"));
    submit_btn.classList.remove("show");
    next_btn.classList.add("show");
};

// If Next Question button clicked
next_btn.onclick = () => {
    if (que_count < shuffledQuestions.length - 1) {
        que_count++;
        showQuestions(que_count);
        queCounter(que_count + 1);
        next_btn.classList.remove("show");
        submit_btn.classList.add("show"); // Show the submit button again for the next question
        // Reset Timer
        clearInterval(counter);
        clearInterval(counterLine);
        timeValue = 60;
        startTimer(timeValue);
        time_line.style.width = "0";
        startTimerLine();
        timeText.textContent = "Time Left";

        //Re-enable options
        option_list.querySelectorAll(".option").forEach(opt => opt.classList.remove("disabled"));

    } else {
        showResult();
    }
};

// Show the result box
function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = `<span>You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    scoreText.innerHTML = scoreTag;
}

// Update question counter
function queCounter(index) {
    let totalQueCounTag = `<span><p>${index}</p> of <p>${questions.length}</p> Questions</span>`;
    bottom_ques_counter.innerHTML = totalQueCounTag;
}