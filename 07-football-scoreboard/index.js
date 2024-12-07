// Add more counters (period, fouls, timer)

let scoreHome = 0;
let scoreGuest = 0;

let goalsHome = document.getElementById('goal-home');
let goalsGuest = document.getElementById('goal-guest');

function homeGoal() {
    if (scoreHome === 18) {
        alert("Come on, who scores this many goals!?");
        return;
    }
    
    scoreHome += 1;
    goalsHome.textContent = '⚽'.repeat(scoreHome);
    highlightLeader();
}

function guestGoal() {
    if (scoreGuest === 18) {
        alert("Come on, who scores this many goals!?");
        return;
    }

    scoreGuest += 1;
    goalsGuest.textContent = '⚽'.repeat(scoreGuest);
    highlightLeader();
}

let homeTeamTitle = document.getElementById('home-team-title');
let guestTeamTitle = document.getElementById('guest-team-title');

function highlightLeader() {
    if (scoreHome > scoreGuest) {
        homeTeamTitle.style.border = "6px solid gold";
        guestTeamTitle.style.border = "6px solid transparent";
    } else if (scoreGuest > scoreHome) {
        guestTeamTitle.style.border = "6px solid gold";
        homeTeamTitle.style.border = "6px solid transparent";
    } else {
        guestTeamTitle.style.border = "6px solid transparent";
        homeTeamTitle.style.border = "6px solid transparent";
    }
}

function resetScore() {
    scoreHome = 0;
    scoreGuest = 0;
    goalsHome.textContent = '⚽'.repeat(scoreHome);
    goalsGuest.textContent = '⚽'.repeat(scoreGuest);
    guestTeamTitle.style.border = "6px solid transparent";
    homeTeamTitle.style.border = "6px solid transparent";
}