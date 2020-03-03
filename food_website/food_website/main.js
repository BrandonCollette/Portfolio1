$(document).ready(initializeApp);

function initializeApp() {

    $('#arrowRight').on('click',changeImageGallery);
    $('#arrowLeft').on('click',changeImageLeft);

    //variables
    var imageCounter=0;
    var displayCounter=0;

    //changes the images when clicking on the image gallery
    function changeImageGallery(){
        var galleryDisplay = $('#galleryContainer');
        displayCounter+=126;

        var myTimer = setInterval(function(){
            imageCounter+=2;
            console.log('image counter: ',imageCounter);
            galleryDisplay.css('right','0'+imageCounter+'vh');
            if(imageCounter===displayCounter){
                clearInterval(myTimer);
                if(displayCounter===756){
                    clearInterval(myTimer);
                    imageCounter=0;
                    displayCounter=0;
                }
            }

        },1);

        $('#arrowRight').unbind('click');
        setTimeout(function () {
            $('#arrowRight').bind('click',changeImageGallery);
        },240);
    }
    function changeImageLeft(){
        var galleryDisplay = $('#galleryContainer');
        if(imageCounter===0){
            displayCounter=756;
            imageCounter=756;
        }
        displayCounter-=126;
        console.log('display counter: ',displayCounter);
        var myTimer = setInterval(function(){
            if(imageCounter===0){
                clearInterval(myTimer);
                displayCounter=756;
                imageCounter=756;
            }
            imageCounter-=2;
            console.log('image counter: ',imageCounter);
            galleryDisplay.css('right','0'+imageCounter+'vh');
            if(imageCounter===displayCounter){
                clearInterval(myTimer);
            }

        },1);
        $('#arrowLeft').unbind('click');
        setTimeout(function () {
            $('#arrowLeft').bind('click',changeImageLeft);
        },240);
    }
}