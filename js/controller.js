var Controller = (function () {
    function Controller(model, view) {
        console.log('init Controller');
		var self = this;

		this.view = view;
		this.model = model;
		this.show();
		
	}
	
	Controller.prototype.show = function (color) {
        
        this.view.render(this.model.get());
        
    };
    return Controller;
	
})();