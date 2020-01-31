
var info = null;
 let requestURL = 'https://gist.githubusercontent.com/alecklem/85b74953fca16b8c9204b05f58699956/raw/6d2d4f604bc31f0b77f26eb4312946a583954a5e/info.json';
 let request = new XMLHttpRequest();
 request.open('GET', requestURL);
 request.onload = function() {
    info = request.response;
  }
 
 request.responseType = 'json';
request.send();


function record(teamOne, teamTwo, info){
    // Once in the function, we will call on info from our information file and store them as variables
    teamOneInfo = null;
    teamTwoInfo = null;
    for(var i = 0; i < info.length; i++){
        if(teamOne == info[i].Team){
            teamOneInfo = i;
        }
    }
    teamOne = info[teamOneInfo];
    for(var i = 0; i < info.length; i++){
        if(teamTwo == info[i].Team){
            teamTwoInfo = i;
        }
    }
    teamTwo = info[teamTwoInfo];

    var teamOneWins = teamOne.W;
    var teamOneLosses = teamOne.L;
    var teamTwoWins = teamTwo.W;
    var teamTwoLosses = teamTwo.L;
    var teamOneGames = teamOneWins + teamOneLosses;
    var teamTwoGames = teamTwoWins + teamTwoLosses;
    var teamOneRecord = "" + teamOneWins + "-" + teamOneLosses;
    var teamTwoRecord = "" + teamTwoWins + "-" + teamTwoLosses;


    // We will then have a series of if and else statements to determine who the favorite is by wins and losses.
    if(teamOneWins > teamTwoWins && teamOneLosses < teamTwoLosses){
        return("" + teamOne.Team + " has the better record, with more wins and less losses. Their record is " + teamOneRecord +  
        " compared to the " + teamTwo.Team + " record of " + teamTwoRecord);
    } else if(teamOneWins > teamTwoWins && teamOneLosses >= teamTwoLosses + "."){
        return("" + teamOne.Team + " has more wins, with has played more games, and has the same amount or more losses. Their record is " + teamOneRecord +  
        " compared to the " + teamTwo.Team + " record of " + teamTwoRecord);
    } else if(teamTwoWins > teamOneWins && teamTwoLosses < teamOneLosses + "."){
        return("" + teamTwo.Team + " has the better record, with more wins and less losses. Their record is " + teamTwoRecord +  
        " compared to the " + teamOne.Team + " record of " + teamOneRecord + ".");
    } else if(teamTwoWins > teamOneWins && teamTwoLosses >= teamOneLosses){
        return("" + teamTwo.Team + " has more wins, with has played more games, and has the same amount or more losses. Their record is " + teamTwoRecord +  
        " compared to the " + teamOne.Team + " record of " + teamOneRecord + ".");
    }

}

function homeTeam(){
    var teamAtHome = null;
    var teamAtAway = null;
    teamAtHome = xobj[0].Home;
    teamAtAway = xobj[0].Visitor;
    return("The home team is the " + teamAtHome + " and the away team is the " + teamAtAway + ".");
}