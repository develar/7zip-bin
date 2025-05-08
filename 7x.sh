#!/usr/bin/env bash

sz_program=${SZ_PATH:-7zz}
sz_type=${SZ_ARCHIVE_TYPE:-xz}

case $1 in
  -d) "$sz_program" e -si -so -t${sz_type} ;;
   *) "$sz_program" a f -si -so -t${sz_type} -mx${SZ_COMPRESSION_LEVEL:-9} ;;
esac 2> /dev/null