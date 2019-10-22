
// pseudo code
// functions in here are to be implemented
function recordAnswer() {

    var userInputs = gatherInputs();
    var pass = checkAnswer(userInputs);
    if (pass) {
        stopTimer();
        recordLogs();
        moveToNextStep();
    }
}