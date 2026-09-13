# PortPilot

Interactive **NAT / port-forwarding simulator** in the browser. Configure inbound rules, send a test packet, and watch the router decide whether traffic is forwarded or blocked.

Live: [77manos7.github.io/portpilot](https://77manos7.github.io/portpilot/)

## What it shows

- Router control panel with inbound port-forwarding rules (TCP / UDP / both)
- Live topology / packet journey visualization
- Packet generator (act like a public-internet client)
- Sample LAN targets (Minecraft, HTTP, Plex)
- EN / EL UI strings

## Stack

Vanilla HTML, CSS, and JavaScript — no build step.

```text
index.html
styles.css
script.js
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or: python3 -m http.server
```

## License

All rights reserved.
