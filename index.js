

import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

const propsType = {
    delayVisible: PropTypes.number,
    delayInvisible: PropTypes.number,
    blinking: PropTypes.bool,
    duration: PropTypes.number,
    containerStyle: PropTypes.object,
};
const defaultProps = {
    delayVisible: 300,
    delayInvisible: 0,
    blinking: true,
    duration: 500,
    containerStyle:{}
};

export default class BlinkView extends PureComponent<propsType> {
    constructor(props) {
        super(props);
        this.opacity = new Animated.Value(1);
        this.opacityValue = 1;
        this.opacity.addListener(({ value }) => this.opacityValue = value);
        this.mounted = true;
    }

    startAnimatedBlinking = () => {
        const { delayVisible, delayInvisible, duration, blinking } = this.props;
        const toValue = this.opacityValue === 1 ? 0 : 1;
        if (!this.mounted || !blinking) { return; }
        Animated.timing(this.opacity, {
            duration,
            toValue,
            useNativeDriver: true,
        }).start(() => {
            if (toValue === 1) {
                setTimeout(this.startAnimatedBlinking, delayVisible);
                return;
            }
            setTimeout(this.startAnimatedBlinking, delayInvisible);
            return;
        });
    }
    componentDidMount = () => {
        this.startAnimatedBlinking();
    };

    componentWillUnmount = () => {
        this.mounted = false;
    }

    render() {
        const { children, blinking,containerStyle } = this.props;
        const style = {
            opacity: !blinking ? 1 : this.opacity,
        };
        return (
            <Animated.View
                style={[style,containerStyle]}>
                {children}
            </Animated.View>
        );
    }
}

BlinkView.propTypes = propsType;
BlinkView.defaultProps = defaultProps;
