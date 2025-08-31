# Stavros's Lair of [Pipis]

This is my personal portfolio and project hub. I built it to be a central place for the dumb, fun, and occasionally useful tools I create for the Deltarune fandom.

The goal was to create something that was both a functional portfolio and a chaotic work of art, inspired by the golden age of Geocities and the glorious absurdity of the Deltarune fandom itself.

### [➡️ LIVE DEMO ⬅️](https://stavros-alt.github.io/portfolio/)

---

## Featured Projects

| Project | Description | Link |
| :--- | :--- | :---: |
| **Deltarune Song Ranker** | A full-stack web application that allows users to rank the entire Deltarune soundtrack using an Elo-based system and view live community-wide results. | [➡️ Try It](https://stavros-alt.github.io/drSongRanker/) |
| **Deltarune Loadout Optimizer** | A client-side tool that automatically calculates the optimal weapon and armor loadout for your party based on your current inventory. | [➡️ Try It](https://stavros-alt.github.io/drLoadoutCalc/) |

---

## Technical Features & Stack

This is not just a simple HTML page; it's an exercise in controlled chaos.

*   **Layered Design:** The page is built with three distinct layers managed by CSS `z-index`:
    1.  **Content Layer (`z-index: 3`):** The actual project cards and links. Uses a semi-transparent, blurred background (`backdrop-filter`) to ensure readability.
    2.  **DVD Screensaver Layer (`z-index: 2`):** The Annoying Dog logo, animated in vanilla JavaScript using `requestAnimationFrame` for smooth, performant motion.
    3.  **Chaos Layer (`z-index: 1`):** A container of dancing Spamtons and spinning Tennas. Kept at a low `opacity` to be a subtle, non-distracting background texture.

*   **Frontend:** Built with vanilla **HTML**, **CSS**, and **JavaScript**. No frameworks.
    *   CSS Animations (`@keyframes`) for the spinning elements.
    *   A responsive `grid` layout for the project cards.
*   **Font:** Yes, that's Comic Sans. It was a deliberate and correct choice.

---

## How to Run Locally

1.  Clone the repository: `git clone https://github.com/Stavros-alt/portfolio.git`
2.  Open the `index.html` file in any modern web browser.
3.  That's it. No dependencies, no build step.