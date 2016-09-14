//ready the DOM
$(document).ready(function() {

//create cities as array 
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  //loop five times
  for(i=0;i<cities.length;i++) {
  	//add more options to html with option + .append
    $('#city-type').append('<option>' + cities[i] + '</option>');
  }

  function changeImage(){
    
    //use city variable as #city-type value
    var city = $('#city-type').val();

    //change the class attribute value in the body for each city in "if" statements
    if (city == 'SF') {
      $('body').attr('class','sf')
    };

    if (city == 'NYC') {
      $('body').attr('class','nyc')
    };

    if (city == 'LA') {
      $('body').attr('class','la')
    };

    if (city == 'ATX') {
      $('body').attr('class','austin')
    };

    if (city == 'SYD') {
      $('body').attr('class','sydney')
    };
    
  }

  // change the background image based on dropdown selection
  $('#city-type').change(changeImage);

})
