<template>
    <div class="container">
        <div class="content-header" style="background: #E7EAED; margin-bottom: 20px;">
            <div class="container-fluid">
                <h1 class="m-0 text-dark"> <i class="fas fa-tachometer-alt"></i> Category Edit</h1>
            </div>
            <div class="card-tools" style="position: absolute; right: 2rem; top: 4.3rem">
                <button class="btn btn-danger"><i class="fas fa-arrow-circle-left"></i>
                    <router-link to="/category" style="color:#fff;">Back To List</router-link>
                </button>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-primary">
                    <form @submit.prevent="update()" @keydown="form.onKeydown($event)">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Name</label>
                                <input v-model="form.name" type="text" name="name"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>

                            <div class="form-group">
                                <label>Description</label>
                                <textarea v-model="form.description" class="form-control" :class="{ 'is-invalid': form.errors.has('description') }" rows="3" placeholder="Enter description..."></textarea>
                                <has-error :form="form" field="description"></has-error>
                            </div>
                        </div>

                        <div class="card-footer text-right">
                            <button :disabled="form.busy" type="submit" class="btn btn-primary"><i class="fas fa-arrow-circle-up"></i> Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- snotify -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get(`/backend/category/edit/${this.$route.params.id}`)
            .then(response => {
                this.form.fill(response.data.category)
            })
            .catch(e => {
                console.log(e)
            })
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    description: ''
                })
            }
        },

        methods: {
            update(){
                this.form.busy = true
                this.form.post(`/backend/category/update/${this.$route.params.id}`)

                .then(response => {
                    if(this.form.successful){
                        this.$snotify.success('Category Updated', 'Success')
                    }else{
                        this.$snotify.error('Something went wrong try again later', 'Error')
                    }
                })
                .catch(e => {
                    console.log(e)
                })
            }
        },


    }
</script>


