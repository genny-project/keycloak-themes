#!/bin/bash

# Clear the deployments directory
rm -rf deployments
mkdir deployments

# Enter themes and clear the temporary directory
cd themes
rm -rf tmpDir

echo "packaging jar - ${1}"

# Create temporary directory for jarring and copy theme contents
mkdir -p tmpDir/META-INF
mkdir tmpDir/theme
cp -r $1 tmpDir/theme
cd $1

# create the keycloak-themes.json file used for jarring
echo "{" >> ../tmpDir/META-INF/keycloak-themes.json
echo "	\"themes\": [{" >> ../tmpDir/META-INF/keycloak-themes.json
echo "		\"name\" : \"${1}\"," >> ../tmpDir/META-INF/keycloak-themes.json
echo "		\"types\": [ " >> ../tmpDir/META-INF/keycloak-themes.json
for t in */ ; do
	t=${t%*/}
	if [ $t == "welcome" ]
	then
		echo "			\"$t\"" >> ../tmpDir/META-INF/keycloak-themes.json
	else
		echo "			\"$t\"," >> ../tmpDir/META-INF/keycloak-themes.json
	fi
done
echo "		]" >> ../tmpDir/META-INF/keycloak-themes.json
echo "	}]" >> ../tmpDir/META-INF/keycloak-themes.json
echo "}" >> ../tmpDir/META-INF/keycloak-themes.json
cd ../tmpDir

# create the jar file and copy to deployments dir
rm ${1}.jar 2> /dev/null
jar cf ${1}.jar .
mv ${1}.jar ../../deployments
cd ..

# clean up
rm -rf tmpDir
cd ..
