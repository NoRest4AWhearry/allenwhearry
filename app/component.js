module.exports = function() {
	var home = document.createElement('div');
	// Create Jumbotron
	var jumbotron = document.createElement('div');
	jumbotron.classList.add('jumbotron');
	jumbotron.classList.add('col-sm-12');
	jumbotron.classList.add('text-center');
	var jumbotronHeader = document.createElement('h1');
	var jumbotronHeader2 = document.createElement('h2');
	var salesHeader = document.createElement('h2');
	var todaysDay = document.createElement('h1');
	jumbotronHeader.innerHTML = "Wazzup, I'm Allen Whearry Jr";
	salesHeader.innerHTML = "...I'm pretty good at sales too!";
	salesHeader.style.marginTop = '150px';
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
  container.className = 'container';

  // Spelhouse Homecoming Section 
  var shhc = document.createElement('div');
	var shhcHeader = document.createElement('h1');
	var shhcDescription = document.createElement('p');
	var shhcLink = document.createElement('a');

	shhcHeader.innerHTML = 'Spelhouse Homecoming 2013';
	shhcHeader.style.borderBottom = 'solid 3px #31abde';
	shhcHeader.style.padding = '15px';
	shhcDescription.innerHTML = 'This site was completed for the Spelhosue Alumni ' + 
															'After Party Committe each year from 2011 - 2013. ' +
															'This website was in no way a ' + 
															'representation or reflection of the official homecoming ' + 
															'events for neither Morehouse College or Spelman College. ' + 
															'SpelHouseHC.com was designed for the purposes of ' + 
															'entertainment and after-parties only.';
	shhcLink.href = 'https://norest4awhearry.github.io/SpelhouseHC/';
	shhcLink.innerHTML = "See it here >>";
	shhcLink.style.fontSize = '24px';
	shhcLink.setAttribute('target', '_blank');

	// The Erica K Section
	var tek = document.createElement('div');
	var tekHeader = document.createElement('h1');
	var tekDescription = document.createElement('p');
	var tekLink = document.createElement('a');

	tekHeader.innerHTML = 'The Erica K';
	tekHeader.style.borderBottom = 'solid 3px #31abde';
	tekHeader.style.padding = '15px';
	tekDescription.innerHTML = 'This was completed for the commercial model and brand Ambassador ' + 
															'Erica Kecia in 2013. She was in her beginning stages of modeling ' + 
															'required a simple yet clean design for her first website.'
	tekLink.href = 'https://norest4awhearry.github.io/TheEricaK/';
	tekLink.innerHTML = "See it here >>";
	tekLink.style.fontSize = '24px';
	tekLink.setAttribute('target', '_blank');

  //build elements
	var jumbotronElems = [jumbotronHeader, jumbotronHeader2, salesHeader, todaysDay];
	var shhcElems = [shhcHeader, shhcDescription, shhcLink];
	var tekElems = [tekHeader, tekDescription, tekLink];
	var containerElems = [shhc,tek];
	var homeElems = [jumbotron, container];
	function build(a,elems) {
		for (i = 0; i < elems.length; i++) {
			a.appendChild(elems[i]);
		}
	}
	build(jumbotron,jumbotronElems);
	build(shhc, shhcElems)
	build(tek, tekElems);
	build(container,containerElems);
	build(home, homeElems);
	// return home after eveything is built
	return home;
};