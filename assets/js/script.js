
const VideoModule = (function() {
    function cargarVideo(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute("src", url);
        } else {
            console.error(`No se encontró el iframe con id: ${id}`);
        }
    }

    return {
        cargarVideo: cargarVideo
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = function() {
            return _url;
        };

        this.setUrl = function(newUrl) {
            _url = newUrl;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video.";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url); 
        this.id = id; 
    }

    playMultimedia() {
        VideoModule.cargarVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        this.setUrl(nuevaUrl); 
    }
}

const reproductorMusica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/crdSO9TuAV4", "peliculas");
const reproductorSerie = new Reproductor("https://www.youtube.com/embed/h3KrzXd0zlQ", "series");

reproductorMusica.setInicio(30); 
reproductorPelicula.setInicio(45); 
reproductorSerie.setInicio(10); 

reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();
