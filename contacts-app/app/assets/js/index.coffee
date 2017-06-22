$.get "/persons", (data) ->
	$.each data, (index, person) ->
		$("#persontable").append $("<tr>").append $("<td align='center'>").text(person.firstName + " " + person.lastName)