$(document).ready(function(){


function picSwitch(options, x) {
	x = 0;

	//object, properties on left and values on the right

	this.Next = function() {
		hideCurrentPic();
		showNextPic();
	}

	this.Reset = function () {
		hideCurrentPic();
	}

	//helper methods

	var hideCurrentPic = function() {
		if(options){
			options[x].style.visibility = "hidden";
			x += 1;
		}
	}


	var showNextPic = function() {
		if(options){
			if(x == (options.length)) {
				x = 0;
			}
			options[x].style.visibility = "visible";
		}
	}

	var resetCurrentPic = function() {
		hideCurrentPic();
			options[x].style.visibility = "hidden";
			x = 0;
	}
}

//create an iterator if options.length is the same as the current go back to zero - if/else
//looping back to the beginning of the array



  var pants = $(".pant");
	var shirts = $(".shirt");
	// var backgrounds = $(".bg");

  // target the top button + show and hide to move onto next pic
	//objects and next method

	var newShirt = new picSwitch(shirts);
	document.getElementById("shirt_button").onclick = function() {
		newShirt.Next();
	};

  // target the pants button + show and hide to move onto next pic

	var newPants = new picSwitch(pants);
	document.getElementById("pant_button").onclick = function() {
		newPants.Next();
	};

	// var newBackground = new picSwitch(backgrounds);
	// document.getElementById("bg_button").onclick = function() {newBackground.Next(); };

	document.getElementById("reset_button").onclick = function() {
		newShirt.Reset();
		newPants.Reset();
		console.log("Reset");
	};
});

  // when you click on ID shirt_button then the tops become visible

  $("#shirt_button").click(function(){

    $("#shirt-menu").css("visibility", "visible");
  });


	//pic array

	var count = 0;

	picArray= ["https://i.imgur.com/057zIPZ.png",
	"https://i.imgur.com/3cokgMx.png",
	"https://i.imgur.com/37LQR29.png",
	"https://i.imgur.com/zz1e5kz.png",
	"https://i.imgur.com/bKHEVJt.png"];

	$(".shirtOne").on("click", function() {
		$(".shirt").attr("src", picArray[0]);
		console.log("hello");
	});

	$(".shirtTwo").on("click", function() {
		$(".shirt").attr("src", picArray[1]);
		console.log("hello");
	});

	$(".shirtThree").on("click", function() {
		$(".shirt").attr("src", picArray[3]);
		console.log("hello");
	});

	$(".shirtFour").on("click", function() {
		$(".shirt").attr("src", picArray[4]);
		console.log("hello");
	});

	$(".shirtFive").on("click", function() {
		$(".shirt").attr("src", picArray[5]);
		console.log("hello");
	});

	picsArray= ["https://i.imgur.com/9lh9FWr.png",
	"https://i.imgur.com/2nAa883.png",
	"https://i.imgur.com/aepeWIz.png",
	"https://i.imgur.com/3r6sADV.png"];

	$(".pantsOne").on("click", function() {
		$(".pant").attr("src", picsArray[0]);
		console.log("hello");
	});

	$(".pantsTwo").on("click", function() {
		$(".pant").attr("src", picsArray[1]);
		console.log("hello");
	});

	$(".pantsThree").on("click", function() {
		$(".pant").attr("src", picsArray[2]);
		console.log("hello");
	});

	$(".pantsFour").on("click", function() {
		$(".pant").attr("src", picsArray[3]);
		console.log("hello");
	});


	//used toggle class to hide and show images

	$("#shirt_button").on("click", function(){
		$(".shirtChange").toggleClass("hidden");
	});


	$("#pant_button").on("click", function(){
		$(".pantsChange").toggleClass("hidden");
	});


	// Hide and show functions

	// first character
	var character = document.getElementById("character");
	var characterTwo = document.getElementById("characterTwo");

	document.getElementById("characterOption").onclick = show;
	document.getElementById("reset").onclick = dissapear;

	function show(){
  	character.style.display = "block";
	}

	function dissapear(){
		character.style.display = "none";
	}

	// second character

	document.getElementById("characterTwoOption").onclick = showMore;
	document.getElementById("resetTwo").onclick = dissapearMore;

	function showMore(){
  	characterTwo.style.display = "block";
	}

	function dissapearMore(){
		console.log("go");
		characterTwo.style.display = "none";
	}





	// drag and drop images

	// target elements with the "draggable" class
	interact('.draggable')
  	.draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function () {
			// event was in the function
      // var textEl = event.target.querySelector('p');
			//
      // textEl && (textEl.textContent =
      //   ' '
      //   + (Math.sqrt(event.dx * event.dx +
      //                event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
