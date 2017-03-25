export default class CityList extends React.Component {
    render() {
        let { city, cityLength } = this.props;

        let citysList = city.map((item, index) => {
            return (
                <li key={item.Id} className={index === 0 ? 'list__item list__item_active' : 'list__item'} >
                    <span>{item.City}</span>
                </li>
            )
        });

        return (
            <div className='list-wrap'>
                <ul className={citysList.length !== 0 ? 'list' : 'list list_display-none'}>
                    {citysList}
                </ul>
                <div className={cityLength ? 'list-message list-message_display-none' : 'list-message'}>
                    <span className={
                        citysList.length !== 0 ?
                            'list-message__item list-message__item_search' :
                            'list-message__item list-message__item_search-none'
                    }
                    >Показанно {citysList.length >= 7 ? 7: citysList.length} из {citysList.length} найденых
                        городов. Уточните запрос, чтобы увидетьостальные</span>
                    <span className={
                        citysList.length === 0 ?
                            'list-message__item list-message__item_notfound' :
                            'list-message__item list-message__item_notfound-none'
                    }>Не найдено</span>
                </div>
            </div>
        );
    }
}

CityList.propTypes = {
   city: React.PropTypes.array.isRequired,
   cityLength: React.PropTypes.bool.isRequired
};
