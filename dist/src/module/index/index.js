define(function(a,b,c){window.app={},app.layoutView=Backbone.View.extend({initModule:function(){}});var d=app.layoutView.extend({el:document.body,events:{},currentView:null,toggleView:function(a,b){this.currentView=new a,console.log(this.currentView),b=b||{};var c=this.currentView.render().el;console.log(c),$("#content").empty().html(c),this.currentView.initModule(b)},initialize:function(){}}),e=Backbone.Router.extend({routes:{welcome:"welcome",byebye:"byebye"},welcome:function(){app.mainView.toggleView(a("welcome/welcome"))},byebye:function(){app.mainView.toggleView(a("byebye/byebye"))}});app.mainView=new d,app.router=new e,Backbone.history.start({}),Backbone.history.on("all",function(a,b){console.log(window.location.hash)})});