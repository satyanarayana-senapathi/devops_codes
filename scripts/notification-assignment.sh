#!/bin/bash

WEBHOOK_URL="https://chat.googleapis.com/v1/spaces/AAAA8rocfbY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=4DmF3TRUKED7s5uXZZfTBrilxToO6wqR7mWVeIB2Zq0"


cd /home/satys/Full-stack-assignments/satyanarayanasvv_ldp/ps-assignment

git pull

# Compile the project
javac PS_Assignment.java

# Check the compilation status
if [ $? -eq 0 ]; then
    # Compilation succeeded
    message="Compilation successful"
else
    # Compilation failed
    message="Compilation failed"
fi


# Send the notification to Google Chat
curl -X POST -H 'Content-Type: application/json' -d "{\"text\":\"$message\"}" $WEBHOOK_URL