import { createWebHistory, createRouter } from "vue-router";
import Layout from "../layout/layoutIndex.vue";
import About from "./../pages/me/meIndex.vue";
import Contact from "./../pages/contact/contactIndex.vue";
import Projects from "../pages/projects/projectsIndex.vue";
import Resume from "../pages/resume/resumeIndex.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/about",
    children: [
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/resume",
        name: "resume",
        component: Resume,
      },
      {
        path: "/projects",
        name: "projects",
        component: Projects,
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
