import CityList from './CityList/CityList';

const SetSpinner = (props) => {
    return (
        <img
          src='./source/img/loader_spinner.gif'
          alt='loader spiner'
          className='form__input-spinner' />
    )
};

export default class Form extends React.Component {
    render() {
        let inputData;
        const { getCity } = this.props.pageActions;
        const { city, dropDownList, isFetching, filter, error } = this.props.getCity;

        console.log(isFetching);
        return (
            <form className='form'>
                <div className='form__input'>
                    <input
                      onChange={() => {
                          getCity(inputData.value);
                      }}
                      type='text'
                      placeholder='Начните ввод кода или названия'
                      ref={(input) => {inputData = input}}
                    />

                    {
                        isFetching ? <SetSpinner/> : null
                    }

                </div>
                <div className={dropDownList ? 'form__list' : 'form__list form__list_display-none'}>
                    <CityList filter={filter} city={city} />
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    pageActions: React.PropTypes.object.isRequired,
    getCity: React.PropTypes.object.isRequired
};
