function parseHTML(html) {
    const t = document.createElement("template");
    t.innerHTML = html;
    return t.content;
}

async function load_file_html(target, url) {
    let result = await (await fetch(url)).text();
    result = parseHTML(result);
    target.appendChild(result);
}

load_file_html(document.body, "/partials/navbar.html");
load_file_html(document.body, "/partials/wa_melayang.html");