document.addEventListener('DOMContentLoaded', function(){ 
    let stageCounter = 0;
    let titleElement = document.getElementById('title');

    let stages = document.getElementsByClassName('stage');

    Array.from(stages).forEach(function(stage) {
        stage.addEventListener('click', function() {
            if(stageCounter < 5) {
                stage.classList.add('banned')
            } else if(stageCounter == 5) {
                stage.classList.add('picked');
            }

            stageCounter++;

            if (stageCounter == 6) {
                titleElement.innerHTML = "Picked stage: " + this.getElementsByTagName('p')[0].innerHTML;
            } else if(stageCounter >= 5) {
                titleElement.innerHTML = "Player 1: Pick a stage";
            } else if(stageCounter >= 2) {
                titleElement.innerHTML = "Player 2: Ban THREE stages";
            }
        });
    });
}, false);