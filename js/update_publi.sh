#!/bin/bash -x
#
# On windows git bash, add wget (e.g. https://gist.github.com/evanwill/0207876c3243bbb6863e65ec5dc3f058)

req=""

build_request () {
  req="https://api.archives-ouvertes.fr/search/?";
  req="${req}q=authIdHal_i:753304";
  req="${req}&fl=authFullName_s";
  req="${req},title_s";
  req="${req},uri_s";
  req="${req},journalTitle_s,conferenceTitle_s";
  req="${req},volume_s,page_s";
  req="${req},producedDateY_i";
  req="${req},seeAlso_s";
  req="${req}&sort=producedDate_tdate%20desc";
  req="${req}&wt=json";
}

build_request

data_file="./data_publi.json"

wget "${req}" -O ${data_file}

load_file="./load_publi.js"

echo `sed -e 's/^ *//' < ${data_file} | tr -d '\n'` > "${data_file}"

echo -n "hal_res = '" > "${load_file}"
head -c -1 -q "${data_file}" >> "${load_file}"
echo "'" >> "${load_file}"
