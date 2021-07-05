import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [{title: "My listings", icon: {name: "profile", backgroundColor: colors.primary}},{title: "My messages", icon: {name: "mail", backgroundColor: colors.secondary}}]

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem image={require('../assets/em.jpg')} title="Kasili Wachiye" subtitle="wachiye25@gmail.com" />
            </View>

            <View style={styles.container}>
                <FlatList data={menuItems} keyExtractor={(menuItem) => menuItem.title} ItemSeparatorComponent={ListItemSeparator} renderItem={({item}) => <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />} />
            </View>

            <View>
                <ListItem title="Logout" IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>} />
            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
    },
    screen: {
        backgroundColor: colors.light
    }
})