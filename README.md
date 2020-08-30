# Fitness Routine Timer

An interval time 'Progressive Web App'.

This started out as a simple vanilla javascipt PWA, but grew to be a webpack app so it could support more than just chrome browsers (& Android devices).

As much of a learning by doing exercise as a fitness timer.

## What does it do.

Provides a list of routines. 
The user chooses a routine, and can see detail of what the routine involves.
When the user starts the routine, the app counts down each interval. 
Supports SubRoutines, i.e. common warmup cooldown.
Supports repeating a SubRountine - i.e. sets
Allows you to see what is coming up as well as what you should be doing.
With 3 seconds to go alerts you that this interval is coming to an end.

## Deployment
On checkin, github actions are used to build the PWA.
The PWA is hosted by github pages, which means checking the built software in to github!
See the github action for details on how this works.

## Development
Steps:
* `git clone`
* `npm install`

For a production build 
* `npm run build`
* `npm run serve`
* Open browser on localhost:8080

For a dev build
* `npm run start` Auto opens default browser

## Next steps

* ~~Use GitHub actions to build this.~~
* Introduce sets of routines
* Figure out why sound doesn't work on Safari, and alternative approach for it.