export const loginContent = {
  brand: { name: "Admin", highlight: "Hub" },
  title: "Welcome Back",
  subtitle: "Sign in to access your admin dashboard",
  topBar: {
    text: "Don't have an account?",
    linkText: "Contact Admin",
    linkHref: "/contact-admin",
  },
  rememberLabel: "Remember me",
  forgot: { text: "Forgot password?", href: "/forgot-password" },
  submitText: "Sign In",
  secureText: "Secure admin access",
  copyright: "© 2026 AdminHub. All rights reserved.",
};

export const loginFields = [
  {
    id: "email",
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@company.com",
    icon: "mail",
    isPassword: false,
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    icon: "lock",
    isPassword: true,
  },
];