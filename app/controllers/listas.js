var args = arguments[0] || {};

/***** MIS MISSING *****/
function loadMios(){
	loadMissingMios();
}
function loadMissingMios() {
	var id = args;
	url = "http://appmissing.missing.cl/Missing/public/datosmissingmios/"+id;
	xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			createTableMios(JSON.parse(this.responseText));
		},
		onerror: function(e){
			Ti.API.info(this.responseText);
			Ti.API.info(this.status);
			Ti.API.info(e.error);
		},
		
		timeout:5000
		
	});
	xhr.open('GET', url);
	xhr.send();
}

function createTableMios(json){
	tableData = [];
	var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
	for(var i=0; i < json.missing.length; i++){
		var missing = json.missing[i];
		row = Ti.UI.createTableViewRow({
			height:'10%'
		}),
		name = Ti.UI.createLabel({
			text: missing.nombre_objeto+' - '+missing.tipo,
			top:0
		});
		var imageAvatar = Ti.UI.createImageView({
    	image: IMG_BASE + 'custom_tableview/user.png',
    	left:10, top:5,
    	width:50, height:50
  		});
  		row.add(imageAvatar);
		row.add(name);
		tableData.push(row);
	}
	$.tblmios.setData(tableData);
	Ti.API.info('data: '+$.tblmios.data);
	/*var list = Titanium.UI.createTableView({
    data:tableData,
    searchHidden:true
    });
	$.datosmios.add = list;*/
}

/***** FIN MIS MISSING *****/