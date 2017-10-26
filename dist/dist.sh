#!/usr/bin/env sh
# -*- coding: UTF-8 -*- 
# Copyright (C) 2017 Armando Ibarra
#  v0.0.1 alpha - 2017
# 

#----------------------------------------------------------------------
# Generate release
#
# Author: Ing. Armando Ibarra - armandoibarra1@gmail.com
# Email: armandoibarra1@gmail.com
# Date: 24/10/2017
# Purpose:
#    Performs creation of release javascript lib
#
#----------------------------------------------------------------------
# NOTES:    
#----------------------------------------------------------------------
# Test on Arch Linux x64 + SSD + AMD Ryzen 5 1600 Six-Core Processor + 16 GB DDR4
#
# Test your ssh config with:

# $ cd ~/projects/github/htmlmaptool
# $ git config user.name "htmlmaptool"
# $ git config user.email "armandoibarra1@gmail.com" 

# $ ssh -T git@github.com:htmlmaptool
# $ ssh -T git@bitbucket.org:semanticiu-requirejs
#
#----------------------------------------------------------------------

###############################################################################

# Licensed under the GNU GPL v3 - http://www.gnu.org/licenses/gpl-3.0.txt
# - or any later version.

# 
# A bash script installing/building all needed dependencies to lib

# @author: Ing. Armando Ibarra

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

###############################################################################

#variables

#autor and project data
# script for creating a zip and tarball

AUTHOR='Ing. Armando Ibarra <armandoibarra1@gmail.com>'
COPYRIGHT='Copyright (c) 2016, armandoibarra1@gmail.com'
LICENSE='GNU GPL Version 3'

PROYECT_NAME="htmlmaptool"
WEB_SITE="https://github.com/flaketill/$PROYECT_NAME/"
VERSION_SCRIPT="0.0.1 alpha"

#colors bash script
GREEN="\033[1;32m"
RESET="\033[0m"
WHITE="\033[1;37m"
BLUE="\033[1;34m"
RED="\033[1;31m"
YELLOW="\033[1;33m"

show_msg_white()
{
	#printf $LANG
	printf "$WHITE $1 $RESET"

}

show_msg_bg_blue_white()
{
	#printf $LANG
	printf '\E[37;44m'"\033[1m $1 \033[0m $RESET"

}

DISTDIR=""

# Mac weirdness
find . -name .DS_Store -exec rm {} \;

# Package it.
zip -r htmlmaptool-require-sample.zip htmlmaptool-require-sample/*