import { Provider } from 'react-redux';
import AutocomplieCity from '../../container/AutocompliteCity';
import configureStore from '../../redux/store/configureStore'

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className='form-wrap'>
                    <AutocomplieCity />
                </div>
            </Provider>
        );
    }
}

