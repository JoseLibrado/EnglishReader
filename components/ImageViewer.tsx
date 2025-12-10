import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    image: ImageSourcePropType;
    imageSource?: string
}

const ImageViewer = ( {image, imageSource}: Props) => {
    
    const thumbnail = imageSource ? {uri: imageSource} : image;
    
    return <Image source={thumbnail} style={ styles.imageContainer }/>
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width:'100%',
    }
});

export default ImageViewer;