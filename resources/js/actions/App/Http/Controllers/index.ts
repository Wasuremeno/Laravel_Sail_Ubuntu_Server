import Auth from './Auth'
import MixedModeController from './MixedModeController'
import Settings from './Settings'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    MixedModeController: Object.assign(MixedModeController, MixedModeController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers