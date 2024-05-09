
import type { App } from 'vue'
import permisson from './permisson'
import { setupDebounce } from './debounce'

export const setupGlobalDirective = (app: App) => {
  app.directive('permisson', permisson)
  app.directive('debounce', setupDebounce)
}
