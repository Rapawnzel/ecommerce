function httpGet(theUrl) {
    let miPromesa = new Promise((resolve, reject) => {                       
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            resolve(xmlHttp.responseText);
        } else {}}
        xmlHttp.open("GET", theUrl, false); 
        xmlHttp.send(null);
})
​
    return miPromesa;
}