var Map = Class({

    constructor: function (arg) {

        //console.log('Map constructor');
        var self = this;
        self.model = arg.model;


        L.Icon.Default.imagePath = "images"
        self.current = L.map(arg.mapPane).setView([arg.lat, arg.lng], arg.zoom);

        L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="http://cloudmade.com">CloudMade</a>'
        }).addTo(self.current);

        self.currentMarkerLayer = L.layerGroup([]);
        self.current.addLayer(self.currentMarkerLayer);

        self.current.on('moveend', function (e) {
            Bus.publish("changeCriteria", {map: {bounds: this.getBounds(), zoom: this.getZoom()}});
        });

        Bus.subscribe("changeCollection", function () {
            var markers = [];
            for (i = 0; i < self.model.collection.points.length; i++) {
                var point = self.model.collection.points[i];
                markers.push(L.marker([point.lat, point.lng]));
            }

            self.current.removeLayer(self.currentMarkerLayer);
            self.currentMarkerLayer = new L.featureGroup(markers);
            self.current.addLayer(self.currentMarkerLayer);


            //alert(self.model.collection);


        });


    }

});
