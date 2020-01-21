$(document).ready(function(){
    var id = null; 
    $("#btn-battle").on("click", () => {
        $('.progress-1').attr('value', 10 );
        $('.progress-2').attr('value', 10 );
        $('.player-1').css('border','none');
        $('.player-2').css('border','none');
        $('.player-name-1').text('@'+$('.input-1').val());
        $('.player-name-2').text('@'+$('.input-2').val());
        clearInterval(id);
        id = setInterval(fight, 300);
        // over = false;
        // while(!over){
        //     console.log(over);
        //     var r = Math.floor(Math.random() * 2) + 1;
        //     var val = parseInt($('.progress-'+r).attr('value')) + 1;
        //     if (val >= 10){
        //         $('.player-'+r).css('border','10px yellow solid');
        //         over = true;
        //     }
        //     $('.progress-'+r).attr('value', val );
        //     grow('.player-'+r);
        //     shrink('.player-' +((r+1)%2))
        //     setTimeout(null, 300);
        // }
    });

    function fight(){
        var r = Math.floor(Math.random() * 2) + 1;
        var other = ((r)%2)+1 ;
        var val = parseInt($('.progress-'+other).attr('value')) - 1;
        if (val <= 0){
            $('.player-'+r).css('border','10px yellow solid');
            clearInterval(id)
        }
        $('.progress-'+other).attr('value', val );
        grow('.player-'+r);
        shrink('.player-' + other);
    }

    function grow(elem){
        $(elem).css('height', '200px').css('width', '200px');
        setTimeout(normalize, 200);
    }
    function shrink(elem){
        $(elem).css('height', '75px').css('width', '75px');
        setTimeout(normalize, 200);
    }
    
    function normalize(){
        $('.player-1').css('height', '150px').css('width', '150px');
        $('.player-2').css('height', '150px').css('width', '150px');
    }

});

function allowDrop(ev) {
    ev.preventDefault();
    console.log('a');
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log('b');
}

function drop(ev) {
    ev.preventDefault();
    console.log(ev);
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
    $('.player-name-1').text('c');
    console.log('c');
}