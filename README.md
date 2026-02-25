# Dubbelchans Value Finder ⚽📊

Ett verktyg som skannar oddmarknaden efter **spelvärda dubbelchans-spel** (1X, X2, 12) i oddsspannet 1.30–1.50, analyserar form och statistik, och beräknar spelvärde med en **Poisson-modell**.

![Screenshot](assets/screenshot.png)

---

## ✨ Features

- **📡 Live odds-hämtning** — Hämtar dubbelchans-odds från The Odds API och jämför mellan spelbolag
- **📊 Form & statistik** — Visar senaste 5 matcher, hemma/borta-statistik, H2H och formpoäng (0–100)
- **🧮 Value-beräkning** — Poisson-baserad sannolikhetsmodell som flaggar spelvärde om Value % > 5%
- **🎨 Dark mode UI** — Modern dashboard-layout med färgkodning (grön/gul/grå)
- **📤 CSV-export** — Exportera spelvärda matcher
- **📜 Historik & ROI** — Spara spel och följ din avkastning över tid
- **🔔 Notifieringar** — Ljud/notis när nytt spelvärde hittas

---

## 🚀 Kom igång

### 1. Klona repot
```bash
git clone https://github.com/Tryfffel/dubbelchans-value-finder.git
cd dubbelchans-value-finder
```

### 2. Öppna appen
```bash
# Öppna direkt i webbläsaren:
open index.html

# Eller starta en lokal server (rekommenderat för API-anrop):
npx serve .
# Alternativt med Python:
python3 -m http.server 8080
```

### 3. Lägg in API-nycklar
Klicka på ⚙️ **Inställningar** i appen och klistra in dina API-nycklar. De sparas i `localStorage` och pushas aldrig till GitHub.

---

## 🔑 API-nycklar

| API | URL | Gratis nivå |
|-----|-----|-------------|
| **The Odds API** | https://the-odds-api.com | 500 requests/månad |
| **API-Football** | https://www.api-football.com | 100 requests/dag |

> **Tips:** The Odds API är det enda som krävs för grundfunktionen. API-Football ger rikare statistik.

---

## 🧮 Så funkar Value-beräkningen

Appen använder en **Poisson-fördelning** för att beräkna sannolikheten för varje matchutfall:

1. **Förväntat målantal** beräknas för varje lag baserat på:
   - Genomsnittliga mål gjorda/insläppta (senaste 10 matcher)
   - Ligans genomsnittliga mål per match
   - Formjustering (±15%) baserat på senaste 5 resultaten

2. **Sannolikhet per utfall** beräknas via Poisson-formeln:
   ```
   P(k mål) = (λ^k × e^-λ) / k!
   ```

3. **Dubbelchans-sannolikhet** kombineras:
   ```
   P(1X) = P(hemmaseger) + P(oavgjort)
   P(X2) = P(oavgjort) + P(bortaseger)
   P(12) = P(hemmaseger) + P(bortaseger)
   ```

4. **Value %** beräknas:
   ```
   Riktigt odds = 1 / sannolikhet
   Value % = ((marknadens odds / riktigt odds) - 1) × 100
   ```
   - **Grön (>10%)** = Starkt spelvärde 🟢
   - **Gul (5–10%)** = Spelvärde 🟡
   - **Grå (<5%)** = Inget värde

---

## 🗺️ Roadmap

- [ ] Push-notifieringar i webbläsaren
- [ ] Automatisk uppdatering var 30:e minut
- [ ] Stöd för fler ligor och marknader
- [ ] Backend-integration för att slippa CORS-problem
- [ ] Bankroll management-verktyg
- [ ] Jämförelse mot stängda odds (closing line value)

---

## ⚠️ Disclaimer

> **Detta är ett analysverktyg, inte finansiell rådgivning. Spela ansvarsfullt.**
> Gambling kan vara beroendeframkallande. Spela bara för pengar du har råd att förlora.
> [Stödlinjen: 020-81 91 00](https://www.stodlinjen.se)

---

## 📄 Licens

MIT © [Tryfffel](https://github.com/Tryfffel)
