import main from '@styles/main.module.scss';
import { servicios } from '@static/servicios';
import Image from 'next/image';

function OurServices(props) {
    return (
        <section className={main['card-container']}>
            {
                servicios.map(({ img, title, paragraph }) => {
                    return (
                        <div key={title} className={main['card']}>
                            {
                                img &&
                                <figure>
                                    <Image
                                        src={img}
                                        alt="background image"
                                        objectFit={'cover'}
                                        layout={'fill'}
                                        loading={'lazy'}
                                    />
                                </figure>
                            }
                            <div className="card-content">
                                <h2>
                                    {title}
                                </h2>
                                <p>{paragraph}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}

export default OurServices;