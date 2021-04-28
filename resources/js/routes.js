import DashboardComponent from './components/backend/DashboardComponent';

// category
import IndexComponent from './components/backend/category/IndexComponent';
import CreateComponent from './components/backend/category/CreateComponent';

// post
import PostComponent from './components/backend/post/PostComponent';

export const routes = [
    { path: '/backend/dashboard', component: DashboardComponent },

    // category route
    { path: '/backend/category', component: IndexComponent },
    { path: '/backend/category-create', component: CreateComponent },

    // post route
    { path: '/backend/post', component: PostComponent },
]
