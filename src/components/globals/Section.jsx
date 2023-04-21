import { useState } from 'react';
import { BiZoomIn } from 'react-icons/bi'

import Image from 'next/image';
import Link from 'next/link';
import Modal from '@containers/Modal';

import main from '@styles/main.module.scss';

function Section(props) {
    const [modal, setModal] = useState(false);
    const [thisImg, setImg] = useState();

    const { content, backgroundColor } = props;

    const backgroundStyles = {
        backgroundColor: `${backgroundColor}`
    }

    const handleModal = (img) => {
        setImg(img)
        setModal(true)
    }

    return (
        <>
            <section style={backgroundStyles} className={main['global__section']}>
                {
                    content && content.map(({ img, title, description }) => {
                        return (
                            <div onClick={() => handleModal(img)} key={title} className={main['global__section-card']}>
                                <div>
                                    <figure>
                                        {
                                            img &&
                                            <Image
                                                src={img}
                                                width={1600 / 2}
                                                height={900 / 2}
                                                alt={title}
                                                objectFit='cover'
                                                loading='lazy'
                                            />
                                        }
                                    </figure>
                                    <BiZoomIn size={32} />
                                </div>
                                <div>
                                    <p>{description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <Link  href="/memorias">
                    <a>
                        Ver más...
                    </a>
                </Link> */}
            </section>
            {
                modal &&
                <Modal modal={modal} setModal={setModal}>
                    <div className={main['modal__containerimg']}>
                        {
                            thisImg ?
                                <figure>
                                    <Image
                                        src={thisImg}
                                        objectFit='cover'
                                        layout={'intrinsic'}
                                        alt={'Banner referidos'} />
                                </figure> :
                                <p>Cargando...</p>
                        }
                    </div>
                </Modal>
            }
        </>
    );
}

export default Section;