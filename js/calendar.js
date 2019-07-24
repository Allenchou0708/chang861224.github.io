function get_Events(){
	var events = [
		[7, 7, '12:00 Lunch'],
		[7, 11, '10:20 Movie'],
		[7, 14, '10:00 Taipei'],
		[7, 21, '19:30 Go to Taipei'],
		[7, 23, '17:30 Volleyball'],
		[7, 24, '18:30 Baseball Game'],
		[8, 11, '9:00 Staff of Basketball Game'],
		[8, 17, '8:50 Flight to Tokyo'],
		[8, 21, '19:40 Flight to Taipei']
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
	while(temp1 <= 0){
		temp1 += 1;
		count += 1;
	}
	var day = today.getDay();
	day += count;
	day -= 7;
	return day;
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

