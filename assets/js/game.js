var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var fight = function() {
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT'or 'SKIP' to choose");

    //player choses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Player attacks enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log (
        playerName + "attacked" + enemyName + "." + enemyName + "now has " + enemyHealth + " health remaining."
    );
    
    

    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Enemy attacks player
    playerHealth = playerHealth - enemyAttack;
    console.log (
        enemyName + "attacked" + playerName + "." + playerHealth + "now has " + playerHealth + " health remaining."
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

fight();