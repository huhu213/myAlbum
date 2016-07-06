define(function(require, exports, module) {
  var welcomeView = app.layoutView.extend({
    template: _.template('<a href="#">welcome</a>'),
    render: function() {
      $(this.el).html(this.template({}));
      return this;
    }
  });

  module.exports = welcomeView;
})
