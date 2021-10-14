
console.log("確認");

var ginouHTML = '<div id="ginou"><div id="ginouview"><p>取得技能</p> <ul id="gi"></ul></div></div>';
var cardHTML = '<div class="canvas_con"><canvas class="canv" id="stats" width="100" height="150"></canvas></div><div class="name_tag"><p id="name_view"><span>名前</span></p></div><div class="img"><img id="pre" height="300" src="photo/キャラでか.bmp"onchange="image(this);"alt="写真"></div><div class="status"> <p >HP <span id="HP"></span></p> <p >MP <span id="MP"></span></p> <p >SAN <span id="SAN"></span></p></div>'

var html2;

var json;
var flag = 0;

var STR = 0; var CON = 0; var POW = 0; var DEX = 0;
var APP = 0; var SIZ = 0; var INT = 0; var EDU = 0;
var HP = 0; var MP = 0; var SAN = 0;
var Name = "";
var img;

function btn_change(){
  if (flag == 0) {
    html2 = document.getElementById("card2");
    html2.innerHTML = cardHTML;
    if (img != undefined){
      setImage2();
    }
    if (json === null) {
      console.log("aa");
    }
    cardshow();
    flag = 1;
  } else {
    html2 = document.getElementById("card2");
    html2.innerHTML = ginouHTML;
    if (json === null) {
      console.log("aa");
    }
    view_ginou();
    flag = 0;
  }
}

function view_ginou(){
  let bsname = ['回避','キック','組み付き','こぶし','頭突き','投擲','マーシャルアーツ','拳銃','サブマシンガン','ショットガン','マシンガン','ライフル']
  let fsname = [ '応急手当','鍵開け','隠す','隠れる','聞き耳','忍び歩き','写真術','精神分析','追跡','登攀','図書館','目星'];

  let asname = ['運転 '+json[0].unten_bunya,'機械修理','重機械操作','乗馬','水泳','製作 '+json[0].seisaku_bunya,'操縦 '+json[0].main_souju_norimono,'跳躍','電気修理','ナビゲート','変装'];

  let csname = ['言いくるめ','信用','説得','値切り','母国語 '+json[0].mylang_name];

  let ksname =  ['医学','オカルト','化学','クトゥルフ神話','芸術 '+json[0].geijutu_bunya,'経理','考古学','コンピューター','心理学','人類学','生物学','地質学','電子工学','天文学','博物学','物理学','法律','薬学','歴史'];


  var html2 = document.getElementById("card2");
  html2.innerHTML = ginouHTML;
  var ginou = document.getElementById("gi");

  var id_num = -1;

  var syoki =
  json[0].TBAD.concat(json[0].TFAD,json[0].TAAD,json[0].TCAD,json[0].TKAD);
  console.log(syoki);
  var genzai =
  json[0].TBAP.concat(json[0].TFAP,json[0].TAAP,json[0].TCAP,json[0].TKAP);
  console.log(genzai);
  var gname =
  bsname.concat(fsname,asname,csname,ksname);
  console.log(gname);

  for (var i = 0; i < 58; i++) {
    if(i === 32){

    }
    if (syoki[i] < genzai[i]) {
      var new_element = document.createElement('li');
      id_num = genzai[i];
      new_element.textContent = gname[i] + " " + id_num;
      ginou.appendChild(new_element);

    }
  }

}

//ステータスの表示
function getjson(){
  var json_string = document.getElementById('json').value;


  var json_obj = '[' + json_string + ']';
  json = JSON.parse(json_obj);
  btn_change();
}

function cardshow(){
  var html2 = document.getElementById("card2");
  html2.innerHTML = cardHTML;
  var hp_string = document.getElementById('HP');
  var mp_string = document.getElementById('MP');
  var san_string = document.getElementById('SAN');
  var name_view = document.getElementById('name_view');

  STR = json[0].NP1;
  CON = json[0].NP2;
  POW = json[0].NP3;
  DEX = json[0].NP4;
  APP = json[0].NP5;
  SIZ = json[0].NP6;
  INT = json[0].NP7;
  EDU = json[0].NP8;
  HP = json[0].NP9;
  MP = json[0].NP10;
  SAN = json[0].NP11;
  Name = json[0].pc_name;
  console.log(Name);

  hp_string.innerHTML = HP;
  mp_string.innerHTML = MP;
  san_string.innerHTML = SAN;
  name_view.innerHTML = "<span>" + Name + "</span>";

  var ctx = document.getElementById("stats");
  var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels:["STR", "CON", "POW", "DEX", "APP", "SIZ", "INT", "EDU"],
          datasets:[{
            label: "",
            data: [STR, CON, POW, DEX, APP, SIZ, INT, EDU],
            backgroundColor: 'RGBA(140,230,168, 0.7)',
            borderColor: 'RGBA(168,140,230, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'RGB(230,168,140)'
          }]
        },
        options:{
          scale:{
            ticks:{
              suggestedMin: 0,
              suggestedMax: 10,
              stepSize: 5,
              callback: function(value, index, values){
                        return  value
            }
          }
        }
      }
    });
}

function setImage(obj) {
  img = obj;
  console.log("動作");
  var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('pre').src = fileReader.result;
	});
	fileReader.readAsDataURL(img.files[0]);
}

function setImage2() {
  console.log("動作");
  var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('pre').src = fileReader.result;
	});
	fileReader.readAsDataURL(img.files[0]);
}
