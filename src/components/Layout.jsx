import React  from 'react';
import Header  from './Header';
import Footer  from './Footer';

// children sirve para que pueda heredar layout

const Layout = ({ children } ) =>(

    <div className="App">
        <Header></Header>
            {children}
        <Footer></Footer>

    </div>
);
export default Layout;