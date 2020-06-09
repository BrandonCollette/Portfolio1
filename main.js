$(document).ready(initializeApp);

function initializeApp() {

    movePicLeft();
    movePicRight();


    var imageCounter=-105;
    var imageRight=0;

    function movePicLeft(){
        var myTimer = setInterval(function(){
            imageCounter+=0.05;
            $('#topThree').css('left',imageCounter+'%');
            console.log('imageCounter: ',imageCounter);
            if(imageCounter>0){
                imageCounter=-105;
            }
        },10);
    }
    function movePicRight(){
        var myTimer = setInterval(function(){
            imageRight-=0.05;
            $('#bottomThree').css('left',imageRight+'%');
            console.log('imageRight: ',imageRight);
            if(imageRight<-105){
                imageRight=0;
            }
        },10);
    }

}