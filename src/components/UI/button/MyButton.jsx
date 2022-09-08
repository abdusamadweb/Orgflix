import React from 'react';

import './MyButton.scss';

const MyButton = ({ className, onClick, children }) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick ? () => onClick() : null}
        >
            {children}
        </button>
    );
};

export const OutlineButton = ({ className, onClick, children }) => {
    return (
        <MyButton
            className={`btn-outline ${className}`}
            onClick={onClick ? () => onClick() : null}
        >
            {children}
        </MyButton>
    )
}


export default MyButton;