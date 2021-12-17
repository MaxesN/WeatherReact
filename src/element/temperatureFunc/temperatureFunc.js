export default function TemperatureFunc(temp) {
    const celsuis = temp - 273.35
    return celsuis.toFixed(1)
}