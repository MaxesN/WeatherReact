import {gql} from "@apollo/client";

export const WEATHER_LVIV = gql`
    query WeatherLviv ($name: String!) {
        getCityByName (name: $name) {
            name
            country
            coord{
                lat
                lon
            }
            weather {
                clouds{
                    all
                    visibility
                    humidity
                }
                summary{
                    title
                    description
                }
                timestamp
                temperature{
                    actual
                    feelsLike
                    min
                    max
                }
                wind{
                    speed
                }
            }
        }
    }
`