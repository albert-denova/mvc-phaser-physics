var WorldController = function() {
    var mView;
    
    this.getSpritesReferences = function() {
        return mView.getSpritesReferences();
    };
    
    // Constructor
    (function() {
        mView = new WorldView();   
    })();   
};