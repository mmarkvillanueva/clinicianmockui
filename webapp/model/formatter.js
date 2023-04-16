sap.ui.define([], function () {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        numberUnit : function (sValue) {
            if (!sValue) {
                return "";
            }
            return parseFloat(sValue).toFixed(2);
        },

        setDecimalPlace: function(obj) {
            return Number(obj).toFixed(2);
        },

        formatDate: function(date) {
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "d MMM yyyy"
            });
            
            return oDateFormat.format(date);
        },
    };

});