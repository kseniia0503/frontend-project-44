.PHONY: install brain-games publish

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY: play-even play-calc play-gcd play-prime play-progression

play-even:
	node bin/brain-even.js

play-calc:
	node bin/brain-calc.js

play-gcd:
	node bin/brain-gcd.js

play-prime:
	node bin/brain-prime.js

play-progression:
	node bin/brain-progression.js
