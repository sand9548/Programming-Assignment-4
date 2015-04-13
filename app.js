function setupSettings (){

	var view = Ti.UI.createView({});
	return view;
}


var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Taylor Blas. College of Business and Economics. blas9483@vandals.uidaho.edu.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

// create tab group
var tabGroup = Titanium.UI.createTabGroup ();
tabGroup.addTab(tabSettings);

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var view = Ti.UI.createView ({
	top:20,
	botttom: '50%',
	left: 20,
	right: '50%',
	backgroundColor:'red'
});

tab1.add(view);

var button1 = Titanium.UI.createButton ({
	title:'Press To Find Out More'
	top: 10,
	left: 10 
});

view.add(button1);
button1.addEventListener('click', function (e) {alert('You clicked me!')})

var winSettings = Ti.UI.createWindow ({
});

var tabSettings = Titanium.UI.createTab ({
	icon:'KS_nav_views.png',
	title:'Settings',
	window:winSettings
});

winSettings.add(setupSettings());
	
var tabSettings = Titanium.UI.createTab ({ 
	icon:'KS_nav_vies.png',
	title:'Settings',
	window:winSettings
});

var tableView = Ti.UI.createTableView ({
style:        Ti.UI.iphone.TableViewStyle.GROUPED,
scrollable:    true
});

var firstSection = Ti.UI.createTableViewSection ({
headerTitle: 'Taylor Blas',
footerTitle: 'Raised in Boise, ID\nSenior majoring in Business Management and Human Resources, with a minor in Marketing at the University of Idaho'
});

var firstRow = ti.UI.createTableViewRow ({
title:  'A setting',
hasChild: true
});

firstSection.add(firstrow);
tableView.setData(firstSection);
view.add(tableView);

