var StarController = function() {
    var mView = null;
    
    this.getSpritesReferences = function() {
        return mView.getSpritesReferences();  
    };
    
    // Constructor
    (function() {
        mView = new StarView();   
    })();
};