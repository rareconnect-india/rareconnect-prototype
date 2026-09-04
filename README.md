# RareConnect prototype

RareConnect is an adults-and-caregivers-first community prototype for people affected by rare diseases. It demonstrates how condition communities, trusted resources and consent-based connections could work in a closed Gujarat pilot.

> **Prototype boundary:** This is a seeded product demonstration. It has no real accounts, server-side messaging, medical advice, emergency response, treatment recommendations, eligibility decisions or grievance submission.

## Live demo

[Open the working RareConnect prototype](https://rareconnect-india.github.io/rareconnect-prototype/).

Source repository: [rareconnect-india/rareconnect-prototype](https://github.com/rareconnect-india/rareconnect-prototype)

## What you can test

- Adult/caregiver onboarding and community selection
- Condition-based communities and a moderated social feed
- Creating posts, supportive reactions and member discovery
- Connection requests that must be accepted before messaging
- Text-only one-to-one messaging with visible safety guidance
- Reporting, blocking and privacy controls
- Service previews for care, equipment, schemes, trials, learning and grievance routes
- Responsive desktop/mobile layouts and installable PWA metadata

The interface uses a connection-first home screen, icon-led starting points, clear active states, grouped community content, and responsive desktop/mobile navigation.

## Run locally

No package installation or build step is required.

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

The demo stores changes in the current browser using `localStorage`. Use **Profile → Reset prototype data** to return to its seeded state.

## Privacy and safety

- Use fictional information only.
- Never enter patient names, contact details, diagnoses, medical reports or credentials.
- The first proposed pilot is restricted to people aged 18 or older and adult caregivers.
- Community posts are lived experience, not medical advice.
- Clinical-trial, scheme and grievance screens communicate navigation boundaries rather than recommendations or guarantees.

Do not place real participant feedback or moderation cases in public GitHub Issues. Use Issues only for technical defects and non-sensitive interface feedback.

## Current architecture

This is a dependency-free static web app:

- `index.html` — application shell and accessible navigation
- `styles.css` — responsive design system and desktop/mobile layouts
- `app.js` — seeded data, routes and interactive demo state
- `manifest.webmanifest`, `sw.js`, `icon.svg` — PWA support

A production implementation still requires authentication, authorization, a database, real-time messaging, notification delivery, audit logs, moderation operations, encryption, monitoring, backups and formal privacy/security review.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Security issues must follow [SECURITY.md](SECURITY.md).

Copyright © 2026 RareConnect. No license is granted at this stage.
