
var View = (function () {
    function View() {
		console.log('init view');
		this.tamplate;
		this.container = $('.main');
	}
	View.prototype.render = function(items){
		var self = this;
		$(this.tamplate).html('');
		this.tamplate = "<table class='table'>";
		
		$.each(items, function (index,item){
			self.tamplate += ("<tr class='table-row'><td class='table-col'>"
			+ item.name
			+ "</td><td class='table-col'>"
			+ item.age
			+ "</td><td class='table-col'>"
			+ item.evaluation
			+ "</td></tr>");
		});	
		

		$(this.container).append($(this.tamplate));
	};
	
		
    return View;
})();