import { GetAsyncComponent } from '../utils/utils.jsx';
const Home = GetAsyncComponent(()=>import('../view/home.jsx'))
const Music = GetAsyncComponent(()=>import('../view/music.jsx'))
const HomeMusic = GetAsyncComponent(()=>import('../view/homemusic.jsx'))
const HomeVideo = GetAsyncComponent(()=>import('../view/homevideo.jsx'))

const RoutersConfig = [
    {
        path:'/home',
        component:Home,
        exact: true,
        routes:[
            {
                path:'/',
                component:HomeMusic,
                exact: true,
            },
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
        ]
    },
    {
        path:'/music',
        component:Music,
        exact: true
    },
]

export default RoutersConfig