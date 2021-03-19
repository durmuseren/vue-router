import Home from "./components/Home";
import User from "./components/user/User";

export const routes = [
{ path:'', component:Home , name:'anasayfa' },
{ path: '/user' , component: User , name:'kullanici'},
{ path: '/user/:id' , component: User , name:'kullanici'},
{ path: "*", redirect:"/"} // route da belirtmediğimiz kısımlara yazılırsa home sayfasını göster
];