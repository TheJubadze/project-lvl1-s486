.PHONY: install clean

install:
	npm install

clean:
	if [ -d "node_modules" ]; then rm -r node_modules; fi

reinstall: clean install

even:
	npx babel-node src/bin/games/brain-even.js
	
calc:
	npx babel-node src/bin/games/brain-calc.js
	
gcd:
	npx babel-node src/bin/games/brain-gcd.js
	
prog:
	npx babel-node src/bin/games/brain-progression.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint .