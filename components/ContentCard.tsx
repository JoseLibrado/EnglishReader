import { Pressable, StyleSheet, Text, View } from "react-native";
import ImageViewer from "./ImageViewer";

type Props = {
    image?: string;
    title?: string;
    onPress?: () => void;
}

const ContentCard = ({ image, title, onPress }: Props) => {

    const placeholderImage = require('@/assets/images/android-icon-foreground.png');

    const titleCard = title ?? 'Lorem Ipsum';

    return (
        <Pressable onPress={onPress} style={styles.contentContainer}>
            <View style={{ justifyContent: 'center', }}>
                {/* Image container */}
                <View style={styles.thumbnail}>
                    <ImageViewer image={placeholderImage} imageSource={image} />
                </View>
            </View>
            <Text style={[styles.title, { fontSize: 15 }]}>{titleCard}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-around',
    },
    thumbnail: {
        borderColor: 'gray',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        verticalAlign: 'middle',
    }
});

export default ContentCard;