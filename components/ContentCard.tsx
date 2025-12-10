import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
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
        <View style={styles.contentContainer}>
            <Pressable onPress={onPress}>
                {/* Image container */}
                <View style={styles.thumbnail}>
                    <ImageViewer image={placeholderImage} imageSource={image} />
                </View>
                <Text style={[styles.title, { fontSize: Platform.OS === 'web' ? 25 : 15 }]}>{titleCard}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingVertical: 5,
        justifyContent: 'space-around',
    },
    thumbnail: {
        height: '50%',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
    }
});

export default ContentCard;