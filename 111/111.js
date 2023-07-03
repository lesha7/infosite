let text = "«Мета отчёт по линиям в Dota 2 (7.33d)»";
let delay = 100; 
let elem = document.getElementById("result","res");

let print_text = function(text, elem, delay) {
		
	if(text.length > 0) {
		
		elem.innerHTML += text[0];
			
		setTimeout(
			
			function() {
				
				print_text(text.slice(1), elem, delay);  
					
			}, delay
				
		);
			
	}
		
}
print_text(text, elem, delay);