import logo from '@logos/logo.png'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

const iconSize = 23
const colorIcon = '#ced4da'

export const thisLogo = logo

export const redes = [
    {
        red: 'facebook',
        link: 'https://www.facebook.com/FedecajasCol/',
        icon: () => (
            <AiFillFacebook color={colorIcon} size={`${iconSize}`} />
        )
    },
    {
        red: 'twitter',
        link: 'https://twitter.com/fedecajas',
        icon: () => (
            <AiFillTwitterSquare color={colorIcon} size={`${iconSize}`} />
        )
    },
    {
        red: 'instagram',
        link: 'https://www.instagram.com/fedecajas/?hl=es',
        icon: () => (
            <AiFillInstagram color={colorIcon} size={`${iconSize}`} />
        )
    },
]

export const contact = {
    celphone1: '315 219 7435',
    celphone2: '314 394 7945',
    email1: 'contactenos@fedecajas.com',
    email2: 'protecciondedatos@fedecajas.com'
}