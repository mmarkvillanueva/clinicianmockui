sap.ui.define([
    "./BaseController",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/unified/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, History, JSONModel, unifiedLibrary) {
        "use strict";

        var CalendarDayType = unifiedLibrary.CalendarDayType;

        return BaseController.extend("clinicianmockui.controller.Details", {

            onInit: function () {

                var oModel = new JSONModel();
                oModel.setData({
                        startDate: new Date("2023", "3", "10"),
                        appointments: [{
                            title: "Test",
                            startDate: new Date("2023", "3", "10", "12", "0"),
                            endDate: new Date("2023", "3", "10", "12", "0")
                        }
                    ]
                });         

                this.getView().setModel(oModel);

            },

            onNavBack: function () {
                var sPreviousHash = History.getInstance().getPreviousHash();
                if (sPreviousHash !== undefined) {
                    // eslint-disable-next-line sap-no-history-manipulation
                    history.go(-1);
                } else {
                    this.getRouter().navTo("List", {}, true);
                }
            }

        });
    });
