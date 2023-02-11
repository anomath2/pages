

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
