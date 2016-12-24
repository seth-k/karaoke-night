import React, { PropTypes } from 'react';
import '../css/Singer.css';

const Singer = props => (
    <div className="singer">
        <span className="singerName">{props.name}</span>
    </div>
);

Singer.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Singer;