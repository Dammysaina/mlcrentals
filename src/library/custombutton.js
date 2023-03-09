/* eslint-disable react/prop-types */
import React from 'react';
import Button from './button_styles';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <Button buttonColor={props.buttonColor} buttonWidth={props.buttonWidth} buttonHeight={props.buttonHeight}>
            {props.children}
        </Button>
    )
};

Button.propTypes = {
    buttonColor: PropTypes.string,
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string
}

export default CustomButton;