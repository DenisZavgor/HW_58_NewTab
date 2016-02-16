var Model = (function () {
    function Model() {
		console.log('init model');
		this.students = [{
			name: 'Name',
			age: 'Age',
			evaluation: 'evaluation',
			complete: true
		},
		{
			name: 'Gold',
			age: 20,
			evaluation: 12,
			complete: true
		},
		{
			name: 'Silver',
			age: 22,
			evaluation: 10,
			complete: true
		},
		{
			name: 'Helium',
			age: 28,
			evaluation: 11,
			complete: true
		},
		{
			name: 'Hydrogen',
			age: 30,
			evaluation: 11,
			complete: true
		}
		];
	}
	
	Model.prototype.get = function () {
		return this.students;
	}


	return Model;
})();