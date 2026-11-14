# Music56 Liquid Studio Edition 2.2.0

**Music56 — Pure Sound. Fluid Experience.**  
Designed and developed by **Sohom Giri** · Instagram: **@itz_sg_063**

A mobile-first, offline-capable personal music player PWA with a Nothing OS × iOS glass interface.

## Feature set

1. Multi-file audio import
2. Folder selection where supported
3. Recursive folder scanning where supported
4. Saved folder-handle reconnect flow
5. IndexedDB audio-blob persistence
6. Local metadata persistence
7. Duplicate detection using path/name/size/modified time
8. Search across title, artist and album
9. Favorites
10. Recently played history
11. Play all
12. Shuffle playback
13. Repeat all / repeat one
14. Previous / next controls
15. Playback queue
16. Create playlists
17. Add current track to playlist
18. Play a playlist
19. Rename track title and artist metadata
20. Remove track from Music56 library
21. Lyrics editor with local saving
22. Fullscreen mode
23. Persistent mini-player
24. 10-band equalizer
25. Bass boost
26. Treble control
27. Stereo balance
28. 3D spatial pan mode
29. 8D-style rotating stereo pan
30. 4D-style combined spatial effect
31. Live audio visualizer
32. Master volume
33. Mute / unmute
34. Playback speed control
35. Sleep timer with cancel
36. Listening statistics
37. JSON settings/playlists backup export
38. JSON backup import
39. Library-list export
40. Storage quota estimate
41. Persistent storage request
42. PWA install manifest
43. Offline app-shell cache
44. Android media-session controls where browser supports them
45. Responsive mobile/tablet/desktop layout
46. Developer profile and project credits

## Android/browser limitations

A PWA cannot silently scan all Android storage or access every downloaded track. The user must select files or a folder. `showDirectoryPicker()` is not supported in every Android browser. If unavailable, use **Add music** to select multiple files. Folder and file handles may require permission again after refresh. IndexedDB persistence is subject to browser quota and browser/device data-clearing policies. Export backups regularly.

The JSON backup contains app settings, favorites, recent history, playlists, lyrics and metadata. It does **not** embed the original audio files. Use a separate copy of your music files as the reliable audio backup.

The 3D/8D/4D-labelled effects are software stereo panning effects, not physical 4D or true multichannel surround sound. Media Session controls depend on browser support.

## Deploy

Upload the contents of this folder (including `index.html`, `manifest.json`, `service-worker.js`, and `icons/`) to the repository root. Enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**. Open the HTTPS URL in Android Chrome and use **Add to Home screen / Install app**.


## Music56 2.2.0 updates
- Song rows show artist, duration and album when metadata is available. MP3 ID3 artist/album/title tags are read during import; duration is probed before the library is rendered.
- First-run song import guide explains how to select audio files on Android. The OK button closes it; “Don't show this again” stores the preference in this browser.
- Liquid Glass Studio redesign with sound presets (Flat, Deep Bass, Vocal, Pop, Rock, Bright, Night), 10-band EQ, spatial modes, tone shaping, live spectrum and playback speed.
- Metadata availability depends on tags embedded in the audio file and browser codec support. Missing artist tags appear as “Unknown artist” and can be edited from the song menu.
