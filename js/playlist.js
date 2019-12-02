const request = require('request')

const codeUrl = "https://accounts.spotify.com/authorize?client_id=f3ba57facce840b0b65f67329f047281&response_type=code&redirect_uri=https%3A%2F%2Fwww.youtube.com%2F&scope=playlist-read-private%20playlist-modify-public%20playlist-modify-private"

$('#create-playlist').on('click', function(){
    request({url: codeUrl, json:true},function(err,res){
        console.log(res.body)
    })
})