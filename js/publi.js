// variable "hal_res" should be loaded an should have the correct structure
hal_json = JSON.parse(hal_res);

function append_list(inList) {
  lContainer = document.getElementById('publi_list');

  lY = 0;
  sepTxt = ' -- '
  inList.forEach(el => {
    if (lY != el.producedDateY_i) {
      lY = el.producedDateY_i;
      lP = document.createElement('p');
      lP.classList.add("lead");
      lP.innerHTML = el.producedDateY_i;
      lContainer.appendChild(lP);

      lUn = document.createElement('ul');
      lContainer.appendChild(lUn);
    }


    lIt = document.createElement('li');

    if (el.hasOwnProperty('authFullName_s')) {
      lStr = document.createElement('strong');
      lStr.innerHTML = el.authFullName_s;
      lIt.appendChild(lStr);
    }

    if (el.hasOwnProperty('title_s')) {
      lSep = document.createTextNode(sepTxt);
      lIt.appendChild(lSep);

      lA = document.createElement('a');
      lA.href = el.uri_s;
      lA.innerHTML = el.title_s;
      lIt.appendChild(lA);
    }

    cjDef = null;
    if (el.hasOwnProperty('journalTitle_s')) {
      cjDef = el.journalTitle_s;
    }
    else if (el.hasOwnProperty('conferenceTitle_s')) {
      cjDef = el.conferenceTitle_s;
    }

    if (cjDef) {
      lSep = document.createTextNode(sepTxt);
      lIt.appendChild(lSep);

      txt = cjDef;

      if (el.hasOwnProperty('volume_s')) {
        txt += ", vol. " + el.volume_s;
      }

      if (el.hasOwnProperty('page_s')) {
        txt += ", pp. " + el.page_s;
      }

      lTxt = document.createTextNode(txt);
      lIt.appendChild(lTxt);
    }

    if (el.hasOwnProperty('seeAlso_s')) {
      lSep = document.createTextNode(sepTxt);
      lIt.appendChild(lSep);

      lA = document.createElement('a');
      lA.href = el.seeAlso_s;
      lA.innerHTML = "[CODE]";
      lIt.appendChild(lA);
      el.seeAlso_s;
    }

    lUn.appendChild(lIt);
  });
}

append_list(hal_json.response.docs);
