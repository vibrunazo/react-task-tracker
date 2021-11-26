import './Header.css'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('clicked a header button')
    }

    return (
        <header className="header">
            <h2>{title}</h2>
            <Button text='Hello' onClick={onClick} />
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
