#!/bin/bash
# Get the content -length of a giving ip address

curl -sI "$1" | grep -i Content-Length | cut -d " " -f2
