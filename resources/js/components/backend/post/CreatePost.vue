<template>
    <div class="container">
        <div class="content-header" style="background: #E7EAED; margin-bottom: 20px;">
            <div class="container-fluid">
                <h1 class="m-0 text-dark"> <i class="fas fa-tachometer-alt"></i> Post Create</h1>
            </div>
            <div class="card-tools" style="position: absolute; right: 2rem; top: 4.3rem">
                <button class="btn btn-danger"><i class="fas fa-arrow-circle-left"></i>
                    <router-link to="/post" style="color:#fff;">Back To List</router-link>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="store()" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="main-card mb-3 card">
                                <div class="card-body card-primary">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input v-model="form.title" type="text" name="title"
                                        class="form-control" :class="{ 'is-invalid': form.errors.has('title') }" placeholder="Enter title">
                                        <has-error :form="form" field="title"></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label>Description</label>
                                        <tinymce id="id" v-model="form.description" :other_options="options" name="name" :class="{ 'is-invalid': form.errors.has('description') }"></tinymce>
                                        <has-error :form="form" field="description"></has-error>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="main-card mb-3 card">
                                <div class="card-body card-primary">
                                    <div class="form-group">
                                        <label>Select Category</label>
                                        <select v-model="form.category_id" name="category_id" id="category_id" class="select2 form-control" :class="{ 'is-invalid': form.errors.has('category_id') }">
                                            <option value="">Select One</option>
                                            <option v-for="category in getAllCategory" :key="category.id" :value="category.id">{{ category.name }}</option>
                                        </select>
                                        <has-error :form="form" field="category_id"></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" name="image" class=" form-control" :class="{ 'is-invalid': form.errors.has('image') }">
                                        <has-error :form="form" field="image"></has-error>
                                    </div>

                                    <div class="text-right">
                                        <button :disabled="form.busy" type="submit" class="btn btn-primary">
                                            <i class="fas fa-plus-circle"></i>
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- snotify -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
// select2 for dropdown search
import "select2/dist/css/select2.min.css"
import "select2/dist/js/select2.min.js"

// dropify for image
import "dropify/dist/css/dropify.min.css"
import "dropify/dist/js/dropify.min.js"

export default {
    data() {
        return{
            // tinymce editor
            options: {
                language_url: this.langs || '',
                height: this.height || 250
            },

            form: new Form({
                user_id: '',
                category_id: '',
                title: '',
                description: '',
                image: '',
            }),
        }
    },

    mounted() {
        // select2 for dropdown search
        let self = this;
        $('.select2').select2().on("change", function() {
            self.onSelectChange(this.value);
        });

        // dropify for image
        this.dropify(),

        this.$store.dispatch('allCategory')
    },


    computed: {
        getAllCategory(){
            return this.$store.getters.getCategory
        },
    },

    methods: {
        // select2 for dropdown search
        onSelectChange(val) {
            this.form.category_id = val;
        },
        onSubmit() {
            this.form.category_id = $($(".select2")[0]).val();
        },

        // dropify for image
        dropify(){
            $(document).ready(function() {
                $('.dropify').dropify();
            });
        },

        store(){
            this.form.busy = true
            this.form.post('/backend/post')
            .then(response => {
                // return response.data.data
                if(this.form.successful){
                    this.form.reset()
                    $(".select2").val('').trigger('change')  //for reset select2 field
                    this.$snotify.success('Post Added', 'Success')
                }else{
                    this.$snotify.error('Something went wrong try again later', 'Error')
                }
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style>
    /* dropify */
    .dropify-wrapper .dropify-message p {
        font-size: initial;
    }

    /* select2 */
    .select2-container .select2-selection--single .select2-selection__rendered {
        padding-left: 0px;
        margin-top: -10px;
    }
</style>
