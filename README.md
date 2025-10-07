# 7-Zip precompiled binaries
### Current version `25.01`
Downloaded from https://github.com/ip7z/7zip/releases

### Info

All binaries are **full** feature version to ensure complete compatibility with all 7-Zip features.

| Platform | Binary |
|--|--|
| Windows x64 | `7z.exe`, `7z.dll`  |
| Windows ia32 (x86) | `7z.exe`, `7z.dll`  |
| Windows arm64 | `7z.exe`, `7z.dll`  |
| Windows arm | `7z.exe`, `7z.dll`  |
| Mac x64 | `7zz`  |
| Mac arm64 | `7zz`  |
| Linux x64 | `7zz`, `7zzs`  |
| Linux ia32 (x86) | `7zz`, `7zzs`  |
| Linux arm64 | `7zz`, `7zzs`  |
| Linux arm | `7zz`, `7zzs`  |

### Install

``` sh
npm install 7zip-bin
```

### Get paths

``` js

const path7z = require('7zip-bin').path7z;
const path7zzs = require('7zip-bin').path7zzs; // Get 7zzs binary instead of 7zz (Only for Linux)
const path7x = require('7zip-bin').path7x;

```

- Use `USE_SYSTEM_7Z` to use system 7za instead of binaries in repo.
- Use `SZ_COMPRESSION_LEVEL` for setting compression level in 7x.sh

### Formats

```none
7-Zip (z) 25.01 (x64) : Copyright (c) 1999-2025 Igor Pavlov : 2025-08-03
 64-bit locale=es_ES.UTF-8 Threads:32 OPEN_MAX:1048576, ASM


Formats:
   C...F..........c.a.m+..  7z       7z            7 z BC AF ' 1C
    ......................  APFS     apfs img      offset=32 N X S B 00
    ......................  APM      apm           E R
    ......................  Ar       ar a deb udeb lib ! < a r c h > 0A
    ......................  Arj      arj           ` EA
    K.....O.....X.........  Base64   b64           
    ......O...............  COFF     obj           
    ...F..................  Cab      cab           M S C F 00 00 00 00
    ......................  Chm      chm chi chq chw I T S F 03 00 00 00 ` 00 00 00
    ......................  Compound msi msp doc xls ppt D0 CF 11 E0 A1 B1 1A E1
    ....M.................  Cpio     cpio          0 7 0 7 0  ||  C7 q  ||  q C7
    ......................  CramFS   cramfs        offset=16 C o m p r e s s e d 20 R O M F S
    .....G..B.............  Dmg      dmg           k o l y 00 00 00 04 00 00 02 00
    .........E............  ELF      elf            E L F
    ......................  Ext      ext ext2 ext3 ext4 img offset=1080 S EF
    ......................  FAT      fat img       offset=510 U AA
    ......................  FLV      flv           F L V 01
    ......................  GPT      gpt mbr       offset=512 E F I 20 P A R T 00 00 01 00
    ....M.................  HFS      hfs hfsx      offset=1024 B D  ||  H + 00 04  ||  H X 00 05
    ...F..................  Hxs      hxs hxi hxr hxq hxw lit I T O L I T L S 01 00 00 00 ( 00 00 00
    ......O...............  IHex     ihex          
    ......................  Iso      iso img       offset=32769 C D 0 0 1
    ......................  LP       lpimg img     offset=4096 g D l a 4 00 00 00
    ......................  Lzh      lzh lha       offset=2 - l h
    .......P..............  MBR      mbr           
    ....M....E............  MachO    macho         CE FA ED FE  ||  CF FA ED FE  ||  FE ED FA CE  ||  FE ED FA CF
    ......................  MsLZ     mslz          S Z D D 88 F0 ' 3 A
    ....M.................  Mub      mub           CA FE BA BE 00 00 00  ||  B9 FA F1 0E
    ......................  NTFS     ntfs img      offset=3 N T F S 20 20 20 20 00
    ...F.G................  Nsis     nsis          offset=4 EF BE AD DE N u l l s o f t I n s t
    .........E............  PE       exe dll sys   M Z
    ......................  Ppmd     pmd           8F AF AC 84
    ......................  QCOW     qcow qcow2 qcow2c Q F I FB 00 00 00
    ...F..................  Rar      rar r00       R a r ! 1A 07 00
    ...F..................  Rar5     rar r00       R a r ! 1A 07 01 00
    ......................  Rpm      rpm           ED AB EE DB
    K.....................  SWF      swf           F W S
    ....M.................  SWFc     swf (~.swf)   C W S  ||  Z W S
    ......................  Sparse   simg img      : FF & ED 01 00
    ......................  Split    001           
    ....M.................  SquashFS squashfs      h s q s  ||  s q s h  ||  s h s q  ||  q s h s
    .........E............  TE       te            V Z
    ...FM.................  UEFIc    scap          BD 86 f ; v 0D 0 @ B7 0E B5 Q 9E / C5 A0  ||  8B A6 < J # w FB H 80 = W 8C C1 FE C4 M  ||  B9 82 91 S B5 AB 91 C B6 9A E3 A9 C F7 / CC
    ...FM.................  UEFIf    uefif         offset=16 D9 T 93 z h 04 J D 81 CE 0B F6 17 D8 90 DF  ||  x E5 8C 8C = 8A 1C O 99 5 89 a 85 C3 - D3
    ....M.O...............  Udf      udf iso img   offset=32768 00 B E A 0 1 01 00  ||  01 C D 0 0 1
    ......................  VDI      vdi           offset=64  10 DA BE
    .....G................  VHD      vhd           c o n e c t i x 00 00
    ......................  VHDX     vhdx avhdx    v h d x f i l e
    ......................  VMDK     vmdk          K D M V
    ......................  Xar      xar pkg xip   x a r ! 00
    ......................  Z        z taz (.tar)  1F 9D
   CK.....................  bzip2    bz2 bzip2 tbz2 (.tar) tbz (.tar) B Z h
   CK.................m+..  gzip     gz gzip tgz (.tar) tpz (.tar) apk (.tar) 1F 8B 08
    K.....O...............  lzma     lzma          
    K.....................  lzma86   lzma86        
   C......O...LH......m+..  tar      tar ova       offset=257 u s t a r
   C.SN.......LH..c.a.m+..  wim      wim swm esd ppkg M S W I M 00 00 00
   CK.....................  xz       xz txz (.tar) FD 7 z X Z 00
   C...FMG........c.a.m+..  zip      zip z01 zipx jar xpi odt ods docx xlsx epub ipa apk appx P K 03 04  ||  P K 05 06  ||  P K 06 06  ||  P K 07 08 P K  ||  P K 0 0 P K
    K.....................  zstd     zst tzst (.tar) ( B5 / FD
   CK.....O.....XC........  Hash     sha256 sha512 sha384 sha224 sha512-224 sha512-256 sha3-224 sha3-256 sha3-384 sha3-512 sha1 sha2 sha3 sha md5 blake2s blake2b blake2sp xxh64 crc32 crc64 cksum asc 

Codecs:
   4ED   303011B BCJ2
    EDF  3030103 BCJ
    EDF  3030205 PPC
    EDF  3030401 IA64
    EDF  3030501 ARM
    EDF  3030701 ARMT
    EDF  3030805 SPARC
    EDF        A ARM64
    EDF        B RISCV
    EDF    20302 Swap2
    EDF    20304 Swap4
    ED     40202 BZip2
    ED         0 Copy
    ED     40109 Deflate64
    ED     40108 Deflate
    EDF        3 Delta
    ED        21 LZMA2
    ED     30101 LZMA
    ED     30401 PPMD
     D     40301 Rar1
     D     40302 Rar2
     D     40303 Rar3
     D     40305 Rar5
    EDF  6F10701 7zAES
    EDF  6F00181 AES256CBC

Hashers:
      4        1 CRC32
     16      208 MD5
     20      201 SHA1
     32        A SHA256
     32      231 SHA3-256
     48      222 SHA384
     64      223 SHA512
      8      211 XXH64
      8        4 CRC64
     32      202 BLAKE2sp
```

