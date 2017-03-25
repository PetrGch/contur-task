function sortCity(a, b) {
    return a.City - b.City;
}

export default class CityList extends React.Component {
    render() {
        let filter = this.props.filter;
        let city = this.props.city;

        let citysList = city.filter((item) => {
            let inputData = item.City.toLowerCase().trim();
            let inputFilter = filter.toLowerCase().trim();
            return inputData.startsWith(inputFilter) && inputFilter !== '';
        }).sort(sortCity).map((item, index) => {

            return (
                <li key={item.Id} className={index === 0 ? 'list__item list__item_active' : 'list__item'} >
                    <span>{item.City}</span>
                </li>
            )
        });

        return (
            <div className='list-wrap'>
                <ul className='list'>
                    {citysList}
                </ul>
                <div className='list-message'>
                    <span>Показанно {citysList.length >= 7 ? 7: citysList.length} из {citysList.length} найденых
                        городов. Уточните запрос, чтобы увидетьостальные</span>
                </div>
            </div>
        );
    }
}

CityList.propTypes = {
   filter: React.PropTypes.string,
   city: React.PropTypes.array
};
