import { Dimensions } from "react-native"


export const { width, height } = Dimensions.get('screen')

export function heightPercentage(value: number) {
	return height * value / 100
}

export function widthPercentage(value: number) {
    return width * value / 100

}