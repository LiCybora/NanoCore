# Nano Adblocker Core for Firefox (Unoffical)

Just another adblocker on Firefox

Nano Adblocker is based on [uBlock Origin](https://github.com/gorhill/uBlock).

This repository contains the legacy code of Nano Adblocker for Firefox 
(Unofficial), the new code can be found in the
[Nano Core 2 repository](https://github.com/LiCybora/NanoCore2).

### WARNING: This is NOT official Firefox port to Nano Adblocker and still experimental!

Official builds and sources can be found on [Nano Adblocker](https://github.com/NanoAdblocker/NanoCore). 
As this is unofficial port, report issues here instead of upstream or you may 
not get help.

## Announcement

Due to unavailable for Nano Defender on AMO, there is no plan to put Nano 
Adblocker for Firefox on AMO. There will be only unofficial support for Nano 
Adblocker for Firefox. No plan to be an official port in this moment. 

However, this repository will still follow update from upstream. Feel free to 
use it if it is good to you.

## Installation

You need Firefox version 52 or above to install this extension, but recommend 
58 or above for working with Nano Defender.

Caution: You need Firefox 60+ for keyboard shortcuts assignment!

### Normal Install

Click .xpi file to download and install from link below.

### [Get it for Firefox (Unofficial, Signed, Unlisted, Experimental)](https://github.com/LiCybora/NanoCoreFirefox/releases/)

Note: Firefox Sync will **NOT** sync this addon among devices due to unlisted 
from AMO.

### [Get also Nano Defender, the perfect companion extension for Nano Adblocker](https://jspenguin2017.github.io/uBlockProtector)

### Install Unsigned (For Developers or testing purpose ONLY)

Developer version will not be signed. Please download the zip file. I **won't**
provide unsigned xpi file which may cause confusion.

#### Force Install

 1. You will need either [Developer Edition](https://www.mozilla.org/firefox/developer/)
 or [Nightly](https://nightly.mozilla.org/) to Install.
 	 - If release or beta build is mandatory, consider
 	 [ESR](https://www.mozilla.org/en-US/firefox/organizations/) or
 	 [Unbranded Builds](https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds). 
 	 - Otherwise see [Debugging](https://github.com/LiCybora/NanoCoreFirefox#debugging).

 2. Go `about:config`, then set `xpinstall.signatures.required` to false (by 
 double click).
 	 - In regular release or beta has **no** effect for this setting.

 3. Either rename .zip to .xpi then drag-and drop to Firefox, or go 
 `about:addons`, and click `Install from Add-on File...` and choose the .zip
 you just downloaded.

#### Debugging

 - This works for **ALL** Firefox builds, but all debugging addons **will be
 removed** whenever quit Firefox.
 	- But seems settings and filters will remain.

 - Go `about:debugging#addons` and `Load Temporary Add-on`, choose the .zip you
 just downloaded.

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

There are also a few changes specifically for Edge:
- Mapped `fetch` requests to `xhr`
- Fixed the popup panel in logger
- Fixed advanced settings button in dashboard
- Fixed issues with InPrivate mode
