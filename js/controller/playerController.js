var PlayerController = function() {
    var mView = null;
    
    this.getSpritesReferences = function() {
        return mView.getPlayerSprite();  
    };
    
    this.onPressLeft = function() {
        mView.onPressLeft();
    };
    
    this.onPressRight = function() {
        mView.onPressRight();
    };
        
    this.onNoDirectionPressed = function() {
        mView.onNoDirectionPressed();  
    };
    
    // Constructor
    (function() {
        mView = new PlayerView();   
    })();
};