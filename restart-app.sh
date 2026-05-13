#!/bin/bash

echo "🏌️ Restarting Golf Distance Tracker..."

# Kill any existing processes
pkill -f "react-scripts"
sleep 2

# Start fresh
cd /Users/mitchellmckinney/golf-distance-tracker
npm start

echo ""
echo "✅ Server starting..."
echo "📱 Open: http://localhost:3000"
echo ""
echo "If you still see README:"
echo "  1. Press Cmd+Shift+R to hard reload"
echo "  2. Or open in incognito window"
