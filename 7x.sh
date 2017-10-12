#!/usr/bin/env bash

sz_program=${SZA_PATH:-7za}

case $1 in
  -d) "$sz_program" e -si -so -t${SZA_ARCHIVE_TYPE:xz} ;;
   *) "$sz_program" a f -si -so -t${SZA_ARCHIVE_TYPE:xz} -mx${SZA_COMPRESSION_LEVEL:-9} ;;
esac 2> /dev/null