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

function computeCalorieNeeds() {
    //Perform calculation
	var age = document.getElementById("age").value;
	 var height = Number(document.getElementById("height").value);
     var weight = Number(document.getElementById("weight").value);
	var activitylevel = Number(document.getElementById("activityLevel").value);	
    var wBMR = Math.round(655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
	 var mBMR = Math.round(66 + (6.23 * weight) + (12.7 * height) - (6.8 * age));
	var maleNeededCalories = Math.round(mBMR * activitylevel);
	var femaleNeededCalories = Math.round(wBMR * activitylevel); 

	document.getElementById("caloricneeds").innerHTML = maleNeededCalories;
	document.getElementById("carbsneeds").innerHTML = maleNeededCalories*218/2500 + " g";
	document.getElementById("proteinneeds").innerHTML = maleNeededCalories*218/2500 + " g";
	document.getElementById("fatneeds").innerHTML = maleNeededCalories*83/2500 + " g";

}