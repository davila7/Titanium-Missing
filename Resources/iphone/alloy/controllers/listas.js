function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function loadMios() {
        loadMissingMios();
    }
    function loadMissingMios() {
        var id = args;
        url = "http://appmissing.missing.cl/Missing/public/datosmissingmios/" + id;
        xhr = Ti.Network.createHTTPClient({
            onload: function() {
                createTableMios(JSON.parse(this.responseText));
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
    function createTableMios(json) {
        tableData = [];
        var IMG_BASE = "https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/";
        for (var i = 0; i < json.missing.length; i++) {
            var missing = json.missing[i];
            row = Ti.UI.createTableViewRow({
                height: "10%"
            }), name = Ti.UI.createLabel({
                text: missing.nombre_objeto + " - " + missing.tipo,
                top: 0
            });
            var imageAvatar = Ti.UI.createImageView({
                image: IMG_BASE + "custom_tableview/user.png",
                left: 10,
                top: 5,
                width: 50,
                height: 50
            });
            row.add(imageAvatar);
            row.add(name);
            tableData.push(row);
        }
        Ti.API.info("data :" + tableData);
        $.tblmios.data = tableData;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listas";
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
    var __alloyId3 = [];
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Mis Missing",
        id: "__alloyId5"
    });
    var __alloyId6 = [];
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "Click Para cargar",
        id: "__alloyId7"
    });
    __alloyId6.push($.__views.__alloyId7);
    loadMios ? $.__views.__alloyId7.addEventListener("click", loadMios) : __defers["$.__views.__alloyId7!click!loadMios"] = true;
    $.__views.tblmios = Ti.UI.createTableView({
        data: __alloyId6,
        id: "tblmios"
    });
    $.__views.__alloyId5.add($.__views.tblmios);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Mios",
        icon: "KS_nav_ui.png",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId9 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Missing Cercanos",
        id: "__alloyId9"
    });
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Lista de Missing Cercanos",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId8 = Ti.UI.createTab({
        window: $.__views.__alloyId9,
        title: "Missing Cercanos",
        icon: "KS_nav_views.png",
        id: "__alloyId8"
    });
    __alloyId3.push($.__views.__alloyId8);
    $.__views.listas = Ti.UI.createTabGroup({
        tabs: __alloyId3,
        id: "listas"
    });
    $.__views.listas && $.addTopLevelView($.__views.listas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    __defers["$.__views.__alloyId7!click!loadMios"] && $.__views.__alloyId7.addEventListener("click", loadMios);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;