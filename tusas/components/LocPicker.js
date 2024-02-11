import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const stops = ['1100', '1030', '1050', '960', '950', '810', 'B4', 'B5', '170', '210', '610', '280', 'G1'];

export function LocPicker ({value, setValue}) {
    return (
        <Picker
            style={styles.pickerStyles}
            mode={'dropdown'}
            selectedValue={value}
            onValueChange={(itemValue, _) =>
                setValue(itemValue)
            }>
            <Picker.Item key={"default"} label={"Seçiniz..."} value={0}/>
            {
                stops.map(stop=> <Picker.Item key={stop} label={stop} value={stop}/>)
            }
        </Picker>
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
