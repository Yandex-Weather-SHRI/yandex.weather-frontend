/* eslint-disable global-require */
export const BACKGROUNDS = {
  good: [
    require('assets/images/weather-backgrounds/good-1.png'),
    require('assets/images/weather-backgrounds/good-2.png'),
    require('assets/images/weather-backgrounds/good-3.png'),
  ],
}

const randomBackground = Math.round(Math.random() * (BACKGROUNDS.good.length - 1))

export function getWeatherBackground(props) {
  return BACKGROUNDS[props.condition][randomBackground]
}
