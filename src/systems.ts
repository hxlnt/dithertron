
const SYSTEMS : DithertronSettings[] = [
    {
        id:'c64.multi',
        name:'C-64 Multi',
        width:160,
        height:200,
        scaleX:0.936*2,
        conv:'VICII_Multi_Canvas',
        pal:VIC_NTSC_RGB,
        block:{w:4,h:8,colors:4},
        toNative:'exportC64Multi',
    },
    {
        id:'c64.hires',
        name:'C-64 Hires',
        width:320,
        height:200,
        scaleX:0.936,
        conv:'ZXSpectrum_Canvas',
        pal:VIC_NTSC_RGB,
        block:{w:8,h:8,colors:2},
        toNative:'exportC64Hires',
    },
    {
        id:'vic20.multi',
        name:'VIC-20 Multi',
        width:80,
        height:160,
        scaleX:3.0,
        conv:'VIC20_Multi_Canvas',
        pal:VIC_NTSC_RGB,
        block:{w:4,h:8,colors:4},
    },
    {
        id:'nes',
        name:'NES (4 color)',
        width:160,
        height:96,
        scaleX:8/7,
        conv:'DitheringCanvas',
        pal:NES_RGB,
        reduce:4,
        toNative:'exportNES',
    },
    {
        id:'nes.5color',
        name:'NES (5 color)',
        width:160,
        height:96,
        scaleX:8/7,
        conv:'NES_Canvas',
        pal:NES_RGB,
        reduce:5, // background + 4 colors
        block:{w:16,h:16,colors:4},
    },
    {
        id:'msx',
        name:'TMS9918A (Mode 2)',
        width:256,
        height:192,
        conv:'VDPMode2_Canvas',
        pal:TMS9918_RGB,
        block:{w:8,h:1,colors:2},
        toNative:'exportWithAttributes',
        exportFormat:{w:256,h:192,bpp:1,brev:true,remap:[3,4,5,6,7,0,1,2,8,9,10,11,12]},
    },
    {
        id:'zx',
        name:'ZX Spectrum',
        width:256,
        height:192,
        conv:'ZXSpectrum_Canvas',
        pal:ZXSPECTRUM_RGB,
        block:{w:8,h:8,colors:2},
    },
    {
        id:'bbcmicro.mode2',
        name:'BBC Micro (mode 2)',
        width:160,
        height:256,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:TELETEXT_RGB,
    },
    {
        id:'cpc.mode0',
        name:'Amstrad CPC (mode 0)',
        width:160,
        height:200,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:AMSTRAD_CPC_RGB,
        reduce:16,
    },
    {
        id:'apple2.dblhires',
        name:'Apple ][ Double-Hires',
        width:140,
        height:192,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:AP2LORES_RGB,
    },
    {
        id:'apple2.hires',
        name:'Apple ][ Hires',
        width:140,
        height:192,
        scaleX:2,
        conv:'Apple2_Canvas',
        pal:AP2HIRES_RGB,
        block:{w:7,h:1,colors:4},
        toNative:'exportApple2HiresToHGR',
    },
    {
        id:'apple2.lores',
        name:'Apple ][ Lores',
        width:40,
        height:48,
        scaleX:1.5,
        conv:'DitheringCanvas',
        pal:AP2LORES_RGB,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:4},
    },
    {
        id:'channelf',
        name:'Fairchild Channel F',
        width:102,
        height:58,
        conv:'DitheringCanvas',
        pal:CHANNELF_RGB,
        reduce:4, // TODO: https://geeks-world.github.io/articles/467811/index.html
    },
    {
        id:'astrocade',
        name:'Bally Astrocade',
        width:160,
        height:102,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:ASTROCADE_RGB,
        reduce:4,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:2,brev:true},
    },
    {
        id:'vcs',
        name:'Atari VCS',
        width:40,
        height:192,
        scaleX:6,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:2,
    },
    {
        id:'atari8.e',
        name:'Atari Mode E',
        width:160,
        height:192,
        scaleX:0.8571*2,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:4,
    },
    {
        id:'atari8.f',
        name:'Atari Mode F',
        width:80,
        height:192,
        scaleX:0.8571*4,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:16,
    },
    {
        id:'atari7800.160a',
        name:'Atari 7800 (160A)',
        width:160,
        height:240,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:4,
    },
    {
        id:'atari7800.160b',
        name:'Atari 7800 (160B)',
        width:160,
        height:240,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:12,
    },
    {
        id:'sms',
        name:'Sega Master System',
        width:176, // only 488 unique tiles max, otherwise 256x240
        height:144,
        scaleX:8/7,
        conv:'DitheringCanvas',
        pal:SMS_RGB,
        reduce:16,
    },
    {
        id:'x86.ega.0dh',
        name:'PC EGA Mode 0Dh',
        width:320,
        height:200,
        scaleX:200/320*1.2,
        conv:'DitheringCanvas',
        pal:CGA_RGB,
        reduce:16,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:4},
    },
    {
        id:'x86.ega.10h',
        name:'PC EGA Mode 10h',
        width:640,
        height:350,
        scaleX:350/640*1.2,
        conv:'DitheringCanvas',
        pal:CGA_RGB,
        reduce:16,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:4},
    },
    {
        id:'williams',
        name:'Williams Arcade',
        width:304,
        height:256,
        conv:'DitheringCanvas',
        pal:WILLIAMS_RGB,
        reduce:16,
    },
    {
        id:'pico8',
        name:'PICO-8',
        width:128,
        height:128,
        aspect:1/1,
        conv:'DitheringCanvas',
        pal:PICO8_RGB,
    },
    {
        id:'tic80',
        name:'TIC-80',
        width:240,
        height:136,
        aspect:30/17,
        conv:'DitheringCanvas',
        pal:TIC80_RGB,
    },
];
var SYSTEM_LOOKUP = {};
SYSTEMS.forEach((sys) => SYSTEM_LOOKUP[sys.id||sys.name] = sys);
