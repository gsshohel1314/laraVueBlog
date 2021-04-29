import DashboardComponent from './components/backend/DashboardComponent';

// category
import IndexComponent from './components/backend/category/IndexComponent';
import CreateComponent from './components/backend/category/CreateComponent';

// post
import PostComponent from './components/backend/post/PostComponent';

export const routes = [
    { path: '/dashboard', component: DashboardComponent },

    // category route
    { path: '/category', component: IndexComponent },
    { path: '/category/create', component: CreateComponent },

    // post route
    { path: '/post', component: PostComponent },
]
