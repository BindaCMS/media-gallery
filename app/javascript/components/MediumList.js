import React from 'react';
import PropTypes from 'prop-types';

class MediumList extends React.Component {
    renderMedia() {
        const { media } = this.props;

        return media.map(medium => (
            <li key={medium.id}>
                {medium.name}
                {' - '}
                {medium.description}
            </li>
        ));
    }

    render() {
        return (
            <section>
                <h2>Media</h2>
                <ul>{this.renderMedia()}</ul>
            </section>
        );
    }
}

MediumList.propTypes = {
    media: PropTypes.arrayOf(PropTypes.object),
};

MediumList.defaultProps = {
    media: [],
};

export default MediumList;
