const URL = location.pathname,
last_sep = URL.lastIndexOf("/");
let link2pdf = URL.replace("pages", "source").replace("html", "pdf");
link2pdf = link2pdf.slice(0,last_sep+1) + "/out" + link2pdf.slice(last_sep+1,);



// link2pdf の設定
document.getElementById("link2pdf").setAttribute("href", link2pdf);


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
