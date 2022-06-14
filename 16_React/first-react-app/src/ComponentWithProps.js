import PropTypes from 'prop-types';

const ComponentWithProps = ({header, content, number}) => {
    return (
        <>
            <h1>headerProp: {header}</h1>
            <p>contentProp: {content}</p>
            <p>numberProp: {number}</p>
            {/* <p>nonexistentProp: {nonexistent}</p> not defined -> ERROR*/}
        </>
    );
}

export default ComponentWithProps;

// validation
ComponentWithProps.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.number
}

// defaults
ComponentWithProps.defaultProps = {
    header: "default header",
}
