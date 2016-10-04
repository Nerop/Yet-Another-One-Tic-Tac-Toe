$(function () {
    var step = true;
    var hasWon = false;
    var winner = '';
    var cell0 = $('#0').text();
    var cell1 = $('#1').text();
    var cell2 = $('#2').text();
    var cell3 = $('#3').text();
    var cell4 = $('#4').text();
    var cell5 = $('#5').text();
    var cell6 = $('#6').text();
    var cell7 = $('#7').text();
    var cell8 = $('#8').text();

    function updateVal() {
        cell0 = $('#0').text();
        cell1 = $('#1').text();
        cell2 = $('#2').text();
        cell3 = $('#3').text();
        cell4 = $('#4').text();
        cell5 = $('#5').text();
        cell6 = $('#6').text();
        cell7 = $('#7').text();
        cell8 = $('#8').text();
    }

    function showWinner(id, id1, id2) {
        hasWon = true;
        $("#" + id + "").css('background-color', 'green');
        $("#" + id1 + "").css('background-color', 'green');
        $("#" + id2 + "").css('background-color', 'green');
        console.log(id,id1,id2);
        $('.board').addClass('avoid-events');
        alert('Победил ' + winner);
    }

    function checkForWinner() {
        //horizontal
        if (cell0 !== '' && cell1 !== '' && cell2 !== '' && cell0 === cell1 && cell1 === cell2) {
            winner = cell0;
            showWinner(0, 1, 2);
        } else if (cell3 !== '' && cell4 !== '' && cell5 !== '' && cell3 === cell4 && cell4 === cell5) {
            winner = cell3;
            showWinner(3, 4, 5);
        } else if (cell6 !== '' && cell7 !== '' && cell8 !== '' && cell6 === cell7 && cell7 === cell8) {
            winner = cell6;
            showWinner(6, 7, 8);
        }
        //vertical
        else if (cell0 !== '' && cell3 !== '' && cell6 !== '' && cell0 === cell3 && cell3 === cell6) {
            winner = cell0;
            showWinner(0, 3, 6);
        } else if (cell1 !== '' && cell4 !== '' && cell7 !== '' && cell1 === cell4 && cell4 === cell7) {
            winner = cell1;
            showWinner(1, 4, 7);
        } else if (cell2 !== '' && cell5 !== '' && cell8 !== '' && cell2 === cell5 && cell5 === cell8) {
            winner = cell2;
            showWinner(2, 5, 8);
        }
        //diagonal
        else if (cell0 !== '' && cell4 !== '' && cell8 !== '' && cell0 === cell4 && cell4 === cell8) {
            winner = cell0;
            showWinner(0, 4, 8);
        } else if (cell2 !== '' && cell4 !== '' && cell6 !== '' && cell2 === cell4 && cell4 === cell6) {
            winner = cell2;
            showWinner(2, 4, 6);
        }
    }

    $('.cell').click(function (event) {
        //checkForWinner();
        updateVal();
        console.log(event.target);
        if (step) {
            $(this).html('X');
            $(this).addClass('cross');
            step = false;
            checkForWinner();
        } else if (!step) {
            $(this).html('O');
            $(this).addClass('circle');
            step = true;
            checkForWinner();
        }
        $(this).addClass('avoid-events');
    });
});
