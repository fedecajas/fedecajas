import main from '@styles/main.module.scss';
import { useState } from 'react';

function Form(props) {

    const [formState, setForm] = useState({
        name: '',
        email: '',
        mensaje: '',
    })

    const handleChange = async ({ target: { name, value, type } }) => {
        setForm({
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        console.log('mensaje enviado')
        e.preventDefault()
        setForm({
            name: '',
            email: '',
            mensaje: ''
        })
    }
    return (
        <div className={main['form__container']}>
            <h2>Nos interesa saber su opinión</h2>
            <form action="">
                <input onChange={handleChange} maxLength={'32'} value={formState.name} type="text" name="name" id="name" placeholder="Digita tu Nombre*" required />
                <input onChange={handleChange} maxLength={'32'} value={formState.email} type="email" name="email" id="email" placeholder="Digita tu correo*" required />
                <textarea onChange={handleChange} maxLength={'32'} value={formState.mensaje} name="mensaje" id="" cols="30" rows="10" placeholder="Mensaje..."></textarea>
                <button onClick={handleSubmit} type='submit'>Enviar</button>
            </form>
        </div>
    );
}

export default Form;