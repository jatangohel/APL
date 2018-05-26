let teamAPIResponse;

function createTeamInFoElement(teamAPIResponse) {
    for (let i = 0; i < teamAPIResponse.length; i++) {
        let team_name = teamAPIResponse[i].teamName;
        let captain_name = teamAPIResponse[i].captainFName + " " + teamAPIResponse[i].captainLName;
        let vice_captain_name = teamAPIResponse[i].vcaptainFName + " " + teamAPIResponse[i].vcaptainLName;
        let playersList = teamAPIResponse[i].players;
        let balance = teamAPIResponse.balance;
        let htmlString =
            '<div class="col-xs-3 col-md-3">\n' +
            '<img src="img/Team/Downtown Thunder.jpg" width="100px">\n' +
            '<h5 align="center">' + team_name + '</h5>\n' +
            '<table class="table table-striped table-dark">\n' +
            '<thead>\n' +
            '<tr>\n' +
            '<th scope="col" id="team_captain_row" class="captain">' + captain_name + '(C)</th>\n' +
            '</tr>\n' +
            '</thead>\n' +
            '<tbody>\n' +
            '<tr>\n' +
            '<th scope="row" id="team_player_' + vice_captain_name + '">' + vice_captain_name + '(VC)</th>\n' +
            '</tr>\n';
        for (let j = 0; j < playersList.length; j++) {
            let playershtmlString =
                '<tr>\n' +
                '<th scope="row" id="team_player_' + playersList[j].playerFName + '_' + playersList[j].playerLName + '">\ ' +
                '' + playersList[j].playerFName + ' ' + playersList[j].playerLName + '(' + playersList[j].playerPrice + ')</th>\n' +
                '</tr>\n';
            if (playersList[j].playerPrice === 100) {
                $('#team_player_' + playersList[j].playerFName + '_' + playersList[j].playerLName + '').addClass("100-dollar-club-player")
            }
            htmlString = htmlString + playershtmlString;
        }

        let balacehtml =
            '<tr>\n' +
            '<th scope="row" id="team_balance_'+ team_name +'" style="background-color:black!important;" font-color="white">CAD '+ balance +'</th>\n' +
            '</tr>\n' +
            '</tbody>\n' +
            '</table>\n' +
            ' </div>';

        htmlString = htmlString + balacehtml;
        console.log(htmlString);
        if (i <= 3) {
            //do nothing
        }
        else {
            //do nothing
        }


    }

}

function displayTeamInfo() {
    $.ajax({
        url: "http://cloud-env.m33mn2puip.us-east-2.elasticbeanstalk.com/webapi/teams/getTeams",
        dataType: "json",
        crossDomain: true,
        type: 'GET',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            teamAPIResponse = data;
            console.log('called made');
            createTeamInFoElement(teamAPIResponse);
        },
        error: function (errData) {
            console.log(errData);
            alert('error');
        }
    });
}

$(document).ready(function () {

    setTimeout(displayTeamInfo, 5000);
});
/*
function main() {

    (function () {
        'use strict';

        let teamAPIResponse;

        // Portfolio isotope filter
        $(window).load(function () {

            $.ajax({
                url: "http://cloud-env.m33mn2puip.us-east-2.elasticbeanstalk.com/webapi/teams/getTeams",
                dataType: "json",
                crossDomain: true,
                type: 'GET',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function (data) {
                    teamAPIResponse = data;


                },
                error: function (errData) {
                    console.log(errData);
                    alert('error');
                }
            });
            /!* $.get( "http://cloud-env.m33mn2puip.us-east-2.elasticbeanstalk.com/webapi/teams/getTeams", function( data ) {
                console.log(data);
             });*!/

        });

    }());


}

main();*/
