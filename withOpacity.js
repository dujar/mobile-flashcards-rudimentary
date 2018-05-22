import React from 'react';
import {Animated, View, Text} from 'react-native'

const withOpacity = Component => {

  class AnimatedComponent extends React.Component {

    state = {
      opacity : new Animated.Value(0),
      width: new Animated.Value(0),
      height: new Animated.Value(0)
    }

    componentDidMount(){
      const {opacity, width, height} = this.state
      Animated.timing(opacity,{
        toValue: 1,
        duration: 2000
      })
      .start()

      Animated.spring(width, {
        toValue: 200,
        speed: 5
      })
      .start()

      Animated.spring(height, {
        toValue: 200,
        speed: 5
      })
      .start()

    }


    render(){

      return(
        <View>
          <Component {...this.props}/>
        </View>
      )
    }
  }
  return AnimatedComponent
}

export default withOpacity