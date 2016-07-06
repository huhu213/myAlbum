define(function(require, exports, module) {
  window.app = {};

  app.layoutView = Backbone.View.extend({
    initModule: function() {}
  })

  var mainView = app.layoutView.extend({
    el: document.body,
    events: {},
    currentView: null,

    toggleView: function(View, obj) {
      this.currentView = new View();
      console.log(this.currentView);
      obj = obj || {};
      var subview = this.currentView.render().el;
      console.log(subview);
      $('#content').empty().html(subview);
      this.currentView.initModule(obj);
    },

    initialize: function() {}
  })

  var Router = Backbone.Router.extend({
    routes: {
      'welcome': 'welcome',
      'byebye': 'byebye'
    },

    welcome: function() {
      app.mainView.toggleView(require('welcome/welcome'));
    },

    byebye: function() {
      app.mainView.toggleView(require('byebye/byebye'));
    }
  });

  app.mainView = new mainView();
  app.router = new Router();
  Backbone.history.start({

  });

  Backbone.history.on("all", function (route, router) {
    console.log(window.location.hash);
  });
})
