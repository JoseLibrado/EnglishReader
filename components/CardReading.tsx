import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";



const CardReading = ({ children }: PropsWithChildren) => {

    return (
        <View
            style={[{
                width: 150,
                height: 150,
            }, styles.CardContainer]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: '#c55532ff',
        borderRadius: 10,

        // --- Android Shadow ---
        elevation: 4,

        // --- iOS Shadow ---
        shadowColor: '#e9e9e9ff',
        shadowOffset: {
            width: 0,
            height: 2, // Higher number = shadow moves down
        },
        shadowOpacity: .3, // Strength of the shadow (0.0 to 1.0)
        shadowRadius: 10, // Blur of the shadow
    }
});

export default CardReading;