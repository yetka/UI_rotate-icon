$(document).ready(function() {
  
  var className;
  var angle = 0;
  
  $("#rotate-button-right").click(function(event) {
    
    $(".image").removeClass(className);
    if (angle === 360) {
      angle = 0;
    }
    
    angle = angle + 90;
    
    className = "change-angle-".concat(angle.toString());
        
    $(".image").addClass(className);
  });
  
  $("#rotate-button-left").click(function(event) {
    
    $(".image").removeClass(className);
    
    if (angle === 0) {
      angle = 360;
    }
    
    angle = Math.abs(angle - 90);
    
    className = "change-angle-".concat(angle.toString());
        
    $(".image").addClass(className);
  });
  
});