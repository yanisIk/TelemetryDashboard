Meteor.startup(function() {

  Factory.define('motorTemp', Measures, {
    type: function() { return "motorTemperature"; },
    value: function() { return _.random(10, 100); }
  });

  if (Measures.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('motorTemp');
    });
  }

  Meteor.setInterval(function(){Factory.create("motorTemp");}, 2000);
});
