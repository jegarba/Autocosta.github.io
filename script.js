// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    const catalogoGrid = document.querySelector('.row-cols-1');

    const marcaSelect = document.getElementById('marca-select');
    const modeloSelect = document.getElementById('modelo-select');
    const busquedaForm = document.getElementById('busqueda-form');

    const filtroForm = document.getElementById('filtro-form');

    const autos = [
        {
            marca: "CHEVROLET",
            linea: "CRUZE",
            modelo: "2019",
            combustible: "GASOLINA",
            motor: "1.4",
            transmision: "AUTOMÁTICO",
            kilometraje: "45,000",
            placa: "BOGOTÁ",
            precio: "65,000,000",
            negociable: true,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "FORD",
            linea: "EXPLORER",
            modelo: "2018",
            combustible: "GASOLINA",
            motor: "3.5",
            transmision: "AUTOMÁTICO",
            kilometraje: "60,000",
            placa: "MEDELLÍN",
            precio: "120,000,000",
            negociable: false,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "KIA",
            linea: "SPORTAGE",
            modelo: "2020",
            combustible: "GASOLINA",
            motor: "2.0",
            transmision: "MECÁNICO",
            kilometraje: "30,000",
            placa: "CALI",
            precio: "85,000,000",
            negociable: true,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "CX-5",
            modelo: "2021",
            combustible: "GASOLINA",
            motor: "2.5",
            transmision: "AUTOMÁTICO",
            kilometraje: "15,000",
            placa: "BARRANQUILLA",
            precio: "110,000,000",
            negociable: false,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "RENAULT",
            linea: "DUSTER",
            modelo: "2017",
            combustible: "DIÉSEL",
            motor: "1.5",
            transmision: "MECÁNICO",
            kilometraje: "80,000",
            placa: "CARTAGENA",
            precio: "45,000,000",
            negociable: true,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "RAV4",
            modelo: "2019",
            combustible: "GASOLINA",
            motor: "2.5",
            transmision: "AUTOMÁTICO",
            kilometraje: "50,000",
            placa: "BUCARAMANGA",
            precio: "95,000,000",
            negociable: false,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "TIGUAN",
            modelo: "2020",
            combustible: "GASOLINA",
            motor: "2.0",
            transmision: "AUTOMÁTICO",
            kilometraje: "25,000",
            placa: "VILLAVICENCIO",
            precio: "75,000,000",
            negociable: true,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "X3",
            modelo: "2018",
            combustible: "GASOLINA",
            motor: "3.0",
            transmision: "AUTOMÁTICO",
            kilometraje: "55,000",
            placa: "ARMENIA",
            precio: "140,000,000",
            negociable: false,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "GLC",
            modelo: "2021",
            combustible: "GASOLINA",
            motor: "2.0",
            transmision: "AUTOMÁTICO",
            kilometraje: "10,000",
            placa: "PEREIRA",
            precio: "160,000,000",
            negociable: true,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "QASHQAI",
            modelo: "2019",
            combustible: "GASOLINA",
            motor: "2.0",
            transmision: "AUTOMÁTICO",
            kilometraje: "40,000",
            placa: "MANIZALES",
            precio: "70,000,000",
            negociable: false,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "TUCSON",
            modelo: "2020",
            combustible: "GASOLINA",
            motor: "2.0",
            transmision: "AUTOMÁTICO",
            kilometraje: "20,000",
            placa: "IBAGUÉ",
            precio: "80,000,000",
            negociable: true,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        },
        {
            marca: "MAZDA",
            linea: "X5",
            modelo: "2018",
            combustible: "GASOLINA",
            motor: "3.0",
            transmision: "AUTOMÁTICO",
            kilometraje: "50,000",
            placa: "CÚCUTA",
            precio: "130,000,000",
            negociable: false,
            imagenes: [
                'img/autos/auto1.jpeg',
                'img/autos/auto2.jpeg',
                'img/autos/auto3.jpeg',
                'img/autos/auto4.jpeg',
                'img/autos/auto5.jpeg',
                'img/autos/auto6.jpeg',
                'img/autos/auto7.jpeg',
                'img/autos/auto8.jpeg',
                'img/autos/auto9.jpeg'
            ]
        }
    ];

    function aplicarFiltros() {
        const condicionNuevo = document.getElementById('condicion-nuevo').checked;
        const condicionUsado = document.getElementById('condicion-usado').checked;
        const kilometros = document.getElementById('kilometros-select').value;
        const combustible = document.getElementById('combustible-select').value;
        const transmisionMecanica = document.getElementById('transmision-mecanica').checked;
        const transmisionAutomatica = document.getElementById('transmision-automatica').checked;
        const precioMin = document.getElementById('precio-min').value;
        const precioMax = document.getElementById('precio-max').value;
        const modeloAnio = document.getElementById('modelo-anio-select').value;

        const autosFiltrados = autos.filter(auto => {
            // Implementa aquí la lógica de filtrado basada en los valores de los filtros
            // Por ejemplo:
            if (condicionNuevo && auto.condicion !== 'nuevo') return false;
            if (condicionUsado && auto.condicion !== 'usado') return false;

            // Continúa con el resto de los filtros...

            return true;
        });

        cargarAutos(autosFiltrados);
    }

    function cargarAutos(autosFiltrados) {
        const catalogoGrid = document.getElementById('autos-grid');
        catalogoGrid.innerHTML = '';
        autosFiltrados.forEach((auto, index) => {
            const autoHTML = `
                <div class="col">
                    <div class="card h-100 shadow-sm" data-bs-toggle="modal" data-bs-target="#autoModal" data-auto='${JSON.stringify(auto)}'>
                        <div class="card-image-container">
                            <img src="img/autos/auto.jpeg" class="card-img-top" alt="${auto.marca} ${auto.linea}">
                            <div class="marca-icon-container">
                                <img src="img/marcas/cy_marcas_${auto.marca.toLowerCase()}@2x.webp" alt="${auto.marca}" class="marca-icon">
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${auto.marca} ${auto.linea}</h5>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-calendar-alt"></i> Modelo: ${auto.modelo}</li>
                                <li><i class="fas fa-gas-pump"></i> Combustible: ${auto.combustible}</li>
                                <li><i class="fas fa-cogs"></i> Motor: ${auto.motor}</li>
                                <li><i class="fas fa-cog"></i> Transmisión: ${auto.transmision}</li>
                                <li><i class="fas fa-road"></i> Kilometraje: ${auto.kilometraje} KM</li>
                                <li><i class="fas fa-map-marker-alt"></i> Placa: ${auto.placa}</li>
                            </ul>
                            <div class="price-tag">
                                <span class="price">$${auto.precio}</span>
                                ${auto.negociable ? '<span class="negotiable">Negociables</span>' : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            catalogoGrid.innerHTML += autoHTML;
        });
    
        // Añade el evento de clic a cada tarjeta
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const auto = JSON.parse(this.getAttribute('data-auto'));
                mostrarModal(auto);
            });
        });
    }

    function mostrarModal(auto) {
        const modalBody = document.querySelector('#autoModal .modal-body');
        const autoHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div id="carouselAuto" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            ${auto.imagenes.map((imagen, index) => `
                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <img src="${imagen}" class="d-block w-100" alt="${auto.marca} ${auto.linea}">
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselAuto" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselAuto" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>${auto.marca} ${auto.linea}</h5>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-calendar-alt"></i> Modelo: ${auto.modelo}</li>
                        <li><i class="fas fa-gas-pump"></i> Combustible: ${auto.combustible}</li>
                        <li><i class="fas fa-cogs"></i> Motor: ${auto.motor}</li>
                        <li><i class="fas fa-cog"></i> Transmisión: ${auto.transmision}</li>
                        <li><i class="fas fa-road"></i> Kilometraje: ${auto.kilometraje} KM</li>
                        <li><i class="fas fa-map-marker-alt"></i> Placa: ${auto.placa}</li>
                    </ul>
                    <div class="price-tag">
                        <span class="price">$${auto.precio}</span>
                        ${auto.negociable ? '<span class="negotiable">Negociables</span>' : ''}
                    </div>
                    <p class="mt-3">Aquí van las características y accesorios adicionales o instalados del vehículo.</p>
                </div>
            </div>
        `;
        modalBody.innerHTML = autoHTML;
    
        // Configurar el botón de WhatsApp
        const whatsappBtn = document.getElementById('whatsapp-btn');
        const whatsappMessage = `Hola, estoy interesado en el ${auto.marca} ${auto.linea} (Modelo: ${auto.modelo}).`;
        whatsappBtn.href = `https://wa.me/573000000000?text=${encodeURIComponent(whatsappMessage)}`;
    }

    cargarAutos(autos);
    actualizarModelos();

    // Filtro de búsqueda
    const busquedaInput = document.getElementById('busqueda-input');
    busquedaInput.addEventListener('input', function () {
        const busqueda = this.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            const texto = card.textContent.toLowerCase();
            card.closest('.col').style.display = texto.includes(busqueda) ? '' : 'none';
        });
    });


    // Función para actualizar los modelos basados en la marca seleccionada
    function actualizarModelos() {
        const marcaSeleccionada = marcaSelect.value;
        const modelosDisponibles = [...new Set(autos
            .filter(auto => !marcaSeleccionada || auto.marca === marcaSeleccionada)
            .map(auto => auto.linea))];

        modeloSelect.innerHTML = '<option value="">Todos los modelos</option>';
        modelosDisponibles.forEach(modelo => {
            modeloSelect.innerHTML += `<option value="${modelo}">${modelo}</option>`;
        });
    }

    // Event listener para el cambio de marca
    marcaSelect.addEventListener('change', actualizarModelos);

    // Event listener para el formulario de búsqueda
    busquedaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const marcaSeleccionada = marcaSelect.value;
        const modeloSeleccionado = modeloSelect.value;
        const busquedaTexto = busquedaInput.value.toLowerCase();

        const autosFiltrados = autos.filter(auto =>
            (!marcaSeleccionada || auto.marca === marcaSeleccionada) &&
            (!modeloSeleccionado || auto.linea === modeloSeleccionado) &&
            (auto.marca.toLowerCase().includes(busquedaTexto) ||
                auto.linea.toLowerCase().includes(busquedaTexto) ||
                auto.modelo.toLowerCase().includes(busquedaTexto))
        );

        cargarAutos(autosFiltrados);
    });

    // 4. Efecto de hover en las tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('shadow-lg');
        });
        card.addEventListener('mouseleave', function () {
            this.classList.remove('shadow-lg');
        });
    });

    // 5. Botón "Volver arriba"
    const botonArriba = document.createElement('button');
    botonArriba.innerHTML = '&uarr;';
    botonArriba.className = 'btn btn-primary position-fixed bottom-0 end-0 m-3 d-none';
    document.body.appendChild(botonArriba);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            botonArriba.classList.remove('d-none');
        } else {
            botonArriba.classList.add('d-none');
        }
    });

    botonArriba.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});