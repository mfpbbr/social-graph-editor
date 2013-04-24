App.Router.map(function() {
  this.route("social_networks");
  this.route("social_network", { path: "social_networks/:social_network_id" });
});


App.SocialNetworksRoute = Ember.Route.extend({
  model: function() {
    return App.SocialNetwork.find();
  }
});

App.SocialNetworkRoute = Ember.Route.extend({
  model: function(params) {
    return App.SocialNetwork.find(params.social_network_id);
  }
});
