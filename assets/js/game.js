//Game Starts
//"win" - player robot defeats all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"lose" - player's health is zero or less


//player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT'or 'SKIP' to choose");

    //player choses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Player attacks enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log (
        playerName + "attacked" + enemyNames + "." + enemyNames + "now has " + enemyHealth + " health remaining."
    );
    
    

    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + "has died!");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    //Enemy attacks player
    playerHealth = playerHealth - enemyAttack;
    console.log (
        enemyNames + "attacked" + playerName + "." + playerHealth + "now has " + playerHealth + " health remaining."
    );

    //check player health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //player choses to skip  
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }
};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}