document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventDescription = document.getElementById('event-description').value;

    // Verificar que los campos no estén vacíos
    if (eventName && eventDate && eventDescription) {
        // Crear un nuevo elemento de lista
        const newEvent = document.createElement('li');
        newEvent.classList.add('event-item');
        newEvent.textContent = `${eventName}: ${eventDate} - ${eventDescription}`;

        // Agregar el nuevo evento a la lista
        document.getElementById('event-list').appendChild(newEvent);

        // Limpiar los campos del formulario
        document.getElementById('event-name').value = '';
        document.getElementById('event-date').value = '';
        document.getElementById('event-description').value = '';
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
});
