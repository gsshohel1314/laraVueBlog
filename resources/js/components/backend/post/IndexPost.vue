<template>
    <div class="container">
        <div class="content-header" style="background: #E7EAED; margin-bottom: 20px;">
            <div class="container-fluid">
                <h1 class="m-0 text-dark"> <i class="fas fa-tachometer-alt"></i> Posts</h1>
            </div>
            <div class="card-tools" style="position: absolute; right: 2rem; top: 4.3rem">
                <button class="btn btn-primary"><i class="fas fa-plus-circle"></i>
                    <router-link to="/post/create" style="color:#fff;">Create</router-link>
                </button>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table id="datatable" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Date</th>
                                    <th scope="col" class="text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="(post, index) in getAllPost" :key="post.id">
                                    <td scope="row"> {{ index + 1 }} </td>
                                    <td>{{ post.user.name }}</td>
                                    <td>{{ post.category.name }}</td>
                                    <td>{{ post.title | shortLength(2, '...') }}</td>
                                    <td><img :src="post.image" alt="" width="50" height="50"></td>
                                    <td>{{ post.created_at | timeFormate }}</td>

                                    <td class="text-center">
                                        <router-link :to="`/post/show/${post.id}`" type="button" class="btn btn-info btn-sm">
                                            <i class="fas fa-eye"></i> View
                                        </router-link>

                                        <router-link :to="`/post/edit/${post.id}`" type="button" class="btn btn-primary btn-sm" @click="edit(post.id)">
                                            <i class="fas fa-edit"></i> Edit
                                        </router-link>

                                        <button type="button" class="btn btn-danger btn-sm" @click="destroy(post.id)">
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
        <!-- snotify -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    // Datatable Modules
    import "datatables.net-dt/js/dataTables.dataTables"
    import "datatables.net-dt/css/jquery.dataTables.min.css"

    export default {
        mounted() {
            this.table()
            this.$store.dispatch('postData')
        },

        computed: {
            getAllPost(){
                return this.$store.getters.getPost
            },
        },

        methods: {
            // datatable
            table(){
                $(document).ready( function () {
                    $('#datatable').DataTable();
                } );
            },

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

                                axios.get('/backend/post/'+id)
                                .then(response => {
                                    this.$store.dispatch('allPost')
                                    this.$snotify.success('Post Deleted', 'Success')
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
