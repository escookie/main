$(window).load(function () {

var backgroundText = document.getElementById('backgroundText');
if (backgroundText) {
	let scrolled = false;

	window.addEventListener('scroll', function() {
		if (scrollY > 0) {
			backgroundText.style.opacity = '0';
			scrolled = true;
		} else {
			backgroundText.style.opacity = '1';
		}
	});
}

window.addEventListener('scroll', function() {
    var backgroundText1 = document.getElementById('backgroundText1');
    if (window.scrollY > 180) {
        backgroundText1.style.opacity = '1'; // 텍스트가 보이도록 설정
    } else {
        backgroundText1.style.opacity = '0'; // 텍스트가 보이지 않도록 설정
    }
});


var size = 1;
var button = 1;
var $container = $('#gallery-content-center');
  
$container.isotope({itemSelector : 'img'});

function check_button(){
	
	if(button==1){
		$("#filter-contents2");
		}
	if(button==2){
		$("#filter-contents4");
		}
	if(button==3){
		$("#filter-ppt");
		}
	if(button==4){
		$("#filter-contents6");
		}
	if(button==5){
		$("#filter-contents5");
		}
	if(button==6){
		$("#filter-promo");
		}
	if(button==7){
		$("#filter-contents1");
		}
	if(button==8){
		$("#filter-proj");
		}
	if(button==9){
		$("#filter-contents3");
		}
}
	
$("#filter-contents1").click(function() {  $container.isotope({ filter: '.contents1' }); button = 7; check_button();  });	
$("#filter-contents2").click(function() { $container.isotope({ filter: '.contents2' }); button = 1; check_button(); }); //this.style.display='none'
$("#filter-contents3").click(function() {  $container.isotope({ filter: '.contents3' }); button = 9; check_button();  });
$("#filter-contents4").click(function() {  $container.isotope({ filter: '.contents4' }); button = 2; check_button();  });
$("#filter-contents5").click(function() {  $container.isotope({ filter: '.contents5' }); button = 5; check_button();  });	
$("#filter-contents6").click(function() {  $container.isotope({ filter: '.contents6' }); button = 4; check_button();  });

$("#filter-ppt").click(function() {  $container.isotope({ filter: '.ppt' }); button = 3; check_button();  });
$("#filter-promo").click(function() {  $container.isotope({ filter: '.promo' }); button = 6; check_button();  });
$("#filter-proj").click(function() {  $container.isotope({ filter: '.proj' }); button = 8; check_button();  });
	
	

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