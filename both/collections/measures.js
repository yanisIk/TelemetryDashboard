Measures = new Mongo.Collection('measures');

Measures.helpers({
    motorTemperatures : function(){ return Measures.find({}, {type:'motorTemperature'}, {sort: {timestamp: -1}});},
    speeds : function(){ return Measures.find({},{type:'speed'}, {sort: {timestamp: -1}});}
});

Measures.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
    doc.timestamp = Date.now();

});
