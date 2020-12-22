import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import Contact from '../components/Contact.vue'
import Blog from '../components/Blog.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home, 
        },
        {
            path:"/blog",
            name:"Blog",
            component:Blog, 
        },
        {
            path:"/contact",
            name:"Contact",
            component:Contact, 
        },
        {
            path:"/shop",
            name:"Shop",
            component:Shop, 
        },
        
    ]
});

export default router