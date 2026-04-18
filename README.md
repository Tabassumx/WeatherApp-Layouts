# ⛅ Atmos Weather App

A modern, aesthetic weather application focused on **clean UI, intentional motion, and scalable layout systems**.
Built as a **design-first frontend project**, where visual hierarchy and interaction are treated as core functionality.

🔗 **Live Demo:** [https://atmosweathert.netlify.app/](https://atmosweathert.netlify.app/) 

---

## ✨ Key Highlights (What Recruiters Look For)

* 📍 Live location weather (Geolocation API)
* 🌍 City-based weather search
* ⚡ Optimized loading states (no blank UI)
* 🎨 Glassmorphism + dark UI system
* 📊 Structured data visualization (weekly forecast)
* 🌫️ Air quality insights UI
* 🧠 UX-focused layout decisions
* 📱 Clean responsive foundation (expandable)

---

## 🎥 Preview


## Night Preview of Atmos Weathert 
> <img width="1353" height="768" alt="weatherN" src="https://github.com/user-attachments/assets/5d0089fb-b695-4d64-8848-8168da8774db" />
---
## Day Preview of Atmos Weathert 
<img width="1353" height="768" alt="chrome_UVAShoGQRQ" src="https://github.com/user-attachments/assets/337a7cc7-b3ee-4137-bd3f-9549f66f1004" />


---
* UI Walkthrough
* Loading Animation
* Night Mode Experience

---

## 🎨 Design System

This project is built around a **visual + interaction system**, not just components.

### Principles:

* **Clarity over clutter**
* **Motion with purpose**
* **Consistent spacing & hierarchy**
* **Dark-first design thinking**

### Visual Style:

* Glassmorphism cards
* Soft gradients
* Low-contrast backgrounds
* Highlight-driven data blocks

---

## 🧩 UI Architecture

Instead of random sections, the UI is broken into **reusable layout patterns**:

### 🌙 Night Layout

* Dark UI baseline
* Eye-friendly contrast ratios

### ⏳ Loading State System

* Skeleton / animated feedback
* Prevents perceived delay

### 🌤️ Weather Core Display

* Central temperature focus
* Supporting metric cards

### 📅 Forecast Grid

* Scannable layout
* Icon-supported data reading

### 🌫️ Air Quality Block

* Informational grouping
* Minimal cognitive load

---

## 📁 Project Structure

```
weather-app/
│── weather.html
│── style.css
│── script.js
```

---

## 🛠️ Tech Stack

* **HTML5** – semantic structure
* **CSS3** – Flexbox, Grid, visual system
* **Tailwind CSS** – utility-first styling
* **JavaScript (Vanilla)** – logic & API handling
* **Weather API** – real-time data

---

## ⚙️ Core Functionality

### 🌍 Fetch Weather Data

```js
async function getWeather(city) {
  const res = await fetch(`API_URL&q=${city}`);
  const data = await res.json();
  return data;
}
```

### 📍 Get User Location

```js
navigator.geolocation.getCurrentPosition((pos) => {
  const { latitude, longitude } = pos.coords;
});
```

---

## 🚀 Local Setup

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
open weather.html
```

---

## 📊 Performance & UX Focus

* ⚡ Reduced layout shift
* 🎯 Clear visual hierarchy
* ⏳ Smooth transitions
* 🧠 Fast information scanning

> You can optionally add Lighthouse scores here

---

## 📌 Future Improvements

* 📱 Full mobile responsiveness
* 🎭 Dynamic weather animations (rain, snow, fog)
* 🌍 Multi-location saving
* ⚙️ User settings (units, themes)
* 📈 Advanced data visualization

---

## 💡 What This Project Demonstrates

* Strong **UI/UX thinking**
* Ability to build **structured frontend systems**
* Understanding of **real-world API integration**
* Focus on **performance + user perception**

---

## 👩‍💻 Author

**Tabassum**
Frontend Developer | Student

---

## ⭐ Support

If this project helped or inspired you:

* ⭐ Star the repo
* 🍴 Fork it
* 💬 Share feedback

---

> “Precision builds trust. Aesthetics build emotion.”
