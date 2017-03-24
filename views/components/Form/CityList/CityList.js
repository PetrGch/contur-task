export default class CityList extends React.Component {
    constructor(props) {
        super(props);

        this.filterCity = this.filterCity.bind(this);
    }

    filterCity(filterValue, data) {
        let citysList = data.filter((item) => {
            let inputData = item.City.toLowerCase().trim();
            let inputFilter = filterValue.toLowerCase().trim();
            if (inputData.startsWith(filterValue.toLowerCase()) && inputFilter !== '') {
                return true;
            }

            return false;
        }).map((item) => {
            return (
                    <li key={item.Id} className='list__item'>
                        <span>{item.City}</span>
                    </li>
                )
        });

        return citysList;
    }

    render() {
        let filter = this.props.filter;
        let city = this.props.city;

        return (
            <ul className='list'>
                {this.filterCity(filter, city)}
            </ul>
        );
    }
}

CityList.propTypes = {
   filter: React.PropTypes.string,
   city: React.PropTypes.array
};
