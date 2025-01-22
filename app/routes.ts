import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.mdx"),
  route("api", "routes/api.tsx"),
] satisfies RouteConfig;
