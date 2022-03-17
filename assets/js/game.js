//Game Starts
//"win" - player robot defeats all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"lose" - player's health is zero or less


//player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }

    //Player attacks enemy
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);

        console.log (
            playerName + " attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " health remaining."
        );

    
    //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
            playerMoney = playerMoney + 20;
            break;
        
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }


    //Enemy attacks player
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);
        
        console.log (
            enemyNames + " attacked " + playerName + "." + playerHealth + " now has " + playerHealth + " health remaining."
        );


    //check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
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

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        var pickedEnemyName = enemyNames[i];
        enemyHealth = randomNumber(40, 60);
        fight(pickedEnemyName);

        if (playerHealth > 0 && i < enemyNames.lenth - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
            
            if (storeConfirm) {
                shop();
            }
        }
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }

  endGame();
};


var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score " + playerMoney + ".");
    }
    else {
        window.alert("You've lsot your robot in battle!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            
            break;


        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;

        case "LEAVE":
        case "leave":
                window.alert("Leaving the store.");
                break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

//generate random numeric value
var randomNumber = function() {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

startGame();