# ROYSHIV.ME — Personal Freelance Portfolio

A premium, minimal personal portfolio built with **HTML5, CSS3, and vanilla JavaScript only**.

## Structure

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   ├── projects.js
│   └── main.js
├── assets/
│   └── icons/
│       └── favicon.svg
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server.

## Configure contact details

Edit `js/config.js`:

```js
const SITE_CONFIG = {
  email: "hello@example.com",
  whatsapp: "https://wa.me/1234567890",
  linkedin: "https://www.linkedin.com/in/your-profile",
  formEndpoint: ""
};
```

The inquiry form intentionally **does not pretend to send messages** until `formEndpoint` is configured with a real form service or backend endpoint.

## Deployment

This is a static website and can be deployed as-is to any static hosting service connected to `royshiv.me`.

## Notes

- No CSS or JavaScript frameworks are used.
- Project statuses are honest and identify concept or demonstration work.
- Remote photography is loaded from Unsplash with lazy loading where appropriate.
