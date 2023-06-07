import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue"

import Users from "./components/Users.vue"
import User from "./components/User.vue"
import UserTemplate from "./components/UserTemplate.vue"

import Posts from "./components/Posts.vue"
import Post from "./components/Post.vue"
import PostTemplate from "./components/PostTemplate.vue"
import PostCreate from "./components/PostCreate.vue"
import PostEdit from "./components/PostEdit.vue"

const routes = [
  { path: "/vue-spa/", name: "home", component: Home },
  {
    path: "/vue-spa/users", name: "userTemplate", component: UserTemplate, children: [
      { path: "", name: "users", component: Users },
      { path: ":id", name: "user", component: User }
    ]
  },
  {
    path: "/vue-spa/posts", name: "postTemplate", component: PostTemplate, children: [
      { path: "", name: "posts", component: Posts },
      { path: ":id", name: "post", component: Post },
      { path: "create", name: "createPost", component: PostCreate },
      { path: "edit/:id", name: "editPost", component: PostEdit },
      
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

