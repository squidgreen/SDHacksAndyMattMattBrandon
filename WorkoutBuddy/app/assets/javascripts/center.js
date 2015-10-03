var myCenter =new google.maps.LatLng(32.7150,-117.1625);

function initialize() {
    console.log("initialize");
//Google map view
	var mapProp = {
	center: myCenter,
	zoom:11,
	mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker = new google.maps.Marker({
		position: myCenter,
	});

	marker.setMap(map);


//tab bar controller
	var tabBtns = document.querySelectorAll('.tab-bar > .tab-btn');

	for(var i = 0; i < tabBtns.length; i++) {   tabBtns[i].addEventListener('click', onTabClick, true);
	}

	function onTabClick(e) {
	var currentTab = document.querySelector('.tab-bar > .tab-btn.selected');
	if(currentTab) {
	  currentTab.classList.remove('selected');
	}
	var btn = e.target;
	btn.classList.add('selected');
	}
	
	
	


	
}

$(document).ready(function(){
    google.maps.event.addDomListener(window, 'load', initialize);
});
