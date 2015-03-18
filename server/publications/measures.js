Meteor.publishComposite("measures", function() {
  return {
    find: function() {
      return Measures.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(measure) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
