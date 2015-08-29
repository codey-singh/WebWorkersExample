onmessage = function (e) {

for (var i = 0; i < 50;i++)
    postMessage({"hash":i,"result":String(Number(Number(e.data.number) * i))});
}