function Login(e){
	var email = 'dan';//$.email.value;
	var pass = 'daniel';//$.pass.value;
	if(email != '' && pass != ''){
	url = "http://appmissing.missing.cl/Missing/public/validalogin/"+email+"/"+pass;
	xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			validarLogin(JSON.parse(this.responseText));
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
	}else{
		alert("Debe ingresar ambos campos.");
	}
}

function validarLogin(json){
	var msg = json.msg;
	if(msg == "1"){
		var winListas = Alloy.createController('listas',json.id).getView();
		winListas.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	}else{
		alert("Usuario y contraseña invalidos.");
	}
}

$.index.open();