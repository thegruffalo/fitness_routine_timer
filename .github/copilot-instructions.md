# AI Agent Instructions for Fitness Routine Timer

This document provides essential context for AI agents working with the Fitness Routine Timer Progressive Web App (PWA).

## Git Workflow Requirements

1. **Branch Management**:
   - New work MUST be done on a new feature branch
   - Branches must be created from latest main branch
   - Branch naming convention: `feature/descriptive-name`

2. **Code Integration**:
   - All code MUST be pushed to GitHub
   - Changes MUST be merged via Pull Requests
   - Direct merges to main branch are not allowed
   - PRs must include clear descriptions of changes

## Project Overview

This is a vanilla JavaScript PWA that provides interval-based fitness routines with countdown timers. It supports:
- Multiple routines with sub-routines
- Configurable sets and intervals
- Audio alerts for interval changes
- Screen wake lock for uninterrupted operation
- PWA features for offline use

## Architecture & Data Flow

1. **Core Components**:
   - `src/js/app.js`: Main application entry point, handles UI and timer logic
   - `src/js/view_models.js`: Contains `CountdownTimerVM` and `RoutineTimerVM` for timer state
   - `src/js/routines/*.js`: Individual routine definitions
   - `src/templates/*.handlebars`: Handlebars templates for UI rendering

2. **Data Structure**:
   ```javascript
   // Routine structure example (from routines/*.js)
   {
     name: "Routine Name",
     sub_routines: [{
       name: "SubRoutine Name",
       sets: 1,
       start_delay: 0,
       end_delay: 0,
       duration_between_sets: 0,
       intervals: [{
         name: "Interval Name",
         duration: 30  // seconds
       }]
     }]
   }
   ```

## Development Workflow

1. **Setup**:
   ```bash
   npm install
   npm run start  # Dev mode with hot reload
   # or
   npm run build  # Production build
   npm run serve  # Test production build
   ```

2. **Making Changes**:
   - Create new feature branch from latest main
   - Make necessary code changes
   - Test changes locally
   - Push branch to GitHub
   - Create Pull Request for review
   - Address review comments if any
   - Merge via GitHub interface

3. **Adding New Routines**:
   - Create feature branch from latest main
   - Create new routine file in `src/js/routines/`
   - Import and add to array in `src/js/routines/routines.js`
   - Create PR for review and merge

## Project Conventions

1. **Timer Implementation**:
   - Uses `window.setInterval` with 250ms ticks for countdown
   - Alerts user with beeps at configurable intervals (default 3 seconds before change)

2. **Template Usage**:
   - All UI updates use Handlebars templates
   - Template files correspond to specific views (list, detail, timer)

## Build & Deployment

- Uses Webpack for bundling and PWA features
- GitHub Actions automatically builds and deploys to GitHub Pages
- Built files are committed to `docs/` for GitHub Pages hosting

## Common Patterns

- Screen wake lock is automatically requested when timer starts
- Timer state management uses the ViewModel pattern
- Sub-routines support common patterns like warmup/cooldown

## Integration Points

1. **PWA Integration**:
   - Service worker registration in `app.js`
   - Manifest generation via `webpack-pwa-manifest`

2. **Sound System**:
   - `src/js/sound.js` handles audio feedback
   - Known issue with Safari sound support

Remember to maintain PWA compatibility when making changes, particularly regarding offline functionality and service worker updates.
