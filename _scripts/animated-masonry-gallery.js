$(window).load(function () {

var size = 1;
var button = 1;
var $container = $('#gallery-content-center');
  
$container.isotope({itemSelector : 'img'});

function check_button(){
	
	if(button==1){
		$("#filter-landing");
		}
	if(button==2){
		$("#filter-site");
		}
	if(button==3){
		$("#filter-ppt");
		}
	if(button==4){
		$("#filter-ui");
		}
	if(button==5){
		$("#filter-event");
		}
	if(button==6){
		$("#filter-promo");
		}
	if(button==7){
		$("#filter-coding");
		}
	if(button==8){
		$("#filter-proj");
		}
	if(button==9){
		$("#filter-bro");
		}
}
	
	$("#filter-landing").click(function() { $container.isotope({ filter: '.landing' }); button = 1; check_button(); }); //this.style.display='none'
	$("#filter-site").click(function() {  $container.isotope({ filter: '.site' }); button = 2; check_button();  });
	$("#filter-ppt").click(function() {  $container.isotope({ filter: '.ppt' }); button = 3; check_button();  });
	$("#filter-ui").click(function() {  $container.isotope({ filter: '.ui' }); button = 4; check_button();  });
	$("#filter-event").click(function() {  $container.isotope({ filter: '.event' }); button = 5; check_button();  });
	$("#filter-promo").click(function() {  $container.isotope({ filter: '.promo' }); button = 6; check_button();  });
	$("#filter-coding").click(function() {  $container.isotope({ filter: '.coding' }); button = 7; check_button();  });
	$("#filter-proj").click(function() {  $container.isotope({ filter: '.proj' }); button = 8; check_button();  });
	$("#filter-bro").click(function() {  $container.isotope({ filter: '.bro' }); button = 9; check_button();  });
	

check_button();
	
});

function openCity(evt, cityName) {
	var i, tabContent, tabLinks;
	tabContent = document.getElementsByClassName("tabContent");
	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
	tabLinks = document.getElementsByClassName("tabLinks");
	for (i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();