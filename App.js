import React from 'react';
import { Text, View } from "react-native"
 
class App extends React.Component {
    // TODO (1) Define the state object
    state = {
        seconds: 0
    }
 
    // TODO (2) Create tick function to update seconds state
    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }))
    }
 
    // TODO (3) Create interval referrence inside componentDidMount with setInterval value to create the timer 
    // & call tick function inside the setInterval callbacks
    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick()
        }, 1000); // in milliseconds
    }
 
    // TO DO (4) call clearInterval function to remove the interval referrence inside componentWillUnmount
    componentWillUnmount() {
        clearInterval(this.interval)
    }
 
    render() {
        return (
            <View style={{ flex: 1, margin: 16 }}>
                <View>
                    {/* TO DO (5) use this.state.seconds to get the value from our state */}
                    <Text>{"Seconds : " + this.state.seconds}</Text>
                </View>
            </View>
        )
    }
}
 
export default App
 