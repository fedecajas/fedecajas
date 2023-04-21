import Image from 'next/image';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
/* Assets */
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import main from '@styles/main.module.scss';

const Slider = (props) => {
    const { multimedia, slideDescription, token } = props;
    const slideshow = useRef(null);
    const myInterval = useRef(null);

    const next = () => {
        let lengthItems = slideshow.current.children.length;
        // Comprobamos que el slideshow tenga elementos
        if (lengthItems > 0) {
            // Obtenemos el primer elemento del slideshow:
            const firstItem = slideshow.current.children[0];

            // Transicion
            slideshow.current.style.transition = '.5s ease-out all';

            // Actions
            const sizeSlide = firstItem.offsetWidth;
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            const transition = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0px)`;

                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(firstItem);
                // Finalizamos la escucha de transicion
                slideshow.current.removeEventListener('transitionend', transition);
            }

            //EventListener para cuando termina la animacion
            slideshow.current.addEventListener('transitionend', transition);
        }
    }

    const back = () => {
        let lengthItems = slideshow.current.children.length;
        if (lengthItems > 0) {
            // Obtenemos el ultimo elemento del slideshow:
            const lastIndex = lengthItems - 1;
            const lastItem = slideshow.current.children[lastIndex]

            slideshow.current.insertBefore(lastItem, slideshow.current.firstChild);

            slideshow.current.style.transition = `none`;

            const sizeSlide = lastItem.offsetWidth;
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
                // Transicion
                slideshow.current.style.transition = `.3s ease-out all`;
                slideshow.current.style.transform = `translateX(0px)`;
            }, 10)

            slideshow.current.style.transition = 'none';
        }
    }

    useEffect(() => {
        /* let lengthItems = slideshow.current.children.length
        if (lengthItems > 2) {
            myInterval.current = setInterval(() => {
                next();
            }, 12000);
        }

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(myInterval.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            myInterval.current = setInterval(() => {
                setTimeout(() => {
                    next();
                }, 12000)
            }, 16000);
        }); */
    }, []);

    if (multimedia) {
        return (
            <section className={main['mainContainer__slide']}>
                {
                    token === 'fest' &&
                    <div className={main['mainContainer__slide-slayer']}>
                        <div className={main['mainContainer__slide-slayer_items']}>
                            {
                                slideDescription && slideDescription.logros.map(({ icon, number, desc }) => {
                                    return (
                                        <div key={desc} className={main['mainContainer__slide-slayer_item']}>
                                            {
                                                icon &&
                                                <figure>
                                                    <Image
                                                        src={icon}
                                                        width={60}
                                                        height={60}
                                                        objectFit='cover'
                                                        loading='eager'
                                                        alt='icon service'
                                                    />
                                                </figure>
                                            }
                                            <h2>{number}</h2>
                                            <p>{desc}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            slideDescription &&
                            <div className={main['mainContainer__slide-slayer_description']}>
                                <h1>{slideDescription.description.title}</h1>
                                <p>{slideDescription.description.desc}</p>
                                <a target='_blank' href={slideDescription.description.link}>
                                    Conoce más
                                </a>
                            </div>
                        }
                    </div>
                }
                <ContenedorSlideShow ref={slideshow}>
                    {
                        multimedia.map(({ type, content, title, link }) => {
                            return (
                                <Slide key={title}>
                                    {
                                        type === 'video' ?
                                            <figure className={main['modalProyects']}>
                                                <Image objectFit='cover' layout='fill' src={content} loading={'lazy'} alt={title} />
                                            </figure> :
                                            <figure className={main['mainContainer__slide-img']}>
                                                <Image
                                                    src={content}
                                                    objectFit='cover'
                                                    layout='fill'
                                                    loading={'lazy'}
                                                    alt={title}
                                                />
                                            </figure>
                                    }
                                    {
                                        <div className={main['mainContainer__slide-info_slider']}>
                                            {
                                                title === 'Operador de pila' &&
                                                <>
                                                    <h2>Cierre del</h2>
                                                    <h1>Operador <br />Pila</h1>
                                                    <a className={main['button__info-slider']} href={link} target='_blank'>
                                                        Ingresa aquí
                                                    </a>
                                                </> ||
                                                title === 'Nuestras cajas en Colombia' &&
                                                <>
                                                    <h2>Nuestras</h2>
                                                    <h1>Cajas en <br />COLOMBIA</h1>
                                                    <a className={main['button__info-slider']} href={link} target='_blank'>
                                                        Ingresa aquí
                                                    </a>
                                                </>
                                            }
                                        </div>
                                    }
                                    {
                                        title === 'Festival caja de cine' &&
                                        <>
                                            <a href={link} className={main['mainContainer__slide-info_fest']}>
                                                <h1>Festival Caja de Cine</h1>
                                                <h3>www.festivalcajadecine.com</h3>
                                            </a>
                                        </> ||
                                        title === 'Fedecajas académico' &&
                                        <>
                                            <div className={main['mainContainer__slide-info_fest']}>
                                                <h2>Fedecajas Académico</h2>
                                                <a href={link} className={main['button__info-slider']}>Ingresa aquí</a>
                                            </div>
                                        </>
                                    }
                                </Slide>
                            )
                        })
                    }
                </ContenedorSlideShow>

                <ArrowLeft onClick={back} left alt="flecha left">
                    <AiOutlineArrowLeft size={40} color='whitesmoke' />
                </ArrowLeft>
                <ArrowRight onClick={next} right alt="flecha right">
                    <AiOutlineArrowRight size={40} color='whitesmoke' />
                </ArrowRight>
            </section >
        )
    }
}

const ContenedorSlideShow = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    border-radius: inherit;
    height: inherit;
`;

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: inherit;
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    height: inherit;
    border-radius: inherit;
    z-index: 1;
`;

const ArrowLeft = styled.div`
    position: absolute;
    bottom: 55%;
    left: 30px;
    border-radius: 100%;
    background-color: rgba(16, 50, 18, 0.85);
    cursor: pointer;
    z-index: 5;
    transition: .2s;
    :active {
        transform: scale(.9);
    }
    :hover {
        background-color: #00cc00;
        opacity: 1;
    }
`

const ArrowRight = styled.div`
    position: absolute;
    bottom: 55%;
    right: 30px;
    border-radius: 100%;
    background-color: rgba(16, 50, 18, 0.85);
    cursor: pointer;
    z-index: 5;
    transition: .2s;
    :active {
        transform: scale(.9);
    }
    :hover {
        background-color: #00cc00;
        opacity: 1;
    }
`

export default Slider;