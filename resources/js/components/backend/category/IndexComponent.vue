<template>
    <div class="container">
        <div class="content-header" style="background: #E7EAED; margin-bottom: 20px;">
            <div class="container-fluid">
                <h1 class="m-0 text-dark"> <i class="fas fa-tachometer-alt"></i> Categories</h1>
            </div>
            <div class="card-tools" style="position: absolute; right: 2rem; top: 4.3rem">
                <button class="btn btn-primary"><i class="fas fa-plus-circle"></i>
                    <router-link to="/backend/category-create" style="color:#fff;">Create</router-link>
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
                                            <th scope="col" class="text-center">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>Internet
                                            Explorer 4.0
                                            </td>
                                            <td class="text-center">
                                                <button type="button" class="btn btn-info btn-sm">
                                                    <i class="fas fa-eye"></i> View
                                                </button>
                                                <button type="button" class="btn btn-primary btn-sm">
                                                    <i class="fas fa-edit"></i> Edit
                                                </button>
                                                <button type="button" class="btn btn-danger btn-sm">
                                                    <i class="fas fa-trash-alt"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Internet
                                            Explorer 4.0
                                            </td>
                                            <td>X</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Internet
                                            Explorer 4.0
                                            </td>
                                            <td>X</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

