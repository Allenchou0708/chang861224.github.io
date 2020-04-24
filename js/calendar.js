function get_Events(){
	var events = [
		[4, 6, '18:30-21:00', 'Lab meeting'],
		[4, 13, '18:30-21:00', 'Lab meeting'],
        [4, 16, '10:00-12:00', 'Visit outside'],
		[4, 20, '18:30-21:00', 'Lab meeting'],
        [4, 25, '14:30-17:00', 'Visit outside'],
        [4, 26, '10:30-14:00', 'NTUA'],
		[4, 27, '18:30-21:00', 'Lab meeting'],
        [5, 2, '9:00-10:00', 'Dentist'],
        [5, 8, '9:00-12:00', 'CSL midterm']
	]
	return events;
}
function isEvent(month, date){
	var events = get_Events();
	var i;
	var str = '';
	
	for(i = 0 ; i < events.length ; i++){
		if((month == events[i][0]) && (date == events[i][1])){
			str += '<p class=\'event\'>';
			str += events[i][2];
			str += '<br>';
			str += events[i][3];
			str += '</p>';
		}
	}

	return str;
}

function get_calendar(){
	var str = '';
	str += get_heading();
	str += '<p width=\'100%\'>';
	str += '<table class=\'schedule\'>';
	str += get_title();
	str += get_dates();
	str += '</table>';
	str += '</p>';
	document.write(str);
}


function get_heading(){
	var month_list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var str = '';
	str += '<h3 class=\'heading\'>';
	str += month_list[get_month()];
	str += ' ';
	str += get_year();
	str += '</h3>';
	return str;
}


function get_title(){
	var str = '';
	str += '<tr>';
	str += '<th>SUN</th>';
	str += '<th>MON</th>';
	str += '<th>TUE</th>';
	str += '<th>WED</th>';
	str += '<th>THU</th>';
	str += '<th>FRI</th>';
	str += '<th>SAT</th>';
	str += '</tr>';
	return str;
}


function get_dates(){
	var str = '';
	var date = 1;
	var count = 0;

	str += '<tr>';

	while(date == 1){
		if(count == get_first_day()){
			str += get_date(date);
			count++;
			date++;
		}
		else{
			str += '<td></td>';
			count++;
		}
	}

	for( ; count < 7 ; count++, date++){
		str += get_date(date);
	}

	str += '</tr>';

	while(date <= get_number_of_month_day()){
		str += '<tr>';

		for(count = 0 ; count < 7 ; count++, date++){
			if(date <= get_number_of_month_day()){
				str += get_date(date);
			}
			else{
				str += '<td></td>';
			}
		}

		str += '</tr>';
	}

	return str;
}


function get_date(date){
	var today = new Date();
	var str = '';
	if(today.getDate() == date){
		str += '<td ';
		str += 'class=\'today\'>';
		str += '<p class=\'date\'>';
		str += date;
		str += '</p>';
		str += isEvent(today.getMonth()+1, date);
		str += '</td>';
	}
	else{
		str += '<td>';
		str += '<p class=\'date\'>';
		str += date;
		str += '</p>';
		str += isEvent(today.getMonth()+1, date);
		str += '</td>';
	}
	return str;
}


function get_year(){
	var today = new Date();
	return today.getFullYear();
}


function get_month(){
	var today = new Date();
	return today.getMonth();
}


function get_first_day(){
	var today = new Date();
	var date = today.getDate();
	var temp1 = date % 7;
	temp1 -= 7;
	var count = 0;
	while(temp1 < 0){
		temp1 += 1;
		count += 1;
	}
	var day = today.getDay();
	day += count;
	day = day % 7;
	day += 1;
	return (day % 7);
}


function get_number_of_month_day(){
	var today = new Date();
	var month = today.getMonth();
	if((month == 0) || (month == 2) || (month == 4) || (month == 6) || (month == 7) || (month == 9) || (month == 11)){
		return 31;
	}
	else if(month == 1){
		return 28;
	}
	else{
		return 30;
	}
}

