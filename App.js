import React, { useState, useEffect } from 'react';
import { Text, View } from "react-native"
 
// TODO (1) We make our Function Component
const App = () => {
    // TODO (2) Create our states using useState, it looks like a tupple, 
    // but it's actually an array of 0 for the state object 
    // & 1 for the function to change the state. Lastly, there's a useState(0)
    // it's to define our default value
    const [seconds, setSeconds] = useState(0)
 
    // TODO (3) Using useEffect to trigger our setInterval functions
    useEffect(() => {
        // TODO (4) Creating interval reference with setInterval and calls setSeconds
        // to change our state value
        const interval = setInterval(() => {
            setSeconds(seconds + 1)
        }, 1000); // in milliseconds
        return () => clearInterval(interval)
    }, [seconds])
 
    // TODO (5) Create the View
    return (
        <View style={{ flex: 1, margin: 16 }}>
            <View>
                {/* TO DO (6) call seconds, which is the state object we've created in TODO (2) */}
                <Text>{"Seconds : " + seconds}</Text>
            </View>
        </View>
    )
}
 
export default App