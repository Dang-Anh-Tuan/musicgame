let beatSong = document.getElementById("beat-song");
let correctBeat = document.getElementById("beat-correct");
let wrongBeat = document.getElementById("beat-wrong");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let checkBtn = document.getElementById("checkBtn");
let lyricSong = document.getElementsByClassName("lyric-line");
let isBeatEnd = true;
let inputAnswer = document.getElementById("input-answer");
let beatBackground = document.getElementById("beat-bg")


resetCheckAnswer();

function playBacgroundBeat(){
  beatBackground.play()
}

function stopBacgroundBeat(){
  beatBackground.pause()
  beatBackground.currentTime = 0
}

function playBeat() {
  stopBacgroundBeat()
  beatSong.play();
  isBeatEnd = false;
}

function stopBeat() {
  isBeatEnd = true;
  beatSong.pause();
  beatSong.currentTime = 0;
  setWhiteText();
  playBacgroundBeat()
}

function setWhiteText() {
  for (let i = 0; i < lyricSong.length; i++) {
    let lineLyric = lyricSong[i];
    lineLyric.style.color = "#fff";
  }
}

function setYellowTex(index) {
  let lineLyric = lyricSong[index];
  lineLyric.style.color = "Yellow";
}

function checkBeatEnd() {
  if (beatSong.currentTime === 0) {
    isBeatEnd = true;
  }
}

beatSong.addEventListener(
  "timeupdate",
  function () {
    if (beatSong.title === "sautatca") {
      karaokeTextSauTatCa();
    } else if (beatSong.title === "lamtinhnguyenhetminh") {
      karaokeTextLamTinhNguyenHetMinh();
    } else if (beatSong.title === "khatvongtuoitre") {
      karaokeTextKhatVongTuoiTre();
    } else if (beatSong.title === "sechienthang") {
      karaokeTextSeChienThang()
    } else if (beatSong.title === "nhungayhomqua") {
      karaokeTextNhuNgayHomQua()
    }  else if (beatSong.title === "dongthoigian") {
      karaokeTextDongThoiGian()
    } else if (beatSong.title === "conmuatinhyeu") {
      karaokeTextConMuaTinhYeu()
    } else if (beatSong.title === "anhnangcuaanh") {
      karaokeTextAnhNangCuaAnh()
    } else if (beatSong.title === "noinaycoanh") {
      karaokeTextNoiNayCoAnh()
    } else if (beatSong.title === "honcayeu") {
      karaokeTextHonCaYeu()
    } else if (beatSong.title === "phiasaumotcogai") {
      karaokeTextPhiaSauMotCoGai()
    } else if (beatSong.title === "ongbaanh") {
      karaokeTextOngBaAnh()
    } else if (beatSong.title === "dungnguoidungthoidiem") {
      karaokeTextDungNguoiDungThoiDiem()
    } else if (beatSong.title === "lalung") {
      karaokeTextLaLung()
    } else if (beatSong.title === "danhchoem") {
      karaokeTextDanhChoEm()
    } else if (beatSong.title === "chithethoi") {
      karaokeTextChiTheThoi()
    }
    else if (beatSong.title === "vnnhungchuyendi") {
      karaokeTextVNNhungChuyendi()
    } else if (beatSong.title === "didetrove") {
      karaokeTextDiDeTroVe()
    } else if (beatSong.title === "traitimtinhnguyen") {
      karaokeTextTraiTimTinhNguyen()
    } else if (beatSong.title === "vitoiconsong") {
      karaokeTextViToiConSong()
    }
    
  },
  false
);

function karaokeText(timeStart, timesEnd, indexLine) {
  if (beatSong.currentTime >= timeStart && beatSong.currentTime <= timesEnd) {
    setWhiteText();
    setYellowTex(indexLine);
  }

  if (beatSong.paused) {
    setWhiteText();
  }
}

function checkAnswer() {
  if (!beatSong.paused) {
    stopBeat();
  }
  let userAnswer = inputAnswer.value.trim().toLowerCase();
  let correctAnswer = inputAnswer.title;
  inputAnswer.value = correctAnswer;
  if (userAnswer === correctAnswer) {
    inputAnswer.style.color = "#4cae4c";
    inputAnswer.style.textShadow = "0 0 1px #5cb85c";
    correctBeat.play();
  } else {
    inputAnswer.style.color = "#d43f3a";
    inputAnswer.style.textShadow = "0 0 1px #d9534f";
    wrongBeat.play();
  }
}

function resetCheckAnswer() {
  inputAnswer.style.color = "#fff";
}

// Love song 

function karaokeTextSauTatCa() {
  karaokeText(8, 13, 0);
  karaokeText(14, 20, 1);
  karaokeText(21, 25, 2);
  karaokeText(26, 32, 3);
  karaokeText(30, 35, 4);
}

