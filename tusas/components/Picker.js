import { StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState} from "react";

const stops = ['1100', '1030', '1050', '960', '950', '810', 'B4', 'B5', '170', '210', '610', '280', 'G1'];

export default function Picker() {
    const [selectedLocation, setSelectedLocation] = useState();

    return (
        <View style={styles.container}>
            <Picker
                style={styles.pickerStyles}
                mode={'dropdown'}
                selectedValue={selectedLocation}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLocation(itemValue)
                }>
                {
                    stops.map(stop=> <Picker.Item key={stop} label={stop} value={stop}/>)
                }
            </Picker>
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
    pickerStyles: {
    width:'70%',
        backgroundColor:'gray',
        color:'white'
    }
});
