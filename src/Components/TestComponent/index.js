import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUpdateHelloText } from '../../Actions/dashboardAction';
import { LayoutContainer } from '../../Containers';
import { ContentWrapper } from './style';

const TestComponent = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUpdateHelloText('Hello You there'));
    }, []);

    useSelector((state) => console.log('state ----> ', state))

    return (
        <LayoutContainer>
            <ContentWrapper>Hello TestComponent</ContentWrapper>
        </LayoutContainer>
    );
};

export default TestComponent;
