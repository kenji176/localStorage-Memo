window.onload = function() {
	for (var i = 0, length = localStorage.length; i < length; ++i) {
        const note = document.getElementById("memo");
        if (localStorage.key(i) == "") {;
		} else {
			note.insertAdjacentHTML('beforeend',
				`  <div class="card mt-2 bg-dark">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="text-start text-white font-monospace">${(localStorage.getItem(localStorage.key(i)))}</div>
                                                            </div>
                                                            <div class='col'>
                                                                <div class="text-end">
                                                                    <input class="btn btn-sm btn-danger" type="button"  id=${localStorage.key(i)} value="削除"  onclick="Remove_(this);">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`)
		}
        }
	}

function OnButtonClick() {
	const content = document.getElementById('send').value
	if (content == "") {
		alert('文字数が足りません');
	} else {
		const escapetext = escapeHtml(content);
		console.log(escapetext);
		window.localStorage.setItem(generateUuid(),escapetext);
		location.reload();
	}
}

function escapeHtml(str) {
	str = str.replace(/>/g, '&gt;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/'/g, '&#x27;');
	str = str.replace(/`/g, '&#x60;');
	str = str.replace(/\r?\n/g, '<br>');
	str = str.replace(/\s/g,'&nbsp;')
	return str;
}

function generateUuid() {
	let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
	for (let  i = 0, len = chars.length; i < len; i++) {
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
    for (const i = 0, length = localStorage.length; i < length; ++i) {
        console.log(element.id)
        console.log()
        if (element.id == localStorage.key(i)){
            window.localStorage.removeItem(element.id);
            location.reload();
        }else{
            ;
        }
    }
}

