let table = document.getElementById('sampleTable')

function insert_Row() {
    //Write your code here
	let newRow = table.insertRow(0);
	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);

	newCell1.innerText = 'New Cell1';
	newCell2.innerText = 'New Cell2';
}
