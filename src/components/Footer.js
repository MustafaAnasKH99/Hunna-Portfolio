import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
        
        Developed by: <a target="_blank" href="https://www.mustafaanas.com/" alt="https://www.mustafaanas.com/" >&copy; Mustafa Anas</a>
        
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
