function listWindow(challenges) {
	
	newChallenges = [];
	challenges.forEach(function(challenge){
		newChallenges.push({
			properties: {title: challenge, color: 'black'	}
		});
		
	});
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
	});
	
	var challengesList = Ti.UI.createListView({
	});
	
	var sections = [];
	var challengesListSection = Ti.UI.createListSection({
		headerTitle: 'Challenges'
	});

	challenges = newChallenges;

	Ti.API.info(JSON.stringify(challenges));
	challengesListSection.setItems(challenges);
	sections.push(challengesListSection);
	
	challengesList.sections = sections;
	
	challengesList.addEventListener('itemclick', function(e) {
		alert('clicked '+e.itemIndex);
	});
	
	
	self.add(challengesList);
	
	return self;
}

module.exports = listWindow;
