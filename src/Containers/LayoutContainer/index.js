import React from 'react';
import {
    HeaderComponent,
    SidePanelComponent,
    FooterComponent,
} from '../../Components';

const LayoutContainer = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderComponent />
            <SidePanelComponent />
            {children}
            <FooterComponent />
        </>
    );
};

export default LayoutContainer;
