import login from './componenets/Authentification/Login.vue'
import Register from './componenets/Authentification/Register.vue'
import ViewCategory from './componenets/Catgories/viewCategory.vue'
import HomePage from './componenets/Home/HomePage.vue'
import AddCategory from'./componenets/Catgories/AddCayegory.vue'
import Contact from './componenets/Contact/Contact.vue'
import EditCategory from './componenets/Catgories/EditCategory.vue'
export const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
        },
{
name: 'login',
path: '/login',
component: login
},
{
    name: 'Register',
    path: '/Register',
    component: Register
    },
    {
        name: 'Viewcategorie',
        path: '/Viewcategorie',
        component: ViewCategory
        },
        {
            name: 'AddCategory',
            path: '/AddCategory',
            component: AddCategory
            },
            {
            name: 'Contact',
            path: '/Contact',
            component: Contact
            },
            {
            name: 'EditCategory',
            path: '/EditCategory/:id',
            component: EditCategory
            },
];