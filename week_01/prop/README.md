# Prop Drilling VS Context API

Medium Article Reference: https://www.freecodecamp.org/news/state-management-in-react-props-vs-context-api/

Youtube Video Reference: https://youtu.be/D66ej8uVeVU?si=hHtx78PG8-Aia3sh

                  ┌─────────────────┐
                  │   App Component │
                  └───────┬─────────┘
                          │
                          │   <ThemeContext.Provider
                          │     value={currentThemeData} >
                          ▼
            ┌──────────────────────────┐
            │                          │
            │ ThemeContext.Provider    │
            │                          │
            └───────────┬──────────────┘
                        │
                        │
            ┌───────────────┐
            Parent Component│
            └───────┬───────┘
                    │
                    ▼
            ┌─────────────────┐
            │ Middle Component│
            └───────┬─────────┘
                    │
                    ▼
            ┌───────────────────┐
            │ Deeply Nested Component │
            │      │                  │
            │      │  `useContext(ThemeContext)`  (Directly grabs data from pipeline)
            │      ▼                  │
            │  ┌───────────────────┐  │
            │  │ Accesses `theme`  │  │
            │  │ and `toggleTheme` │  │
            │  └───────────────────┘  │
            └───────────────────┘
