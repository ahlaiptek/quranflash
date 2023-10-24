function csv_to_json(csv) {
	const lines = csv.split("\n");
	const result = [];

	for (let i = 0; i < lines.length; i++) {
		let buffer = lines[i].split(",");
		for (let j = 0; j < buffer.length; j++) {
			buffer[j] = buffer[j].replaceAll('"', "");
		}
		result.push(buffer)
	}

  	return result;
}

async function run() {
	let result = await (await fetch("/data.csv")).text();
	result = csv_to_json(result);

	const produk_element = document.getElementById("produk");
	
	for (const x of result) {
		let html = `<div class="barang">
            <img src="/img/gambar/${x[3]}" alt="Gambar produk">
            <h2>${x[0]}</h2>
            <p>${x[2]}</p>
			<hr>
            <p>Harga: ${x[1]}</p>
			<button>Detail</button>
        </div>`;
        html = parseHTML(html);
        produk_element.appendChild(html);
	}
}

run();