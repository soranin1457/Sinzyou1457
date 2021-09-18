
console.log("確認");

var STR = 0;
var CON = 0;
var POW = 0;
var DEX = 0;
var APP = 0;
var SIZ = 0;
var INT = 0;
var EDU = 0;

function getjson(){
  var json_string = document.getElementById('json').value;
  var json_obj = '[' + json_string + ']';
  var json = JSON.parse(json_obj);
  STR = json[0].NP1;
  CON = json[0].NP2;
  POW = json[0].NP3;
  DEX = json[0].NP4;
  APP = json[0].NP5;
  SIZ = json[0].NP6;
  INT = json[0].NP7;
  EDU = json[0].NP8;

  var ctx = document.getElementById("stats");
  var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels:["STR", "CON", "POW", "DEX", "APP", "SIZ", "INT", "EDU"],
          datasets:[{
            label: "",
            data: [STR, CON, POW, DEX, APP, SIZ, INT, EDU],
            backgroundColor: 'RGBA(115,255,25, 0.5)',
            borderColor: 'RGBA(115,255,25, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'RGB(46,106,177)'
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
    myRadarChart.fillRect(20,40,50,100);
}
