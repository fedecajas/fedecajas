import Image from "next/image";
import logo from '@logos/logo-s.png';

import main from '@styles/main.module.scss';

function Title(props) {
    const { title, backgroundColor } = props

    const backgroundStyles = {
        backgroundColor: `${backgroundColor}`
    }

    return (
        <div
            style={backgroundStyles}
            className={main['title__container']}
        >
            <figure className={main['title__container-logo']}>
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt={'logo fedecajas'}
                    loading="lazy"
                />
            </figure>
            <h1 className={main['title__container-h1']}>{title}</h1>
        </div>
    );
}

export default Title;