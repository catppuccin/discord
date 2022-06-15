#!/bin/bash

themes=( "Latte" "Frappe" "Macchiato" "Mocha" )

for theme in "${themes[@]}" 
do
	(
        # Set variables
        echo "theme='$theme'";
        echo "classicLinks=0";
        echo "pancake=0";
        echo "usefont=0";
        echo "forceColor=0";
        cat ./discord.user.css
    ) | stylus --compress > ./out/discord.$theme.css
done