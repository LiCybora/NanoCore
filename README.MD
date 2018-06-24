# Nano Adblocker Core for Firefox (Unoffical)

Just another adblocker on Firefox

Nano Adblocker is based on [uBlock Origin](https://github.com/gorhill/uBlock).

### WARNING: This is NOT official Firefox port to Nano Adblocker and still experimental!

Official builds and sources can be found on [Nano Adblocker](https://github.com/NanoAdblocker/NanoCore).

## Announcement

### jspenguin2017 still find Maintainers for Firefox build!

If you want the official Firefox port, please help me to test the new build, or 
consider to be collaborator. The Firefox port is dropped for 2 months. I need 
time to catch up and confirm its stability, which is far away to be qualified 
as official build.

Recently I update the build script and I hope it is good now. The new build is
still in experimental stage. Please help me to test and report issues.

## Installation

You need Firefox version 52 or above to install this extension, but recommend 
58 or above for working with Nano Defender.

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
