$(document).ready(initializeApp);

function initializeApp() {
    console.log('Initializing App...');
    shuffleCards();
    $('.cardbackimage').on('click', handleCardClick);
    var firstCardClicked = null;
    var secondCardClicked = null;
    var matches = 0;

    var firstImg;
    var secondImg;

    var firsthiddencard;
    var secondhiddencard;

    var max_matches = 9;

    var attempts = 0;
    var games_played = 0;

    function handleCardClick(event) {
        var jqueryObject = $(event.currentTarget);
        jqueryObject.addClass('hidden');

        if (firstCardClicked === null) {
            firstCardClicked = jqueryObject.next();
            console.log('first card clicked: ',firstCardClicked);
            firstImg = $(firstCardClicked).children('img').attr('src');
            console.log('first card clicked: ', firstImg);
            firsthiddencard = jqueryObject;
        } else {
            secondCardClicked = jqueryObject.next();
            secondImg = $(secondCardClicked).children('img').attr('src');
            secondhiddencard = jqueryObject;
            attempts += 1;
            console.log('attempts: ', attempts);

            if (firstImg === secondImg) {
                matches += 1;
                displayStats();
                console.log('cards match!  matches: ', matches);
                if (matches === max_matches) {
                    $('.modal').css('display', 'block');
                    var modal = document.getElementById("myModal");
                    var modalbutton = document.getElementById("mbutton");
                    window.onclick = function (event) {
                        if (event.target === modal || event.target === modalbutton) {
                            modal.style.display = 'none';
                            resetStats();
                            shuffleCards();
                        }
                    };


                }
            } else if (firstImg !== secondImg) {
                setTimeout(function () {
                    firsthiddencard.removeClass('hidden');
                }, 500);
                displayStats();


                setTimeout(function () {
                    secondhiddencard.removeClass('hidden');
                }, 500);
            }


            firstCardClicked = null;
            secondCardClicked = null;

        }

    }

    function displayStats() {
        var accuracy = 0;

        $('.gamesplayed').text(games_played);
        $('.attempts').text(attempts);
        $('.accuracy').text(Math.floor(calculateAccuracy()) + '%');

        function calculateAccuracy() {
            accuracy = (matches / attempts) * 100;
            return accuracy;
        }
    }

    function resetStats() {
        matches = 0;
        attempts = null;
        games_played += 1;
        displayStats();
        $('.cardbackimage').removeClass('hidden');
    }

    function shuffleCards(){
        var randomNumber = Math.floor(Math.random()*19);
        var shuffleNumber=1;
        for(shuffleNumber;shuffleNumber<19;shuffleNumber++){
            console.log('shuffle number: ',shuffleNumber);
            if(randomNumber===shuffleNumber){
                randomNumber=Math.floor(Math.random()*19);
            }
            var shuffleNumberSrc = $('#'+shuffleNumber+' img').attr('src');
            var randomNumberSrc = $('#'+randomNumber+' img').attr('src');
            $('#'+shuffleNumber+' img').attr('src',randomNumberSrc);
            $('#'+randomNumber+' img').attr('src',shuffleNumberSrc);
        }
    }
}

