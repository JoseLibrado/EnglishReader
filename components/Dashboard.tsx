import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";


const Dashboard = ( { children }:PropsWithChildren) => {

    return(
        <ScrollView
            showsVerticalScrollIndicator={true}
        >
            <View
            style={{...styles.dashboardContainer}}
            >
                { children }
            </View>
        </ScrollView>
    );
}

const  styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        // justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        padding: 20,
    }
});

export default Dashboard;