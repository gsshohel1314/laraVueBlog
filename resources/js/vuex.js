import axios from "axios"

export default{
    state: {
        categories: [],
        getCategoryById: [],
    },

    getters: {
        getCategory(state){
            return state.categories
        },

        getCategoryById(state){
            return state.getCategoryById
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
        },

        getCategoryById(context, payload){
            axios.get('/backend/category/show/'+payload)
            .then(response => {
                context.commit('getCategoryById', response.data.category)
            })
            .catch(e => {
                console.log(e)
            })
        }
    },

    mutations: {
        categories(state, data){
            return state.categories = data
        },

        getCategoryById(state, data){
            return state.getCategoryById = data
        }
    },
}
