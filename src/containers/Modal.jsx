import { useEffect } from "react"
import { createPortal } from "react-dom"

/* Styles */
import main from '@styles/main.module.scss';

/* React icons */
import {MdOutlineCancel} from "react-icons/md";

const Modal= ({ children, modal, setModal }) => {

    useEffect(() => {
        setModal(true)
        return () => setModal(false)
    }, [])

    const handleClick = () => {
        setModal(false)

        const portal = document.querySelector('#myportal')
        portal.classList.add('displayNone')
    }

    return modal
        ? createPortal(
        <section onClick={() => handleClick()} className={main['modal']}>
            {children}
            <MdOutlineCancel
                size={40}
                color={'#FFF'}
                className={main['modal__close']}
                onClick={() => handleClick()}
            />
        </section>,
        document.querySelector("#myportal")) : null
}

export default Modal