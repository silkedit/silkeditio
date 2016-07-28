'use strict';
(function(platform, $){
  var DOWNLOAD_BASE_PATH = 'https://silkedit.io/download/latest/';
  var OSX = {
    fileUrl: DOWNLOAD_BASE_PATH + 'SilkEdit.dmg',
    ga: "ga('send', 'event', 'download', 'latest/SilkEdit.dmg', 'Mac');",
    desc: "OSX 10.9 or later"
  };
  var WINx64 = {
    fileUrl: DOWNLOAD_BASE_PATH + 'SilkEdit Setup x64.exe',
    ga: "ga('send', 'event', 'download', 'latest/SilkEdit Setup x64.exe', 'Win x64');",
    desc: "Windows 7 or later"
  };
  var WINx32 = {
    fileUrl: DOWNLOAD_BASE_PATH + 'SilkEdit Setup x86.exe',
    ga: "ga('send', 'event', 'download', 'latest/SilkEdit Setup x86.exe', 'Win x86');",
    desc: "Windows 7 or later"
  };

  var osFamily = platform.os.family;
  var osArchitect = platform.os.architecture;
  var $downloadBtn = $('.jsDownloadBtn');
  var $versionSupportDesc = $('.jsVersionSupport');
  console.log(osArchitect);
  if (osFamily.indexOf("Windows") === 0){
    if (osArchitect === 64) {
      $downloadBtn.attr("href", WINx64.fileUrl);
      $downloadBtn.attr("onClick", WINx64.ga);
      $versionSupportDesc.html(WINx64.desc);
    } else {
      $downloadBtn.attr("href", WINx32.fileUrl);
      $downloadBtn.attr("onClick", WINx32.ga);
      $versionSupportDesc.html(WINx32.desc);
    }
  } else if (osFamily.indexOf("OS X") === 0){
    // do noting
    // because default attr is osx
  } else {
    // linux
    // TODO
  }

})(platform, jQuery);
