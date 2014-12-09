function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    var __alloyId3 = [];
    $.__views.datosmios = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "datosmios",
        title: "Mis Missing"
    });
    $.__views.__alloyId6 = Ti.UI.createSearchBar({
        barColor: "#000",
        id: "__alloyId6"
    });
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "#DDD",
        height: Ti.UI.SIZE,
        id: "__alloyId8"
    });
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Header View",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId11 = Ti.UI.createView({
        backgroundColor: "red",
        height: "50",
        id: "__alloyId11"
    });
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Release to reload",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    var __alloyId15 = [];
    $.__views.__alloyId16 = {
        properties: {
            title: "Papaya",
            searchableText: "Papaya",
            id: "__alloyId16"
        }
    };
    __alloyId15.push($.__views.__alloyId16);
    $.__views.__alloyId17 = {
        properties: {
            title: "Peach",
            searchableText: "Peach",
            id: "__alloyId17"
        }
    };
    __alloyId15.push($.__views.__alloyId17);
    $.__views.__alloyId18 = {
        properties: {
            title: "Pear",
            searchableText: "Pear",
            id: "__alloyId18"
        }
    };
    __alloyId15.push($.__views.__alloyId18);
    $.__views.__alloyId19 = {
        properties: {
            title: "Persimmon",
            searchableText: "Persimmon",
            id: "__alloyId19"
        }
    };
    __alloyId15.push($.__views.__alloyId19);
    $.__views.__alloyId20 = {
        properties: {
            title: "Pineapple",
            searchableText: "Pineapple",
            id: "__alloyId20"
        }
    };
    __alloyId15.push($.__views.__alloyId20);
    $.__views.__alloyId21 = {
        properties: {
            title: "Pluot",
            searchableText: "Pluto",
            id: "__alloyId21"
        }
    };
    __alloyId15.push($.__views.__alloyId21);
    $.__views.__alloyId22 = {
        properties: {
            title: "Pomegranate",
            searchableText: "Pomegranate",
            id: "__alloyId22"
        }
    };
    __alloyId15.push($.__views.__alloyId22);
    $.__views.__alloyId13 = Ti.UI.createListSection({
        id: "__alloyId13"
    });
    $.__views.__alloyId13.items = __alloyId15;
    var __alloyId23 = [];
    __alloyId23.push($.__views.__alloyId13);
    $.__views.__alloyId5 = Ti.UI.createListView({
        sections: __alloyId23,
        searchView: $.__views.__alloyId6,
        headerView: $.__views.__alloyId8,
        pullView: $.__views.__alloyId11,
        id: "__alloyId5"
    });
    $.__views.datosmios.add($.__views.__alloyId5);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.datosmios,
        title: "Mios",
        icon: "KS_nav_ui.png",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId25 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Missing Cercanos",
        id: "__alloyId25"
    });
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Lista de Missing Cercanos",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId24 = Ti.UI.createTab({
        window: $.__views.__alloyId25,
        title: "Missing Cercanos",
        icon: "KS_nav_views.png",
        id: "__alloyId24"
    });
    __alloyId3.push($.__views.__alloyId24);
    $.__views.listas = Ti.UI.createTabGroup({
        tabs: __alloyId3,
        id: "listas"
    });
    $.__views.listas && $.addTopLevelView($.__views.listas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;