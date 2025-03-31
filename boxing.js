let player1 = {
    name: "Player 1",
    health: 100
};  
    
let player2 = {
    name: "Player2",
    health: 100
};

let currentPlayer = player1;
console.log("current player:", currentPlayer.name)// Output: Current Player: Player 1


// Function to apply damage to the opponent
function applyDamage(opponent, damage) {
if (/* FILL CONDITIONAL HERE */) {
console.log(`${currentPlayer.name} lands a basic hit on ${opponent.name}!`);
} else if (/* FILL CONDITIONAL HERE */) {
console.log(`${currentPlayer.name} lands a critical hit on ${opponent.name}!`);
} else {
console.log(`${currentPlayer.name} lands a KNOCKOUT on ${opponent.name}!🥊`);
}
opponent.health -= damage;
if (opponent.health < 0 || /* FILL CONDITIONAL HERE */) {
// Ensure health doesn't go below 0 and automatic KO
opponent.health = 0;
}
console.log(`${opponent.name}'s health is now ${opponent.health}.`);
}
