angular.module('flipBook')
  .filter('elapsed', function(){
    return function(input) {
      // filters need to be forgiving so check input validity
      var minutes = 0;
      var seconds = Math.round(input);
      
      if(input > 60) {
        minutes = Math.round(input / 60);
        seconds = Math.round(input % 60);
      }
      if(minutes < 10) {
        minutes = '0' + minutes;
      }
      if(seconds < 10) {
        seconds = '0' + seconds;
      }

      var output = minutes + ':' + seconds;

      return output;
    };
  });
