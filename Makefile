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
	bin/brain-even.js

play-calc:
	bin/brain-calc.js

play-gcd:
	bin/brain-gcd.js

play-prime:
	bin/brain-prime.js

play-progression:
	bin/brain-progression.js
