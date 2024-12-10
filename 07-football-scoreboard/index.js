let scoreHome = 0;
let scoreGuest = 0;

let goalsHome = document.getElementById('goal-home');
let goalsGuest = document.getElementById('goal-guest');

// Increment home team score
function homeGoal() {
    if (scoreHome === 18) {
        alert("Come on, who scores this many goals!?");
        return;
    }
    
    scoreHome += 1;
    goalsHome.textContent = '⚽'.repeat(scoreHome);
    highlightLeader();
}

// Increment guest team score
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

// Highlight current leading team (home or guest)
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

// Reset score to 0-0 for new match
function resetScore() {
    scoreHome = 0;
    scoreGuest = 0;
    goalsHome.textContent = '⚽'.repeat(scoreHome);
    goalsGuest.textContent = '⚽'.repeat(scoreGuest);
    guestTeamTitle.style.border = "6px solid transparent";
    homeTeamTitle.style.border = "6px solid transparent";
}