import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
 
const App = () => {
    // TODO (1) Create score object state using useState
    const [score, setScore] = useState(0) // default value is 0
 
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={"rgb(220,81,83)"} barStyle={"light-content"} />
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreTitleText}>{"Score"}</Text>
                {/* TODO (2) asign score state for our Text */}
                <Text style={styles.scoreValueText}>{score}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    // TODO (3) call setScore function that we've created from useState 
                    // inside onPress to increase the score value
                    onPress={() => setScore(score + 1)}>
                    <Text style={styles.buttonText}>{"+"}</Text>
                </TouchableOpacity>
                <View style={styles.horizontalSeparator} />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    // TODO (4) call setScore function that we've created from useState 
                    // inside onPress to decrease the score value
                    onPress={() => setScore(score - 1)}>
                    <Text style={styles.buttonText}>{"-"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: "rgb(240,81,83)"
    },
    scoreContainer: {
        alignItems: "center"
    },
    scoreTitleText: {
        textAlign: "center", fontSize: 64, color: "#FFF8DE"
    },
    scoreValueText: {
        textAlign: "center", fontSize: 128, color: "#FFF8DE"
    },
    buttonContainer: {
        flexDirection: "row", marginTop: 8,
    },
    buttonStyle: {
        flex: 1, backgroundColor: "#FFF8DE", aspectRatio: 1.5, alignItems: "center", justifyContent: "center"
    },
    buttonText: {
        fontSize: 64, color: "rgb(240,81,83)"
    },
    horizontalSeparator: {
        marginHorizontal: 8
    }
})
 
export default App