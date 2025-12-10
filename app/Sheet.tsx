import SheetReader from "@/components/SheetReader";
import { ScrollView, StyleSheet } from "react-native";


const Sheet = () => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <SheetReader />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sheetContainer: {
        flex: 1,
        width: '90%',
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#414141ff"
    }
});

export default Sheet;
