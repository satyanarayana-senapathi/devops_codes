#!/bin/bash

LOG_FILE="/var/log/syslog"
REPORT_FILE="/home/satys/linux_practice/scripts/errorReport.txt"

SEARCH_PATTERN="error"
echo "Log Analysis Report" > "$REPORT_FILE"

sudo grep "$SEARCH_PATTERN" "$LOG_FILE" >> "$REPORT_FILE"

ERROR_COUNT=$(sudo grep -c "$SEARCH_PATTERN" "$LOG_FILE")

echo "-------------------" >> "$REPORT_FILE"
echo "Search Pattern: $SEARCH_PATTERN" >> "$REPORT_FILE"
echo "Error Count: $ERROR_COUNT" >> "$REPORT_FILE"

echo "Log analysis completed. Report generated at: $REPORT_FILE"

cat /home/satys/linux_practice/scripts/errorReport.txt

