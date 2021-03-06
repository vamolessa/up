// firefox config
//%APPDATA%\Mozilla\Firefox\Profiles\XXXXXXXX.your_profile_name\user.js

// search engines
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.search.update", false);

// new tab
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtab.preload", true);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.introShown", true);

// activity stream
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// ui
user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("reader.color_scheme", "dark");
user_pref("lightweightThemes.selectedThemeID", "firefox-compact-dark@mozilla.org");
user_pref("devtools.theme", "dark");
user_pref("browser.uidensity", 1);
user_pref("browser.uiCustomization.state", '{"placements":{"widget-overflow-fixed-list":["_446900e4-71c2-419f-a6a7-df9c091e268b_-browser-action","ublock0_raymondhill_net-browser-action"],"nav-bar":["back-button","forward-button","urlbar-container"],"toolbar-menubar":["menubar-items"],"TabsToolbar":["tabbrowser-tabs","alltabs-button"],"PersonalToolbar":["personal-bookmarks"]},"seen":["developer-button","ublock0_raymondhill_net-browser-action","_446900e4-71c2-419f-a6a7-df9c091e268b_-browser-action"],"dirtyAreaCache":["nav-bar","toolbar-menubar","TabsToolbar","PersonalToolbar","widget-overflow-fixed-list"],"currentVersion":16,"newElementCount":6}');
user_pref("browser.uidensity", 1);
user_pref("browser.download.forbid_open_with", true);
user_pref("browser.download.autohideButton", false);
user_pref("services.sync.declinedEngines", "passwords,bookmarks");
user_pref("ui.osk.enabled", false);

// disable pocket
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("extensions.pocket.enabled", false);

// performance
user_pref("gfx.canvas.azure.accelerated", true);
user_pref("layers.acceleration.force-enabled", true);

// privacy
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.send_pings", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.IDN_show_punycode", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%20/%20/");
//user_pref("network.http.referer.trimmingPolicy", 2);
//user_pref("privacy.firstparty.isolate", true);
//user_pref("network.cookie.lifetimePolicy", 2);
//user_pref("browser.sessionstore.privacy_level", 2);
//user_pref("dom.event.clipboardevents.enabled", false);
//user_pref("browser.sessionstore.max_tabs_undo", 0);
