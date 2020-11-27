import MenuItem from './../MenuItem';
import './feature.scss'
const Feature = (props) => {
    return (
        <section className="feature">
            {props.heading &&
                <h4 className="feature-heading">
                    {props.heading}
                </h4>
            }
            {props.data.map(item => <MenuItem component="" key={item.id} data={item} edit={item.edit}/>)}
        </section>
    );
};

export default Feature;