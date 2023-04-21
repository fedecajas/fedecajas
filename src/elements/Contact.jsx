import main from '@styles/main.module.scss';

export default function Contact({ redes, contact }) {
    return (
        <div className={main['header__contact']}>
            <div className={main['header__contact-info']}>
                <p>Movil: +57-{contact.celphone1} - +57-{contact.celphone2}</p>
                <p>Email: {contact.email1} - {contact.email2}</p>
            </div>
            <div className={main['header__contact-redes']}>
                {
                    redes.map(({ red, link, icon }) => {
                        return (
                            <a key={red} href={link} target={'_blank'}>
                                {icon()}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}