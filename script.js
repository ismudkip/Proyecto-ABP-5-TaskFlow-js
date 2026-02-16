console.log('Script cargado ✅');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM listo');

    class Tarea {
        constructor(id, descripcion) {
            this.id = id;
            this.descripcion = descripcion;
            this.estado = 'pendiente';
            this.fechaCreacion = new Date().toLocaleString();
        }
        cambiarEstado() {
            this.estado = this.estado === 'pendiente' ? 'completada' : 'pendiente';
        }
    }

    class GestorTareas {
        constructor() {
            this.tareas = [];
        }
        agregarTarea(descripcion) {
            console.log('Delay de red...');
            setTimeout(() => {
                const id = Date.now();
                const nuevaTarea = new Tarea(id, descripcion);
                this.tareas.push(nuevaTarea);
                console.log('✅ Tarea agregada:', descripcion);

                setTimeout(() => {
                    console.log(`🎉 "${descripcion}" guardada!`);
                }, 200);

                this.guardarEnLocalStorage();
                mostrarTareas();
            }, 1500);
        }
        eliminarTarea(id) {
            this.tareas = this.tareas.filter(tarea => tarea.id !== id);
            this.guardarEnLocalStorage();
            mostrarTareas();
        }
        cambiarEstadoTarea(id) {
            const tarea = this.tareas.find(t => t.id === id);
            if (tarea) {
                tarea.cambiarEstado();
                this.guardarEnLocalStorage();
                mostrarTareas();
            }
        }
        guardarEnLocalStorage() {
            localStorage.setItem('tareas', JSON.stringify(this.tareas));
        }
        cargarDesdeLocalStorage() {
            try {
                const datos = JSON.parse(localStorage.getItem('tareas') || '[]');

                this.tareas = datos.map(({ id, descripcion, estado, fechaCreacion }) => {
                    const t = new Tarea(id || Date.now(), descripcion || '');
                    t.estado = estado || 'pendiente';
                    t.fechaCreacion = fechaCreacion || new Date().toLocaleString();
                    return t;
                });

            } catch (e) {
                console.log('Sin tareas previas');
            }
        }

    }

    const gestor = new GestorTareas();
    gestor.cargarDesdeLocalStorage();

    const formulario = document.getElementById('formulario');
    const inputTarea = document.getElementById('tarea');
    const listaTareas = document.getElementById('lista-tareas');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        inputTarea.addEventListener("keyup", e => {
            if (e.key === "Enter") formulario.dispatchEvent(new Event("submit"));
        });

        const texto = inputTarea.value.trim();
        if (texto) {
            gestor.agregarTarea(texto);
            inputTarea.value = '';
        }
    });

    function mostrarTareas() {
        listaTareas.innerHTML = '';
        gestor.tareas.forEach(tarea => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = `${tarea.descripcion} [${tarea.estado}]`;
            span.style.fontWeight = tarea.estado === 'completada' ? 'normal' : 'bold';

            const btnCambiar = document.createElement('button');
            btnCambiar.className = 'btn-cambiar';
            btnCambiar.textContent = 'Cambiar Estado';
            btnCambiar.style.marginLeft = '10px';
            btnCambiar.addEventListener('click', () => gestor.cambiarEstadoTarea(tarea.id));

            const btnEliminar = document.createElement('button');
            btnEliminar.className = 'btn-eliminar';
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.style.marginLeft = '5px';
            btnEliminar.style.backgroundColor = '#ff4444';
            btnEliminar.style.color = 'white';
            btnEliminar.addEventListener('click', () => gestor.eliminarTarea(tarea.id));

            li.appendChild(span);
            li.appendChild(btnCambiar);
            li.appendChild(btnEliminar);
            listaTareas.appendChild(li);
        });
    }

    // Función de Pokémon Random del día, usando Poke API
    async function pokemonDelDia() {
        console.log('Pokémon random del día!');
        const idRandom = Math.floor(Math.random() * 898) + 1;

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idRandom}`);
            const poke = await response.json();

            const nombre = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
            const tipo = poke.types[0].type.name;
            const peso = (poke.weight / 10).toFixed(1);

            gestor.agregarTarea(`🎲 ${nombre} del día! (${tipo}) ${peso}kg`);

            setTimeout(() => {
                alert(`¡POKÉMON DEL DÍA!\n\n` +
                    `${nombre}\n` +
                    `Tipo: ${tipo.toUpperCase()}\n` +
                    `Peso: ${peso}kg\n` +
                    `N° Pokedex#${idRandom}\n\n¡Capturado! 🎮`);
            }, 2000);
        } catch (e) {
            console.error('Error:', e);
            gestor.agregarTarea('❌ Error Pokémon del día');
        }
    }

    //API de Tareas

    async function obtenerTareasAPI() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            const data = await res.json();
            console.log("📡 Tareas desde API:", data);
        } catch (e) {
            console.error("Error API:", e);
        }
    }
    obtenerTareasAPI();


    // EXTRA - Botón Pokémon del Día
    const btnDia = document.createElement('button');
    btnDia.textContent = '🎲 Pokémon random del Día';
    btnDia.onclick = pokemonDelDia;
    btnDia.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white; padding: 15px 30px; margin: 20px 10px;
        border: none; border-radius: 50px; cursor: pointer; font-size: 18px;
        font-weight: bold; box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        transition: transform 0.3s;
    `;
    btnDia.onmouseover = () => btnDia.style.transform = 'scale(1.05)';
    btnDia.onmouseout = () => btnDia.style.transform = 'scale(1)';
    document.body.appendChild(btnDia);

    mostrarTareas();

    setInterval(() => {
        console.log("⌛ tareas activas:", gestor.tareas.length);
    }, 5000);

});

