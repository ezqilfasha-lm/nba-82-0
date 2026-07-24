# 82‑0 · The Perfect Season

**Spin a squad. Draft six. Survive eighty‑two.**

A browser game where you build a six‑man superteam from any era of NBA history and try to run the table — an **82‑0** regular season — against a full, coherently simulated league. Play solo, or start a live multiplayer lobby where your friends' teams join the league as expansion franchises and you race for the best record.

> **Live:** https://eightytwo-zero.netlify.app  ← _update this to your Netlify URL_

---

## Highlights

- **Spin & draft** — spin the wheel for a random team‑season, pick one player, repeat until you have a starting five plus a sixth man. Choose strict positions or **free** (positionless) lineups.
- **Coherent season sim** — your team is dropped into a 31‑team league and plays a balanced 82‑game schedule, watchable game‑by‑game, followed by seeded playoffs and league‑wide awards.
- **Deep player pool** — curated iconic squads from 1962–2026 **plus** the full 30‑team league for every season from 2016–2024: ~2,500 players across ~289 team‑seasons, with real per‑game stats.
- **Live multiplayer** — a synced waiting room with ready‑states and a host "start", where every player's drafted team becomes an extension franchise in one shared league. You face each other on the schedule, watch a broadcast‑style play‑by‑play for head‑to‑head games, and the best regular‑season record is crowned **Champion**.
- **Draft clock** — in multiplayer, a countdown adds pressure; run out of time and your empty slots auto‑fill.
- **Easter eggs** — there's at least one hidden way to guarantee a perfect season. 👀

---

## Playing

**Solo**

1. Pick an era (which seasons can be spun) and a conference.
2. Spin the wheel, draft a player into an open slot, and repeat until all six are filled.
3. Simulate the season and chase 82‑0. Want a different result? **Restart run** and draft again.

**Multiplayer**

1. One person creates a lobby and shares the link (or code) with friends.
2. Everyone joins, sets a name, and taps **Ready**. The host picks the positioning rule for the lobby.
3. The host starts the league — everyone drafts their own six (before the clock runs out).
4. The host runs the season; every player watches the same league play out, and the best record takes the crown.

---

## How it works

The simulation is fully **deterministic**: a seeded RNG (mulberry32) drives a point‑margin match model, so the same seed reproduces the identical league every time. Player ratings feed team offense/defense numbers, which feed per‑game margins; one sampled margin yields both the win/loss and the score.

That determinism is what makes multiplayer fair — everyone in a lobby simulates the **byte‑identical** league from a shared seed, so records and standings match on every screen without any scores being passed around. Each player's personal box scores are generated from a separate per‑game seed, so they add flavor without ever changing the shared result.

---

## Multiplayer

Multiplayer runs client‑side on top of a small **Firebase Realtime Database** — there's no custom backend.

- The **lobby code** encodes the shared seed and settings, and doubles as the Firebase room key.
- Players sign in **anonymously**; each writes only its own row (name, ready‑state, roster, result).
- The shared seed guarantees an identical league; the backend only syncs presence, ready‑states, rosters, and the host's start/run signals.
- If the backend is ever unreachable, the game falls back to solo play.

### Setting up your own Firebase (for forks)

1. Create a Firebase project and a **Realtime Database** (choose a region near your players).
2. Enable **Anonymous** sign‑in (Authentication → Sign‑in method).
3. Paste your web app's `firebaseConfig` into the config object near the top of the multiplayer section in `nba-perfect-season.html`. These values are public by design — security comes from the rules below, not from hiding them. (Never commit a service‑account key; that's a different, secret credential.)
4. Publish these Realtime Database rules:

```json
{
  "rules": {
    "rooms": {
      "$code": {
        ".read": "auth != null",
        "settings": {
          ".write": "auth != null && (!data.exists() || data.child('hostId').val() === auth.uid)"
        },
        "players": {
          "$uid": { ".write": "auth != null && $uid === auth.uid" }
        }
      }
    }
  }
}
```

Anyone signed in can read a room they have the code for; the host is the only one who can write the shared settings; each player can write only their own row.

---

## Running & deploying

It's a static site — no build step, no dependencies to install.

- **Locally:** open `index.html` in a browser. (Live multiplayer needs the files served over `http(s)`, not `file://`, plus a configured Firebase project.)
- **Deploy:** host `index.html` and `nba-perfect-season.html` **together** on any static host. This repo is wired to Netlify, so every push to `main` auto‑deploys. Publish directory is the repo root; there's no build command.

---

## Files

| File | What it is |
| --- | --- |
| `index.html` | Landing page and lobby entry point |
| `nba-perfect-season.html` | The game — self‑contained engine, data, UI, and multiplayer |

---

## Tech

Vanilla JavaScript, HTML, and CSS — no framework, no bundler. Google Fonts (Anton, Oswald, IBM Plex Mono). Firebase Realtime Database + Anonymous Auth (compat CDN) for live multiplayer.

---

## Data & credits

- Historical box‑score data for the 2016–2024 seasons comes from the MIT‑licensed [NocturneBear/NBA‑Data‑2010‑2024](https://github.com/NocturneBear/NBA-Data-2010-2024) dataset; positions and ratings are derived from it.
- Inspired by [38‑0](https://38-0.app), the football version of the same idea.

---

## Disclaimer

Independent fan project. **Not affiliated with, endorsed by, or sponsored by the NBA or NBPA.** Team and player names and statistics are used as factual references only — no logos, crests, or likenesses. Player overalls are referenced from publicly listed NBA 2K ratings for flavor only, and avatars are generated silhouettes.

---

## License

The project code is released under the **MIT License** — feel free to change this to whatever you prefer. Note that the bundled historical dataset carries its own MIT license from the source linked above.
