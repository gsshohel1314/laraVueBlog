import axios from "axios"

export default{
    state: {
        categories: [],
        getCategoryById: [],
        posts: [],
    },

    getters: {
        getCategory(state){
            return state.categories
        },

        getCategoryById(state){
            return state.getCategoryById
        },

        // post getters
        getPost(state){
            return state.posts
        }
    },

    actions: {
        allCategory(context){
            axios.get('/backend/category')
            .then(response => {
                context.commit('categories', response.data.categories)
                // context.commit('categories', response.data.data)
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
        },

        // Post actions
        postData(context){
            axios.get('/backend/post')
            .then(response => {
                context.commit('allPost', response.data.posts)
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
        },

        // Post
        allPost(state, data){
            return state.posts = data
        }
    },
}
