$(document).ready(initializeApp);

function initializeApp() {

    changeBackgroundImage();
    $('.imageTable').on('click',selectProduct);

    var imageNumber = 1;

    // the main background image keeps changing
    function changeBackgroundImage(){
        setInterval(function () {
            imageNumber+=1;
            switch (imageNumber) {
                case 1:
                    $('#back4').fadeOut(3000);
                    $('#back1').fadeIn(3000);
                    break;
                case 2:
                    $('#back1').fadeOut(3000);
                    $('#back2').fadeIn(3000);
                    break;
                case 3:
                    $('#back2').fadeOut(3000);
                    $('#back3').fadeIn(3000);
                    break;
                case 4:
                    $('#back3').fadeOut(3000);
                    $('#back4').fadeIn(3000);
                    break;
                case 5:
                    imageNumber=0;
            }
            console.log(imageNumber);



        }, 6000);
    }

    // controls what page you go to when clicking on an image of a product.
    function selectProduct(){
        var clickedImage = $(this).attr('src');
        console.log("this is the id of what you clicked: ", clickedImage);
        $('#biggerImage').attr('src',clickedImage);
    }


}
