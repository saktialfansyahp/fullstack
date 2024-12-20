import { RouteConfig } from "../types/route";
import Portfolio from '../pages/portfolio';
import Home from "../pages/home";
import TemplateDemo from "../pages/about";
import Signin from "../pages/signin";
import TestPage from "../pages/test-page";
import Admin from "../pages/admin";
import AdminLayout from "../layout/admin_layout";

const routes: RouteConfig[] = [
    { path: "/", component: Portfolio, isPrivate: false },
    { path: "/home", component: Home, isPrivate: true },
    { path: "/about", component: TemplateDemo, isPrivate: true },
    { path: "/login", component: Signin, isPrivate: false },
    { path: "/test", component: TestPage, isPrivate: false },
    { path: "/admin", component: AdminLayout, isPrivate: false },

];

export default routes;