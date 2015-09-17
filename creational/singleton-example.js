
// EXAMPLE OF A SINGLETON IN PRACTICE

// TEST CASE : A Screen Manager

var ScreenManager = (function(){

  var screenManagerInstance;

  var createScreenManager = function(){
    // Set the default attribute values
    var screenHeight = 600;
    var screenWidth = 800;

    // Private method for addjusting the screen height value
    var setScreenHeight = function( px ){
        screenHeight = px;   
    };

    // Private method for addjusting the screen width value
    var setScreenWidth = function( px ){
        screenWidth = px;
    };

    //  Private method for returning the screenHeight
    var getScreenHeight = function(){
      return screenHeight;
    };

    //  Private method for returning the screenWidth
    var getScreenWidth = function(){
      return screenWidth;
    };

    // return functions for setting and getting ScreenManager's 
    // properties within closures that have access to its private methods
    return {
      getScreenHeight : getScreenHeight,
      getScreenWidth : getScreenWidth,
      setScreenHeight : setScreenHeight,
      setScreenWidth : setScreenWidth
    };
  };

  return {
    // Method for creating instance of ScreenManager.
    getInstance: function(){
      // Condition checking existence of instance
      if(!screenManagerInstance){
          screenManagerInstance = createScreenManager();
      }
      // If instance already existing returning the same.
      return screenManagerInstance;
    }
  };
})( );

// Creating ScreenManager instance
var  screen1 = ScreenManager.getInstance( );

// logs default value 600
console.log(screen1.getScreenHeight());

// Creating secondPerson instance (Same instance is used)
var screen2 = ScreenManager.getInstance();

// Same output logs default value 600
console.log(screen2.getScreenHeight());

// Calling setHeight Method of screen1 with px at 768 and 
// setWidth Method of screen1 with px at 1024
// Note: we are not going to call the set methods of screen2.
screen1.setScreenHeight( 768 );
screen1.setScreenWidth( 1024 );

// logs screen1 new values.
console.log("Screen 1 Height: "+screen1.getScreenHeight());
console.log("Screen 1 Width: "+screen1.getScreenWidth());

// screen2 values are the same as only one instance exists
console.log("Screen 2 Height: "+screen2.getScreenHeight());
console.log("Screen 2 Width: "+screen2.getScreenWidth());

// Calling a new ScreenManager will produce an error 
// as the ScreenManager is contained within an anonymous self calling function
// var screen3 = new ScreenManager();
// Uncaught TypeError: ScreenManager is not a function(…)