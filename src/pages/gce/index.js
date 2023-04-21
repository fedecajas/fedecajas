import Image from "next/image";
import gce from '@images/gce.png'

import main from '@styles/main.module.scss';

function Index(props) {
    return (
        <section className={main['gce']}>
            <div>
                <h2>Quienes Somos?</h2>
                <p>La Federación Nacional de Cajas de Compensación Familiar -FEDECAJAS, es una entidad privada, sin ánimo de lucro, constituida como tal el 17 de octubre de 1980, mediante personería jurídica No 5423, expedida por el Ministerio de la Protección Social.</p>
            </div>
            <figure className={main['gce__figure']}>
                <Image
                    src={gce}
                    objectFit="cover"
                    alt="gce banner"
                    loading="lazy"
                />
            </figure>
        </section>
    );
}

export default Index;