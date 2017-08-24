import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import infoAddon, { setDefaults } from '@storybook/addon-info'


setOptions({
  name: 'Яндекс.Погода',
  url: 'https://github.com/yarastqt/yandex.weather',
})

setDefaults({
  header: false,
})

function loadStories() {
  const requireContext = require.context('../src/ui', true, /\.story\.js$/)

  requireContext
    .keys()
    .forEach((filename) => requireContext(filename))
}

setAddon(infoAddon)
configure(loadStories, module)
