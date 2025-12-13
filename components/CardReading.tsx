import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";



const CardReading = ( { children }: PropsWithChildren) => {

    return(
        <View 
            style={[{ 
                width: 150,
                height: 150,
        },styles.CardContainer]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        // padding: 10,
    }
});

export default CardReading;