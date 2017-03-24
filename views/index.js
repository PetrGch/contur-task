import { Router, browserHistory } from 'react-router'
import router from './router';
import './index.pcss';

ReactDOM.render(
    <Router routes={router} history={browserHistory} />,
    document.getElementById('root')
);
