#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
#ID=2 OLDPW=pass NEWPW=password TOKEN=BAhJIiU1ZjZlYWI1MDMyMDQ5MDQ2MmZkYjYxZWVkOWZiYzk4MAY6BkVG--bde2f4e37529d128ec986cff4f4ca31b6cbc73cc scripts/change-password.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
