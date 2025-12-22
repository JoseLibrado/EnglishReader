
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ExternalPathString, Link, Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const SheetReader = () => {

    const { title, videoLink, text } = useLocalSearchParams();

    return (
        <>
            <Stack.Screen options={{ title: `${title}`}} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.sheetContainer}
            >
                <View>
                    <View style={{ margin: 20, gap: 10 }}>
                        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: 'center', flexDirection: 'row', gap: 10 ,backgroundColor: "#494949ff", borderRadius: 10, padding: 10}}>
                            <FontAwesome name="youtube-play" color={"#dd1414ff"} size={45} />
                            <Link href={videoLink as ExternalPathString} style={{ color: "#e0e0e0c6", fontSize: 30, elevation: 2 }}>Ver video</Link>
                        </View>
                        <View style={{backgroundColor: "#494949ff", borderRadius: 10, padding: 10}}>
                            <Text
                            style={{ color: "#e0e0e0c6", fontSize: 18 }}
                            >
                                {
                                    text

                                }

                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    sheetContainer: {
        flex: 1,
        backgroundColor: "#6d6d6dff",
    }
});

export default SheetReader;