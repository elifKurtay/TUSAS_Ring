import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TEXTS} from "./constants";
import {LocPicker} from "./components/LocPicker";
import {useEffect, useState} from "react";
import {getNextTime} from "./data_retriever";

export default function App() {
    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedDestination, setSelectedDestination] = useState();
    var solutionText = "";

    useEffect(() => {
        console.log(selectedLocation);
        if(selectedLocation !== "default" && selectedDestination !== "default") {
            const times = getNextTime(selectedLocation, selectedDestination);
            solutionText = TEXTS.next + times;
        }
    }, [selectedLocation, selectedDestination]);

    return (
    <View style={styles.container}>
      <Text>{TEXTS.title}</Text>
      <Text>{TEXTS.from}</Text>
      <LocPicker value={selectedLocation} setValue={setSelectedLocation} />
      <Text>{TEXTS.to}</Text>
      <LocPicker value={selectedDestination} setValue={setSelectedDestination} />
      <Text>{solutionText}</Text>
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
