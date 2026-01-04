# Day 4/90 Icon_based_info
## Icon-Based Information Page with Text-to-Speech & Multiple Languages  
### 90 Days of Code for Africa


## Overview

Millions of Africans cannot access critical information because they **cannot read or do not understand the language used**.

This affects:
- Health awareness
- Farming practices
- Public services
- Emergency response
- Civic participation

Illiteracy is not lack of intelligence — it is lack of access.

For **Day 4 of 90 Days of Code for Africa**, I built a **simple, icon-based information page** that uses **visuals, audio (text-to-speech), and multiple languages** to break literacy barriers.

No expensive tools.  
No frameworks.  
No backend.  

Just inclusive design.

## The Problem

Many information systems assume users can:
- Read fluently
- Understand English or French
- Navigate text-heavy interfaces

In reality:
- Millions rely on **symbols, sound, and repetition**
- Important messages are lost due to language barriers
- Illiterate users are excluded from digital services

This creates:
- Poor health outcomes
- Missed opportunities
- Digital inequality

## The Solution

An **Icon-Based Information Page** that:

- Uses **clear icons instead of long text**
- Supports **multiple languages**
- Reads information aloud using **Text-to-Speech**
- Works on **low-end smartphones**
- Runs fully in the browser

The goal is simple:
> If you can see and hear, you can understand.


## Features

- **Icon-first interface** (health, water, farming, safety)
- **Text-to-Speech** (Web Speech API)
- **Language switcher** (English, French, Swahili – extendable)
- **Mobile-friendly**
- **No internet required after loading**

## Ressources

- [Demo:](https://moseschirusha.github.io/day_4_icon_based_info)
- [Tutorial:](https://youtu.be/0pYeXKuL7gc)
- [Medium Article:](https://moseschirusha.medium.com/day-4-90-breaking-illiteracy-barriers-with-code-4a644728d3b2)

## Built With

- **HTML** – Structure  
- **CSS** – Simple, high-contrast design  
- **Vanilla JavaScript** – Logic & interactions  
- **Web Speech API** – Text-to-Speech  
- **JSON** – Language translations  

No frameworks  
No libraries  
No paid services  

## How It Works

### 1. Icon-Based Content
Each message is represented by:
- An icon
- A short phrase
- A voice button

Example:
- Clean Water
- Farming Advice
- Health Tips

### 2. Language Switching
Text is stored in a JSON file:

```json
{
  "en": {
    "water": "Drink clean water",
    "health": "Wash your hands regularly"
  },
  "fr": {
    "water": "Buvez de l'eau propre",
    "health": "Lavez-vous régulièrement les mains"
  },
  "sw": {
    "water": "Kunywa maji safi",
    "health": "Nawa mikono mara kwa mara"
  }
}

```

Users can switch languages instantly.

### 3. Text-to-Speech

Using the browser’s built-in speech engine:
```js
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = selectedLanguage;
  window.speechSynthesis.speak(speech);
}
```

No audio files needed.
No server needed.

## Project Structure

📁 day_4_icon_based_info
├── index.html
├── style.css
├── script.js
├── languages.json
└── README.md

## How to Run the Project

- Download or clone the repository
- Open index.html in any browser
- Select a language
- Tap icons to hear messages

That’s it.

