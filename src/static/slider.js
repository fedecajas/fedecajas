import main from '@images/slides/slider-1.png';
import secondary from '@images/slides/slider-2.gif';
import thirsty from '@images/slides/slider-3.gif';
import four from '@images/slides/slider-4.jpg';

/*  */
import slide1 from '@images/slides/slider-foot0.jpg';
import slide2 from '@images/slides/slider-foot1.jpg';
import slide3 from '@images/slides/slider-foot2.jpg';
import slide4 from '@images/slides/slider-foot3.jpg';

/* icons */
import casaIcon from '@images/icons/casa-icon.png';
import fedecajasIcon from '@images/icons/fedecajas-icon.png';
import mapaIcon from '@images/icons/mapa-icon.png'
import ubicacionIcon from '@images/icons/ubicacion-icon.png'

export const slides = [
    {
        type: 'img',
        content: main,
        title: 'Operador de pila',
        link: 'https://www.asopagos.com/',
    },
    {
        type: 'video',
        content: secondary,
        title: 'Nuestras cajas en Colombia',
        link: '/mapacajas'
    },
    {
        type: 'video',
        content: thirsty,
        title: 'Festival caja de cine',
        link: 'https://www.festivalcajadecine.com/',
    },
    {
        type: 'img',
        content: four,
        title: 'Fedecajas académico',
        link: '',
    },
]

export const slides2 = [
    {
        type: 'img',
        content: slide1,
        title: 'niños en el campo',
        link: 'https://www.asopagos.com/',
    },
    {
        type: 'img',
        content: slide2,
        title: 'Campesinos con sombrero',
        link: 'https://www.asopagos.com/',
    },
    {
        type: 'img',
        content: slide3,
        title: 'agricultor en campo',
        link: 'https://www.asopagos.com/',
    },
    {
        type: 'img',
        content: slide4,
        title: 'Familia del campo',
        link: 'https://www.asopagos.com/',
    },
]

export const slideDescription = {
    logros: [
        {
            icon: casaIcon,
            number: '28',
            desc: 'Cajas de compensanción agremiadas'
        },
        {
            icon: ubicacionIcon,
            number: '26',
            desc: 'Departamentos',
        },
        {
            icon: mapaIcon,
            number: '90.25%',
            desc: 'Superficie cubierta a nivel nacional'
        },
        {
            icon: fedecajasIcon,
            number: 'FEDECAJAS',
            desc: 'Presencia Nacional'
        },
    ],
    description: {
        title: 'Primer Festival de Cine FEDECAJAS!',
        desc: 'Participa en nuestro primer Festival Nacional Caja de Cine, compártenos tu spot promocional y concursa.',
        link: 'https://www.festivalcajadecine.com/',
    }
}