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
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        let inputData;
        const { getCity } = this.props.pageActions;
        const { city, dropDownList, isFetching, filter, error } = this.props.getCity;

        return (
            <form className='form' onSubmit={this.handleSubmit}>
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
                <div className={error ? 'form__error' : 'form__error form__error_display-none'}>
                    <span>Что-то пошло не так. Проверьте соединение с интернетом и попробуйте снова</span>
                    <button
                      onClick={() => {
                          getCity(inputData.value);
                      }}
                    >Обновить</button>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    pageActions: React.PropTypes.object.isRequired,
    getCity: React.PropTypes.object.isRequired
};
