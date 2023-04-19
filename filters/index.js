export function Formmater(val) {
    let newVal = ''
    if (val.length > 3) {
        newVal = val.substring(0, 3) + "k"
        return newVal
    }
    return val
}