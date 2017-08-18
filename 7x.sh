#!/bin/sh
case $1 in
  -d) 7za e -si -so -txz ;;
   *) 7za a f -si -so -txz -mx${SZA_COMPRESSION_LEVEL:-9} ;;
esac 2> /dev/null