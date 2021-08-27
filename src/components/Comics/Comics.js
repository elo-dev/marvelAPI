import { API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root'
import './Comics.css'

class Comics {
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        let htmlContent = ''

        data.map(({ id, title, thumbnail: {path, extension}}) => {
            if(path.lastIndexOf(IMG_NOT_AVAILABLE) === -1){
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS

                htmlContent += `
                    <li class="comics__item" data-uri=${uri}>
                        <span class="comics__title">${title}</span>
                        <img class="comics__img" src=${imgSrc} />
                    </li>
                `
            }
        })

        const htmlWrapper = `
            <ul class="comics_container">
                ${htmlContent}
            </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper
    }

    eventListener(){
        document.querySelectorAll('.comics__item').forEach(element => {
            const dataUri = element.getAttribute('data-uri')
            element.addEventListener('click', () => {
                console.log(dataUri)
            })
        })
    }
}

export default new Comics()