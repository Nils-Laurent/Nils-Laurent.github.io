var audio = document.getElementById('audio_id');

function play_audio () {
    audio.pause();
    audio.currentTime = 0;
    audio.load();
    audio.play();
}

var data = {
    'vache': {'img': 'vache.png', 'audio': "vache.mp3"},
    'clarinette': {'img': 'clarinette.png', 'audio': "clarinette.mp3"},
    'f1': {'img': 'f1.png', 'audio': "f1.mp3"},
    'cymbale': {'img': 'cymbale.png', 'audio': "cymbale.mp3"},
};

container = document.getElementById('img_container');

img_vec = [];

for (var key in data) {
    var value = data[key];
    img = document.createElement("img");
    //img.className = "card-img-top rounded-3 object-fit-cover";
    img.className = "rounded-3 object-fit-cover";
    img.id=key;
    img.height="265";
    img.role="button";
    img.onclick=click_fn;
    img.src="./assets/img/" + data[key]['img'];
    img.alt=key;

    img_vec.push(img);

    div = document.createElement("div");
    div.className = "col-3 mb-4";

    div.appendChild(img);
    container.appendChild(div);
}


function select_id(key) {
    console.log(key);
    audio.src="./assets/audio/" + data[key]['audio'];
}

function fn_set_noplay() {
    for (img_id in img_vec) {
        img_vec[img_id].classList.remove("img-play");
    }
}

function click_fn() {
    fn_set_noplay();
    this.classList.add("img-play");
    select_id(this.id);
    play_audio();
}

function ended_fn() {
    fn_set_noplay();
}

audio.onended = ended_fn;
