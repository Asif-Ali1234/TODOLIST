
var todocount = 0


function getalltodos() {
    var prev = document.getElementById('ullist')
    deleteallpreviouschilds(prev)
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("tdcount")) {
            todocount = localStorage.getItem("tdcount")
            for (var i = 1; i < todocount; i++) {
                var li = document.createElement("li")
                var input = document.createElement('input')
                input.type = "checkbox"
                input.id = 'c' + i
                li.appendChild(input)
                var label = document.createElement("label")
                var savedtodo = localStorage.getItem(i);
                var text = document.createTextNode(savedtodo)
                label.appendChild(text)
                li.appendChild(label)
                document.getElementById('ullist').appendChild(li)
            }
        } else {
            localStorage.setItem("tdcount", 1);
            todocount = 1
        }
    }
    else {
        document.getElementById("errormsg").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function remember(bool) {
    if (bool == true) {
        var todo = document.getElementById('mywork').value
        if (todo == '') {
            document.getElementById("errormsg").innerHTML = 'Please type anything to remember !!!!'
        }
        else {
            document.getElementById("errormsg").innerHTML = ''
            var e = document.getElementById('ullist')
            deleteallpreviouschilds(e)
            if (typeof (Storage) !== "undefined") {
                // Store
                localStorage.setItem(todocount, todo);
                // Retrieve
                for (var i = 1; i <= todocount; i++) {
                    var li = document.createElement("li")
                    var input = document.createElement('input')
                    input.type = "checkbox"
                    input.id = 'c' + i
                    li.appendChild(input)
                    var label = document.createElement("label")
                    var savedtodo = localStorage.getItem(i);
                    var text = document.createTextNode(savedtodo)
                    label.appendChild(text)
                    li.appendChild(label)
                    var icon = document.createElement("i")
                    icon.classList.add('far', 'fa-trash-alt')
                    li.appendChild(icon)
                    document.getElementById('ullist').appendChild(li)
                }
                todocount++
                localStorage.setItem('tdcount', todocount)
                document.getElementById('mywork').value = ''
            }
            else {
                document.getElementById("errormsg").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        }
    }
    else {
        localStorage.clear()
        document.getElementById("errormsg").innerHTML = "Your Local Storage Cleared Please refresh the browser to see the effect"
    }
}




function deleteallpreviouschilds(e) {
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
