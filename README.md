# Music56 — Liquid Studio Repair 2.3.0

**Pure Sound. Fluid Experience.**

Designed and developed by **Sohom Giri** · Instagram **@itz_sg_063**.

Music56 is a mobile-first, offline-capable personal music player PWA with a Nothing-inspired interface and iOS-style liquid glass surfaces.

## Version 2.3.0 repair notes

This update fixes several weak points in the previous build: song rows now show artist/album separately from duration; imports probe duration and read common metadata; import runs in small batches; failed IndexedDB saves are reported instead of being silently treated as success; player UI resets correctly when a track is removed; Studio EQ/tone/balance/reverb settings persist and are reapplied when the audio graph starts; bypass restores the selected processing settings; the compressor toggle controls the compressor; and the service-worker cache is versioned for this release.

## What is included

- Multi-file audio selection and supported folder scanning
- Android-friendly first-use guide with **OK** and **Don't show this again**
- Reopen the guide any time from **How to add songs**
- Song title, artist, album and duration display when available
- MP3 ID3 tag reading; basic M4A/MP4 atom metadata reading; filename artist-title fallback
- Duration probing during import with a timeout, plus metadata refresh on playback
- IndexedDB storage for selected audio blobs and song metadata
- Folder handles and reconnect flow on browsers that support the File System Access API
- Duplicate detection, search, favorites and recently played
- Play all, shuffle, repeat, previous/next, queue and playlists
- Track title/artist editing, lyrics editor and listening statistics
- Fullscreen, mini-player and browser Media Session integration where supported
- 10-band EQ with presets, bass, treble, stereo balance and echo/delay mix
- 3D Space, 8D Orbit and 4D Motion stereo panning modes
- Live frequency visualizer, playback speed, master volume and mute
- Dynamic compressor toggle, audio-processing bypass and sleep timer
- JSON settings/library backup and restore, storage estimate and persistence request
- PWA manifest, offline app shell and responsive mobile/tablet/desktop layout
- Developer profile, version and Instagram link

## Song details and compatibility

Artist and album values are read from supported embedded metadata. The importer reads common MP3 ID3 fields and attempts common M4A/MP4 metadata atoms. If a file has no artist tag, Music56 tries an `Artist - Track` filename pattern; otherwise it displays **Unknown artist**. Duration is read from the browser's audio metadata. If the browser cannot decode the file or its metadata, duration may display as `--:--` until playback metadata becomes available.

## Android file access limits

A PWA cannot silently scan all Android storage. The user must select audio files or choose a folder where the browser supports it. If the folder picker is unavailable, use **Add music** and select multiple files from Downloads, Music or Audio. A browser may ask for folder permission again later.

IndexedDB storage is subject to browser quota and browser/device data-clearing policies. If the device runs out of storage, not every selected audio blob may be saved; Music56 displays a save warning. Keep original music files and export regular backups. JSON backups contain app state, playlists, favorites, lyrics and metadata, but not the audio file contents.

The 3D/8D/4D names refer to stereo panning effects, not physical 4D or true multichannel surround. Audio effects and Media Session controls depend on browser support.

## Deploy

Upload the **contents** of this folder (not an extra nested folder) to the repository root. Keep `index.html`, `manifest.json`, `service-worker.js` and `icons/` together. Enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**. Open the HTTPS site in Android Chrome. If an old version remains visible, refresh the site or close/reopen the installed PWA so the updated service-worker cache can activate.
