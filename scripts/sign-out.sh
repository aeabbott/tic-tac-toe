#!/bin/bash

#ID=2 TOKEN= BAhJIiUzZjE4MmZiZmU2NmVhZDNkOGIwMzUyMDdkZjQwNzNhMQY6BkVG--f1a8f0474e50848653da2ccfbfaef28d691b57f9
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-out/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"

echo
