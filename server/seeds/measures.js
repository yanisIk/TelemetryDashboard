Meteor.startup(function() {

  Factory.define('item', Measures, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Measures.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

});
