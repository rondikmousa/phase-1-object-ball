function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22, 
                    rebounds: 12,
                    assists: 12,
                    Steals: 3,
                    blocks: 1,
                    slamDunks: 1


                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12, 
                    rebounds: 12,
                    assists: 12, 
                    Steals: 12,
                    blocks: 12,
                    slamDunks: 7


                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17, 
                    rebounds: 19,
                    assists: 10, 
                    Steals: 3,
                    blocks: 1,
                    slamDunks: 15


                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26, 
                    rebounds: 12,
                    assists: 6, 
                    Steals: 3,
                    blocks: 8,
                    slamDunks: 5


                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19, 
                    rebounds: 2,
                    assists: 2, 
                    Steals: 4,
                    blocks: 11,
                    slamDunks: 1


                },
            }
        },
        
        Away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            player: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10, 
                    rebounds: 1,
                    assists: 1,
                    Steals: 2,
                    blocks: 7,
                    slamDunks: 2


                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12, 
                    rebounds: 4,
                    assists: 7, 
                    Steals: 7,
                    blocks: 15,
                    slamDunks: 10


                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24, 
                    rebounds: 12,
                    assists: 12, 
                    Steals: 4,
                    blocks: 4,
                    slamDunks: 5


                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33, 
                    rebounds: 3,
                    assists: 2, 
                    Steals: 1,
                    blocks: 1,
                    slamDunks: 0


                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6, 
                    rebounds: 12,
                    assists: 12, 
                    Steals: 22,
                    blocks: 5,
                    slamDunks: 12


                },
            }
        }  
            
        
    }
}



function numPointsScored(playerName) {
    if (gameObject().home.players[playerName]) {
        return gameObject().home.players[playerName].points
    } else {
        return gameObject.away.players[playerName].points
    }
}

function shoeSize(playerName) {
    if (gameObject().home.players[playerName]) {
        return gameObject().home.players[playerName].shoeSize
    } else {
        return gameObject.away.players[playerName].shoeSize
    }
}

function teamColors(teamName) {
    if (gameObject().home.teamName[teamName]) {
        return gameObject().home.teamName[teamName].teamColors
    } else {
        return gameObject.away.teamName[teamName].teamColors
    }   
}

function teamNames() {
    return [
        gameObject().home.teamName,
        gameObject.away.teamName
    ]
}


function playerNumbers(teamName) {
   const players = gameObject().home.teamName == teamName ? gameObject().home.players : gameObject().away.players
const numbers = []
for (
    let key in players 
) {
    numbers.push(players['number'])
}
return numbers
}

function playerStats(playerName) {
    if (gameObject().home.players[playerName]) {
        return gameObject().home.players[playerName]
    } else {
        return gameObject.away.players[playerName]
    }  
}

function bigShoeRebounds() {
    let homeRebounds = 0
    let currentShoeSize = 0
    for (
        let player in gameObject().home.players 
    ) {
       if (player.shoe>currentShoeSize
       ) {currentShoeSize=player.shoe
        homeRebounds=player.rebounds

       }}
       for (
        let player in gameObject().away.players 
    ) {
       if (player.shoe>currentShoeSize
       ) {currentShoeSize=player.shoe
        homeRebounds=player.rebounds

       } 
       return homeRebounds
    }
}