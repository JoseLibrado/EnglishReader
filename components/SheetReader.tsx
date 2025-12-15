
import { Mytranscrypts } from "@/data";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


const SheetReader = () => {
    const text = Mytranscrypts.data[0].transcript;
    return (
        <View
            style={{...styles.readingContainer
            }}
        >
            <View style={{ margin: 20, }}>
                <Link href={`https://www.youtube.com/watch?v=9fd5iBK6wsE`} style={{ color: "#ffffffc6", fontSize: 30 }}>Video</Link>
                <Text
                    style={{ color: "#ffffffc6", fontSize: 18}}
                >
                    {
                        text

                    }
                   
                   </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    readingContainer: {
        flex: 1,
        // width: '90%',
        padding: 20,
        borderRadius: 18,
    }
});
export default SheetReader;