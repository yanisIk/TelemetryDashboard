if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Realtime Telemetry Dashboard',
        suffix: 'Telemetry Dashboard'
      }
  });
}
