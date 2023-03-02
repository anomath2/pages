const URL = location.href,
PAGE_PATH = location.pathname;

let slash = PAGE_PATH.lastIndexOf("/"),
up_path = PAGE_PATH.slice(0,slash);
if (PAGE_PATH.slice(slash+1,) == "index.html") {
    slash = up_path.lastIndexOf("/");
    up_path = up_path.slice(0,slash);
}
up_path = up_path + "/index.html";

// cite の設定
const cite_nodes = document.getElementsByClassName("cite");
for (const cite of cite_nodes) {
    cite.setAttribute("href", URL + "#" + cite.getAttribute("href"));
}


// myref の設定
async function mylabel() {
    //load json
    const data = await (fetch(`../json/mylabel.json`)),
    json = await data.json();
    //load json
    const myref_nodes = document.getElementsByClassName("myref");
    for (const myref of myref_nodes) {
        const key = myref.getAttribute("name");
        let link = json[key].slice(3,);
        myref.setAttribute("href", link);
    }
}
mylabel()


// Top, Up の設定
const FOOTER_INNER = document.getElementsByClassName("footer_inner")[0],
TOP = document.createElement("a"),
UP = document.createElement("a")

TOP.href = "index.html";
TOP.textContent = "TOP";
UP.href = up_path;
UP.textContent = "UP";
UP.setAttribute("style", "margin-left: 1rem;");

FOOTER_INNER.append(TOP);
FOOTER_INNER.append(UP);
