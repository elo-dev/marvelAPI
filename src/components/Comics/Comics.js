import { API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root'
import Error from '../Error/Error';
import Characters from '../Characters/Characters';
import classes from './Comics.css'

class Comics {

    renderComics(data){
        let htmlContent = ''

        data.map(({ id, title, thumbnail: {path, extension}}) => {
            if(path.lastIndexOf(IMG_NOT_AVAILABLE) === -1){
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS

                htmlContent += `
                    <li class="comics__item ${classes.comics__item}" data-uri=${uri}>
                        <span class=${classes.comics__title}>${title}</span>
                        <img class="img__contain ${classes.comics__img}" src=${imgSrc} />
                    </li>
                `
            }
        })

        const htmlWrapper = `
            <ul class=${classes.comics_container}>
                ${htmlContent}
            </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper
    }

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        data ? this.renderComics(data) : Error.render() 
    }

    eventListener(){
        document.querySelectorAll('.comics__item').forEach(element => {
            const dataUri = element.getAttribute('data-uri')
            element.addEventListener('click', () => {
                Characters.render(dataUri)
            })
        })
    }
}

export default new Comics()