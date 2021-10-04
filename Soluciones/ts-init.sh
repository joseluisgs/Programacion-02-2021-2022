#!/bin/bash
# Para crear el fichero tsconfig.json

npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib ES6 \
--module commonjs --allowJs true --noImplicitAny true