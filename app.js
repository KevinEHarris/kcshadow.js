var k = $K('Kevin', 'Harris');
k.greet().setLang('es').greet(true).log();

$('#login').click(function(){
	
	var loginGrtr = $K('Kevin', 'Harris');
	
	$('#logindiv').hide();
	
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
	
	
});