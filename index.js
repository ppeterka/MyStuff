const electron = require('electron')
const {app} = electron;
const {BrowserWindow} = electron;

/* 
 * Equivalent of JQuery $.extend() for 2 objects
 * copied from http://stackoverflow.com/a/11197343/1667004 
 */
function extend(a, b) {
	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
}

app.on('ready', function() {
	
	var Datastore = require('nedb');
	db = new Datastore({filename : 'stuff'});
    db.loadDatabase();

	global.shared = {
		read: function(fun) {
			db.find({  }, fun);
		},

		update: function(doc, fun) {
			db.update({"id":doc.id}, doc, {"returnUpdatedDocs" :true}, fun);
		},
		
		addnew: function(doc, fun) {
			var defItem = {category: "", type: "", val1:"", val2:"", inventory:0};
			extend(defItem,doc);
			db.count({}, function (err, count) {
				defItem.id=count;
				db.insert(defItem, fun);
			});
		}
	};
	
	let mainWindow = new BrowserWindow( {
		width: 800, 
		height: 600
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
	
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	mainWindow.show();
})

