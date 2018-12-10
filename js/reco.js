var listView = document.getElementById("list-view");
var ajax = new XMLHttpRequest;
ajax.open("get", "list.php", true);
ajax.send(null);
ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
        var data = JSON.parse(ajax.responseText);
        addText(data);
    }
}

function addText(data) {
    var str = "";
    data.forEach(function (index, item) {
        str += `
        <li>
        <a href="#" class="pro-link">
            <img src="${index.url}" alt="">
            <p class="title-reco clear">
                <i class="zyIcon"></i>
                ${index.content}
            </p>
            <p class="price "><i>¥</i>${index.price}</p>
            <p class="cxIcon">
                <span>大聚惠</span>
                <span>满599-200</span>
                <span>领券减300</span>
            </p>
        </a>
        <a href="#" class="same">找相似</a>
    </li>`
    });
    listView.innerHTML = str;
}