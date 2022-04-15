import { useEffect, useRef } from "react"
import { Animated } from "react-native"
import { styles } from "./styles"
import { IErroMessage } from "./types"

export const ErroMessage = (props: IErroMessage) => {
    const shakeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.sequence([
            Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 7, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -7, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 3, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -3, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 1, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true })
        ]).start();

    }, [shakeAnim])

    return (
        <Animated.Text
            style={[styles.textError, props.style, { transform: [{ translateX: shakeAnim }] }]}
        >
            {props.text}
        </Animated.Text>
    )
}   