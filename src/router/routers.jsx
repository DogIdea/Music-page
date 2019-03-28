import { GetAsyncComponent } from '../utils/utils.jsx';
const Home = GetAsyncComponent(()=>import('../view/home.jsx'));
const Music = GetAsyncComponent(()=>import('../view/music.jsx'));
const Search = GetAsyncComponent(()=>import('../view/search.jsx'));
const Mine = GetAsyncComponent(()=>import('../view/mine.jsx'));
const SongSheet = GetAsyncComponent(()=>import('../view/songsheet.jsx'));
const HomeMusic = GetAsyncComponent(()=>import('../components/homemusic.jsx'));
const HomeVideo = GetAsyncComponent(()=>import('../components/homevideo.jsx'));

const RoutersConfig = [
    {
        path:'/home',
        component:Home,
        routes:[
            {
                path:'/homemusic',
                component:HomeMusic,
                exact: true,
            },
            {
                path:'/homevideo',
                component:HomeVideo,
                exact: true,
            },
            {
                path:'/',
                component:HomeMusic,
                exact: true,
            },
        ]
    },
    {
        path:'/search',
        component:Search,
        exact: true
    },
    {
        path:'/mine',
        component:Mine,
        exact:true
    },
    {
        path:'/music',
        component:Music,
        exact: true
    },
    {
        path:'/songsheet',
        component:SongSheet,
        exact:true
    }
]

export default RoutersConfig