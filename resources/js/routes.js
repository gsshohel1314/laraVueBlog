import DashboardComponent from './components/backend/DashboardComponent';

// category
import IndexComponent from './components/backend/category/IndexComponent';
import CreateComponent from './components/backend/category/CreateComponent';
import EditComponent from './components/backend/category/EditComponent';
import ShowComponent from './components/backend/category/ShowComponent';

// post
import IndexPost from './components/backend/post/IndexPost';
import CreatePost from './components/backend/post/CreatePost';
import EditPost from './components/backend/post/EditPost';
import ShowPost from './components/backend/post/ShowPost';

export const routes = [
    { path: '/dashboard', component: DashboardComponent },

    // category route
    { path: '/category', component: IndexComponent },
    { path: '/category/create', component: CreateComponent },
    { path: '/category/edit/:id', component: EditComponent },
    { path: '/category/show/:id', component: ShowComponent },

    // post route
    { path: '/post', component: IndexPost },
    { path: '/post/create', component: CreatePost },
    { path: '/post/edit/:id', component: EditPost },
    { path: '/post/show/:id', component: ShowPost },
]
