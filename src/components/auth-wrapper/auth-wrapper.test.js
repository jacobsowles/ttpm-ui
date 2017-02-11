import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import AuthWrapper from './auth-wrapper.jsx';

(function() {
    describe('AuthWrapper', () => {
        const component = TestUtils.renderIntoDocument(
            <AuthWrapper>
                <p>Content</p>
            </AuthWrapper>
        );
        const renderedDOM = () => ReactDOM.findDOMNode(component);

        it('renders children', () => {
            expect(renderedDOM().children[0].tagName)
                .toEqual('P');
        });
    });
})();
