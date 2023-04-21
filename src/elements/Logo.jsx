import thisLogo from '@logos/logo.png';
import Image from 'next/image';

const Logo = ({ size }) => {

    return (
        <figure>
            <Image
                src={thisLogo}
                alt="Fedecajas logo"
                width={254 / size}
                height={45 / size}
                priority={true}
                loading="eager"
                layout='intrinsic'
            />
        </figure>
    );
}

export default Logo;