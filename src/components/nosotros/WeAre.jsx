import Image from "next/image";
import { useEffect } from "react";

import main from '@styles/main.module.scss';

function WeAre(props) {
    const { nosotros } = props;

    const handlerHover = (event) => {
        var target = event.target;
        if (target.scrollTop) {
            target.scrollTop = 0;
        }
    }

    useEffect(() => {
    }, [])

    return (
        <section className={main["container__dynamic-cards"]}>
            {
                nosotros.map(({ index, img, title, description }) => {
                    return (
                        <div key={title}>
                            <figure>
                                <Image
                                    src={img}
                                    alt={"¿Quienes somos?"}
                                    objectFit="cover"
                                />
                            </figure>
                            <div className={main["card-dynamic"]}>
                                <a onMouseLeave={handlerHover}>
                                    <div className={main["card-dynamic-content"]}>
                                        <h3 className={main["card-dynamic-title"]} tabIndex={`${index}`}>{title}</h3>
                                        <p tabIndex={`${index}`}>{description}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}

export default WeAre;