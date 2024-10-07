// // document.addEventListener('DOMContentLoaded', () => {
// //     const bot = document.getElementById('bot');
// //     const planets = document.querySelectorAll('.planet');
// //     const videoContainer = document.getElementById('videoContainer');
// //     const videoPlayer = document.getElementById('videoPlayer');
// //     const closeButton = document.getElementById('closeButton');
// //     let currentVideo = '';

// //     // Función para detener la animación y fijar posiciones en círculo
// //     function stopAnimationAndSetPositionInCircle(planet, index, totalPlanets) {
// //         const angle = (index / totalPlanets) * 2 * Math.PI; // Divide el círculo en secciones iguales
// //         const distance = 120 + (index * 20); // Distancia desde el centro, aumentando para cada planeta
// //         const x = Math.cos(angle) * distance;
// //         const y = Math.sin(angle) * distance;
// //         // Fijar la nueva posición en círculo usando left y top
// //         planet.style.left = `calc(50% + ${x}px)`;
// //         planet.style.top = `calc(50% + ${y}px)`;
// //         planet.style.animation = 'none'; // Detener la animación
// //     }

// //     // Detener la animación y fijar posiciones después de 5 segundos
// //     setTimeout(() => {
// //         planets.forEach((planet, index) => {
// //             stopAnimationAndSetPositionInCircle(planet, index, planets.length);
// //         });
// //     }, 5000); // 5 segundos

// //     // Mover el bot al hacer clic
// //     planets.forEach(planet => {
// //         planet.addEventListener('click', () => {
// //             const rect = planet.getBoundingClientRect();
// //             const x = rect.left + rect.width / 2;
// //             const y = rect.top + rect.height / 2;

// //             // Mover el bot al planeta seleccionado
// //             bot.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
// //         });

// //         // Abrir el video al hacer doble clic
// //         planet.addEventListener('dblclick', () => {
// //             currentVideo = planet.getAttribute('data-video');
// //             videoPlayer.src = currentVideo;
// //             videoContainer.style.display = 'flex';
// //             videoPlayer.play();
// //         });
// //     });

// //     // Cerrar el video
// //     closeButton.addEventListener('click', () => {
// //         videoPlayer.pause();
// //         videoPlayer.currentTime = 0;
// //         videoContainer.style.display = 'none';
// //     });
// // });


// document.addEventListener('DOMContentLoaded', () => {
//     const bot = document.getElementById('bot');
//     const planets = document.querySelectorAll('.planet');
//     const videoContainer = document.getElementById('videoContainer');
//     const videoPlayer = document.getElementById('videoPlayer');
//     const closeButton = document.getElementById('closeButton');
//     const videoOptionContainer = document.getElementById('videoOptionContainer');
//     const normalButton = document.getElementById('normalButton');
//     const button3D = document.getElementById('button3D');
//     let currentVideo = '';

//     function stopAnimationAndSetPositionInCircle(planet, index, totalPlanets) {
//         const angle = (index / totalPlanets) * 2 * Math.PI; // Divide el círculo en secciones iguales
//         const distance = 120 + (index * 20); // Distancia desde el centro, aumentando para cada planeta
//         const x = Math.cos(angle) * distance;
//         const y = Math.sin(angle) * distance;
//         // Fijar la nueva posición en círculo usando left y top
//         planet.style.left = `calc(50% + ${x}px)`;
//         planet.style.top = `calc(50% + ${y}px)`;
//         planet.style.animation = 'none'; // Detener la animación
//     }
//   //  Detener la animación y fijar posiciones después de 5 segundos
//     setTimeout(() => {
//         planets.forEach((planet, index) => {
//             stopAnimationAndSetPositionInCircle(planet, index, planets.length);
//         });
//     }, 5000); // 5 segundos

//     // Función para abrir el cuadro de selección de video
//     function openVideoOptions(planet) {
//         videoOptionContainer.style.display = 'block';
//         videoOptionContainer.dataset.videoNormal = planet.getAttribute('data-video-normal');
//         videoOptionContainer.dataset.video3d = planet.getAttribute('data-video-3d');
//     }

//     // Escuchar doble clic en los planetas
//     planets.forEach(planet => {
//         planet.addEventListener('dblclick', () => {
//             openVideoOptions(planet);
//         });
//     });

//     // Reproducir video al seleccionar la opción "Normal"
//     normalButton.addEventListener('click', () => {
//         currentVideo = videoOptionContainer.dataset.videoNormal;
//         playVideo(currentVideo);
//     });

//     // Reproducir video al seleccionar la opción "3D"
//     button3D.addEventListener('click', () => {
//         currentVideo = videoOptionContainer.dataset.video3d;
//         playVideo(currentVideo);
//     });

//     // Función para reproducir el video seleccionado
//     function playVideo(videoSrc) {
//         videoPlayer.src = videoSrc;
//         videoContainer.style.display = 'flex';
//         videoOptionContainer.style.display = 'none'; // Ocultar opciones después de seleccionar
//         videoPlayer.play();
//     }

//     // Cerrar el video
//     closeButton.addEventListener('click', () => {
//         videoPlayer.pause();
//         videoPlayer.currentTime = 0;
//         videoContainer.style.display = 'none';
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const bot = document.getElementById('bot');
    const planets = document.querySelectorAll('.planet');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeButton = document.getElementById('closeButton');
    const videoOptionContainer = document.getElementById('videoOptionContainer');
    const normalButton = document.getElementById('normalButton');
    const button3D = document.getElementById('button3D');
    let currentVideo = '';

    // Función para detener la animación y fijar posiciones en círculo
    function stopAnimationAndSetPositionInCircle(planet, index, totalPlanets) {
        const angle = (index / totalPlanets) * 2 * Math.PI ; // Divide el círculo en secciones iguales
        const distance = 150 + (index * 50); // Distancia desde el centro, aumentando para cada planeta
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

        // Abrir el cuadro de selección de video al hacer doble clic
        planet.addEventListener('dblclick', () => {
            openVideoOptions(planet);
        });
    });

    // Función para abrir el cuadro de selección de video
    function openVideoOptions(planet) {
        videoOptionContainer.style.display = 'block';
        videoOptionContainer.dataset.videoNormal = planet.getAttribute('data-video-normal');
        videoOptionContainer.dataset.video3d = planet.getAttribute('data-video-3d');
    }

    // Reproducir video al seleccionar la opción "Normal"
    normalButton.addEventListener('click', () => {
        currentVideo = videoOptionContainer.dataset.videoNormal;
        playVideo(currentVideo);
    });

    // Reproducir video al seleccionar la opción "3D"
    button3D.addEventListener('click', () => {
        currentVideo = videoOptionContainer.dataset.video3d;
        playVideo(currentVideo);
    });

    // Función para reproducir el video seleccionado
    function playVideo(videoSrc) {
        videoPlayer.src = videoSrc;
        videoContainer.style.display = 'flex';
        videoOptionContainer.style.display = 'none'; // Ocultar opciones después de seleccionar
        videoPlayer.play();
    }

    // Cerrar el video
    closeButton.addEventListener('click', () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoContainer.style.display = 'none';
    });
});
