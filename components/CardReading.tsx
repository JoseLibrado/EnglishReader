import { PropsWithChildren } from "react";
import { Platform, StyleSheet, useWindowDimensions, View } from "react-native";



const CardReading = ( { children }: PropsWithChildren) => {

    const DIMESION_SCREEN = useWindowDimensions();

    return(
        <View 
            style={[{ 
                width: Platform.OS === 'web' ? (DIMESION_SCREEN.width * .3 ) : 150,
                height: Platform.OS === 'web' ? (DIMESION_SCREEN.width * .3 ) : 200,
        },styles.CardContainer]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1,
        shadowColor: 'black',
        padding: 10,
    }
});

export default CardReading;