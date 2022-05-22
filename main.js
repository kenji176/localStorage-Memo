window.onload = function() {
	for (var i = 0, length = localStorage.length; i < length; ++i) {
        const note = document.getElementById("memo");
        if (localStorage.key(i) == "") {;
		} else {
			note.insertAdjacentHTML('beforeend',
				`  <div class="card mt-2 bg-dark">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-7">
                                                                <div class="text-start text-white font-monospace text-wrap">${(localStorage.getItem(localStorage.key(i)))}</div>
                                                            </div>
                                                            <div class='col-5'>
                                                                <div class="text-end">
																<div class="btn-group" role="group" aria-label="Basic example">
																	<input class="btn btn-sm btn-danger" type="button"  id=${localStorage.key(i)} value="削除"  onclick="Remove_(this);">
																	<button type="button" class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#modal-${localStorage.key(i)}">編集</button>
																	</div>
																	<div class="modal fade" id="modal-${localStorage.key(i)}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
																		<div class="modal-dialog modal-lg">
																			<div class="modal-content">
																			<div class="modal-header">
																				<h5 class="modal-title" id="exampleModalLabel">Edit</h5>
																				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
																			</div>
																			<div class="modal-body text-start">
																				<div class="mb-3">
																					<label for="exampleFormControlTextarea1" class="form-label"></label>
																					<textarea class="form-control" id="sender-${localStorage.key(i)}"  rows="8" >${localStorage.getItem(localStorage.key(i)).replace(/<br>/g,'\n')}</textarea>
																				</div>
																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary"  data-bs-dismiss="modal" id="${localStorage.key(i)}" onclick="Update_(this);" >Save</button>
																			</div>
																			</div>
																		</div>
																		</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`)
		}
        }
	}

function Update_(element) {
	const U_text = document.getElementById("sender-"+element.id).value
	if (U_text == "") {
		alert('文字数が足りません');
	} else {
		window.localStorage.setItem(element.id,escapeHtml(U_text));
		location.reload();
	}
}

function OnButtonClick() {
	const content = document.getElementById('send').value
	if (content == "") {
		alert('文字数が足りません');
	} else {
		localStorage.removeItem(this.id);
		window.localStorage.setItem(generateUuid(),escapeHtml(content));
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
