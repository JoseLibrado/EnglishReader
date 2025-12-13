import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
    image: ImageSourcePropType;
    imageSource?: string
}

const ImageViewer = ( {image, imageSource}: Props) => {
    
    const thumbnail = imageSource ? {uri: imageSource} : image;
    
    return <Image source={thumbnail} style={[styles.imageContainer, styles.platformImageDimensions

    ]}/>
}

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 18,
        backgroundColor: 'black'
    },
    platformImageDimensions: {
        // Set both width and height explicitly for both platforms
        width: '100%', // Use '100%' for both to fill container
        height: 100, // Apply conditional height
    }
});

export default ImageViewer;