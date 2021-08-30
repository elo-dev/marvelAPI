import 'regenerator-runtime/runtime';
import App from './components/App';
import Characters from './components/Characters/Characters';
import Comics from './components/Comics/Comics';

(async () => {
    await App.render();
    Comics.eventListener()
})();
