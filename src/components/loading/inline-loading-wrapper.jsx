import React from 'react';
import LoadingWrapper from './loading-wrapper';

class InlineLoadingWrapper extends React.Component {

    render() {
        return (
            <LoadingWrapper
                {...this.props}
                isInline={true}
            >
                {this.props.children}
            </LoadingWrapper>
        );
    }
}

export default InlineLoadingWrapper;
