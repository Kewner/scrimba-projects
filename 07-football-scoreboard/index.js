// Add 'New Game' button
// Highlight the leader
// Add more counters (period, fouls, timer)
// Change the design

let scoreHome = 0;
let scoreGuest = 0;

let goalsHome = document.getElementById('goals-home');
let goalsGuest = document.getElementById('goals-guest');

function homeGoal() {
    if (scoreHome === 18) {
        console.log("No more room, you've scored too many goals!");
        return;
    }
    
    scoreHome += 1;
    goalsHome.textContent += '⚽';
}

function guestGoal() {
    if (scoreGuest === 18) {
        console.log("No more room, you've scored too many goals!");
        return;
    }

    scoreGuest += 1;
    goalsGuest.textContent += '⚽';
}