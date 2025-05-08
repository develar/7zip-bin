/**
 * Path to 7zz (mac/linux) and 7z.exe (win)
 * Env var available: `USE_SYSTEM_7Z` instead of included binaries
 */
export const path7z: string
/**
 * Path to 7zz (mac), 7zzs (linux) and 7z.exe (win)
 * Env var available: `USE_SYSTEM_7Z` instead of included binaries
 */
export const path7zzs: string
/**
 * Short script for executing 7z
 * Env vars available: `SZ_PATH`, `SZ_ARCHIVE_TYPE`, `SZ_COMPRESSION_LEVEL`
 */
export const path7x: string