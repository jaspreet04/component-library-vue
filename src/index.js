import * as components from './components';

const componentsList = components?.default;
const AllComponents = {
    install(Vue) {
        Object.keys(componentsList).forEach(name => {
            Vue.components(name, componentsList[name]);
        })
    },
}

export default { AllComponents }