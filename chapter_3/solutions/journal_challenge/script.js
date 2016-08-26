// DATA MODEL
function Journal() {
	// Model should know how to hold data
	this.entries = [];
	// and how to manipulate data
	this.addEntry = function(entry) {
		this.entries.push(entry);
	}
	// rendering is none of the Model's concern
}

function Entry(title, author) {
	// title and author is passed in
	this.title = title;
	this.author = author;
	// active is true by default when new entry is created
	this.active = true;
	// timestamp is generated automatically
	this.timestamp = Date.now();
	// again, manipulating data
	this.deactivate = function() {
		this.active = false;
	}
	this.activate = function() {
		this.active = true;
	}
}

// RENDERING
// renderEntries takes in any array, see line 104 to see why
function renderEntries(arrayOfEntries) {
	// we're creating a huge html string that has all entries
	// so we need to have it defined outside the loop
	var htmlString = '';

	// looping with decrementing counter instead so that
	// entries appear new to old
	for (var i = arrayOfEntries.length - 1; i >= 0; i--) {
		// check if entry is active
		if (arrayOfEntries[i].active === true) {
			// get entry details
			var title = arrayOfEntries[i].title;
			var author = arrayOfEntries[i].author;
			var timestamp = arrayOfEntries[i].timestamp;

			// build html string for each entry
			htmlString += '<div id="div' + timestamp + '" class="entry">';
			htmlString += '<h3>' + title + '</h3>';
			htmlString += '<p>' + author + '</p>';
			htmlString += '<p>' + timestamp + '</p>';
			htmlString += '<br><button id="' + timestamp + '" class="btn">delete</button>'
			htmlString += '</div>';
		}
	}

	// replace html content of div with new big html string
	$('#entries').html(htmlString);

	// everytime we replace html, we need to attach listeners again
	// this is for the deleting feature
	for (var i = 0; i < arrayOfEntries.length; i++) {
		// attaching click event for each button
		$('#' + arrayOfEntries[i].timestamp).click(function() {
			// grabbing the timestamp
			var timestamp = $(this).attr('id');
			// loop through entire jounral
			for (var j = 0; j < myJournal.entries.length; j++) {
				// if value stored in html is the same as the timestamp we're looking for
				if (myJournal.entries[j].timestamp === parseInt(timestamp)) {
					// tell the model to update i.e., set .active to false for that entry
					myJournal.entries[j].deactivate();
					// we have to reredner to update view
					renderEntries(myJournal.entries);
					break;
				}
			}
		}) 
	};
}
function renderAllEntries(arrayOfEntries) {
	// we're creating a huge html string that has all entries
	// so we need to have it defined outside the loop
	var htmlString = '';

	// looping with decrementing counter instead so that
	// entries appear new to old
	for (var i = arrayOfEntries.length - 1; i >= 0; i--) {
		// check if entry is active
		if (arrayOfEntries[i].active === true) {
			// get entry details
			var title = arrayOfEntries[i].title;
			var author = arrayOfEntries[i].author;
			var timestamp = arrayOfEntries[i].timestamp;

			// build html string for each entry
			htmlString += '<div id="div' + timestamp + '" class="entry">';
			htmlString += '<h3>' + title + '</h3>';
			htmlString += '<p>' + author + '</p>';
			htmlString += '<p>' + timestamp + '</p>';
			htmlString += '<br><button id="' + timestamp + '" class="btn">delete</button>'
			htmlString += '</div>';
		} else {
			// get entry details
			var title = arrayOfEntries[i].title;
			var author = arrayOfEntries[i].author;
			var timestamp = arrayOfEntries[i].timestamp;

			// build html string for each entry
			htmlString += '<div id="div' + timestamp + '" class="entry">';
			htmlString += '<h3 class="deleted" >' + title + '</h3>';
			htmlString += '<p>' + author + '</p>';
			htmlString += '<p>' + timestamp + '</p>';
			htmlString += '<br><button id="' + timestamp + '" class="btn">delete</button>'
			htmlString += '<p>this is a deleted entry <span id="undo' + timestamp + '">undo</span></p>'
			htmlString += '</div>';			
		}
	}

	// replace html content of div with new big html string
	$('#entries').html(htmlString);

	// everytime we replace html, we need to attach listeners again
	// this is for the deleting feature
	for (var i = 0; i < arrayOfEntries.length; i++) {
		// attaching click event for each button
		$('#' + arrayOfEntries[i].timestamp).click(function() {
			// grabbing the timestamp
			var timestamp = $(this).attr('id');
			// loop through entire jounral
			for (var j = 0; j < myJournal.entries.length; j++) {
				// if value stored in html is the same as the timestamp we're looking for
				if (myJournal.entries[j].timestamp === parseInt(timestamp)) {
					// tell the model to update i.e., set .active to false for that entry
					myJournal.entries[j].deactivate();
					// we have to reredner to update view
					renderEntries(myJournal.entries);
					break;
				}
			}
		});

		if ($('#undo' + arrayOfEntries[i].timestamp).length) {
			$('#undo' + arrayOfEntries[i].timestamp).click(function() {
				// grabbing the timestamp
				var timestamp = $(this).attr('id').substring(4);
				// loop through entire jounral
				for (var j = 0; j < myJournal.entries.length; j++) {
					// if value stored in html is the same as the timestamp we're looking for
					if (myJournal.entries[j].timestamp === parseInt(timestamp)) {
						// tell the model to update i.e., set .active to false for that entry
						myJournal.entries[j].activate();
						// we have to reredner to update view
						renderEntries(myJournal.entries);
						break;
					}
				}			
			})			
		} 

	};
}


// INITIALIZE
// this is where actual stuff happen on the webpage
var myJournal = new Journal();
var hardCodedEntry = new Entry('Welcome to your Journal', 'Jin');
myJournal.addEntry(hardCodedEntry);
renderEntries(myJournal.entries);

// LISTENERS
$('#newEntryForm').submit(function(e) {
	e.preventDefault();
	var title = $('#title').val();
	var author = $('#author').val();
	var timestamp = Date.now();
	var newEntry = new Entry(title, author);

	// tell model it should add new entry
	myJournal.addEntry(newEntry);
	// tell view to rerender with updated data
	renderEntries(myJournal.entries);

	// reset form inputs
	$('#title').val('');
	$('#author').val('');
});

$('#searchForm').submit(function(e) {
	e.preventDefault();
	// grab search term
	// currently a string, tou could try splitting up to terms up into an array
	var searchTerm = $('#searchInput').val();
	// create array that contains items that match search term
	var searchResultArray = [];
	for (var i = 0; i < myJournal.entries.length; i++) {
		// if entry title match search term
		if (myJournal.entries[i].title.toLowerCase().indexOf(searchTerm) !== -1) {
			// put that entry inside the new array
			searchResultArray.push(myJournal.entries[i]);
		} else if (myJournal.entries[i].author.toLowerCase().indexOf(searchTerm) !== -1) {
			searchResultArray.push(myJournal.entries[i]);
		}
	}
	// rerender view with the smaller array
	renderEntries(searchResultArray);
	$('#searchInput').val('');
});

$('#viewall').click(function(e) {
	e.preventDefault();
	// rerender view with all journal entries
	renderEntries(myJournal.entries);
});

$('#viewalll').click(function(e) {
	e.preventDefault();
	renderAllEntries(myJournal.entries);
})