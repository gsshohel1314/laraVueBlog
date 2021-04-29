<template>
    <div class="container">
        <div class="content-header" style="background: #E7EAED; margin-bottom: 20px;">
            <div class="container-fluid">
                <h1 class="m-0 text-dark"> <i class="fas fa-tachometer-alt"></i> Category Show</h1>
            </div>
            <div class="card-tools" style="position: absolute; right: 2rem; top: 4.3rem">
                <button class="btn btn-danger"><i class="fas fa-arrow-circle-left"></i>
                    <router-link to="/category" style="color:#fff;">Back To List</router-link>
                </button>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <div class="col-8">
                        <table id="example2" class="table table-bordered table-hover showTable">
                            <tbody>
                                <tr>
                                    <td scope="row">Name</td>
                                    <td>:</td>
                                    <td>{{ getCategoryById.name }}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Description</td>
                                    <td>:</td>
                                    <td>{{ getCategoryById.description }}</td>
                                </tr>
                            </tbody>
                        </table>
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
            this.$store.dispatch('getCategoryById', this.$route.params.id)
        },

        computed: {
            getCategoryById(){
                return this.$store.getters.getCategoryById
            },
        },

        methods: {
        }
    }
</script>

<style scoped>
    table.showTable tr td:first-child {
        width: 30%;
    }

    table.showTable tr td:last-child {
        width: 70%;
    }
</style>


