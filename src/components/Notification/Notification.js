import { ROOT_MODAL } from '../../constants/root'
import imgCloseBlack from '../Characters/img/close-black.svg'
import classes from './Notification.css'

class Notification {
    render(){
        const htmlContent = `
            <div class=${classes.notification__wrapper}>
                <p class=${classes.notification__text}>Нет данных</p>
                <button onClick="modal.innerHTML = ''" class=${classes.notification__close} style="background-image: url(${imgCloseBlack})"></button>
            </div>
        `

        ROOT_MODAL.innerHTML = htmlContent
    }
}

export default new Notification()