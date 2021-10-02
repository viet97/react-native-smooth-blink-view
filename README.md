# react-native-smooth-blink-view

<!--
 * @email: quocvietdang97@gmail.com
-->

**react-native-smooth-blink-view** is a simple - easy use component for React-Native. (iOS & Android)

## Installation

```
yarn add react-native-smooth-blink-view
```

## Usage

```
 <BlinkView 
    delayVisible={300}
    delayInvisible={0}
    duration={500}
    blinking>
    ....
 </BlinkView>
```

## Props
| name | desc | type | default
| --- | --- | --- | --- |
| `blinking` | Is the element start blinking animation. | boolean | `true`
| `duration` | Duration of blinking animated.  | number | `500`
| `delayVisible` | Delay after component is visible.  | number | `300`
| `delayInvisible` | Delay after component is hide.  | number | `0`
| `containerStyle` | Container style.  | ViewStyle | `{}`

