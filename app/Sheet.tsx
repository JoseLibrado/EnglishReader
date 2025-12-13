import SheetReader from "@/components/SheetReader";
import { ScrollView, StyleSheet } from "react-native";


const Sheet = () => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.sheetContainer}
        >
            <SheetReader />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sheetContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#414141ff"
    }
});

export default Sheet;
