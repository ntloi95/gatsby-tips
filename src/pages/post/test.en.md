---
url: test
date: '2018-08-28'
title: Test Engish
---
# Vietnamese IME - Vietnamese typewriter

Type Vietnamese in Sublime Text 3

Version 2 uses the ibus-bogo BoGoEngine engine

Version 1 with 2 separate branches for VNI and TELEX typing is available at Repo [VN_IME] (https://github.com/88d52bdba0366127fffca9dfa93895/VN_IME) and at the TELEX branch (https://github.com/yehnkay). / VN_IME / tree / TELEX)

## Setting

Package Control: Install Package -> `vn ime`

Manual installation:

```
git clone https://github.com/yehnkay/VN_IME
```

## User manual

Press F2 to enable Vietnamese input, VNI is the default. Press F2 to turn off

When the status bar shows `VN IME: ON` is on,` VN IME: OFF` is off

To use TELEX, type `telex` in the` Preferences.sublime-settings` configuration file at `Preferences` ->` Settings - User` with the value `true`. For example:

```
{
   "telex": true
}
```