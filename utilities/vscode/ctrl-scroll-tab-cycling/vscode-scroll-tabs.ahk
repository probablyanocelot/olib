#SingleInstance Ignore

; Prevent duplicate instances
if WinExist("AHK_VSCodeScrollHelper")
    ExitApp

Gui, +LastFound +ToolWindow -Caption
Gui, Show, Hide, AHK_VSCodeScrollHelper

; Your actual hotkeys
#IfWinActive ahk_exe Code - Insiders.exe
^WheelUp::Send ^{PgUp}
^WheelDown::Send ^{PgDn}
#IfWinActive

; Optional: close when VS Code closes
SetTimer, WatchVSCode, 500
return

WatchVSCode:
if !(WinExist("ahk_exe Code - Insiders.exe"))
    ExitApp
return