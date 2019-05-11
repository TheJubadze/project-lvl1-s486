.PHONY: install clean

install:
	npm install

clean:
	if [ -d "node_modules" ]; then rm -r node_modules; fi

reinstall: clean install

start:
	npx babel-node src/bin/brain-games.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint .