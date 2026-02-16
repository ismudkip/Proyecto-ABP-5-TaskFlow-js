**#TaskFlow - Gestor de Tareas**

Aplicación web interactiva desarrollada como proyecto de evaluación del módulo n°5 de Programación Avanzada en Javascript

Su objetivo principal es implementar una herramienta de gestión de tareas aplicando Programación Orientada a Objetos, manipulación del DOM, asincronía y consumo de APIs externas.


- **Objetivos de proyecto**

Desarrollar una aplicación web funcional que permita administrar tareas utilizando JavaScript moderno (ES6+), incorporando:

- POO(Programación Orientada a Objetos)
- Eventos del DOM
- Persistencia de datos
- Asincronía
- Consumo de APIs externas



- **Funcionalidades Implementadas**

**Gestor de Tareas**

- Crear tareas nuevas
- Cambiar estado de cada tarea (pendiente / completada)
- Eliminar tareas
- Persistencia automática en 'localStorage'
- Restauración de tareas al recargar página

**Interacción del usuario**

- Envío mediante botón y teclado -Enter-
- Eventos como 'submit', 'click', 'keyup', 'mouseover'
- Actualización dinámica del DOM

- **Asincronía**

- Simulación de latencia de red al guardar tareas ('setTimeout')
- Notificación con delay (1.5seg)
- Monitor automático de tareas ('setInterval')

- **APIS EXTERNAS**

- Consumo de API de Pokémon (funcionalidad extra lúdica)
- Consumo de API de tareas de prueba (JSONPlaceholder)
- Manejo de errores con 'try/catch'



- **POO - Programación Orientada a Objetos**

- Clase 'tarea'

Representa una tarea individual.

*Propiedades*

- 'id'
- 'descripción'
- 'estado'
- 'fechaCreacion'

*Métodos*

- 'cambiarEstado()'

- **Clase 'GestorTareas'**

Administra la colección de tareas.

*Responsabilidades*

- Agregar tareas
- Eliminar tareas
- Cambiar estado
- Guardar en localStorage
- Recuperar desde localStorage



- **Uso de ES6**

El proyecto utiliza características modernas del lenguaje:

- 'let' y 'const'
- Arrow functions
- Template literals
- Destructuring
- Async/Await



- **Manipulación del DOM**

La interfaz se actualiza automaticamente sin recargar la pagina:

- Creación de elementos HTML desde JavaScript
- Eventos de usuario para interacción
- Cambios visuales según el estado de la tarea



- **Asincronía**

Se implementaron distintas técnicas asincrónicas:

| Técnica     | Uso                                |
| ----------- | ---------------------------------- |
| setTimeout  | Simulación de guardado en servidor |
| setInterval | Monitoreo automático de tareas     |
| async/await | Consumo de APIs                    |



- **Consumo de APIs**

*API de Tareas*

Obtención de datos externos para simular backend:

`https://jsonplaceholder.typicode.com/todos`

*API de Pokemon (extra)*

Genera una nueva tarea, la cual agrega un pokemon, ademas entrega un mensaje en pantalla con la informacion del Pokémon que salga:

`https://pokeapi.co`



- **Estructura del Proyecto**


proyecto_abp_5/
│── index.html
│── script.js
│── README.md


- **Cómo ejecutar?**

1. Descargar el repositorio
2. Abri index.html en el navegador preferido.
3. Agregar tareas normalmente.
4. Probar botón "Pokémon random del día"

Listo!

- **Conclusión**

TaskFlow - Task demuestra la integracion de múltiples conceptos fundamentales del desarrollo de frontend moderno en una aplicacioón funcional y escalable. Se combinaron 
prácticas de arquitectura orientada a objetos con programación reactiva y asincrónica, simulando el comportamiento de una aplicación real conectada a un backend.

Este proyecto fue desarrollado como práctica del modulo número 

## Conclusión

TaskFlow demuestra la integración de múltiples conceptos fundamentales del desarrollo frontend moderno en una aplicación funcional y escalable. Se combinan prácticas de arquitectura orientada a objetos con programación reactiva y asincrónica, simulando el comportamiento de una aplicación real conectada a un backend.

---

## Autor

Proyecto desarrollado como práctica académica del módulo 5 del curso de DESARROLLO DE APLICACIONES FRONT-END TRAINEE
