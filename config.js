// config.js — Edit this file to manage phrases and their token rules.
//
// Each category has:
//   name      — heading shown above its group in the phrase list
//   phrases   — array of phrase objects
//
// Each phrase is an object with:
//   label     — human-readable descriptor shown alongside the template preview
//   template  — the search string. Tokens are wrapped in %% flags: %%label%%
//               The label is human-readable only and is stripped from the output.
//               Whether a token produces decimal or hex is set by its rule's `type`.
//
//   tokens    — array of rules, matched to template tokens LEFT TO RIGHT in order:
//                 type  "dec" | "hex"
//                 min   inclusive lower bound (use decimal integers for both types,
//                       e.g. 0xEE === 238 — hex literals are valid JS)
//                 max   inclusive upper bound
//                 pad   zero-pad output to this many characters (0 = no padding)
//
// Two tokens of the same flag type and the same label can have different ranges
// because rules are applied positionally, not by label name.
//
// Date templates use three consecutive tokens: YYYY (pad:4), MM (pad:2), DD (pad:2).
// Year ranges are derived from the ">YYYY" / "<YYYY" annotations in the source list.

const CONFIG = {
  categories: [
    {
      name: "Old & Forgotten Youtube Videos with ~0",
      phrases: [
        {
          label: "Video Editor",
          template: '"My Slideshow Video"',
          tokens: [],
        },
        {
          label: "Video Editor",
          template: '"My Slideshow"',
          tokens: [],
        },
        {
          label: "Video Editor",
          template: '"My Slideshow %%XX%%"',
          tokens: [{ type: "dec", min: 0, max: 99, pad: 2 }],
        },
        {
          label: "Video Editor",
          template: '"My Stupeflix Video"',
          tokens: [],
        },
        {
          label: "Video Editor",
          template: '"My Stupeflix Video %%XXXX%%"',
          tokens: [{ type: "dec", min: 0, max: 1050, pad: 4 }],
        },
        {
          label: "Video Editor",
          template: '"My Videolicious Video"',
          tokens: [],
        },
        {
          label: "Untagged date",
          template: "%%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2005, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Windows (>2013)",
          template: "WIN %%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2013, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Generic (>2008)",
          template: "VID %%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2008, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Screen capture (>2008)",
          template: "Capture %%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2008, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "InShot app (>2016)",
          template: "InShot %%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2016, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Google Pixel (>2020)",
          template: "PXL %%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2020, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Audio recording (>2017)",
          template: "AUD-%%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2017, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Misc (>2011, <2020)",
          template: "WP %%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2011, max: 2020, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Misc (>2012)",
          template: '"Video %%YYYY%%%%MM%%%%DD%%"',
          tokens: [
            { type: "dec", min: 2012, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "KakaoTalk (>2012)",
          template: "KakaoTalk Video %%YYYY%% %%MM%%",
          tokens: [
            { type: "dec", min: 2012, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
          ],
        },
        {
          label: "WhatsApp (>2015)",
          template: "WhatsApp Video %%YYYY%% %%MM%% %%DD%%",
          tokens: [
            { type: "dec", min: 2015, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Desktop",
          template: "Desktop %%YYYY%% %%MM%% %%DD%%",
          tokens: [
            { type: "dec", min: 2005, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Zoom recording",
          template: "GMT%%YYYY%%%%MM%%%%DD%%",
          tokens: [
            { type: "dec", min: 2005, max: 2025, pad: 4 },
            { type: "dec", min: 1,    max: 12,   pad: 2 },
            { type: "dec", min: 1,    max: 31,   pad: 2 },
          ],
        },
        {
          label: "Filter: Playlist (NSFW)",
          template: "240p 400k",
          tokens: [],
        },
        {
          label: "NSFW",
          template: "480p 600k",
          tokens: [],
        },
        {
          label: "NSFW",
          template: "480p 2000k",
          tokens: [],
        },
        {
          label: "NSFW",
          template: "720p 1500k",
          tokens: [],
        },
        {
          label: "NSFW",
          template: "720p 4000k",
          tokens: [],
        },
        {
          label: "NSFW",
          template: "Clips4Sale",
          tokens: [],
        },
        {
          label: "DVD",
          template: "VTS %%XXX%% 1",
          tokens: [{ type: "dec", min: 0, max: 999, pad: 3 }],
        },
        {
          label: "DVD",
          template: "VTS 01 %%XXX%%",
          tokens: [{ type: "dec", min: 0, max: 999, pad: 3 }],
        },
        {
          label: "Video CD",
          template: "AVSEQ%%XX%%",
          tokens: [{ type: "dec", min: 0, max: 99, pad: 2 }],
        },
        {
          label: "Video CD",
          template: "AVSEQ%%XX%%.DAT",
          tokens: [{ type: "dec", min: 0, max: 99, pad: 2 }],
        },
        {
          label: "Drone / Dashcam",
          template: "MOVI%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 1050, pad: 4 }],
        },
        {
          label: "Camera",
          template: "SVM A%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 1000, pad: 4 }],
        },
        {
          label: "Camera",
          template: "KVID%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 1000, pad: 4 }],
        },
        {
          label: "Camera",
          template: "M2U0%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 9999, pad: 4 }],
        },
        {
          label: "GoPro",
          template: "GH01%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 9999, pad: 4 }],
        },
        {
          label: "Camera",
          template: "MAH0%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 9999, pad: 4 }],
        },
        {
          label: "Camera",
          template: "CIMG%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 9999, pad: 4 }],
        },
        {
          label: "Camera",
          template: "IMGP%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 9999, pad: 4 }],
        },
        {
          label: "Camera",
          template: "Video%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 9999, pad: 4 }],
        },
        {
          label: "Camera",
          template: "MOV0%%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 9999, pad: 4 }],
        },
        {
          label: "Dashcam",
          template: "REC %%XXXX%%",
          tokens: [{ type: "dec", min: 0, max: 1000, pad: 4 }],
        },
        {
          label: "Body Cam",
          template: '"Axon Body * Video"',
          tokens: [],
        },
        {
          label: "Phone",
          template: "4%%XXX%%",
          tokens: [{ type: "hex", min: 0xA00, max: 0xFFF, pad: 3 }],
        },
        {
          label: "Phone",
          template: "Trim 4%%XXX%%",
          tokens: [{ type: "hex", min: 0xA00, max: 0xFFF, pad: 3 }],
        },
        {
          label: "Phone",
          template: "Copy 4%%XXX%%",
          tokens: [{ type: "hex", min: 0xA00, max: 0xFFF, pad: 3 }],
        },
        {
          label: "Phone",
          template: "Video 4%%XXX%%",
          tokens: [{ type: "hex", min: 0xA00, max: 0xFFF, pad: 3 }],
        },

        { label: "Camera",     template: "M4H0%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 9999, pad: 4 }] },
        { label: "Camera",     template: "M4V0%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 9999, pad: 4 }] },
        { label: "Camera",     template: "SDC1%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 9999, pad: 4 }] },
        { label: "Camera",     template: "SANY%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 9999, pad: 4 }] },
        { label: "Camera",     template: "HPIM%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 9999, pad: 4 }] },
        { label: "Camera",     template: "GEDC%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 9999, pad: 4 }] },
        { label: "Misc",       template: "%%XXXX%%.MP4",          tokens: [{ type: "dec", min: 0,  max: 9999, pad: 4 }] },
        { label: "Camera",     template: "VID0%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 5000, pad: 4 }] },
        { label: "Camera",     template: "DSC 0%%XXXX%%",         tokens: [{ type: "dec", min: 0,  max: 5000, pad: 4 }] },
        { label: "Camera",     template: "CAM0%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 5000, pad: 4 }] },
        { label: "Action Cam", template: "AMBA%%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 5000, pad: 4 }] },
        { label: "Camera",     template: "HDV %%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 5000, pad: 4 }] },
        { label: "Camera",     template: "DSCI%%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 4000, pad: 4 }] },
        { label: "Camera",     template: "SNV3%%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 3000, pad: 4 }] },
        { label: "Camera",     template: "MOV%%XXXX%%A",          tokens: [{ type: "dec", min: 0,  max: 3000, pad: 4 }] },
        { label: "Camera",     template: "Zi6 %%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 2000, pad: 4 }] },
        { label: "Misc",       template: "Clip%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 2000, pad: 4 }] },
        { label: "Action Cam", template: "YDXJ%%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 2000, pad: 4 }] },
        { label: "Camera",     template: "0%%XXXX%%.MTS",         tokens: [{ type: "dec", min: 0,  max: 2000, pad: 4 }] },
        { label: "Camera",     template: "SSPX%%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 2000, pad: 4 }] },
        { label: "Action Cam", template: "00%%XXXX%%A",           tokens: [{ type: "dec", min: 1,  max: 2000, pad: 4 }] },
        { label: "Camera",     template: "IMAG%%XXXX%%",          tokens: [{ type: "dec", min: 0,  max: 2000, pad: 4 }] },
        { label: "Camera",     template: "C%%XXXX%%",             tokens: [{ type: "dec", min: 0,  max: 2000, pad: 4 }] },
        { label: "Camera",      template: "SUNP%%XXXX%%",         tokens: [{ type: "dec", min: 0,  max: 1500, pad: 4 }] },
        { label: "Phone",       template: "Picture %%XXX%%",      tokens: [{ type: "dec", min: 1,  max: 1220, pad: 3 }] },
        { label: "Camera",      template: "PC10%%XXXX%%",         tokens: [{ type: "dec", min: 1,  max: 1050, pad: 4 }] },
        { label: "Camera",      template: "PTDC%%XXXX%%",         tokens: [{ type: "dec", min: 1,  max: 1000, pad: 4 }] },
        { label: "Camera (Russia)", template: "Видео%%XXXX%%",    tokens: [{ type: "dec", min: 0,  max: 1000, pad: 4 }] },
        { label: "Camera",      template: "VCLP%%XXXX%%",         tokens: [{ type: "dec", min: 1,  max: 1000, pad: 4 }] },
        { label: "Action Cam",  template: "FHD%%XXXX%%",          tokens: [{ type: "dec", min: 1,  max: 1000, pad: 4 }] },
        { label: "Phone",       template: "Moto_0%%XXX%%",        tokens: [{ type: "dec", min: 1,  max: 999,  pad: 3 }] },
        { label: "Camera",      template: "WEB_0%%XXX%%",         tokens: [{ type: "dec", min: 1,  max: 999,  pad: 3 }] },
        { label: "Camera",      template: "P1%%XX%%0%%XXX%%",     tokens: [{ type: "dec", min: 1,  max: 35,   pad: 2 },
                                                                            { type: "dec", min: 1,  max: 999,  pad: 3 }] },
        { label: "Camera",      template: "im000%%XXX%%",         tokens: [{ type: "dec", min: 1,  max: 899,  pad: 3 }] },
        { label: "Camera",      template: "ZOOM0%%XXX%%",         tokens: [{ type: "dec", min: 1,  max: 800,  pad: 3 }] },
        { label: "Camera",      template: "SV A0%%XXX%%",         tokens: [{ type: "dec", min: 1,  max: 600,  pad: 3 }] },
        { label: "Misc",        template: "Videoplayback %%XXX%%",tokens: [{ type: "dec", min: 1,  max: 500,  pad: 0 }] },
        { label: "Camera",      template: "GEDV0%%XXX%%",         tokens: [{ type: "dec", min: 1,  max: 500,  pad: 3 }] },
        { label: "Blender 3D",  template: '"0001 0%%XXX%%"',      tokens: [{ type: "dec", min: 19, max: 500,  pad: 3 }] },
        { label: "Action Cam",  template: "ACTP0%%XXX%%",         tokens: [{ type: "dec", min: 1,  max: 400,  pad: 3 }] },
        { label: "Camera",      template: "PA%%XX%%0%%XXX%%",     tokens: [{ type: "dec", min: 0,  max: 30,   pad: 2 },
                                                                            { type: "dec", min: 1,  max: 499,  pad: 3 }] },
        { label: "Camera",      template: "PB%%XX%%0%%XXX%%",     tokens: [{ type: "dec", min: 0,  max: 30,   pad: 2 },
                                                                           { type: "dec", min: 1,  max: 499,  pad: 3 }] },
        { label: "Trail Cam / Camera", template: "IM000%%XXX%%",  tokens: [{ type: "dec", min: 0,  max: 400,  pad: 3 }] },
        { label: "Camera (Japan)", template: "MAV 0%%XXX%%",      tokens: [{ type: "dec", min: 0,  max: 399,  pad: 3 }] },
        { label: "Camera",      template: "MOVIE 0%%XXX%%",       tokens: [{ type: "dec", min: 0,  max: 300,  pad: 3 }] },
        { label: "Camera",      template: "ANMR0%%XXX%%",         tokens: [{ type: "dec", min: 0,  max: 300,  pad: 3 }] },
        { label: "Camera (Czech)",  template: "Snímek %%XXX%%",         tokens: [{ type: "dec", min: 1,   max: 300, pad: 3 }] },
        { label: "Camera",          template: "DIGI0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 300, pad: 3 }] },
        { label: "Camera",          template: "ASF 0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 300, pad: 3 }] },
        { label: "Camera",          template: "V%%XX%%0%%XXX%%",         tokens: [{ type: "dec", min: 0,   max: 50,  pad: 2 },
                                                                                  { type: "dec", min: 101, max: 300, pad: 3 }] },
        { label: "Camera",          template: "IONX0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 250, pad: 3 }] },
        { label: "Dashcam",         template: "VICO0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 250, pad: 3 }] },
        { label: "Camera",          template: "ArcSoft Video%%XXX%%",    tokens: [{ type: "dec", min: 1,   max: 249, pad: 0 }] },
        { label: "Trail Cam",       template: "PRMS0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 200, pad: 3 }] },
        { label: "Camera",          template: "SMOV0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 200, pad: 3 }] },
        { label: "Camera",          template: "RCA 0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 200, pad: 3 }] },
        { label: "Camera",          template: "MOVA0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 200, pad: 3 }] },
        { label: "Video Editor",    template: '"Sequence %%XXX%%"',       tokens: [{ type: "dec", min: 1,   max: 200, pad: 3 }] },
        { label: "Camera (Poland)", template: "Wideo%%XXX%%",            tokens: [{ type: "dec", min: 0,   max: 199, pad: 3 }] },
        { label: "Drone",           template: "MAX 0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 150, pad: 3 }] },
        { label: "Trail Cam",       template: "MDGC0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 150, pad: 3 }] },
        { label: "Camera",          template: "PCDV0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 150, pad: 3 }] },
        { label: "Camera",          template: "HD0 %%XXX%%",             tokens: [{ type: "dec", min: 0,   max: 120, pad: 3 }] },
        { label: "Misc",            template: '"Filmato 0%%XXX%%"',       tokens: [{ type: "dec", min: 1,   max: 120, pad: 3 }] },
        { label: "Misc (Italy)",    template: '"Il mio filmato %%X%%"',   tokens: [{ type: "dec", min: 1,   max: 100, pad: 0 }] },
        { label: "Action Cam",      template: "LOOP0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 100, pad: 3 }] },
        { label: "Drone",           template: "MAX 0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 100, pad: 3 }] },
        { label: "Camera",          template: "SMDC0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 100, pad: 3 }] },
        { label: "Trail Cam",       template: "HUNT0%%XXX%%",            tokens: [{ type: "dec", min: 1,   max: 100, pad: 3 }] },

        // ── Left column ───────────────────────────────────────
        { label: "Action Cam",        template: "ACXS0%%XXX%%",                        tokens: [{ type: "dec", min: 1,    max: 100, pad: 3 }] },
        { label: "Camera",            template: "MVC %%XXX%%V",                        tokens: [{ type: "dec", min: 1,    max: 100, pad: 3 }] },
        { label: "Camera (Japan)",    template: "MA0 00%%XX%%",                        tokens: [{ type: "dec", min: 0,    max: 99,  pad: 2 }] },
        { label: "Camera",            template: "MMF00%%XX%%",                         tokens: [{ type: "dec", min: 0,    max: 99,  pad: 2 }] },
        { label: "GoPro",             template: "G01000%%XX%%",                        tokens: [{ type: "dec", min: 10,   max: 99,  pad: 2 }] },
        { label: "Camera",            template: "PC%%XX%%00%%XX%%",                    tokens: [{ type: "dec", min: 0,    max: 30,  pad: 2 },
                                                                                                { type: "dec", min: 1,    max: 99,  pad: 2 }] },
        { label: "Video Editor",      template: '"Sequence %%XX%% %%X%%"',             tokens: [{ type: "dec", min: 1,    max: 99,  pad: 2 },
                                                                                                { type: "dec", min: 1,    max: 3,   pad: 0 }] },
        { label: "Video Editor",      template: '"My Project %%X%%"',                  tokens: [{ type: "dec", min: 0,    max: 50,  pad: 0 }] },
        { label: "Screen Recorder",   template: '"Kazam Screencast 000%%XX%%"',        tokens: [{ type: "dec", min: 1,    max: 50,  pad: 2 }] },
        { label: "Drone",             template: "CADDX0000%%XX%%",                     tokens: [{ type: "dec", min: 1,    max: 50,  pad: 2 }] },
        { label: "Camera",            template: "ZOE 00%%XX%%",                        tokens: [{ type: "dec", min: 1,    max: 50,  pad: 2 }] },
        { label: "DVD",               template: '"Video_ts.vob"',                      tokens: [] },
        { label: "Misc",              template: '"MicrosoftTeams Video"',              tokens: [] },
        { label: "Body Cam",          template: '"Axon Flex Video"',                   tokens: [] },
        { label: "Misc",              template: '"Test upload"',                       tokens: [] },
        { label: "Misc",              template: '"Moviemakeronline com"',              tokens: [] },
        { label: "Misc",              template: '"Myvideo imagetovideo com"',          tokens: [] },
        { label: "Video Editor",      template: '"I created this video with the YouTube Slideshow Creator"', tokens: [] },
        { label: "Video Editor",      template: '"I created this video with the YouTube Video Editor"',      tokens: [] },
        { label: "Phone",             template: '"Sent from my blackberry smartphone"',tokens: [] },
        { label: "App",               template: '"Video from Tweetcaster"',            tokens: [] },
        { label: "Screen Recorder",   template: '"My Ezvid Video"',                   tokens: [] },
        { label: "Phone",             template: '"This video was uploaded from an Android phone"', tokens: [] },

        // ── Right column ──────────────────────────────────────
        { label: "DVD",               template: '".VOB"',                              tokens: [] },
        { label: "Misc (Russia)",     template: '"копия видео"',                       tokens: [] },
        { label: "Misc (Russia)",     template: '"копия видео Копия видео"',           tokens: [] },
        { label: "Phone",             template: '"Sprint PictureMail"',               tokens: [] },
        { label: "Drone",             template: '"Temp video for share"',              tokens: [] },
        { label: "Video Editor",      template: '"My stop motion movie"',              tokens: [] },
        { label: "Misc",              template: '"XiaoYing video"',                   tokens: [] },
        { label: "Camera",            template: '"Dvgrab"',                            tokens: [] },
        { label: "Camera (Stop Motion)", template: '"Stop motion.avi"',               tokens: [] },
        {
          label: "Webcam (>2007, <2013)",
          template: '"QuickCapture Video - %%Month%% %%D%%, %%YYYY%%"',
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 0 }, { type: "dec", min: 2007, max: 2013, pad: 4 }],
        },
        {
          label: "Webcam (>2007, <2010)",
          template: "Webcam %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2007, max: 2010, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Webcam (>2008, <2010)",
          template: "Webcam Recorded Video - %%Month%% %%D%%, %%YYYY%%",
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 0 }, { type: "dec", min: 2008, max: 2010, pad: 4 }],
        },
        {
          label: "Webcam (>2010, <2012)",
          template: "Webcam video %%Month%% %%D%%, %%YYYY%%",
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 0 }, { type: "dec", min: 2010, max: 2012, pad: 4 }],
        },
        {
          label: "Video Editor",
          template: '"Project of %%DD%% %%Mth%% 2011 PDT"',
          tokens: [{ type: "dec", min: 1, max: 31, pad: 2 }, { type: "month-abbr" }],
        },
        {
          label: "Webcam (>2011, <2016)",
          template: "Webcam video from %%Month%% %%D%%, %%YYYY%%",
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 0 }, { type: "dec", min: 2011, max: 2016, pad: 4 }],
        },
        {
          label: "Screen Recorder (>2014, <2018)",
          template: "SCR %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2014, max: 2018, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Video Editor (>2013, <2019)",
          template: "Flipagram %%Month%% %%YYYY%%",
          tokens: [{ type: "month" }, { type: "dec", min: 2013, max: 2019, pad: 4 }],
        },
        {
          label: "Game Capture (COD 4) (>2008, <2020)",
          template: "lw3mp %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2008, max: 2020, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Drone (>2015, <2021)",
          template: '"AR.Drone 2.0 Video: %%YYYY%%"',
          tokens: [{ type: "dec", min: 2015, max: 2021, pad: 4 }],
        },
        {
          label: "App (>2018, <2023)",
          template: "WA VID %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2018, max: 2023, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Screen Recorder (>2021, <2024)",
          template: "XRecorder %%DD%%%%MM%%%%YYYY%%",
          tokens: [{ type: "dec", min: 1, max: 31, pad: 2 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 2021, max: 2024, pad: 4 }],
        },
        {
          label: "Screen Recorder (>2010)",
          template: "Bandicam %%YYYY%% %%MM%% %%DD%%",
          tokens: [{ type: "dec", min: 2010, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Video Editor (>2018)",
          template: "YouCut %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2018, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
      ],
    },
    {
      name: "Low-view Videos from Old YouTube (2006-2008)",
      phrases: [
        // ── Static phone / upload strings ─────────────────────
        { label: "Phone",          template: '"You have new Picture Mail! (video)"',        tokens: [] },
        { label: "Phone",          template: '"Video uploaded from my mobile phone"',       tokens: [] },
        { label: "Phone",          template: '"Multimedia Message"',                        tokens: [] },
        { label: "Phone",          template: '"Video from My Phone"',                       tokens: [] },
        { label: "Phone",          template: '"Media1.3gp"',                               tokens: [] },
        { label: "Phone",          template: '"Media1.3g2"',                               tokens: [] },
        { label: "Phone",          template: '"Video.3g2"',                                tokens: [] },
        { label: "Phone (Netherlands)", template: '"Video van Mijn telefoon"',              tokens: [] },
        { label: "Phone (Netherlands)", template: '"video geüpload van mijn mobiel"',       tokens: [] },
        { label: "Phone",          template: '"Vídeo desde mi teléfono"',                  tokens: [] },
        { label: "Phone",          template: '"vídeo subido desde mi teléfono móvil"',     tokens: [] },
        { label: "Phone",          template: '"You have received a new message"',           tokens: [] },
        { label: "Video Editor",   template: '"My Great Movie"',                            tokens: [] },
        { label: "Video Editor",   template: '"My First Project"',                          tokens: [] },

        // ── Low-numbered token patterns ────────────────────────
        { label: "Camera",         template: "Video%%XXX%%",       tokens: [{ type: "dec", min: 0, max: 10, pad: 3 }] },
        { label: "Camera",         template: "Vid%%XXX%%",         tokens: [{ type: "dec", min: 0, max: 10, pad: 3 }] },
        { label: "Camera",         template: "MOV0%%XXXX%%",       tokens: [{ type: "dec", min: 0, max: 10, pad: 4 }] },
        { label: "Video Editor",   template: "muuvee00%%XX%%",     tokens: [{ type: "dec", min: 0, max: 40, pad: 2 }] },
        { label: "Phone",          template: "0_VIDEO_0%%XX%%",    tokens: [{ type: "dec", min: 1, max: 54, pad: 2 }] },

        // ── Flip Camera / date-stamped uploads ────────────────
        {
          label: "Phone",
          template: '"For %%Month%% %%DD%%, %%YYYY%%"',
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 2 }, { type: "dec", min: 2006, max: 2008, pad: 4 }],
        },
        {
          label: "Camera (Flip)",
          template: '"Recorded on %%Month%% %%DD%%, %%YYYY%% using a Flip Video Camcorder"',
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 2 }, { type: "dec", min: 2006, max: 2008, pad: 4 }],
        },
        {
          label: "Camera (Flip)",
          template: '"Recorded on %%Month%% %%DD%%, %%YYYY%% using a Flip Video Camera"',
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 2 }, { type: "dec", min: 2006, max: 2008, pad: 4 }],
        },
        {
          label: "Camera (Flip)",
          template: '"Created on %%Month%% %%DD%%, %%YYYY%% using FlipShare"',
          tokens: [{ type: "month" }, { type: "dec", min: 1, max: 31, pad: 2 }, { type: "dec", min: 2006, max: 2008, pad: 4 }],
        },
      ],
    },
    {
      name: "New Videos with ~0 views",
      phrases: [
        // ── Static identifiers ────────────────────────────────
        { label: "Smartphone",             template: "IMG",                                                          tokens: [] },
        { label: "Camera",                 template: "MVI",                                                          tokens: [] },
        { label: "Smartphone",             template: "PXL",                                                          tokens: [] },
        { label: "Smartphone",             template: "FullSizeRender",                                               tokens: [] },
        { label: "Screen Recorder",        template: "RPReplay",                                                     tokens: [] },
        { label: "VHS",                    template: "VTS 01",                                                       tokens: [] },
        { label: "Game Capture",           template: "DVR",                                                          tokens: [] },
        { label: "Game Capture / Misc",    template: "VLC Record",                                                   tokens: [] },
        { label: "Game Capture",           template: "Robloxapp",                                                    tokens: [] },
        { label: "Video Editor",           template: '"My Edited Video"',                                            tokens: [] },
        { label: "File Path",              template: "/Storage/Emulated/",                                           tokens: [] },
        { label: "Zoom",                   template: "Recording gvo",                                                tokens: [] },
        { label: "Misc",                   template: "Lv 0",                                                         tokens: [] },
        { label: "Misc",                   template: "bmdjAAAF",                                                     tokens: [] },
        { label: "Misc",                   template: '"Copy of Copy of"',                                            tokens: [] },
        { label: "Misc",                   template: '"Untitled video"',                                             tokens: [] },
        { label: "VR Headset",             template: '"Com Oculus Vrshell"',                                         tokens: [] },
        { label: "VR Headset",             template: '"Com Oculus Metacam"',                                         tokens: [] },
        { label: "Misc",                   template: "Videoplayback",                                                tokens: [] },
        { label: "Phone",                  template: '"Video Output"',                                               tokens: [] },
        { label: "Video Editor (NSFW)",    template: "Portrait Video Nanny Canon",                                   tokens: [] },
        { label: "Video Editor",           template: '"Sequence 01 1"',                                              tokens: [] },
        { label: "Misc (School Projects)", template: '"Video Assignment"',                                           tokens: [] },
        { label: "Video Editor",           template: '"Untitled Video Made with Clipchamp"',                         tokens: [] },
        { label: "Screen Recording",       template: '"Bandicam"',                                                   tokens: [] },
        { label: "Video Editor",           template: '"Untitled Design"',                                            tokens: [] },
        { label: "Game Capture (Minecraft)", template: '"Javaw"',                                                    tokens: [] },

        // ── Format extension searches ─────────────────────────
        { label: "Format",                       template: '".MP4" | ".3gp" | ".MOV" | ".AVI" | ".WMV"',            tokens: [] },
        { label: "Format",                       template: '".3g2" | ".VOB"',                                        tokens: [] },
        { label: "Format (Copyright music)",     template: '".FLAC"',                                                tokens: [] },
        { label: "Format (User-created music)",  template: '".WAV"',                                                 tokens: [] },

        // ── Token entries ─────────────────────────────────────
        {
          label: "Misc",
          template: '"My Movie %%X%%"',
          tokens: [{ type: "dec", min: 1, max: 9, pad: 0 }],
        },
        {
          label: "App",
          template: "WhatsApp Video %%YYYY%%",
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }],
        },

        // ── Date-stamped entries ──────────────────────────────
        {
          label: "Misc",
          template: "%%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Webcam",
          template: "WIN %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Webcam",
          template: "Capture %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Misc",
          template: "VID %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "App",
          template: "InShot %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2016, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Misc",
          template: "YouCut %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2018, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Camera",
          template: '"Video %%YYYY%%%%MM%%%%DD%%"',
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Game Capture",
          template: "Desktop %%YYYY%% %%MM%% %%DD%%",
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
        {
          label: "Video Editor",
          template: "KM %%YYYY%%%%MM%%%%DD%%",
          tokens: [{ type: "dec", min: 2015, max: 2025, pad: 4 }, { type: "dec", min: 1, max: 12, pad: 2 }, { type: "dec", min: 1, max: 31, pad: 2 }],
        },
      ],
    },
  ],
};
