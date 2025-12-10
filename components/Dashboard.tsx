import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet } from "react-native";


const Dashboard = ( { children }:PropsWithChildren) => {

    return(
        <ScrollView
            style={{...styles.dashboardContainer}}
            showsVerticalScrollIndicator={false}
        >
            { children }
        </ScrollView>
    );
}

const  styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        width: '90%',
        padding: 20,
    }
});

export default Dashboard;