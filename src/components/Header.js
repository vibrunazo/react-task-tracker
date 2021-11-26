import './Header.css'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    return (
        <header className="header">
            <h2>{title}</h2>
            <Button color='green' text='Hello' />
            <Button text='there' />
            <Button color='blue' text='world' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
