#!/bin/ash

if [ "$SERVICE_NAME" = "frontend-dev" ]; then
    npm run dev
else
    npm run build
fi
