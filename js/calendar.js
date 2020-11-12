function get_Events(){
	var events = [
        [11, 2, '15:00-18:00', 'TA'],
        [11, 2, '18:30-20:30', 'Online lab seminar'],
        [11, 3, '9:00-12:00', 'Deep Learning'],
        [11, 3, '13:00-16:00', 'Graph Theory'],
        [11, 5, '9:00-12:00', 'Social Computing'],
        [11, 5, '15:00-17:00', 'Seminar'],
        [11, 5, '18:00-20:00', 'CP1 TA Class'],
        [11, 6, '9:00-12:00', 'Data Mining'],
        [11, 9, '15:00-18:00', 'TA'],
        [11, 9, '18:30-20:30', 'Online lab seminar'],
        [11, 10, '9:00-12:00', 'Midterm - Deep Learning'],
        [11, 10, '13:00-16:00', 'Graph Theory'],
        [11, 11, '9:00-12:00', 'CP1 Midterm'],
        [11, 12, '9:00-12:00', 'Social Computing'],
        [11, 12, '18:00-20:00', 'CP1 TA Class'],
        [11, 13, '9:00-12:00', 'Data Mining'],
        [11, 13, '19:00-20:00', 'Dentist'],
        [11, 16, '15:00-18:00', 'TA'],
        [11, 16, '18:30-20:30', 'Online lab seminar'],
        [11, 17, '9:00-12:00', 'Deep Learning'],
        [11, 17, '13:00-16:00', 'Graph Theory'],
        [11, 19, '9:00-12:00', 'Midterm - Social Computing'],
        [11, 19, '15:00-17:00', 'Seminar'],
        [11, 19, '18:00-20:00', 'CP1 TA Class'],
        [11, 20, '9:00-12:00', 'Midterm - Data Mining'],
        [11, 23, '15:00-18:00', 'TA'],
        [11, 23, '18:30-20:30', 'Online lab seminar'],
        [11, 24, '9:00-12:00', 'Deep Learning'],
        [11, 24, '13:00-16:00', 'Graph Theory'],
        [11, 26, '9:00-12:00', 'Social Computing'],
        [11, 26, '15:00-17:00', 'Seminar'],
        [11, 26, '18:00-20:00', 'CP1 TA Class'],
        [11, 27, '9:00-12:00', 'Data Mining'],
        [11, 30, '15:00-18:00', 'TA'],
        [11, 30, '18:30-20:30', 'PAPER!!! - Online lab seminar'],
        [12, 1, '9:00-12:00', 'Deep Learning'],
        [12, 1, '13:00-16:00', 'Graph Theory'],
        [12, 3, '9:00-12:00', 'Social Computing'],
        [12, 3, '15:00-17:00', 'Seminar'],
        [12, 3, '18:00-20:00', 'CP1 TA Class'],
        [12, 4, '9:00-12:00', 'Data Mining'],
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

