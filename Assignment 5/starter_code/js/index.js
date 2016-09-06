//ready DOM with document.ready
$(document).ready(function() {
	$('#submit-btn').click(changeBackground)
}); 
//prevent page from refreshing on submit with event.default
function changeBackground(event) {
	event.preventDefault();
// store value of user input in text field as var 'city'	
	var city = $('#city-type').val();
// if var city is nyc, change background to nyc
	if (city == 'New York City' || city =='New York' || city == 'NYC' || city == 'new york city' || city == 'Nyc' || city == 'new york') {
		$('body').attr('class','nyc');
	}
// if var city if sf, chamge background to sf
	else if (city == 'San Francisco' || city== 'SF' || city =='Bay Area' || city == 'san fran' || city == 'san francisco') {
		$('body').attr('class','sf');
	}
// if var city if la, change background to la 
	else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX' || city == 'LOS ANGELES' || city == 'Los angeles' || city == 'la') {
		$('body').attr('class','la');
	}
// if var city if atx, change back to atx
	else if (city == 'Austin' || city == 'ATX' || city == 'austin' || city == 'atx') {
		$('body').attr('class','austin');
	}
// if var city is syd, change background to syd
	else if (city == 'Sydney' || city == 'SYD' || city == 'sydney' || city == 'syd') {
		$('body').attr('class', 'sydney');
	}
}
