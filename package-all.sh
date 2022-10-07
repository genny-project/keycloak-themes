#!/bin/bash

# Clear the deployments directory
rm -rf deployments
mkdir deployments

# Enter themes and clear the temporary directory
cd themes
rm -rf tmpDir

# Count number of directories
NUM_DIRS="$(find . -mindepth 1 -maxdepth 1 -type d | wc -l | xargs)"
ITEM_NUM=0
# Iterate over all theme directories
for d in */ ; do
	d=${d%*/} 
	ITEM_NUM=$((ITEM_NUM+1))
	echo "packaging jar (${ITEM_NUM}/${NUM_DIRS}) - ${d}"

	# Create temporary directory for jarring and copy theme contents
	mkdir -p tmpDir/META-INF
	mkdir tmpDir/theme
	cp -r $d tmpDir/theme
	cd $d

	TOTAL_DIRS="$(find . -mindepth 1 -maxdepth 1 -type d | wc -l | xargs)"
	COUNT=1

	# create the keycloak-themes.json file used for jarring
	echo "{" >> ../tmpDir/META-INF/keycloak-themes.json
	echo "	\"themes\": [{" >> ../tmpDir/META-INF/keycloak-themes.json
	echo "		\"name\" : \"${d}\"," >> ../tmpDir/META-INF/keycloak-themes.json
        echo "		\"types\": [ " >> ../tmpDir/META-INF/keycloak-themes.json
	for t in */ ; do
		t=${t%*/}
	        if [[ "$COUNT" -eq "$TOTAL_DIRS" ]]
	        then
		        echo "			\"$t\"" >> ../tmpDir/META-INF/keycloak-themes.json
	        else
		        echo "			\"$t\"," >> ../tmpDir/META-INF/keycloak-themes.json
	        fi
	        COUNT=$((COUNT+1))
	done
	echo "		]" >> ../tmpDir/META-INF/keycloak-themes.json
	echo "	}]" >> ../tmpDir/META-INF/keycloak-themes.json
	echo "}" >> ../tmpDir/META-INF/keycloak-themes.json
	cd ../tmpDir

	# create the jar file and copy to deployments dir
        rm ${d}.jar 2> /dev/null
	jar cf $d.jar .
	mv ${d}.jar ../../deployments
	cd ..

	# clean up
	rm -rf tmpDir
done 
cd ..
