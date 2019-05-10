#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

import name from '..';

console.log(`Hello, ${name}!`);