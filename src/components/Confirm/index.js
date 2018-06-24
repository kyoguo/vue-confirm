import Component from './Confirm.vue'

function plugin(Vue) {


    Vue.prototype.$confirm = function(message, options) {
        return new Promise((resolve, reject) => {

            const ComponentController = Vue.extend(Component);
            var instance = new ComponentController().$mount(document.createElement("div"));

            instance.$on('yes', resolve)
            instance.title = 'title'
            instance.content = 'content'
            document.body.appendChild(instance.$el)

        })

    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin;