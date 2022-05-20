window.onload = function () {
                        var note = document.getElementById("memo");
                        var memo = window.localStorage.getItem("memo").split(',');
                        for (var value of memo) {
                            if (value == "") {
                                ;
                            } else {
                                console.log(Math.random);
                                note.insertAdjacentHTML('beforeend', `  <div class="card mt-2 bg-dark">
                                                                        <div class="card-body">
                                                                            <div class="row">
                                                                                <div class="col">
                                                                                    <div class="text-start text-white font-monospace">${value}</div>
                                                                                </div>
                                                                                <div class='col'>
                                                                                    <div class="text-end">
                                                                                        <input class="btn btn-sm btn-danger" type="button"  id=${generateUuid()} value="削除"  onclick="Remove_(this);">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>`)
                            }
                        }
                    }

function OnButtonClick() {
    var content = document.getElementById('send').value
    if (content == "") {
        alert('文字数が足りません');
    } else {
        content = escapeHtml(content)
        var mem = localStorage.getItem("memo");
        mem = [mem, content];
        window.localStorage.setItem("memo", mem);
        location.reload();
    }
}

function escapeHtml(str){
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#x27;');
    str = str.replace(/`/g, '&#x60;');
    return str;
}
function generateUuid() {
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case "x":
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case "y":
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
        }
    }
    return chars.join("");
}

function Remove_(element) {
    var Rmem = localStorage.getItem("memo").split(',');
    var Rlist = Rmem.indexOf(element.id);
    Rmem.splice(Rlist, 1)
    window.localStorage.setItem("memo", Rmem);
    location.reload();
}

