import axios from "axios"

export default{
    state: {
        categories: [],
    },

    getters: {
        getCategory(state){
            return state.categories
        },
    },

    actions: {
        allCategory(context){
            axios.get('/backend/category')

            .then(response => {
                // console.log(response.data.categories)
                context.commit('categories', response.data.categories)
            })
            .catch(e => {
                console.log(e)
            })
        }
    },

    mutations: {
        categories(state, data){
            return state.categories = data
        }
    },
}
