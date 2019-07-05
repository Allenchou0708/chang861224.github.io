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
	var d = 1;
	var count = 0;

	str += '<tr>';

	while(d == 1){
		if(count == get_first_day()){
			str += get_date(d);
			count++;
			d++;
		}
		else{
			str += '<td></td>';
			count++;
		}
	}

	for( ; count < 7 ; count++, d++){
		str += get_date(d);
	}

	str += '</tr>';

	while(d <= get_number_of_month_day()){
		str += '<tr>';

		for(count = 0 ; count < 7 ; count++, d++){
			if(d <= get_number_of_month_day()){
				str += get_date(d);
			}
			else{
				str += '<td></td>';
			}
		}

		str += '</tr>';
	}

	return str;
}


function get_date(d){
	var today = new Date();
	var str = '';
	if(today.getDate() == d){
		str += '<td ';
		str += 'class=\'today\'>';
		str += d;
		str += '</td>';
	}
	else{
		str += '<td>';
		str += d;
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
	var d = today.getDate();
	var temp1 = d % 7;
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