### Flags

```none
7-Zip (z) 25.01 (x64) : Copyright (c) 1999-2025 Igor Pavlov : 2025-08-03
 64-bit locale=es_ES.UTF-8 Threads:32 OPEN_MAX:1048576, ASM

Usage: 7zz <command> [<switches>...] <archive_name> [<file_names>...] [@listfile]

<Commands>
  a : Add files to archive
  b : Benchmark
  d : Delete files from archive
  e : Extract files from archive (without using directory names)
  h : Calculate hash values for files
  i : Show information about supported formats
  l : List contents of archive
  rn : Rename files in archive
  t : Test integrity of archive
  u : Update files to archive
  x : eXtract files with full paths

<Switches>
  -- : Stop switches and @listfile parsing
  -ai[r[-|0]][m[-|2]][w[-]]{@listfile|!wildcard} : Include archives
  -ax[r[-|0]][m[-|2]][w[-]]{@listfile|!wildcard} : eXclude archives
  -ao{a|s|t|u} : set Overwrite mode
  -an : disable archive_name field
  -bb[0-3] : set output log level
  -bd : disable progress indicator
  -bs{o|e|p}{0|1|2} : set output stream for output/error/progress line
  -bt : show execution time statistics
  -i[r[-|0]][m[-|2]][w[-]]{@listfile|!wildcard} : Include filenames
  -m{Parameters} : set compression Method
    -mmt[N] : set number of CPU threads
    -mx[N] : set compression level: -mx1 (fastest) ... -mx9 (ultra)
  -o{Directory} : set Output directory
  -p{Password} : set Password
  -r[-|0] : Recurse subdirectories for name search
  -sa{a|e|s} : set Archive name mode
  -scc{UTF-8|WIN|DOS} : set charset for console input/output
  -scs{UTF-8|UTF-16LE|UTF-16BE|WIN|DOS|{id}} : set charset for list files
  -scrc[CRC32|CRC64|SHA256|SHA1|XXH64|BLAKE2SP|*] : set hash function for x, e, h commands
  -sdel : delete files after compression
  -seml[.] : send archive by email
  -sfx[{name}] : Create SFX archive
  -si[{name}] : read data from stdin
  -slp : set Large Pages mode
  -slt : show technical information for l (List) command
  -snh : store hard links as links
  -snl : store symbolic links as links
  -sni : store NT security information
  -sns[-] : store NTFS alternate streams
  -so : write data to stdout
  -spd : disable wildcard matching for file names
  -spe : eliminate duplication of root folder for extract command
  -spf[2] : use fully qualified file paths
  -ssc[-] : set sensitive case mode
  -sse : stop archive creating, if it can't open some input file
  -ssp : do not change Last Access Time of source files while archiving
  -ssw : compress shared files
  -stl : set archive timestamp from the most recently modified file
  -stm{HexMask} : set CPU thread affinity mask (hexadecimal number)
  -stx{Type} : exclude archive type
  -t{Type} : Set type of archive
  -u[-][p#][q#][r#][x#][y#][z#][!newArchiveName] : Update options
  -v{Size}[b|k|m|g] : Create volumes
  -w[{path}] : assign Work directory. Empty path means a temporary directory
  -x[r[-|0]][m[-|2]][w[-]]{@listfile|!wildcard} : eXclude filenames
  -y : assume Yes on all queries
```
