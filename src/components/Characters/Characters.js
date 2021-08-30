import { IMG_STANDARD_XLARGE } from '../../constants/api'
import { ROOT_MODAL } from '../../constants/root'
import { getDataApi } from '../../utils/getDataApi'
import Notification from '../Notification/Notification'
import classes from './Characters.css'
import imgCloseWhite from './img/Close-black.svg'

class Characters {
    renderCharacters(data){

    let htmlContent = ''

        data.map(({ id, name, thumbnail: {path, extension} }) => {

            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension

            htmlContent += `
                <li class=${classes.characters__item}>
                    <img class=${classes.characters__img} src=${imgSrc} />
                    <span class=${classes.characters__name}>${name}</span>
                </li>
            `
        })

        const htmlWrapper = `
            <div class=${classes.characters__wrapper}>
                <ul class=${classes.characters__container}>
                    ${htmlContent}
                </ul>
                <button onClick="modal.innerHTML = ''" class=${classes.characters__close} style="background-image: url(${imgCloseWhite})"></button>
            </div>
        `

        ROOT_MODAL.innerHTML = htmlWrapper

    }

    async render(dataUri){
        const data = await getDataApi.getData(dataUri)

        data.length ? this.renderCharacters(data) : Notification.render()
    }
}

export default new Characters()