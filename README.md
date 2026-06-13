# Adhkar & Dua

A clean, modern, and fully offline web app for daily Islamic remembrance (Adhkar) and supplication (Dua).

---

## Features

- **Morning & Evening Adhkar** — complete guided sessions with repeat counters
- **After Salah Dhikr** — post-prayer remembrances
- **Rabbana Duas** — Qur'anic supplications
- **Forgiveness Duas** — powerful istighfar supplications
- **Life Duas** — sleep, waking up, food, travel, protection, and distress duas
- **Favorites** — save any dhikr/dua with a single tap, stored locally
- **Search** — live search across Arabic text, transliteration, and translation
- **Virtue popup** — view the hadith or Qur'anic source behind each dhikr
- **Copy to clipboard** — copy Arabic + transliteration + translation instantly
- **Progress bar** — tracks your completion for Morning and Evening sessions
- **Streak tracker** — calendar view showing which days you completed your adhkar
- **Dark mode** — full dark theme, saved across sessions
- **Font size control** — Small / Medium / Large
- **Show/hide transliteration and translation**
- **Responsive** — works on mobile and desktop
- **Fully offline** — no account, no server, no tracking

---

## Technologies

| Technology | Purpose |
|---|---|
| HTML5 | App structure |
| CSS3 + [Tailwind CSS](https://tailwindcss.com/) (CDN) | Styling and layout |
| Vanilla JavaScript (ES6+) | All logic, no framework |
| Google Fonts (Amiri + Inter) | Arabic and Latin typography |
| localStorage | Persistence for progress, settings, favorites, and streak history |

---

## How to Run

### Option 1 — Open directly in your browser

No installation required. Just download or clone the repository and open `index.html`:

```
index.html  ← double-click this file
```

### Option 2 — GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set source to `main` branch, root folder.
4. Your app will be live at `https://yourusername.github.io/Adhkar-Dua/`.

---

## Project Structure

```
Adhkar-Dua/
├── index.html      # App shell, layout, modals
├── script.js       # All logic and adhkar data
├── style.css       # Custom styles (Tailwind handles the rest)
├── img/
│   └── logo.png    # App logo / favicon
└── README.md
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

*May Allah accept from us and from you.*
