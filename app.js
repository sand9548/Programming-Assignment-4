Ti.UI.backgroundColor = 'Black';

var win = Ti.UI.createWindow();

var image = Ti.UI.createImageView({

image: 'linkedin photo.jpg',
top: 0,
height: '50%',
width: '90%'

});

Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({
title:'About Me',
backgroundColor: '#44def9'

});

var tab1 = Titanium.UI.createTab({

icon:'KS_nav_views.png',
title:'About Me',
window:win1

});

var label = Titanium.UI.createLabel({
color:'#000000',
text:'Taylor Blas\n\nMajoring in Management and Human Resources with a Minor in Marketing\nStudent at the University of Idaho\n\nCell Phone:208-891-0665\nEmail:blas9483@vandals.uidaho.edu',
font:{fontSize:15,fontFamily:'Sans Serif'},
textAlign:'center',
width:'90%',
top:'55%'

});


win1.add(label);

var win2 = Titanium.UI.createWindow({
title:'Detailed Information',
backgroundColor: '#75e7fb'

});

var tab2 = Titanium.UI.createTab({
icon:'KS_nav_views.png',
title:'Detailed Information',
window:win2

});




var label2 = Titanium.UI.createLabel({
color:'#000000',
text:'Born in Las Vegas, Nevada, raised in Boise, Idaho\nWorking for a Degree in Management and Human Resources\n\nCurrent Employer:University of Idaho\n\nSkills Summary:\nTeam Player\nGoal-Oriented\nOrganized\nProactive and Results-Driven\nGood and Timely Communicator\n\nMotivated Worker',
font:{fontSize:20,fontFamily:'Sans Serif'},
textAlign:'center',
width:'90%'

});


win2.add(label2);

tabGroup.addTab(tab1);

tabGroup.addTab(tab2);

tabGroup.open();

win1.add(image);
