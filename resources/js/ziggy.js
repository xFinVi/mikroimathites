const Ziggy = {
  url: "http://localhost:8000",
  port: 8000,
  defaults: {},
  routes: {
    "sanctum.csrf-cookie": {
      uri: "sanctum/csrf-cookie",
      methods: ["GET", "HEAD"],
    },
    "\u0391\u03c1\u03c7\u03b9\u03ba\u03ae": {
      uri: "/",
      methods: ["GET", "HEAD"],
    },
    video: { uri: "video", methods: ["GET", "HEAD"] },
    "\u03a0\u03bf\u03b9\u03bf\u03b9\u0395\u03af\u03bc\u03b1\u03c3\u03c4\u03b5":
      { uri: "about", methods: ["GET", "HEAD"] },
    blog: { uri: "blog", methods: ["GET", "HEAD"] },
    "\u0394\u03b9\u03b1\u03b3\u03c9\u03bd\u03b9\u03c3\u03bc\u03cc\u03c2": {
      uri: "competition",
      methods: ["GET", "HEAD"],
    },
    "\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1": {
      uri: "contact",
      methods: ["GET", "HEAD"],
    },
    "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b5\u03c2": {
      uri: "paidikes-ergasies",
      methods: ["GET", "HEAD"],
    },
    craft: {
      uri: "paidikes-ergasies/{craft}",
      methods: ["GET", "HEAD"],
      parameters: ["craft"],
      bindings: { craft: "id" },
    },
    dashboard: { uri: "crafts", methods: ["GET", "HEAD"] },
    "admin.create": {
      uri: "admin/paidikes-ergasies",
      methods: ["GET", "HEAD"],
    },
    "admin.store": { uri: "admin/paidikes-ergasies", methods: ["POST"] },
    "craft.edit": {
      uri: "paidikes-ergasies/{craft}/edit",
      methods: ["GET", "HEAD"],
      parameters: ["craft"],
      bindings: { craft: "id" },
    },
    "craft.destroy": {
      uri: "paidikes-ergasies/{craft}",
      methods: ["DELETE"],
      parameters: ["craft"],
      bindings: { craft: "id" },
    },
    "profile.edit": { uri: "profile", methods: ["GET", "HEAD"] },
    "profile.update": { uri: "profile", methods: ["PATCH"] },
    "profile.destroy": { uri: "profile", methods: ["DELETE"] },
    register: { uri: "register", methods: ["GET", "HEAD"] },
    login: { uri: "login", methods: ["GET", "HEAD"] },
    "password.request": { uri: "forgot-password", methods: ["GET", "HEAD"] },
    "password.email": { uri: "forgot-password", methods: ["POST"] },
    "password.reset": {
      uri: "reset-password/{token}",
      methods: ["GET", "HEAD"],
      parameters: ["token"],
    },
    "password.store": { uri: "reset-password", methods: ["POST"] },
    "verification.notice": { uri: "verify-email", methods: ["GET", "HEAD"] },
    "verification.verify": {
      uri: "verify-email/{id}/{hash}",
      methods: ["GET", "HEAD"],
      parameters: ["id", "hash"],
    },
    "verification.send": {
      uri: "email/verification-notification",
      methods: ["POST"],
    },
    "password.confirm": { uri: "confirm-password", methods: ["GET", "HEAD"] },
    "password.update": { uri: "password", methods: ["PUT"] },
    logout: { uri: "logout", methods: ["POST"] },
    "storage.local": {
      uri: "storage/{path}",
      methods: ["GET", "HEAD"],
      wheres: { path: ".*" },
      parameters: ["path"],
    },
  },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
