Measures = new Mongo.Collection('measures');

Measures.before.insert(function (userId, doc) {
  	doc.createdAt = moment().toDate();
    doc.timestamp = Date.now();
});
