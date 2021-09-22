/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from './Logo';
import Routes from './Routes';



class App extends React.PureComponent {

    render() {
        return (
            <>
                <Logo  />
                <Routes />
            </>
        );
    }

}

export default App;
