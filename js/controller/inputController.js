var InputController = function() {
    var mCursor = null;
    var mListeners = [];
    
    this.update = function() {
        if(mCursor.left.isDown) {
            onPressLeft();
        }
        else if(mCursor.right.isDown) {
            onPressRight();
        }
        else {
            onNoDirectionPressed();   
        }
        
        if(mCursor.up.isDown) {
            onPressUp();
        }
    };
    
    this.registerListeners = function(listener) {
        mListeners.push(listener);  
    };
    
    // Private
    var onPressLeft = function() {
        mListeners.forEach(function(listener) {
            listener.onPressLeft();
        });  
    };
    
    var onPressRight = function() {
        mListeners.forEach(function(listener) {
            listener.onPressRight();
        });  
    };
    
    var onPressUp = function() {
        mListeners.forEach(function(listener) {
            listener.onPressUp();
        });  
    };
    
    var onNoDirectionPressed = function() {
        mListeners.forEach(function(listener) {
            listener.onNoDirectionPressed(); 
        });
    };
    
    // Constructor
    (function() {
        mCursor = phaser.input.keyboard.createCursorKeys();   
    })();
};