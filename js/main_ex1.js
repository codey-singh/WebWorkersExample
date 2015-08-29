var first = document.querySelector('#number');
var result = document.querySelector('.result');
var table = $('#result');
if (window.Worker) {

    var myWorker = new Worker('js/worker_ex1.js');

    first.onchange = function () {
        myWorker.postMessage({ "number": first.value });
        console.log("message sent from main JS");
    }
    myWorker.onmessage = function (e) {
        table.append('<tr><td>' + e.data.hash + '</td><td>' + e.data.result + '</td></tr>');
        result.textContent = "Count : "+Number(Number(e.data.hash) + 1);
        console.log("Data Recieved from worker");
    }
}
$('#clear').click(function () {
    table.html('<tr><td>#</td><td>Message</td></tr>');
    result.textContent = "Count : 0";
    first.value = '0';
})