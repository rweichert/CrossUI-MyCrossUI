// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout7")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "min" : 10,
                        "size" : 80,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 80
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "min" : 10,
                        "size" : 80,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs4")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "imageClass" : "xui-icon-xui"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3"
                    },
                    {
                        "id" : "d",
                        "caption" : "page4",
                        "closeBtn" : true,
                        "optBtn" : "xui-uicmd-opt",
                        "popBtn" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a"),
                "main"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("10.666666666666666em")
                .setTop("9.142857142857142em")
                .setWidth("16.914285714285715em")
                .setHeight("5.180952380952381em")
                .setCaption("Label Page 1"),
                "a"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("8.380952380952381em")
                .setTop("1.5238095238095237em")
                .setWidth("9.295238095238096em")
                .setHeight("3.3523809523809525em")
                .setCaption("Footer"),
                "after"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label8")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("7.771428571428571em")
                .setHeight("1.980952380952381em")
                .setCaption("Header"),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});