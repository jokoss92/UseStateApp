import React from 'react';
import { StatusBar, Text, View, TouchableOpacity, StyleSheet } from "react-native"
 
class App extends React.Component {
    state = {
      score = 0
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <StatusBar backgroundColor={"rgb(220,81,83)"} barStyle={"light-content"} />
                <View style={styles.scoreContainer}>
                    <Text style={styles.scoreTitleText}>{"Score"}</Text>
                    <Text style={styles.scoreValueText}>{"0"}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=>{
                          this.setState({ score = this.state.score +1})
                        }}>
                        <Text style={styles.buttonText}>{"+"}</Text>
                    </TouchableOpacity>
                    <View style={styles.horizontalSeparator} />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=>{
                          this.setState({ score = this.state.score +1})
                        }}>
                        <Text style={styles.buttonText}>{"-"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
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
 