function karaokeTextConMuaTinhYeu() {
  karaokeText(2, 5, 0);
  karaokeText(6, 9, 1);
  karaokeText(10, 14, 2);
  karaokeText(15, 20, 3);
}

function karaokeTextAnhNangCuaAnh() {
  karaokeText(6, 9, 0);
  karaokeText(10, 16, 1);
  karaokeText(17, 23, 2);
  karaokeText(24, 29, 3);
}

function karaokeTextNoiNayCoAnh() {
  karaokeText(5, 10, 0);
  karaokeText(11, 16, 1);
  karaokeText(17, 23, 2);
  karaokeText(24, 29, 3);
}

function karaokeTextHonCaYeu() {
  karaokeText(6, 12, 0);
  karaokeText(13, 16, 1);
  karaokeText(17, 20, 2);
  karaokeText(21, 27, 3);
  karaokeText(28, 31, 4);
  karaokeText(32, 34, 5);

}


function karaokeTextPhiaSauMotCoGai(){
  karaokeText(3, 11, 0);
  karaokeText(12, 23, 1);
  karaokeText(24, 27, 2);
  karaokeText(28, 33, 3);
  karaokeText(34, 38, 4);
}

function karaokeTextOngBaAnh(){
  karaokeText(5, 9, 0);
  karaokeText(10, 13, 1);
  karaokeText(15, 19, 2);
  karaokeText(19.5, 23, 3);
  karaokeText(24, 28, 4);
  karaokeText(28.5, 32, 5);
  karaokeText(33, 36, 6);
}

function karaokeTextDungNguoiDungThoiDiem(){
  karaokeText(5, 10, 0);
  karaokeText(10.5, 15, 1);
  karaokeText(16, 22, 2);
  karaokeText(22.5, 27, 3);
}

function karaokeTextLaLung(){
  karaokeText(7, 15, 0);
  karaokeText(16, 21, 1);
  karaokeText(22, 30, 2);
  karaokeText(31, 35, 3);
}

function karaokeTextDanhChoEm(){
  karaokeText(6, 9, 0);
  karaokeText(10, 13, 1);
  karaokeText(14, 20, 2);
  karaokeText(21, 24, 3);
  karaokeText(25, 30, 4);
  karaokeText(31, 36, 5);


}

// Youth Song

function karaokeTextLamTinhNguyenHetMinh() {
  karaokeText(6, 10, 0);
  karaokeText(10, 15, 1);
  karaokeText(15, 20, 2);
  karaokeText(21, 25, 3);
}

function karaokeTextKhatVongTuoiTre() {
  karaokeText(13, 16, 0);
  karaokeText(17, 21, 1);
  karaokeText(22, 26, 2);
  karaokeText(26, 30, 3);
  karaokeText(31, 35, 4);
}

function karaokeTextSeChienThang() {
  karaokeText(4.5, 10, 0);
  karaokeText(11, 16, 1);
  karaokeText(17, 23, 2);
  karaokeText(24, 29, 3);
}

function karaokeTextNhuNgayHomQua() {
  karaokeText(4, 8, 0);
  karaokeText(9, 12, 1);
  karaokeText(13, 17, 2);
  karaokeText(18, 21, 3);
  karaokeText(22, 25, 4);

}

function karaokeTextDongThoiGian() {
  karaokeText(4, 11, 0);
  karaokeText(12, 16, 1);
  karaokeText(17, 20, 2);
  karaokeText(21, 29, 3);
  karaokeText(30, 35, 4);

}

function karaokeTextChiTheThoi() {
  karaokeText(12, 15, 0);
  karaokeText(16, 20, 1);
  karaokeText(20.5, 23.5, 2);
  karaokeText(24, 27, 3);
  karaokeText(28, 33, 4);

}

function karaokeTextVNNhungChuyendi() {
  karaokeText(5, 9, 0);
  karaokeText(10, 14.5, 1);
  karaokeText(15, 20, 2);
  karaokeText(20, 26, 3);
}


function karaokeTextDiDeTroVe() {
  karaokeText(2, 8, 0);
  karaokeText(9, 11, 1);
  karaokeText(12, 15, 2);
  karaokeText(17, 19, 3);
  karaokeText(19, 26, 4);
}

function karaokeTextTraiTimTinhNguyen() {
  karaokeText(8, 15, 0);
  karaokeText(16, 24, 1);
  karaokeText(25, 33, 2);
  karaokeText(34, 39, 3);
}

function karaokeTextViToiConSong() {
  karaokeText(1, 7, 0);
  karaokeText(8, 12, 1);
  karaokeText(15, 18, 2);
  karaokeText(19, 28, 3);
  karaokeText(29, 40, 4);
}


