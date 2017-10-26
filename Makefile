DIRSRC := js/
DIRBUILD := build/
DIR_NODE:= node_modules/
DIR_BOWER := bower_components/
SHELL := /bin/bash
#files := $(shell cat "dependencies_arhlinux.txt")

#echo '"laxcomma": true' >> ~/.jshintrc
.PHONY: all clean

all: info dirs prepare
	#$(EXEC)

info:
	@echo '------------------------------------------------------'
	@echo '>>> Using mode $(mode)'
	@echo '    (Please, call "make" with [mode=debug|release])  '
	@echo '------------------------------------------------------'

	grunt -version

dirs:
	mkdir -p $(DIRBUILD)

prepare:
	npm install
	bower install
	#bower install davidjbradshaw/image-map-resizer --save-dev
	#npm install grunt grunt-contrib-uglify --save-prod

add-dep-develop:
	#pm install grunt-contrib-uglify --save-dev
	npm install --save-dev fsevents

dist-prod:
	#I prefer use grunt requirejs
	grunt requirejs:compile

	#./node_modules/requirejs/bin/r.js -o build-production.js
	#node ../../r.js -o name=main out=main-built.js baseUrl=.
	#node ../../r.js -o baseUrl=. paths.requireLib=../../require name=main include=requireLib out=main-built.js
	#node ../../r.js -o name=main out=main-built.js baseUrl=. paths.jquery=empty:
	#css
	#node ../../r.js -o cssIn=main.css out=main-built.css
	#On Arch linux
	#node /usr/bin/r.js -o build.js

clean:
	rm -f *.log 
	rm -rf $(DIR_NODE)
	rm -rf $(DIR_BOWER)	