function edit_row(no) {
//	document.getElementById("edit" + no).style.display = "none";

	var fname = document.getElementById("fname" + no);
	var lname = document.getElementById("lname" + no);
	var email = document.getElementById("email" + no);

	var fname_data = fname.innerHTML;
	var lname_data = lname.innerHTML;
	var email_data = email.innerHTML;

	fname.innerHTML = "<input type='text' id='fname" + no + "' value='" + fname_data + "'>";
	lname.innerHTML = "<input type='text' id='lname" + no + "' value='" + lname_data + "'>";
	email.innerHTML = "<input type='text' id='email" + no + "' value='" + email_data + "'>";
}

function save_row(no) {
	var name_val = document.getElementById("name_text" + no).value;
	var country_val = document.getElementById("country_text" + no).value;
	var age_val = document.getElementById("age_text" + no).value;

	document.getElementById("name_row" + no).innerHTML = name_val;
	document.getElementById("country_row" + no).innerHTML = country_val;
	document.getElementById("age_row" + no).innerHTML = age_val;

	document.getElementById("edit" + no).style.display = "block";
	document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
	document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
	var new_name = document.getElementById("new_name").value;
	var new_country = document.getElementById("new_country").value;
	var new_age = document.getElementById("new_age").value;

	var table = document.getElementById("data_table");
	var table_len = (table.rows.length) - 1;
	var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

	document.getElementById("new_name").value = "";
	document.getElementById("new_country").value = "";
	document.getElementById("new_age").value = "";
}