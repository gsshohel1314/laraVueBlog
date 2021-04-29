<template>
    <div class="container">
        <div class="content-header" style="background: #E7EAED; margin-bottom: 20px;">
            <div class="container-fluid">
                <h1 class="m-0 text-dark"> <i class="fas fa-tachometer-alt"></i> Categories</h1>
            </div>
            <div class="card-tools" style="position: absolute; right: 2rem; top: 4.3rem">
                <button class="btn btn-primary"><i class="fas fa-plus-circle"></i>
                    <router-link to="/category/create" style="color:#fff;">Create</router-link>
                </button>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <!-- <div class="card-header">
                                <h3 class="card-title">DataTable with minimal features & hover style</h3>
                            </div> -->

                            <div class="card-body">
                                <table id="example2" class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col" class="text-center">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr v-for="(category, index) in getAllCategory" :key="category.id">
                                            <td scope="row"> {{ index + 1 }} </td>
                                            <td>{{ category.name }}</td>
                                            <td>{{ category.created_at | timeFormate }}</td>

                                            <td class="text-center">
                                                <router-link :to="`/category/show/${category.id}`" type="button" class="btn btn-info btn-sm">
                                                    <i class="fas fa-eye"></i> View
                                                </router-link>

                                                <router-link :to="`/category/edit/${category.id}`" type="button" class="btn btn-primary btn-sm" @click="edit(category.id)">
                                                    <i class="fas fa-edit"></i> Edit
                                                </router-link>

                                                <button type="button" class="btn btn-danger btn-sm" @click="destroy(category.id)">
                                                    <i class="fas fa-trash-alt"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
        mounted() {
            this.$store.dispatch('allCategory')
        },

        computed: {
            getAllCategory(){
                return this.$store.getters.getCategory
            },
        },

        methods: {
            destroy(id){
                this.$snotify.clear()
                this.$snotify.confirm(
                    "You will not be able to recover this data!",
                    "Are you sure?",
                    {
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        buttons: [
                            {
                            text: "Yes",
                            action: toast => {
                                this.$snotify.remove(toast.id);

                                axios.get('/backend/category/'+id)
                                .then(response => {
                                    this.$store.dispatch('allCategory')
                                    this.$snotify.success('Category Deleted', 'Success')
                                })

                                .catch(e => {
                                    console.log(e)
                                })
                            },
                            bold: true
                            },

                            {
                            text: "No",
                            action: toast => {
                                this.$snotify.remove(toast.id);
                            },
                            bold: true
                            }

                        ]
                    }
                );
            }
        }
    }
</script>

