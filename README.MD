# Nano Adblocker Core for Firefox (unoffical)

Just another adblocker

Nano Adblocker is based on [uBlock Origin](https://github.com/gorhill/uBlock).

### WARNING: This is NOT official Firefox port to Nano Adblocker and most likely extremely unstable!

Official builds and sources can be found on [Nano Adblocker](https://github.com/NanoAdblocker/NanoCore).

### jspenguin2017 still find Maintainers for Firefox build!

### [(Unofficial and Experimental) Get it for Firefox](https://github.com/LiCybora/NanoCoreFirefox/releases/)

### [Get Nano Defender for Firefox, the perfect companion extension for Nano Adblocker](https://github.com/LiCybora/NanoDefenderFirefox)

## Notable Change

<!--
### \[[Work in progress](https://github.com/NanoAdblocker/NanoCore/issues/33)\] Nano Dashboard, clean and modern

![Screenshot](https://i.imgur.com/LUAu7KO.png)

Not yet available
-->

### \[[Work in progress](https://github.com/NanoAdblocker/NanoCore/issues/1)\] Nano Filter Linter, neat and saves frustration

#### Know exactly why your rule is misbehaving

![Screenshot](https://i.imgur.com/zboYYEr.png)

<!--
#### Get notified for common mistakes

![Screenshot](https://i.imgur.com/IkTaEQ3.png)
-->

Partially available since 1.0.0.22

### Nano Filter Viewer, powerful and blazing fast

![Screenshot](https://i.imgur.com/fZh4Hqn.png)

Available since 1.0.0.10

### [Nano Extra Resources](https://github.com/NanoAdblocker/NanoFilters/blob/master/NanoFiltersSource/NanoResources.txt), useful and configurable

![Screenshot](https://i.imgur.com/0HIYf4d.png)

Available since 1.0.0.6

### Nano Filter Highlighter, beautiful and helpful

![Screenshot](https://i.imgur.com/KktoFJL.png)

Available since 1.0.0.0

## Other Change

*Note: user interface and other housekeeping changes are not listed here.*

- [Extended advanced settings](/notes/advanced-settings.MD#advanced-settings)
- [Extended filter syntax](/notes/filter-syntax.MD#filter-syntax)
- [Polished filter list subscription process](/notes/filter-list-authoring.MD#filter-list-authoring)
- Enabled `Block CSP reports` by default (to prevent websites from abusing it
  to track users)
- Added a few more filters to filters manager
- Made cache control button to be always shown
- Added force scroll mode (to be used with element zapper)

There are also a few changes specifically for Edge: 
- [Added whitelists for Edge build](/notes/dashboard-whitelist.MD#dashboard-whitelist)
- Mapped `fetch` requests to `xhr`
- Fixed the popup panel in logger
- Fixed advanced settings button in dashboard

## Pending Features

We are constantly improving! The list of pending features can be found
[here](/notes/pending-features.MD#pending-features).
