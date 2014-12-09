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
        var user = $.user.value;
        var pass = $.pass.value;
        url = ruta + "validalogin" + user + "/" + pass;
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
    }
    function validarLogin(json) {
        var msg = json.msg;
        if ("1" == msg) {
            var winMain = Alloy.createController("main").getView();
            winMain.open({
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
        } else alert("Usuario y contraseña invalidos ->" + msg);
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
        text: "Ingrese Usuario y contraseña",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.user = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        top: "20",
        left: "20",
        width: "250",
        height: "60",
        id: "user"
    });
    $.__views.index.add($.__views.user);
    $.__views.pass = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        top: "10",
        left: "10",
        width: "250",
        height: "60",
        id: "pass"
    });
    $.__views.index.add($.__views.pass);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Entrar",
        width: "100",
        height: "50",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    Login ? $.__views.__alloyId1.addEventListener("click", Login) : __defers["$.__views.__alloyId1!click!Login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ruta = "http://appmissing.missing.cl/Missing/public/";
    $.index.open();
    __defers["$.__views.__alloyId1!click!Login"] && $.__views.__alloyId1.addEventListener("click", Login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;