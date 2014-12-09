function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function Login() {
        var email = "dan";
        var pass = "daniel";
        if ("" != email && "" != pass) {
            url = "http://appmissing.missing.cl/Missing/public/validalogin/" + email + "/" + pass;
            xhr = Ti.Network.createHTTPClient({
                onload: function() {
                    validarLogin(JSON.parse(this.responseText));
                },
                onerror: function(e) {
                    Ti.API.info(this.responseText);
                    Ti.API.info(this.status);
                    Ti.API.info(e.error);
                },
                timeout: 5e3
            });
            xhr.open("GET", url);
            xhr.send();
        } else alert("Debe ingresar ambos campos.");
    }
    function validarLogin(json) {
        var msg = json.msg;
        if ("1" == msg) {
            var winListas = Alloy.createController("listas", json.id).getView();
            winListas.open({
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
        } else alert("Usuario y contraseña invalidos.");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#31A3DD",
        title: "Missing",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        top: "30",
        left: "40",
        text: "Ingrese su usuario y contraseña.",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.email = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        top: "70",
        left: "40",
        width: "250",
        height: "60",
        id: "email",
        hintText: "Email"
    });
    $.__views.index.add($.__views.email);
    $.__views.pass = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        top: "120",
        left: "40",
        width: "250",
        height: "60",
        id: "pass",
        passwordMask: "true",
        hintText: "Contraseña"
    });
    $.__views.index.add($.__views.pass);
    $.__views.__alloyId1 = Ti.UI.createButton({
        width: "100",
        height: "50",
        title: "Entrar",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    Login ? $.__views.__alloyId1.addEventListener("click", Login) : __defers["$.__views.__alloyId1!click!Login"] = true;
    $.__views.__alloyId2 = Ti.UI.createLabel({
        top: "400",
        left: "50",
        text: "Powered by Missing SpA.",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId1!click!Login"] && $.__views.__alloyId1.addEventListener("click", Login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;