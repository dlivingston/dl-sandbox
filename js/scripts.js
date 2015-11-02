function test(){return"hi mom!"}

function factorial(num1){
	if (typeof num1 == "number") {
		var factorialArray = new Array(num1);
		var numFactorial = 1;
		for (var i = num1 - 1; i >= 0; i--) {
			factorialArray(i)
			numFactorial = factorialArray(i) * numFactorial;
		}
	}
}

