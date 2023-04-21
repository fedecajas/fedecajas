import React from 'react';

import main from '@styles/main.module.scss';

function Newsletter(props) {
    return (
        <div className={main['newsletter__container']}>
            <h1>Suscribete a nuestras noticias</h1>
            <form action="">
                <input type="email" name="email" id="email" placeholder='Escriba su email' />
                <button>
                    Suscribete!
                </button>
            </form>
        </div>
    );
}

export default Newsletter;