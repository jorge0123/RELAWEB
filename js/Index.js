window.sr = ScrollReveal();

    sr.reveal('.one-third', {
        duration: 3000,
        origin: 'botton',
        distance: '-100px',
    });

    sr.reveal('.slider', {
        duration: 3000,
        origin: 'botton',
        distance: '-100px',
    });

    sr.reveal('#P1', {
        duration: 3000,
        origin: 'up',
        distance: '-100px',
    });
    //animacion de imagen
    const pic1 = document.getElementById('pic1');
    const pic2 = document.getElementById('pic2');
    const cargarImagen = (entradas, observador) => {
        //console.log(entradas)
        //console.log(observador)
        entradas.forEach((entrada) => {
            if(entrada.isIntersecting){
                entrada.target.classList.add('visible');
            }
        });
    }

    const observador = new IntersectionObserver(cargarImagen, {
        root: null,
        //para ejecutar el codigo en relacion a los margenes
        rootMargin: '-100px 0px 0px 0px',
        //cuando queremos que ejecute el codigo ejemplo mitad de imagen 0,5
        threshold: 1.0,
    });
    observador.observe(pic1);
    observador.observe(pic2);

