var rconParser;
var eventParser;

var plugin = {
    author: 'RaidMax, Xerxes, INSANEMODE',
    version: 1.0,
    name: 'Plutonium T6 Parser (2024)',
    isParser: true,

    onEventAsync: function (gameEvent, server) {
    },

    onLoadAsync: function (manager) {
        rconParser = manager.GenerateDynamicRConParser(this.name);
        eventParser = manager.GenerateDynamicEventParser(this.name);

        rconParser.Configuration.CommandPrefixes.Tell                      = 'tell {0} {1}';
        rconParser.Configuration.CommandPrefixes.Say                       = 'say {0}';
        rconParser.Configuration.CommandPrefixes.Kick                      = 'clientkick_for_reason {0} "{1}"';
        rconParser.Configuration.CommandPrefixes.Ban                       = 'clientkick_for_reason {0} "{1}"';
        rconParser.Configuration.CommandPrefixes.TempBan                   = 'clientkick_for_reason {0} "{1}"';
        rconParser.Configuration.CommandPrefixes.Mute                      = 'muteClient {0}';
        rconParser.Configuration.CommandPrefixes.Unmute                    = 'unmuteClient {0}';
        rconParser.Configuration.CommandPrefixes.RConGetDvar               = '\xff\xff\xff\xffrcon {0} {1}';
        rconParser.Configuration.CommandPrefixes.RConSetDvar               = '\xff\xff\xff\xffrcon {0} set {1}';
        rconParser.Configuration.CommandPrefixes.RConResponse              = '\xff\xff\xff\xffprint\n';
        rconParser.Configuration.CommandPrefixes.RConGetStatus             = '\xff\xff\xff\xffgetstatus';
        rconParser.Configuration.CommandPrefixes.RConGetInfo               = '\xff\xff\xff\xffgetinfo';
        rconParser.Configuration.CommandPrefixes.RconGetInfoResponseHeader = '\xff\xff\xff\xffinfoResponse\n';
        rconParser.Configuration.CommandPrefixes.RConCommand               = '\xff\xff\xff\xffrcon {0} {1}';


        rconParser.Configuration.Dvar.Pattern = '^(?:\\^7)?\\"(.+)\\" is: \\"(.+)?\\" default: \\"(.+)?\\"\\n?(?:latched: \\"(.+)?\\"\\n)?\\w*(.+)*$';
        rconParser.Configuration.Dvar.AddMapping(106, 1);
        rconParser.Configuration.Dvar.AddMapping(107, 2);
        rconParser.Configuration.WaitForResponse = false
        rconParser.Configuration.NoticeLineSeparator = '. ';
        rconParser.Configuration.DefaultRConPort = 4976;
        rconParser.Configuration.DefaultInstallationDirectoryHint = '{LocalAppData}/Plutonium/storage/t6';
        rconParser.Configuration.ShouldRemoveDiacritics = true;


        rconParser.Configuration.StatusHeader.Pattern = 'num +score +bot +ping +guid +name +lastmsg +address +qport +rate *';
        rconParser.Configuration.Status.Pattern = '^ *([0-9]+) +([0-9]+) +(?:[0-1]{1}) +([0-9]+) +([A-F0-9]+|0) +(.+?) +(?:[0-9]+) +(\\d+\\.\\d+\\.\\d+\\.\\d+\\:-?\\d{1,5}|0+\\.0+:-?\\d{1,5}|loopback|unknown|bot) +(?:-?[0-9]+) +(?:[0-9]+) *$';
        rconParser.Configuration.Status.AddMapping(100, 1);
        rconParser.Configuration.Status.AddMapping(101, 2);
        rconParser.Configuration.Status.AddMapping(102, 3);
        rconParser.Configuration.Status.AddMapping(103, 4);
        rconParser.Configuration.Status.AddMapping(104, 5);
        rconParser.Configuration.Status.AddMapping(105, 6);

        // this is mostly default but just an example on how to map
        rconParser.Configuration.ColorCodeMapping.Clear();
        rconParser.Configuration.ColorCodeMapping.Add('Black', '^0');
        rconParser.Configuration.ColorCodeMapping.Add('Red', '^1');
        rconParser.Configuration.ColorCodeMapping.Add('Green', '^2');
        rconParser.Configuration.ColorCodeMapping.Add('Yellow', '^3');
        rconParser.Configuration.ColorCodeMapping.Add('Blue', '^4');
        rconParser.Configuration.ColorCodeMapping.Add('Cyan', '^5');
        rconParser.Configuration.ColorCodeMapping.Add('Pink', '^6');
        rconParser.Configuration.ColorCodeMapping.Add('White', '^7');
        rconParser.Configuration.ColorCodeMapping.Add('Map', '^8');
        rconParser.Configuration.ColorCodeMapping.Add('Grey', '^9');
        rconParser.Configuration.ColorCodeMapping.Add('LightBlue', '^;');
        rconParser.Configuration.ColorCodeMapping.Add('LightYellow', '^:');
        rconParser.Configuration.ColorCodeMapping.Add('Flash', '^F');
        rconParser.Configuration.ColorCodeMapping.Add('MWDOWN', '^BmouseWheelDown^');
        rconParser.Configuration.ColorCodeMapping.Add('MWUP', '^BmouseWheelUp^');
        rconParser.Configuration.ColorCodeMapping.Add('MBMiddle', '^BmouseButtonMiddle^');
        rconParser.Configuration.ColorCodeMapping.Add('MBRight', '^BmouseButtonRight^');
        rconParser.Configuration.ColorCodeMapping.Add('MBLeft', '^BmouseButtonLeft^');
        rconParser.Configuration.ColorCodeMapping.Add('MADown', '^BMOUSE_ANIM_DOWN^');
        rconParser.Configuration.ColorCodeMapping.Add('MAUp', '^BMOUSE_ANIM_UP^');
        rconParser.Configuration.ColorCodeMapping.Add('MARight', '^BMOUSE_ANIM_RIGHT^');
        rconParser.Configuration.ColorCodeMapping.Add('MALeft', '^BMOUSE_ANIM_LEFT^');

        rconParser.Configuration.FloodProtectInterval = 150;

        eventParser.Configuration.GameDirectory = 'main';
        eventParser.Configuration.GuidNumberStyle = 7; // Integer

        rconParser.Version = 'Call of Duty Multiplayer - Ship COD_T6_S MP build 1.0.44 CL(1759941) CODPCAB2 CEG Fri May 9 19:19:19 2014 win-x86 813e66d5';
        rconParser.GameName = 7; // T6
        eventParser.Version = 'Call of Duty Multiplayer - Ship COD_T6_S MP build 1.0.44 CL(1759941) CODPCAB2 CEG Fri May 9 19:19:19 2014 win-x86 813e66d5';
        eventParser.GameName = 7; // T6
    },

    onUnloadAsync: function () {
    },

    onTickAsync: function (server) {
    }
};
