import { View, Text } from "react-native";
import React from "react";

const BadgeDefault = ({ keyword } : any) => {
    let style;
    let title = '';
    switch (keyword) {
        case 'PENDING':
            style = { paddingTop: 4, height: 24, paddingHorizontal:10,  borderRadius: 100, backgroundColor:'pink' }
            title = 'Pending'
            break;
        case 'PROGRESS':
            style = { paddingTop: 4, height: 24, paddingHorizontal:10,  borderRadius: 100, backgroundColor:'orange' }
            title = 'On Progress'
            break;
        case 'DONE':
            style = { paddingTop: 4, height: 24, paddingHorizontal:10,  borderRadius: 100, backgroundColor:'green' }
            title = 'Done'
            break;
        default:
            style = { paddingTop: 4, height: 24, paddingHorizontal:10,  borderRadius: 100, backgroundColor:'green' }
            title = ''
            break;
    }
    return (
        <View
            style={style}
        >
            <Text className="text-white text-xs">{title}</Text>
        </View>
    );
};

export default BadgeDefault;
