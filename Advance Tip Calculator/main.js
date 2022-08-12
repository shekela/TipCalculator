let quantity = 1
let people_quantity = document.getElementById('numberOfPeople')










function increasePeople(){
	quantity+=1
    people_quantity.innerHTML = quantity
}

function decreasePeople(){

    if (quantity == 1){
    	document.getElementByClass("splitButton").disabled = true;
    	
    }
    quantity-=1
    people_quantity.innerHTML = quantity
    
}

function calculateBill(){
	
	let billInput = document.getElementById('billTotalInput').value
    billInput = parseInt(billInput)
	let tipInput = document.getElementById('tipInput').value
	tipInput = parseInt(tipInput)
	tipInput = (billInput * tipInput)/100

    let personBill = document.getElementById('perPersonTotal')
	

    
    fullOperation = tipInput + billInput
	personBill.innerHTML = fullOperation/quantity

}