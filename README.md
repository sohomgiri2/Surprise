# Music56

Premium offline-first music player PWA — Nothing-inspired glass UI.

## Files
- `index.html` — app UI, player, library and audio processing
- `manifest.json` — installable PWA metadata
- `service-worker.js` — offline app-shell cache
- `icons/` — install icons

## Run / deploy
Deploy the complete folder to GitHub Pages or Vercel over HTTPS. Open the deployed URL in Android Chrome and choose **Install app** / **Add to Home screen**.

## Local music access
Use **Add music** to choose audio files. Browsers may not remember ordinary file selections after reload. Where supported, **Music folder** uses the File System Access API and stores a directory handle in IndexedDB; the browser may still require permission again. The app cannot silently scan all Android storage.

## Audio
3D/8D-style modes use browser stereo panning. EQ and bass/treble controls use Web Audio filters. The 4D option combines supported stereo movement and visual response; it does not provide physical effects or hardware surround sound. Browser audio capabilities vary.

## Data
Playlists/favorites/lyrics/preferences are stored locally in IndexedDB. Export a JSON backup regularly. Audio files are not copied into the app database; the original files remain on your device. If browser storage is cleared, local app data can be lost.

Developer: Sohom Giri · @itz_sg_063
