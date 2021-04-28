<template>
    <div class="container">
        <div class="content-header" style="background: #E7EAED; margin-bottom: 20px;">
            <div class="container-fluid">
                <h1 class="m-0 text-dark"> <i class="fas fa-tachometer-alt"></i> Category Create</h1>
            </div>
            <div class="card-tools" style="position: absolute; right: 2rem; top: 4.3rem">
                <button class="btn btn-info"><i class="fas fa-plus-circle"></i>
                    <router-link to="#" style="color:#fff;">Edit</router-link>
                </button>

                <button class="btn btn-danger"><i class="fas fa-arrow-circle-left"></i>
                    <router-link to="/backend/category" style="color:#fff;">Back To List</router-link>
                </button>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <!-- <form @submit.prevent="store()">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter name" :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control" :class="{ 'is-invalid': form.errors.has('description') }" rows="3" placeholder="Enter description..."></textarea>
                                        <has-error :form="form" field="description"></has-error>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary"><i class="fas fa-plus-circle"></i> Create</button>
                                </div>
                            </form> -->

                            <form @submit.prevent="store()" @keydown="form.onKeydown($event)">
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

                                <div class="card-footer">
                                    <button :disabled="form.busy" type="submit" class="btn btn-primary"><i class="fas fa-plus-circle"></i> Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- snotify -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: new Form({
                    name: '',
                    description: ''
                })
            }
        },

        methods: {
            store(){
                this.form.busy = true
                this.form.post('/backend/category/create')

                .then(response => {
                    // this.$router.push('/backend/category')
                    if(this.form.successful){
                        this.$snotify.success('Category Added', 'Success')
                    }else{
                        this.$snotify.error('Something went wrong try again later', 'Error')
                    }
                    this.form.reset()
                })
                .catch(e => {
                    console.log(e)
                })
            }
        },


    }
</script>

