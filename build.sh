#!/usr/bin/env bash
browserify -t [ babelify --presets [ react ] ] public/ad/admin.js -o ./public/ad/bundle.js