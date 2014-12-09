function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function volver() {
        $.main.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
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
    var __alloyId2 = [];
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Mis Missing",
        id: "__alloyId4"
    });
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Lista de Missing",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    volver ? $.__views.__alloyId5.addEventListener("click", volver) : __defers["$.__views.__alloyId5!click!volver"] = true;
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        title: "Mios",
        icon: "KS_nav_ui.png",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId7 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Missing Cercanos",
        id: "__alloyId7"
    });
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Lista de Missing Cercanos",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId6 = Ti.UI.createTab({
        window: $.__views.__alloyId7,
        title: "Missing Cercanos",
        icon: "KS_nav_views.png",
        id: "__alloyId6"
    });
    __alloyId2.push($.__views.__alloyId6);
    $.__views.main = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId5!click!volver"] && $.__views.__alloyId5.addEventListener("click", volver);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;