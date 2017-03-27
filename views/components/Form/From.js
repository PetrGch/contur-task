import CityList from './CityList/CityList';

const SetSpinner = () => {
    return (
        <img
          src='img/loader_spinner.gif'
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
        const { getCity, checkLenght, selectCity, setCityActive } = this.props.pageActions;
        const { city, dropDownList, isFetching, filter, error } = this.props.getCity;
        const { length } = this.props.checkLenght;
        const { selectedCity } = this.props.selectedCity;

        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <div className={length ? 'form__input form__input_focus-error' : 'form__input'}>
                    <input
                      ref={(input) => {
                          inputData = input;
                          if (input !== null && selectedCity !== '') {
                              input.value = selectedCity;
                              selectCity('');
                          }
                        }
                      }
                      onChange={() => {
                          getCity(inputData.value);
                      }}
                      onBlur={() => {
                          checkLenght(city.length === 0 && filter !== '' && !error);
                      }}
                      onFocus={() => {
                          checkLenght(false);
                          if (inputData.value !== '') {
                              inputData.select();
                          }
                      }}

                      type='text'
                      placeholder='Начните ввод кода или названия'
                    />

                    {
                        isFetching ? <SetSpinner/> : null
                    }

                </div>
                <div className={(dropDownList && !length) ? 'form__list' : 'form__list form__list_display-none'}>
                    <CityList
                      city={city}
                      cityLength={length}
                      selectCity={selectCity}
                      setCityActive={setCityActive}
                    />
                </div>
                <div className={error ? 'form__error' : 'form__error form__error_display-none'}>
                    <span>Что-то пошло не так. Проверьте соединение с интернетом и попробуйте снова</span>
                    <button
                      onClick={() => {
                          getCity(inputData.value);
                      }}
                    >Обновить</button>
                </div>
                <span className={length ? 'form__blur' : 'form__blur form__blur_display-none'}>Выберите значение из списка</span>
            </form>
        );
    }
}

Form.propTypes = {
    pageActions: React.PropTypes.object.isRequired,
    getCity: React.PropTypes.object.isRequired,
    checkLenght: React.PropTypes.object.isRequired,
    selectedCity: React.PropTypes.object.isRequired,
    selectCity: React.PropTypes.object
};
