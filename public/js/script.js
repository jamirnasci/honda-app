async function loadMotorcycles(){
	const motorcyclesContainer = document.getElementById('motorcyclesContainer');
	const res = await fetch('data.json', {

	})
	const obj = await res.json()

	obj.forEach((item, i) =>{
		motorcyclesContainer.innerHTML += `
                        <div class="motorcycle-card">
                                <img class="motorcycle-img" src="${item.img1}">
                                <h3 class="motorcycle-title">${item.nome}</h3>
                                <div class="motorcycle-card-actions">
                                        <a class="motorcycle-card-link" href="detalhes.html?i=${i}">Detalhes da moto</a>
                                        <a class="motorcycle-card-link2" href="">Planos de consórcio</a>
                                        <a class="motorcycle-card-link2" href="">Financiamento</a>
                                </div>
                        </div>

		`
	})
}
loadMotorcycles()