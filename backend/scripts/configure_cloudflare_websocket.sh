#!/bin/bash

# Cloudflare WebSocket Configuration Script
# This script configures Cloudflare for optimal WebSocket performance

# Configuration variables - USER MUST UPDATE THESE
CLOUDFLARE_EMAIL="hakanozturkk@windowslive.com"          # Your Cloudflare account email
CLOUDFLARE_API_KEY="9498f2f3a01523da2bfbb14ca14234292acb8"          # Your Cloudflare API key (NEEDS TO BE UPDATED)
ZONE_ID="eeabb897df1cbfca4121152c004e76cf"                     # Zone ID for luminousluxurycrafts.com.tr
DOMAIN="luminousluxurycrafts.com.tr"       # Your domain

# Function to create Page Rule for WebSocket security
create_websocket_page_rule() {
    echo "Creating WebSocket Page Rule..."

    curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/pagerules" \
         -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
         -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
         -H "Content-Type: application/json" \
         --data '{
           "targets": [
             {
               "target": "url",
               "constraint": {
                 "operator": "matches",
                 "value": "https://'"$DOMAIN"'/socket.io/*"
               }
             }
           ],
           "actions": [
             {
               "id": "security_level",
               "value": "essentially_off"
             }
           ],
           "priority": 1,
           "status": "active"
         }'

    echo ""
}

# Function to disable Browser Integrity Check
disable_browser_integrity_check() {
    echo "Disabling Browser Integrity Check..."

    curl -X PATCH "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/browser_check" \
         -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
         -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
         -H "Content-Type: application/json" \
         --data '{"value": "off"}'

    echo ""
}

# Function to check and disable Argo Smart Routing
check_and_disable_argo() {
    echo "Checking Argo Smart Routing status..."

    # First check if Argo is enabled
    ARGO_STATUS=$(curl -X GET "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/argo" \
         -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
         -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
         -H "Content-Type: application/json")

    echo "Argo Status: $ARGO_STATUS"

    # Check if Argo tier is not "off"
    if echo "$ARGO_STATUS" | grep -q '"tier":"off"'; then
        echo "Argo is already disabled."
    else
        echo "Disabling Argo Smart Routing..."

        curl -X PATCH "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/argo" \
             -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
             -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
             -H "Content-Type: application/json" \
             --data '{"value": "off"}'
    fi

    echo ""
}

# Function to create WebSocket timeout rule
create_websocket_timeout_rule() {
    echo "Creating WebSocket timeout rule..."

    curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/pagerules" \
         -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
         -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
         -H "Content-Type: application/json" \
         --data '{
           "targets": [
             {
               "target": "url",
               "constraint": {
                 "operator": "matches",
                 "value": "https://'"$DOMAIN"'/socket.io/*"
               }
             }
           ],
           "actions": [
             {
               "id": "edge_cache_ttl",
               "value": 300
             }
           ],
           "priority": 2,
           "status": "active"
         }'

    echo ""
}

# Main execution
echo "🚀 Cloudflare WebSocket Configuration Script"
echo "=========================================="
echo ""
echo "This script will configure Cloudflare for optimal WebSocket performance."
echo "Please ensure you have updated the configuration variables at the top of this script."
echo ""
echo "Configuration that will be applied:"
echo "1. Create Page Rule for /socket.io/* with security_level = essentially_off"
echo "2. Disable Browser Integrity Check"
echo "3. Check and disable Argo Smart Routing (if enabled)"
echo "4. Create WebSocket timeout rule (300 seconds)"
echo ""
read -p "Do you want to continue? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Apply all configurations
    create_websocket_page_rule
    disable_browser_integrity_check
    check_and_disable_argo
    create_websocket_timeout_rule

    echo "✅ Configuration complete!"
    echo ""
    echo "Please verify the changes in your Cloudflare dashboard and test WebSocket connections."
    echo "Changes may take 30-60 seconds to propagate globally."
else
    echo "Configuration cancelled."
fi
