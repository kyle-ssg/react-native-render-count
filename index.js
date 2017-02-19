import React, {Component, PropTypes} from 'react';
import {Text} from 'react-native';

const RenderCount = class extends Component {
    displayName: 'RenderCount';

    constructor (props, context) {
        super(props, context);
        this.count = 1;
    }

    componentWillUpdate () {
        this.count++;
    }

    render () {
        return (
            <Text>{this.count}</Text>
        );
    }
};

RenderCount.propTypes = {};

module.exports = RenderCount;