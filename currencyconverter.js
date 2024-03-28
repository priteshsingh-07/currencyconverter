let api = "https://v6.exchangerate-api.com/v6/6036c1e3124cdf9ce55f0a05/latest/USD";
		let formCurrencyDropdown = document.getElementById("from-currency");
		let toCurrencyDropdown = document.getElementById("to-currency");
		let op = document.getElementById("op");
		op.innerHTML = "output"
		let currencyArr = ["AED","INR","PKR","EUR","IDR","HKD"];

		currencyArr.forEach((currency)=>{
		let option = document.createElement("option");
		option.value = currency;
		option.innerHTML = currency;
		formCurrencyDropdown.appendChild(option);
	})
		currencyArr.forEach((currency)=>{
			let option = document.createElement("option");
			option.value = currency;
			option.innerHTML = currency;
			toCurrencyDropdown.appendChild(option)
	    })


	    formCurrencyDropdown.value = "INR";
	    toCurrencyDropdown.value = "HKD";

	    function convertCurrency() {
	    	fetch(api)
	    	.then(response=>response.json())
	    	.then(data=>{
	    		let fromCurr = document.getElementById("from-currency").value;
	    		let toCurr = document.getElementById("to-currency").value;
	    		let fromCurreRate = data.conversion_rates[fromCurr];
	    		let toCurreRate = data.conversion_rates[toCurr];
	    		let amount = document.getElementById("amount").value;
	    		if(amount !=""){

	    			let convertedAmount = (amount/fromCurreRate)*toCurreRate;
	    			op.innerHTML = `${amount} ${fromCurr} = ${convertedAmount.toFixed(2)} ${toCurr}`
	    		}
	    		else{
	    			alert("enter an amount")
	    		}
	    	})
	    }