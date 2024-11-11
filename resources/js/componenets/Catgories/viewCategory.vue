<template>
    <div>
    <h2 class="text-center">Categories List</h2>
    <div class="mt-3">
    <table  class="table table-bordered table-striped">
    <thead>
    <tr>
    <th>Name</th>
    <th>Image</th>
    <th>Edit</th>
    <th>Supprimer</th>
    <!-- <th>Actions</th> -->
    </tr>
    </thead>
    <tbody>
    <tr v-for="categorie in categories" :key="categorie.id">
    <td class="_table_name">{{ categorie.nomcategorie }}</td>
    <td><img :src="categorie.imagecategorie"
    
    :alt=categorie.nomcategorie width="60"/></td>
    
    
        <td>
            <router-link :to="{name: 'EditCategory', params: { id:
categorie.id }}" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></router-link>
    </td>
        <td> 
    <button type="error" class="btn btn-danger"
    @click="deleteCategorie(categorie.id)"><i class="fa-solid fa-trash"></i></button>
    </td>
 

    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </template>
    <script setup>
    import Swal from 'sweetalert2'
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    const categories = ref([]);
    /*
    categories.value est une syntaxe spécifique à Vue.js pour accéder à la valeur
    réelle stockée
    dans une référence Vue. Lorsque vous utilisez ref pour créer une référence
    réactive,
    la valeur réelle est stockée dans la propriété .value de cette référence.
    */
    const fetchCategories=async ()=> {
    await axios
    .get('http://localhost:8000/api/categories/')
    .then((response)=>{categories.value = response.data})
    .catch ((error) =>{
    console.error('Error fetching categories:', error);
    });
    }
    const deleteCategorie=async(id)=>{
        try {
        const result = await Swal.fire({
            title: 'Confirmation',
            text: 'Etes-vous sûr de vouloir supprimer ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#38761d',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non'
        });

        if (result.isConfirmed) {
            await axios.delete(`http://localhost:8000/api/categories/${id}`);
            Swal.fire({
                title: 'Succès',
                text: 'Supprimé avec succès!',
                icon: 'success'
            });
            fetchCategories();
        } else {
            Swal.fire({
                title: 'Annulé',
                text: 'La suppression a été annulée.',
                icon: 'info'
            });
        }
    } catch (error) {
        console.log(error);
    }
}

    onMounted(() => {
    fetchCategories();
    });
    </script>