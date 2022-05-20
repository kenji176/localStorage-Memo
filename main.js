window.onload = function () {
                        var note = document.getElementById("memo");
                        var memo = window.localStorage.getItem("memo").split(',');
                        for (var value of memo) {
                            if (value == "") {
                                ;
                            } else {
                                note.insertAdjacentHTML('beforeend', `  <div class="card mt-2 bg-dark">
                                                                        <div class="card-body">
                                                                            <div class="row">
                                                                                <div class="col">
                                                                                    <div class="text-start text-white">${value}</div>
                                                                                </div>
                                                                                <div class='col'>
                                                                                    <div class="text-end">
                                                                                        <input class="btn btn-sm btn-danger" type="button"  id=${value} value="削除"  onclick="Remove_(this);">
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
        var mem = localStorage.getItem("memo");
        mem = [mem, content];
        window.localStorage.setItem("memo", mem);
        location.reload();
    }
}

function Remove_(element) {
    var Rmem = localStorage.getItem("memo").split(',');
    var Rlist = Rmem.indexOf(element.id);
    Rmem.splice(Rlist, 1)
    window.localStorage.setItem("memo", Rmem);
    location.reload();
}