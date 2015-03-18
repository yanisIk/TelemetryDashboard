Meteor.methods({
  'Measures.insert': function (measure) {

      check(measure,{
          type : String,
          value : Match.Integer
      });

      //Collection hook will add timestamp and created_at
      Measures.insert(measure);
  }
});
