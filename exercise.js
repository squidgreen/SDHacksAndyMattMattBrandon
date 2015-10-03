var myCenter =new google.maps.LatLng(32.7150,-117.1625);

function initialize() {


//tab bar controller
	var tabBtns = document.querySelectorAll('.tab-bar > .tab-btn');

	for(var i = 0; i < tabBtns.length; i++) {   
		tabBtns[i].addEventListener('click', onTabClick, true);
	}

	function onTabClick(e) {
		var currentTab = document.querySelector('.tab-bar > .tab-btn.selected');
		if(currentTab) {
		  currentTab.classList.remove('selected');
		}
		var btn = e.target;
		btn.classList.add('selected');
	}
	
//submit sliders
	var sliderSubmit = document.getElementById('submit');

	sliderSubmit.addEventListener('click', onSubmitClick, true);
	
	function onSubmitClick(e) {
		$("#firstScreen").animate({left: '-100vw'});
		$("#secondScreen").animate({left: '0vw'});
	}

	
}
google.maps.event.addDomListener(window, 'load', initialize);