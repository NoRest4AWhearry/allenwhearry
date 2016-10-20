module.exports = function() {
	var home = document.createElement('div');
	// Create Jumbotron
	var jumbotron = document.createElement('div');
	jumbotron.classList.add('jumbotron');
	jumbotron.classList.add('col-sm-12');
	jumbotron.classList.add('text-center');
	var jumbotronHeader = document.createElement('h1');
	var jumbotronHeader2 = document.createElement('h2');
	var todaysDay = document.createElement('p');
	jumbotronHeader.innerHTML = "Wazzup, I'm Allen Whearry Jr";
	jumbotronHeader2.innerHTML = "And I build Sh*t with code :)";
	var day;
	switch (new Date().getDay()) {
	    case 0:
	        day = "Sunday";
	        break;
	    case 1:
	        day = "Monday";
	        break;
	    case 2:
	        day = "Tuesday";
	        break;
	    case 3:
	        day = "Wednesday";
	        break;
	    case 4:
	        day = "Thursday";
	        break;
	    case 5:
	        day = "Friday";
	        break;
	    case  6:
	        day = "Saturday";
	}
	todaysDay.innerHTML = "Happy " + day + "!";

  // Create main info under jumbotron
  var container = document.createElement('div');
  container.className = 'continer';
  container.classList.add('text-center');
  var containH1 = document.createElement('h1');
  containH1.innerHTML = 'Hello';
  container.appendChild(containH1);
	

  //build elements
	jumbotronElems = [jumbotronHeader, jumbotronHeader2, todaysDay];
	containerElems = [containH1];
	homeElems = [jumbotron, container];
	function build(a,elems) {
		for (i = 0; i < elems.length; i++) {
			a.appendChild(elems[i]);
		}
	}
	build(jumbotron,jumbotronElems);
	build(container,containerElems);
	build(home, homeElems);
	// return home after eveything is built
	return home;
};