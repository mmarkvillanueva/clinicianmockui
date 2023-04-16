sap.ui.define([
	"./BaseController",
	'sap/ui/model/json/JSONModel',
    'sap/ui/Device',
    "sap/ui/core/routing/History"
],
function (BaseController, JSONModel, Device, History) {
	"use strict";

	return BaseController.extend("clinicianmockui.controller.Details", {

		onInit: function () {
			// create model
			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2017", "2", "08", "8", "0"),
				people: [{
					pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
					name: "John Miller",
					role: "team member",
					appointments: [
                        {
                            start: new Date("2023", "3", "14"),
                            end: new Date("2023", "3", "15"),
                            type: sap.ui.unified.CalendarDayType.None,
                            title: "Test 1",
                            
                        },
                        {
                            start: new Date("2023", "3", "14"),
                            end: new Date("2023", "3", "15"),
                            type: sap.ui.unified.CalendarDayType.None,
                            title: "Test 2",
                        }
					]
				},
					{
						pic: "sap-icon://employee",
						name: "Max Mustermann",
						role: "team member",
						appointments: [
                            {
								start: new Date("2023", "3", "14"),
								end: new Date("2023", "3", "15"),
                                type: sap.ui.unified.CalendarDayType.None,
								title: "Test 3",
                                
							},
                            {
								start: new Date("2023", "3", "14"),
								end: new Date("2023", "3", "15"),
                                type: sap.ui.unified.CalendarDayType.None,
								title: "Test 4",
							}

						],
						headers: [{
							start: new Date("2017", "2", "8", "8", "0"),
							end: new Date("2017", "2", "8", "10", "0"),
							title: "Development of UI5",
							pic: "sap-icon://sap-ui5",
							type: "Type07"
						},
							{
								start: new Date("2017", "4", "1", "0", "0"),
								end: new Date("2017", "7", "30", "23", "59"),
								title: "New quarter",
								type: "Type10",
								tentative: false
							}
						]
					}
				]
			});
			this.getView().setModel(oModel);
            
			var bIsPhone = Device.system.phone,
			    svgLogo = sap.ui.require.toUrl("clinicianmockui/controller/sap-logo.svg"),
			    oImgModel = (new JSONModel({
                                imageWidth: bIsPhone ? "5em" : "10em",
                                svgLogo: svgLogo
                }));

			this.getView().setModel(oImgModel, "img");

		},

		handleAppointmentHeightChange: function (oEvent) {

			var oPC = this.byId("PC1"),
				sAppointmentHeight = oEvent.getParameter("selectedItem").getKey();

			oPC.setAppointmentHeight(sAppointmentHeight);
		},

		handleSortChange: function (oEvent) {
			//make a custom sort regarding alphabetical order
			var oPC = this.byId("PC1"),
				fnSelectedSort = oEvent.getParameter("selectedItem").getKey() === "custom" ? this.fnAlphabeticalOrder : null;

			oPC.setCustomAppointmentsSorterCallback(fnSelectedSort);

		},

		handleAppointmentRoundingChange: function (oEvent){
			var oPC = this.byId("PC1"),
				sAppointmentRoundingWidth = oEvent.getParameter("selectedItem").getKey();
			oPC.setAppointmentRoundWidth(sAppointmentRoundingWidth);
		},

		// custom function for appointments sort by alphabetical order
		fnAlphabeticalOrder : function(oApp1, oApp2) {
			if (oApp1.getTitle().toLowerCase() > oApp2.getTitle().toLowerCase()) {
				return 1;
			}
			if (oApp1.getTitle().toLowerCase() < oApp2.getTitle().toLowerCase()) {
				return -1;
			}
			return 0;
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