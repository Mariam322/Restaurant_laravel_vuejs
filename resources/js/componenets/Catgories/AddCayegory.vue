<template>
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2
        shadow">
        <form @submit.prevent="addCategorie">
            <div class="mb-3">
                <label for="nomcateg" class="form-label">Nom catégorie</label>

                <input type="text" class="form-control" id="nomcategorie" v-model="categorie.nomcategorie">

            </div>
            <div class="mb-3">
                <label for="imagecateg" class="form-label">Image</label>
                <div class="form-group">
                    <div>
                        <file-pond name="test" ref="pond" class-name="my-pond" label-idle="Drop files here..."
                            allow-multiple="false" accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles"
                            v-on:init="handleFilePondInit" :server="serverOptions()" />
                    </div>
                </div>



            </div>

            <button type="submit" className="btn btn-outline-primary">
                Enregister
            </button>
            <router-link to="/Viewcategorie" class="btn btn-outline-danger
    
        mx-2">

                Cancel
            </router-link>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router';
import axios from 'axios';
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
const router = useRouter()
const FilePond = vueFilePond(FilePondPluginImagePreview);
const myFiles = ref([]);
const categorie = ref({
    nomcategorie: "",
    imagecategorie: ""
})
const addCategorie = async () => {
    await
        axios.post("http://localhost:8000/api/categories/", categorie.value)
            .then(() => (

                router.push({ name: 'Viewcategorie' })
            ))
            .catch(err => console.log(err))

}
const handleFilePondInit = () => {
    console.log('FilePond has initialized');
}
const serverOptions = () => {
    console.log('server pond');
    return {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'project');
            data.append('cloud_name', 'dre7muow0');
            data.append('public_id', file.name);
            axios.post('https://api.cloudinary.com/v1_1/dre7muow0/upload',
                data)
                .then((response) => response.data)
                .then((data) => {
                    console.log(data);

                    categorie.value.imagecategorie = data.url;
                    load(data);
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                    error('Upload failed');
                    abort();
                });
        },
    };
};
</script>
<style scoped></style>