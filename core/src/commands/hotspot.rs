/// create network interface here using OS specific implementation
/// once this is done pass the network conf
use crate::{
    net::{linux_hotspot, WifiHotspotConfig},
    utils::CommandData,
};

#[tauri::command]
pub fn create_wifi_hotspot() -> CommandData<WifiHotspotConfig> {
    #[cfg(target_os = "linux")]
    {
        // Linux-specific command
        let Some(new_access_point) = linux_hotspot::create_hotspot().ok() else {
        return CommandData::err("failed to create access point", WifiHotspotConfig::err())
    };
        CommandData::ok("created access point", new_access_point)
    }

    #[cfg(target_os = "windows")]
    {
        // Windows-specific command
        todo!();
    }

    #[cfg(target_os = "macos")]
    {
        // macOS-specific command
        todo!();
        /*  tauri::Command::new("open")
        .arg("https://www.example.com")
        .spawn()
        .expect("Failed to execute command"); */
    }
}

#[tauri::command]
pub fn kill_wifi_hotspot() {
    #[cfg(target_os = "linux")]
    {
        linux_hotspot::turn_off_hotspot()
    }

    #[cfg(target_os = "windows")]
    {
        // Windows-specific command
        todo!();
    }

    #[cfg(target_os = "macos")]
    {
        // macOS-specific command
        todo!();
        /*  tauri::Command::new("open")
        .arg("https://www.example.com")
        .spawn()
        .expect("Failed to execute command"); */
    }
}
