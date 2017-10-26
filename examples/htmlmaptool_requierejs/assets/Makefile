DIRSRC := ../
DIRBUILD := build/
DIR_NODE:= node_modules/
DIR_BOWER := bower_components/
SHELL := /bin/bash

.PHONY: all clean

all: prepare

prepare:

	#npm install flaketill/htmlmaptool --save-dev
	npm install git://github.com/flaketill/htmlmaptool.git#feature\/gruntjs --save-dev

clean:
	rm -f *.log 
	rm -rf $(DIR_NODE)
	rm -rf $(DIR_BOWER)	