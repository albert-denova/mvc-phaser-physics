var GameFacade = function() {
    var mSelf = this;    
    var mInputController = null;
    var mWorldController = null;
    var mPlayerController = null;
    var mStarController = null;
    var mPhysicsController = null;
    var mScoreController = null;
    
    this.update = function() {
        mPhysicsController.update();
        mInputController.update();        
    };
    
    this.onPressLeft = function() {
        mPhysicsController.onPressLeft();
        mPlayerController.onPressLeft();
    };
    
    this.onPressRight = function() {
        mPhysicsController.onPressRight();
        mPlayerController.onPressRight();
    };
    
    this.onPressUp = function() {
        mPhysicsController.onPressUp();
    };
    
    this.onNoDirectionPressed = function() {
        mPlayerController.onNoDirectionPressed();  
    };
    
    this.onPlayerCollideWithStar = function() {
        mScoreController.onPlayerCollideWithStar();
    };
    
    var sendSpritesToPhysics = function() {
        var worldSprites = mWorldController.getSpritesReferences();
        var playerSprite = mPlayerController.getSpritesReferences();
        var starsSprite = mStarController.getSpritesReferences();
        
        mPhysicsController.init({
            world: worldSprites,
            player: playerSprite,
            stars: starsSprite
        });
    };
    
    (function() {        
        mInputController = new InputController();
        mInputController.registerListeners(mSelf);
        
        mWorldController = new WorldController();
        mPlayerController = new PlayerController();
        mStarController = new StarController();
        mScoreController = new ScoreController();
        
        mPhysicsController = new PhysicsController();
        mPhysicsController.registerListeners(mSelf);
        
        sendSpritesToPhysics();
    })();
};