var video = document.getElementById('spectro');
var video_src = document.getElementById('spectro_src');
var titre_spec = document.getElementById('spectro_title');

function play_fn (key) {
    video.pause();
    video.currentTime = 0;
    video.load();
    video.play();
}

var data = {
    'wolf': {"file": 'wolf.mp4', 'cat': 'animals', 'text': 'Loup'},
    'bee': {"file": 'bee.mp4', 'cat': 'animals', 'text': 'Abeille'},
    'dolphin': {"file": 'dolphin.mp4', 'cat': 'animals', 'text': 'Dauphin (x0.5)'},
    'coucou': {"file": 'coucou.mp4', 'cat': 'animals', 'text': 'Coucou'},
    'merle': {"file": 'merle.mp4', 'cat': 'animals', 'text': 'Merle'},
    'morse': {"file": 'morse.mp4', 'cat': 'animals', 'text': 'Morse'},
    'chat': {"file": 'chat.mp4', 'cat': 'animals', 'text': 'Chat'},
    //'vache': {"file": 'vache.mp4', 'cat': 'animals', 'text': 'Vache'},

    'accordeon': {"file": 'accordeon.mp4', 'cat': 'music', 'text': 'Accordeon'},
    'alto': {"file": 'alto.mp4', 'cat': 'music', 'text': 'Alto'},
    'bell': {"file": 'bell.mp4', 'cat': 'music', 'text': 'Cloche'},
    'cloche': {"file": 'cloche.mp4', 'cat': 'music', 'text': 'Cloches'},
    'castagnette': {"file": 'castagnette.mp4', 'cat': 'music', 'text': 'Castagnette'},
    'chant': {"file": 'chant.mp4', 'cat': 'music', 'text': 'Chant'},
    'chant2': {"file": 'chant2.mp4', 'cat': 'music', 'text': 'Chant 2'},
    //'clarinette': {"file": 'clarinette.mp4', 'cat': 'music', 'text': 'Clarinette'},
    'claves': {"file": 'claves.mp4', 'cat': 'music', 'text': 'Claves'},
    'voix': {"file": 'voix.mp4', 'cat': 'music', 'text': 'Voix'},
    'glockenspiel': {"file": 'glockenspiel.mp4', 'cat': 'music', 'text': 'Glockenspiel'},
    'guitar': {"file": 'guitar.mp4', 'cat': 'music', 'text': 'Guitare'},
    'guitare': {"file": 'guitare.mp4', 'cat': 'music', 'text': 'Guitare 2'},
    'piano': {"file": 'piano.mp4', 'cat': 'music', 'text': 'Piano'},
    //'cymbale': {"file": 'cymbale.mp4', 'cat': 'music', 'text': 'Cymbale'},
    'tuba': {"file": 'tuba.mp4', 'cat': 'music', 'text': 'Tuba'},

    'pure': {"file": 'note_pure.mp4', 'cat': 'misc', 'text': 'Note pure'},
    'modulation': {"file": 'modulation.mp4', 'cat': 'misc', 'text': 'Modulation'},
    'voix': {"file": 'voix.mp4', 'cat': 'misc', 'text': 'Voix'},
    //'f1': {"file": 'f1.mp4', 'cat': 'misc', 'text': 'Formule 1'},
    'dopplerf1': {"file": 'dopplerf1.mp4', 'cat': 'misc', 'text': 'Doppler formule 1'},
    'wind': {"file": 'wind.mp4', 'cat': 'misc', 'text': 'Vent'},
    'metiss': {"file": 'metiss_logo.mp4', 'cat': 'misc', 'text': 'METISS'},
    'ambulance': {"file": 'ambulance.mp4', 'cat': 'misc', 'text': 'Sirène ambulance'},
    'ambulance2': {"file": 'ambulance2.mp4', 'cat': 'misc', 'text': 'Sirènes'},
    'brosse_a_dents': {"file": 'brosse_a_dents.mp4', 'cat': 'misc', 'text': 'Brosse à dents'},
    'rire': {"file": 'rire.mp4', 'cat': 'misc', 'text': 'Rire'},
    'verre_casse': {"file": 'verre_casse.mp4', 'cat': 'misc', 'text': 'Verre cassé'},
    'verre_eau': {"file": 'verre_eau.mp4', 'cat': 'misc', 'text': 'Verre d\'eau'},
};

for (var key in data) {
    el_a = document.createElement("a");
    el_a.className = "dropdown-item";
    el_a.href = "#";
    el_a.id = key;
    el_a.innerText = data[key]['text']
    el_a.onclick = click_fn;

    el_li = document.createElement("li");
    el_li.appendChild(el_a);
    cat = data[key]['cat'];
    cat_ul = document.getElementById(cat);
    cat_ul.appendChild(el_li);
}

function select_spectro(key) {
    console.log(key);
    video_src.src = "./assets/video/" + data[key]['file'];
    titre_spec.innerText = data[key]['text'];
}

function click_fn() {
    select_spectro(this.id);
    play_fn();
}

document.getElementById('play_btn').onclick = play_fn;
select_spectro('wolf');
video.load();
