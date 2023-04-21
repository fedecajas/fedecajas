import Image from "next/image";
import Link from "next/link";
import { service } from "@static/normativa";

/* styles */
import main from '@styles/main.module.scss';

function Service(props) {
    return (
        <section className={main['services']}>
            {
                service.map(({ logo, title, desc, ancla }, index) => {
                    return (
                        <div key={index}>
                            {
                                logo &&
                                <figure>
                                    <Image
                                        src={logo}
                                        alt="Icon service"
                                        width={80}
                                        height={80}
                                        priority={true}
                                        loading="eager"
                                    />
                                </figure>
                            }
                            <h2>{title}</h2>
                            <p>{desc}</p>
                            {
                                title === 'PORTAFOLIO CCF' ?
                                <Link  href={ancla}>Leer más</Link> :
                                <a href={ancla} target={"_blank"}>Leer más</a>
                            }
                        </div>
                    )
                })
            }
        </section>
    );
}

export default Service;