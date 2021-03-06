function ApplicationTabGroup(Window) {
	
	var challenges = require('challenges');
	var newChallenges = new challenges();
	//var scrollWindow = require('Scroll');
	var listWindow = require('list');
	
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = new Window(L('home')),
		win2 = new listWindow(newChallenges);

	var tab1 = Ti.UI.createTab({
		title: 'Tracker',
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: 'Challenges',
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;

	self.addTab(tab1);
	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
