import { Pressable, StyleSheet, Text, View } from "react-native";
import ImageViewer from "./ImageViewer";

type Props = {
    image?: string;
    title?: string;
    onPress?: () => void;
}

const ContentCard = ({ image, title, onPress }: Props) => {

    const localImages: any = {
        '@/assets/images/id_1.png': require('@/assets/images/id_1.png'),
        // Add more as needed
    };

    const placeholderImage = image && localImages[image]
        ? localImages[image]
        : require('@/assets/images/android-icon-foreground.png');

    const titleCard = title ?? 'Lorem Ipsum';

    return (
        <Pressable onPress={onPress} style={styles.contentContainer}>
            <View style={{ justifyContent: 'center', }}>
                {/* Image container */}
                <View style={styles.thumbnail}>
                    <ImageViewer image={placeholderImage} />
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
        // borderColor: 'gray',
    },
    title: {
        color: "#e2e2e2ff",
        fontWeight: 'bold',
        textAlign: 'center',
        verticalAlign: 'middle',
    }
});

export default ContentCard;