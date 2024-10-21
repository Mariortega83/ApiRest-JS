(async ()  =>{
    await fetch('http://localhost:3000')
        .then(response => response.json(), () => (console.log('Error al parsear la respuesta')))
        .then(datos => {

            console.log(datos);

            const cars = datos.cars;

            const div = document.getElementById('cars');

            cars.forEach(cars => {

                const p = document.createElement('div');
                
                p.innerHTML = ` Brand: ${cars.brand} <br> 
                                Color: ${cars.color} <br>  
                                Model: ${cars.model} <br>
                                --------------------------------- `;
                div.appendChild(p);

            });

        }, () => (console.log('Error al obtener los datos')));
})();
