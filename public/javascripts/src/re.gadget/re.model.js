var Model = Class(function () {
    var MIN_AGE = 1,                             // private variables
        MAX_AGE = 150;

    function isValidAge(age) {                     // private method
        return age >= MIN_AGE && age <= MAX_AGE;
    }


    return {
        constructor: function (arg) {

            var self = this;


            var dao;
            if (typeof DAO_EasyXDM === "undefined") {
                // ajax request
            } else {
                dao = new DAO_EasyXDM({apipath: RE.vars.apipath});
            }

            self['criteria'] = {};

            self.collection = {};

            Bus.subscribe("changeCriteria", function (msg, data) {
                // append filter criteria
                Utils.extend(self['criteria'], data);
                // make ajax request
                dao.getRecords(self['criteria'], function (data) {

                    self['collection'] = data;

                    Bus.publish("changeCollection");

                });


            });

        }

    };
});
