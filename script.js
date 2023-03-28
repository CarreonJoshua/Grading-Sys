function comp(){
	var num = document.getElementById('grade').value
	if(num > 100){
		window.alert("Error Occured: Value is not an acceptable grade.");
	}
	else if(num <= 100 && num >=90){
		window.alert("OUTSTANDING!");
	}
	else if(num <= 89 && num >= 85){
		window.alert("Very Satisfactory");
	}
	else if(num <= 84 && num >= 80){
		window.alert("Satisfactory");
	}
	else if(num <= 79 && num >= 75){
		window.alert("Fairly Satisfactory");
	}
	else{
		window.alert("Bzzt. DID NOT MEET EXPECTATIONS")
	}

}