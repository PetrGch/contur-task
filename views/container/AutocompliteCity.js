import { connect } from 'react-redux';
import * as pageActions from '../redux/actions/index';
import Form from '../components/Form/From';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        getCity: state.getCity,
        checkLenght: state.checkLenght
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
};

const AutocompliteCity = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default AutocompliteCity;
