import { getAll } from './firebase/firebase.js'
import { renderFlowers } from './rendering/renderflowers.js'
import { initHeaderOnLoad } from './modules/header.js'
import { addStyling } from './modules/cssadder.js'
import { initAnimalControl } from './modules/animal.js'
import { initTheme } from './modules/theme.js'
import { initCabin } from './modules/cabin.js'
import { initUsernamePrompt } from './modules/username.js'

async function initPage () {
  initHeaderOnLoad()
  initTheme()
  await addStyling()
  initUsernamePrompt()
  initAnimalControl()
  initCabin()
  const data = await getAll()
  renderFlowers(data)
}

initPage()
