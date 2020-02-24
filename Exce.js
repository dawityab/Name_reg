

document.querySelector('.submit-forms').addEventListener("click", users);

function users(){

	var row = 1;

	var first_name = document.querySelector('#first-name').value;
	var second_name = document.querySelector('#middle-name').value;
	var thrid_name = document.querySelector('#last-name').value;

	if(!first_name || !second_name || !thrid_name)
	{
		var message ="* Please fill all the required forms";
		document.querySelector("#message").append(message);
		if (message){
		document.querySelector(".submit-forms").disabled = true;
		document.querySelector('.back-forms').disabled = false;
		
		
	}
	

		return -1;

	}
backToInital();
		
	var table = document.querySelector('.table-name');
	var tableRow = table.insertRow(row);
	var cell1 = tableRow .insertCell(0);
	var cell2 = tableRow.insertCell(1);
	var cell3 = tableRow.insertCell(2);
	var cell4 = tableRow.insertCell(3);
	var delete_btn = document.createElement('button');
			delete_btn.innerHTML="Delete";
			delete_btn.id = 'delete_btnn';

	cell1.append(first_name);
	cell2.append(second_name);
	cell3.append(thrid_name);
	tableRow = cell4.appendChild(delete_btn);


			$('.table-name tr').click(function(){
				$(this).remove();
				return false;
			})
	row ++;
console.log(first_name + " " + second_name + " " + thrid_name);
	


	
	

	document.querySelector('#first-name').value= "";
	document.querySelector('#middle-name').value= "";
	document.querySelector('#last-name').value= "";
	document.querySelector('#first-name').focus();


}



document.querySelector('.back-forms').addEventListener("click", backToInital);

function backToInital(){
document.querySelector('.back-forms').disabled = true;
document.querySelector('.submit-forms').disabled = false;
document.querySelector("#message").innerHTML = "";


}

backToInital()