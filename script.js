document.addEventListener('DOMContentLoaded', () => {
    const bot = document.getElementById('bot');
    const planets = document.querySelectorAll('.planet');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeButton = document.getElementById('closeButton');
    let currentVideo = '';

    // Función para detener la animación y fijar posiciones en círculo
    function stopAnimationAndSetPositionInCircle(planet, index, totalPlanets) {
        const angle = (index / totalPlanets) * 2 * Math.PI; // Divide el círculo en secciones iguales
        const distance = 130 + (index * 35); // Distancia desde el centro, aumentando para cada planeta
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        // Fijar la nueva posición en círculo usando left y top
        planet.style.left = `calc(50% + ${x}px)`;
        planet.style.top = `calc(50% + ${y}px)`;
        planet.style.animation = 'none'; // Detener la animación
    }

    // Detener la animación y fijar posiciones después de 5 segundos
    setTimeout(() => {
        planets.forEach((planet, index) => {
            stopAnimationAndSetPositionInCircle(planet, index, planets.length);
        });
    }, 5000); // 5 segundos

    // Mover el bot al hacer clic
    planets.forEach(planet => {
        planet.addEventListener('click', () => {
            const rect = planet.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            // Mover el bot al planeta seleccionado
            bot.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
        });

        // Abrir el video al hacer doble clic
        planet.addEventListener('dblclick', () => {
            currentVideo = planet.getAttribute('data-video');
            videoPlayer.src = currentVideo;
            videoContainer.style.display = 'flex';
            videoPlayer.play();
        });
    });

    // Cerrar el video
    closeButton.addEventListener('click', () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoContainer.style.display = 'none';
    });
});
