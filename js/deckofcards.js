/**
*
*
*
*/

/**
*
*/
function DeckOfCards( values, colors ) {
	this.values = values || null; //{ 'ace':1, 'jack':11, 'queen':12, 'king':13 };
	this.colors = colors || null; //{ 'club':"black", 'diamond':"red", 'heart':"red", 'spade':"black" };
	this.deck   = [];
	this.drawn  = [];
	
	var ranks = [ "ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king" ],
		suits = [ "club", "diamond", "heart", "spade" ],
		sIdx, rIdx;
		
	for ( sIdx = 0; sIdx < suits.length; sIdx++ ) {
		for ( rIdx = 0; rIdx < ranks.length; rIdx++ ) {
			this.deck.push( new PlayingCard( ranks[rIdx], suits[sIdx], this.values, this.colors ) );
		}
	}
}
DeckOfCards.prototype.shuffle = function() {
	// Fisher-Yates shuffle code from: http://bost.ocks.org/mike/shuffle/
	var m = this.deck.length, t, i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = this.deck[m];
		this.deck[m] = this.deck[i];
		this.deck[i] = t;
	}
};
DeckOfCards.prototype.draw = function() {
	var card = this.deck.pop();
	this.drawn.push( card );
	return card;
};

/**
*
*/
function PlayingCard( rank, suit, values, colors ) {
	values = values || { 'ace':1, 'jack':11, 'queen':12, 'king':13 };
	colors = colors || { 'club':"black", 'diamond':"red", 'heart':"red", 'spade':"black" };
	
	this.rank   = rank || "joker";
	this.suit   = suit || "spade";
	
	this.value = ( values[this.rank] === undefined ) ? this.rank : values[this.rank];
	this.color = colors[this.suit];
	
	this.face = ( ["jack","queen","king"].indexOf(rank) === -1 ) ? undefined : rank;
}
