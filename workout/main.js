$(document).ready(initializeApp);

function initializeApp() {
    applyClickHandlers();
}
function applyClickHandlers() {
    $('.pages').on('click',switchPage);
    $('#create').on('click', createAccount);
    $('#enterButton').on('click',buttonPress);
    $('body').on('click','.xbutton',removeTodo);
    $('body').on('click','.todo',completeTask);

    $('#start').on('click',function(){
        var dispValue = $('#displaysec').val();
        var minVal = $('#displaymin').val();
        var hourVal = $('#displayhour').val();


        var x = setInterval(function() {

            $('#status').text(hourVal+'h' + minVal+'m' + dispValue+'s');

            if(dispValue<=0 && minVal<=0 && hourVal<=0){
                clearInterval(x);
                return;
            }
            if(minVal<=0 && dispValue<=0){
                hourVal-=1;
                minVal=0;
            }
            if(dispValue<=0){
                dispValue=60;
            }
            if(dispValue===60){
                minVal-=1;
                if(hourVal===0 && dispValue===60){
                    if(minVal===60){
                    }
                    if(minVal === 0 && hourVal===0 && dispValue===0){
                        minVal=60;
                    }

                }
            }
            if(hourVal>0 && minVal<0){
                minVal=59;
            }
            if(hourVal===0 && dispValue===60){
                minVal-=1;
                console.log('wow');
            }
            if(minVal===0 && hourVal>0){
                minVal=59;
            }
            if(dispValue<=1 && minVal<=0 && hourVal<=0){
                clearInterval(x);
            }

            dispValue -= 1;


            $('input[name=displaysec]').val(dispValue);
            $('input[name=displaymin]').val(minVal);
            $('input[name=displayhour]').val(hourVal);

            $('#reset').on('click',function(){
                $('input[name=displaysec]').val( 0);
                $('input[name=displaymin]').val( 0);
                $('input[name=displayhour]').val(0);
                clearInterval(x);
            });


        },1000);

    });
}

function switchPage(){
    var page = $(this).attr('id');
    switch(page){
        case "page1":
            $('#square,#classes').removeClass('hidden');
            $('#timeSquare,#accountCont,#timeSquare,#statsAccount,#welcomeBack').addClass('hidden');
            $('#page2,#page3,#page4').removeClass('act');
            $('#page1').addClass('act');
            $('.title').text('PROGRAM');
            break;

        case "page2":
            $('#page1,#page3,#page4').removeClass('act');
            $('#page2').addClass('act');
            $('.title').text('WORKOUTS');
            $('#square,#classes,#accountCont,#timeSquare,#welcomeBack').addClass('hidden');
            $('#statsAccount').removeClass('hidden');
            break;

        case "page3":
            $('#square,#classes,#accountCont,#statsAccount,#welcomeBack').addClass('hidden');
            $('#timeSquare').removeClass('hidden');
            $('#page1,#page2,#page4').removeClass('act');
            $('#page3').addClass('act');
            $('.title').text('TIMER');
            break;

        case "page4":
            $('#square,#classes,#timeSquare,#statsAccount').addClass('hidden');
            $('.title').text('ACCOUNT');
            $('#page1,#page2,#page3').removeClass('act');
            $('#page4').addClass('act');
            $('#accountCont').removeClass('hidden');
            console.log($('#welcomeBack').attr('class'));
            if($('#welcomeBack').attr('class') === 'squareContainer clicked hidden'){
                $('#welcomeBack').removeClass('hidden');
                $('#accountCont').addClass('hidden');
            }
            break;
    }
}

function createAccount(){
    var user = $('#name').val();

    $('#welcomeBack').addClass('clicked');
    $('#welcomeBack').removeClass('hidden');
    $('#accountCont').addClass('hidden');

    $('#welcomeText').append(user);
}


function buttonPress(){
    var text = $('#textInput').val();
    var $div = $("<div>", {"class": "todo neu",'data-aos':'fade-up'}).text(text);
    var $i = $('<i>', {'class':'fas fa-window-close xbutton specialClass'});
    $div.append($i);
    $('#todoContainer').append($div);
    $('#textInput').val('');
}

function removeTodo(){
    $(this).parent().remove();
}

function completeTask() {
    $(this).css('background-color','red').append('(completed)');

}