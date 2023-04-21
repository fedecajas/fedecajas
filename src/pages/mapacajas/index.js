import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Presentation from '@components/cajas/Presentation';

/* Data */
import { cajas } from '@static/cajas';
import map from '@images/mapa/map-colombia2.png';

import main from '@styles/main.module.scss';

function Index(props) {
    const [card, setCard] = useState(false);
    const [infoCard, setInfoCard] = useState({
        ruta: '',
        title: '',
        logo: '',
        dep: '',
        description: '',
        coordinates: {}
    })

    const handleShowCard = (ruta, title, logo, dep, content, coordinates) => {
        setCard(true)
        setInfoCard({
            ruta: ruta,
            title: title,
            logo: logo,
            dep: dep,
            description: content.nosotros,
            coordinates: {
                top: coordinates.top + '20%',
                left: coordinates.left + '20%'
            }
        })
    }

    return (
        <section className={main['map__container']}>
            <Presentation
                className={'presentation__mapa'}
                title={'Mapa interactivo Fedecjas'}
                subtitle={'Para interactuar haz clic sobre cada uno de los items'}
            />
            <figure className={main['map__container-figure']}>
                <figure>
                    <Image
                        src={map}
                        alt='Mapa de Colombia con cajas'
                        useMap="#workmap"
                        objectFit={'cover'}
                        layout={'intrinsic'}
                    />
                </figure>
                {
                    cajas.map(({ ruta, title, logo, coordinates, dep, content }, index) => {
                        if (coordinates) {
                            const thisStyle = {
                                top: `${coordinates.top}`,
                                left: `${coordinates.left}`
                            }
                            return (
                                ruta === 'comcaja' ?
                                    coordinates.map((coordinate) => {
                                        const pointStyle = {
                                            top: `${coordinate.top}`,
                                            left: `${coordinate.left}`
                                        }
                                        return (
                                            <div
                                                key={coordinate.top}
                                                className={main['map__container-point']}
                                                onMouseEnter={() => handleShowCard(ruta, title, logo, dep, content, coordinates, ruta)}
                                                onClick={() => handleShowCard(ruta, title, logo, dep, content, coordinates, ruta)}
                                                style={pointStyle}>
                                                <span>{index + 1}</span>
                                            </div>
                                        )
                                    }) :
                                    <div
                                        key={title}
                                        className={main['map__container-point']}
                                        onMouseEnter={() => handleShowCard(ruta, title, logo, dep, content, coordinates, ruta)}
                                        onClick={() => handleShowCard(ruta, title, logo, dep, content, coordinates, ruta)}
                                        style={thisStyle}>
                                        <span>{title === 'Comfamiliar Camacol' ? index + 2 : index + 1}</span>
                                    </div>
                            )
                        }
                    })
                }
            </figure>

            {
                card &&
                <article className={main['map__container-card']}>
                    {
                        infoCard != undefined &&
                        <>
                            <figure>
                                <Image
                                    src={infoCard.logo}
                                    alt={'logo caja'}
                                    objectFit={'cover'}
                                    loading={'eager'}
                                    layout={'intrinsic'}
                                />
                            </figure>
                            <h2>{infoCard.title}</h2>
                            <h3>{infoCard.dep}</h3>
                            <Link href={`/cajas/${infoCard.ruta}`}>
                                <a>Ver más</a>
                            </Link>
                        </>
                    }
                </article>
            }
        </section>
    );
}

export default Index;