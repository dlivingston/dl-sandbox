var app = angular.module('sandboxApp', ['ngRoute']);

app.controller('ThoughtController', ['$http', function($http){
	var self = this;
	var thoughts = [
		{
			"thought":"The person who would proof read Hitler's speeches was a Grammar Nazi.",
			"author":"Nick Offerman"
		},
		{
			"thought":"If your shirt isn't tucked into your pants, then your pants are tucked into your shirt.",
			"author":"Nick Offerman"
		},
		{
			"thought":"Once you have a PhD, every meeting you go to becomes a doctor's appointment.",
			"author":"Nick Offerman"
		},
		{
			"thought":"If humans could fly, we would consider it exercise and never do it. ",
			"author":"Nick Offerman"
		},
		{
			"thought":"My right elbow has never been touched by my right hand.",
			"author":"Nick Offerman"
		},
		{
			"thought":"People born in the year 2000 never have to remember what age they are.",
			"author":"Nick Offerman"
		},
		{
			"thought":"Technically we're all half-centaur. ",
			"author":"Nick Offerman"
		},
		{
			"thought":"Nurture your mind with great thoughts. To believe in the heroic makes heroes.",
			"author":"Benjamin Disraeli"
		},
		{
			"thought":"Courage is the first of human qualities because it is the quality which guarantees all others.",
			"author":"Winston Churchill"
		},
		{
			"thought":"The only way of finding the limits of the possible is by going beyond them into the impossible.",
			"author":"Arthur C. Clarke"
		},
		{
			"thought":"Every child is an artist. The problem is how to remain an artist once he grows up.",
			"author":"Pablo Picasso"
		}
	];
	var random = Math.floor(Math.random() * thoughts.length);
	self.thought = thoughts[random].thought;
	self.thinker = thoughts[random].author;
	//self.count = thoughtList.length;
	//console.log('ThoughtController has been created');
}]);
