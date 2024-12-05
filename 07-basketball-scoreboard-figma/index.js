let scoreHome = 0;
let scoreGuest = 0;

let scoreHomeEl = document.getElementById('score-home-el');
let scoreGuestEl = document.getElementById('score-guest-el');

scoreHomeEl.textContent = scoreHome;
scoreGuestEl.textContent = scoreGuest;

function incrementScore(team, points) {
    if (team === 'home') {
        scoreHome += points;
        scoreHomeEl.textContent = scoreHome;
    } else if (team === 'guest') {
        scoreGuest += points;
        scoreGuestEl.textContent = scoreGuest;
    }
}