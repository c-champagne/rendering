// CSS isn't completely finished, but the main components are there.
function renderAlbums(albums) {  //this is the function that iterates over the data set, which is then saved into this variable and this renders the artist name and CONTAINER for the artist "block"
    var albumHTMLArray = [];
    for (var i =0; i < albums.length; i++) {
        albumHTMLArray.push(renderSingleArtist(albums[i]));
    }

    return `
    <div id="whatAreYou"> ${albumHTMLArray.join("")}</div>
    `
}

function renderSingleArtist(album) {  //this renders the albums of the artist
    var albumArray = []; //create album array
    albumArray = album.albums.map(function (info) { //this "holds" the album data and formatting from the function directly below.  The return joins it as a single string.
        return renderAlbumInfo(info);
    })

    return `
        <div id="albumsContainer"style="background-color: #fafafa; display: flex; flex-direction: column;">
        <h1 style="text-transform: uppercase;">${album.artist} <hr/></h1>
        ${albumArray.join("")}</div>
    `
}

function renderAlbumInfo(album) { // this renders the album title, cover art link, and the array that holds the song data
    var songsHtmlArray = []; //this is the array that holds the song data.
    songsHtmlArray = album.songs.map(function(song) {
        return renderAlbumTracks(song);
    })

    return `
        <div id="albumTitle">${album.title}</div>
        <div id="albumCover"><img style="width:50px; height:50px;" src="${album.albumCover}"/></div>
        <div id="trackList">${songsHtmlArray.join("")}</div>
    `
}

function renderAlbumTracks(songs) {  //this renders each song on its own line
    return `
    <hr/><div id ="trackLine" style="display:flex; flex-direction: row; justify-content: space-between; padding: 10px">${songs.title}<div class="songLength">${songs.length}</div></div>
    `
}



function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [{
            artist: "Creed",
            albums: [{
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}


 // First attempt below, discarded to practice what we learned in class
/*    //function drawBandBlock(band) {
        return `
        <div style="background-color: lightgray; display: flex; flex-direction: column;">
            <h1 style="text-transform: uppercase;">${band.artist}<hr/></h1>
            <div class="album" style="display:flex; flex-direction:row;">
                <img style="width:50px; height:50px;" src="${band.albums[0].albumCover}"/><h3>${band.albums[0].title} &#11208</h3>
            </div>
            <div class="trackList">${getTracks(band)}
            <!--${JSON.stringify(band.albums[0].songs)}
                
                <ul>
                    <li>Test 1</li>
                    <li>Test 2</li>
                    <li>Test 3</li>
                </ul>-->
            </div>
        </div>
        `
    }
    return `
        ${albums.map(drawBandBlock).join("")}
    ` */

    