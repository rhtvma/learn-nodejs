var request = require('request');
const cheerio = require('cheerio');
var Promise = require('bluebird');

let getMatches = (req, res, next) => {
    //request('https://reqres.in/api/users', 
    request('https://www.cricbuzz.com/cricket-series/2697/icc-cricket-world-cup-2019/points-table',
        function (error, response, body) {
            const matchPoint = cheerio.load(body);
            const matchPointResult = matchPoint('.cb-srs-pnts tbody').children();
            var result = [];
            for(var i = 0; i <= 19; i++){
                if(matchPointResult[i]['children'].length == 9){
                    var subResult = {};
                    var tdData = matchPointResult[i]['children'];
                    //for get the tr of all td value
                    var teamName = tdData[0]['children'][0]['children'][0]['data'];
                    var match = tdData[1]['children'][0]['data'];
                    var won = tdData[2]['children'][0]['data'];
                    var lost = tdData[3]['children'][0]['data'];
                    var tied = tdData[4]['children'][0]['data'];
                    var nr = tdData[5]['children'][0]['data'];
                    var pts = tdData[6]['children'][0]['data'];
                    var nrr = tdData[7]['children'][0]['data'];

                    subResult = {
                        "teamName" :teamName,
                        "match" : match,
                        "won": won,
                        "lost": lost,
                        "tied": tied,
                        "nr": nr,
                        "pts": pts,
                        "nrr": nrr
                    }
                    result.push(subResult);
                }
            }
            //console.log(result);
            res.render('matchpoints', {result: result});
        }
    );
}

module.exports = {
    getMatches:getMatches 
}

//