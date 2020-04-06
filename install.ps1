# Install Package Managers
iwr -useb get.scoop.sh | iex
scoop install git
scoop bucket add extras
scoop bucket add nerd-fonts

iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Main
scoop install Cascadia-Code
# scoop install alacritty
scoop install windows-terminal
scoop install firefox
scoop install pwsh

$shortcut_path = "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Windows PowerShell\Windows PowerShell.lnk"
rm -force $shortcut_path
$shell = New-Object -ComObject WScript.Shell
$pwsh_shortcut = $shell.CreateShortcut($shortcut_path)
$target_path = scoop which wt | resolve-path | select -ExpandProperty Path
$pwsh_shortcut.TargetPath = $target_path
$pwsh_shortcut.WorkingDirectory = $target_path | split-path -Parent
$pwsh_shortcut.Save()

# Enable WSL
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux -NoRestart

# Media
scoop install reaper
scoop install vlc

choco install spotify -y

# Tools
scoop install less
scoop install fd
scoop install bat
scoop install fzf
scoop install ripgrep
scoop install dust
scoop install sharex
scoop install windirstat

# Communication
scoop install telegram
scoop install discord

# Dev
scoop install mercurial
scoop install putty
scoop install vscode-portable
code --install-extension Shan.code-settings-sync

scoop install dotnet-sdk
scoop install rustup-msvc

choco install unity-hub -y
choco install visualstudio2019-workload-vctools -y
choco install visualstudio2019-workload-manageddesktop -y

$msbuild_path = &"${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe" -latest -products * -requires Microsoft.Component.MSBuild -find MSBuild\**\Bin\MSBuild.exe
$msbuild_path = $msbuild_path | split-path -Parent
$env:Path += ";$msbuild_path"
[System.Environment]::SetEnvironmentVariable("Path",$env:Path,[System.EnvironmentVariableTarget]::Machine)

# Rust Tools
cargo install verco

# Registry
## map capslock to esc
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Keyboard Layout" /v "Scancode Map" /t REG_BINARY /d 00000000000000000200000001003a0000000000
## remove bing search
reg add HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Search /v BingSearchEnabled /t REG_DWORD /d 0 /f
reg add HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Search /v CortanaConsent /t REG_DWORD /d 0 /f
## remove vscode explorer integration
reg delete HKEY_CLASSES_ROOT\*\shell\VSCode /f

# Tasks
## update wallpaper
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -File $home\update-wallpaper.ps1"
$trigger = New-ScheduledTaskTrigger -AtLogon
$principal = New-ScheduledTaskPrincipal -UserID "$env:USERDOMAIN\$env:USERNAME" -LogonType S4U -RunLevel Highest
$settings = New-ScheduledTaskSettingsSet
$task = New-ScheduledTask -Action $action -Principal $principal -Trigger $trigger -Settings $settings
Register-ScheduledTask UpdateWallpaper -InputObject $task -Force

# Print Command to update profiles
echo ""
echo ""
echo "DOWNLOAD PROFILES"
echo ""
echo "iwr -useb https://raw.githubusercontent.com/matheuslessarodrigues/up/master/profiles/download-profiles.ps1 | iex"
echo ""
echo "A restart is needed before WSL config"
