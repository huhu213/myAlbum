define(function(require, exports, module) {
  var byeView = app.layoutView.extend({
    template: _.template('byebye'),
    render: function() {
      $(this.el).html(this.template({}));
      return this;
    }
  });

  module.exports = byeView;
})
