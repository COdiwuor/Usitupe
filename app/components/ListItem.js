import React from 'react'
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({image, title, subtitle, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>            
                <View style={styles.container}>
                    {IconComponent}
                    {/* renders components attached to the image WITHOUT the space which would be normally taken up if the image is present */}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        {/* Purely to improve visual appearance of a list title property in the event that a subtitle is missing so as to have it vertically aligned at the center */}
                        {subtitle && <AppText style={styles.subtitle} numberOfLines={2} >{subtitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={15} color={colors.medium} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 5,
        marginHorizontal: 5,
        paddingVertical: 12.5,
        paddingHorizontal: 7.5,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    subtitle: {
        color: colors.medium,
        fontSize: 12.5
    },
    title: {
        fontWeight: "bold",
        fontSize: 15
    }
})
