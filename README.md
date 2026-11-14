# Music56 v2 — Nothing × Glass

Premium mobile-first music player PWA by Sohom Giri (@itz_sg_063).

## What's improved
- Folder scanning stores supported file handles and local audio blobs in IndexedDB.
- Reconnect/rescan is a user action, so browsers can request folder permission inside a user gesture.
- Folder-picker fallback uses Android/browser folder input (`webkitdirectory`) where supported, plus multi-file audio selection.
- Fullscreen button, premium frosted-glass / Nothing-inspired interface, mini-player, 10-band EQ, bass/treble, stereo panning, visualizer, lyrics, favorites, recent tracks, shuffle/repeat, sleep timer, backup/restore, and offline app shell.

## Important Android/browser limitation
A web app cannot silently read every file on Android. Browser support for `showDirectoryPicker()` and folder inputs differs by browser/version. If the folder picker is unsupported, use **Add music** to select multiple audio files, or **Music folder** to try the browser folder-selection fallback. Music56 saves selected audio blobs and app metadata in IndexedDB so they can remain available after refresh, subject to browser storage quota. Very large libraries may exceed available storage; keep backups and check storage usage.

For a previously connected directory, after refresh tap **Music folder** / reconnect to re-authorize and rescan. Browsers may revoke access or require a fresh permission prompt. No website can guarantee access after the user clears site data, browser eviction, or device changes.

## Deploy
Upload all project files and the `icons` folder to the repository root. Enable GitHub Pages in Settings → Pages, or import the repository into Vercel. Use HTTPS. Open the published URL in Android Chrome and choose **Install app / Add to Home screen**.

## Audio effects
3D/8D-style modes use stereo panning; EQ/bass/treble use Web Audio filters. The 4D label is a combined panning/visual effect, not physical 4D or true hardware surround sound. Browser/device support varies.

## Backup
Use Settings → Export backup regularly. The JSON backup contains Music56 app data and metadata, not copies of the audio files.
