import React from 'react';
import { Header, Wrapper, Footer, MobileUtil } from './layout';

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Header />

                <Wrapper />

                <Footer />

                <MobileUtil />
            </div>
        );
    }
}

export default App;
