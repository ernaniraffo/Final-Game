class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    preload() {
        this.load.spritesheet("BG", "./assets/Background.png", {frameWidth: 1600, frameHeight: 800, startFrame: 0, endFrame: 7});
    }

    create () {

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '40px',
            color: '#FF0000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.background = this.add.sprite(0,0, "BG").setOrigin(0);

        this.add.text(game.config.width/2, game.config.height/2 - 64, 'BATTLE WON!!', menuConfig).setOrigin(0.5);

        this.add.text(game.config.width/2, game.config.height/2, 'Entering The Tainted Moor', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) for next Level or (M) for Menu', menuConfig).setOrigin(0.5);
        
        // keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }

    update () {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("CardSelect");
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            // reset everything
            resetDeck(StartingDeckCopy);
            cardsMade = [];
            playerHealth = 0;
            playerStrength = 0;
            yourTurn = true;
            enemyTurn = false;
            game.config.cardChoice = null;
            game.config.currentLevel = 1;
            game.config.cardChoice2 = null;
            summonedBeast = false;
            this.scene.start("menuScene");
        }
    }
}