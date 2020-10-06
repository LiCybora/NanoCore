# Important Announcements Regarding Recent Changes

The project upstream has handovered, while at the time of this announcement, I still do not receive any words from old or new developer's stance about Firefox port. The project is considered detached from upstream until I got notified by upstream developer.

For more information, please read important announcements from upstream here: https://github.com/NanoAdblocker/NanoCore/issues/362



# Nano Adblocker Core for Firefox

Just another adblocker on Firefox

Nano Adblocker is based on [uBlock Origin](https://github.com/gorhill/uBlock).

This repository contains only auto-update script and documentations.

The code of the builder can be found in the [Nano Core 2 repository](https://github.com/LiCybora/NanoCore2). 

The built code can be found in the [release](https://github.com/LiCybora/NanoCoreFirefox/releases).

## Installation

You need Firefox version 55 (57 for Android) or above to install this extension, 
but require 57+ for HTML filtering.

Caution: You need Firefox 60+ for keyboard shortcuts assignment!

### Normal Install

Click .xpi file to download and install from link below.

### [Get it here (for Firefox 55+, including Waterfox)](https://github.com/LiCybora/NanoCoreFirefox/releases/)

### [Get it on AMO (Recommend, Firefox 57+ ONLY)](https://addons.mozilla.org/en-US/firefox/addon/nano-adblocker-firefox/)

**IMPORTANT: DO NOT install both versions.**

### [Get also Nano Defender, the perfect companion extension for Nano Adblocker](https://jspenguin2017.github.io/uBlockProtector)

Note: If you decide to pair with Nano Defender, please install both extensions from same source. 
That is: either both from AMO OR both from GitHub.
Otherwise, you will have to go through Step 2 of [extra installation step](https://jspenguin2017.github.io/uBlockProtector/#extra-installation-steps-for-ublock-origin) (but not other steps).

## Notable Change

### Customizable short keys for Mac Machine (Experimental)

![Screenshot](https://i.imgur.com/If3yfEe.png)

Available since 1.0.0.67

### \[[Work in progress](https://github.com/NanoAdblocker/NanoCore/issues/1)\] Nano Filter Linter, neat and saves frustration

![Screenshot](https://i.imgur.com/SStKkqq.png)

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

- [Extended advanced settings](https://github.com/NanoAdblocker/NanoCore2/blob/master/notes/advanced_settings.md#advanced-settings)
- [Tweaked filter syntax](https://github.com/NanoAdblocker/NanoCore2/blob/master/notes/filter_syntax.md#filter-syntax)
- Enabled `Block CSP reports` by default (to prevent websites from abusing it
  to track users)
- Added a few more filters to filters manager
- Made cache control button to be always shown
- Added force scroll mode (to be used with element zapper)
