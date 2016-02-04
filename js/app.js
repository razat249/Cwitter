(function(){
	var app = angular.module('cwitter', []);

	var cweets_db = [
		{
			'id': 1,
			'name' : 'Razat',
			'username' : '@' + 'razat_patkar',
			'content' : 'Feeling awesome as I got some challenge.',
			'likes' : 23456,
			'recweets' : 465
		},

		{
			'id': 2,
			'name' : 'Ishan',
			'username' : '@' + 'ishancoder',
			'content' : 'Feeling awesome as I got some challenge.',
			'likes' : 23456,
			'recweets' : 465
		},

		{
			'id': 3,
			'name' : 'Atul',
			'username' : '@' + 'theatsharma',
			'content' : 'Feeling awesome as I got some challenge.',
			'likes' : 23456,
			'recweets' : 465
		},

		{
			'id': 4,
			'name' : 'Lalit',
			'username' : '@' + 'lalitkishor',
			'content' : 'Feeling awesome as I got some challenge.',
			'likes' : 23456,
			'recweets' : 465
		}
	]

	app.controller('cweetController', function(){
		this.cweets = cweets_db;

		this.cweet = {
			'id' : 5,
			'name' : 'Razat',
			'username' : '@' + 'razat_patkar',
			'likes' : 0,
			'recweets' : 0
		};

		this.addCweet = function() {
			console.log(this.cweet.content)
			if (this.cweet.content == undefined) {return;};
			cweets_db.push(this.cweet);
			this.cweet = {
				'id' : 5,
				'name' : 'Razat',
				'username' : '@' + 'razat_patkar',
				'likes' : 23456,
				'recweets' : 465
			};
		};

		this.likesIncr = function(cweet) {
			cweet.likes++;
		};

		this.recweetsIncr = function(cweet) {
			this.cweet.content = cweet.content;
			cweets_db.push(this.cweet);
			this.cweet = {};
			cweet.recweets++;
		};

	});

})();