import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 8,
    },
    titulo: {
        fontSize: RFValue(15),
        color: '#fafafa',
        marginTop: 16,
    }
});

export default styles;