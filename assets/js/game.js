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


// fight function start
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
       
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT'or 'SKIP' to choose");
    
    
    //player choses to skip  
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

    //Player attacks enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + "attacked" + enemyNames + "." + enemyNames + "now has " + enemyHealth + " health remaining."
        );

    
    //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + "has died!");
            playerMoney = playerMoney + 20;
            break;
        
        } else {
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
            break;

        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        }
    };
// fight function end

var startGame = function() {

    //restart playerstats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }

  endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score " + playerMoney + ".");
    }
    else {
        window.alert("The game has now ended. Let's see how you did!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();