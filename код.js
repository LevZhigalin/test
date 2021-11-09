alert("нажимая закрыть, вы разрешаете нам: использовать файлы печеньки, продать ваши почки, и следить за вами через вебку)")
var val = 50;
$('.1').on('click',function() {
	val -= 10;
	$('#question1').remove();
})
$('.2').on('click',function() {
	val += 10;
	$('#question1').remove();
})
$('.3').on('click',function() {
	val += 10;
	$('#question2').remove();
})
$('.4').on('click',function() {
	val -= 10;
	$('#question2').remove();
})
$('.5').on('click',function() {
	val -= 10;
	$('#question3').remove();
})
$('.6').on('click',function() {
	val += 10;
	$('#question3').remove();
})
$('.7').on('click',function() {
	val -= 10;
	$('#question4').remove();
})
$('.8').on('click',function() {
	val += 10;
	$('#question4').remove();
})
$('.9').on('click',function() {
	val = 999999999;
	alert("Извините такой точный брибор как дебилметр не выдержал вашей тупости.")
	$('#question5').remove();
})
$('.10').on('click',function() {
	val -= 10;
	$('#question5').remove();
})
$('button').on('click',function(){
	$('progress').val(val);
	$('#value').html(val);
})
