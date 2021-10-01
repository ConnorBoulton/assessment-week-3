console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully!");
}


let form = document.querySelector('form#contact');
console.log(form)

form.addEventListener('submit', handleSubmit);

function pictureMouse(event){
	alert("Thank you for looking at my picture")
}

let picture = document.querySelector('img')
picture.addEventListener('mouseover', pictureMouse)