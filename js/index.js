import { getAll } from './firebase/firebase.js'
import { renderFlowers } from './rendering/renderflowers.js'
import { renderPost } from './rendering/renderpost.js'
import { initHeaderOnLoad } from './modules/header.js'
import { addStyling } from './modules/cssadder.js'
import { initRabbitControl } from './modules/rabbit.js'
import { initTheme } from './modules/theme.js'

async function initPage () {
  initHeaderOnLoad()
  initTheme()
  await addStyling()
  initRabbitControl()
  const data = await getAll()
  renderFlowers(data)
}

initPage()
