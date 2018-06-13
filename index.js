String.prototype.redact = function(percentage) {
	return this.split(/\b/)
		.map(word => {
			return Math.random() < percentage ? word.replace(/\w/g, "█") : word
		})
		.join("")
}
