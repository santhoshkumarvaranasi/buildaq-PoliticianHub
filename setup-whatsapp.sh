#!/bin/bash

# PoliticianHub WhatsApp Setup Script
# This script helps you set up WhatsApp Business API integration

echo "🚀 PoliticianHub WhatsApp Setup"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Step 1: Install backend dependencies
echo "📦 Step 1: Installing backend dependencies..."
if [ ! -d "backend/node_modules" ]; then
    cd backend
    npm install
    cd ..
    echo "✅ Backend dependencies installed"
else
    echo "✅ Backend dependencies already installed"
fi

# Step 2: Create .env file if it doesn't exist
echo ""
echo "🔧 Step 2: Setting up environment configuration..."
if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env file"
    echo "⚠️  Please edit backend/.env and add your WhatsApp credentials"
else
    echo "✅ backend/.env already exists"
fi

# Step 3: Check if ngrok is installed
echo ""
echo "🌐 Step 3: Checking for ngrok..."
if command -v ngrok &> /dev/null; then
    echo "✅ ngrok is installed"
else
    echo "⚠️  ngrok is not installed"
    echo "   Install it with: npm install -g ngrok"
    echo "   Or download from: https://ngrok.com/download"
fi

# Step 4: Display next steps
echo ""
echo "✨ Setup Complete! Next steps:"
echo "================================"
echo ""
echo "1️⃣  Get WhatsApp Business API credentials:"
echo "   • Visit: https://developers.facebook.com/"
echo "   • Create a new app (Business type)"
echo "   • Add WhatsApp product"
echo "   • Get Phone Number ID and Access Token"
echo ""
echo "2️⃣  Configure credentials:"
echo "   • Edit: backend/.env"
echo "   • Set WHATSAPP_PHONE_ID"
echo "   • Set WHATSAPP_ACCESS_TOKEN"
echo ""
echo "3️⃣  Start the servers:"
echo "   • Backend: cd backend && npm start"
echo "   • Frontend: npm start (from project root)"
echo ""
echo "4️⃣  For local testing with webhook:"
echo "   • Install ngrok: npm install -g ngrok"
echo "   • Run: ngrok http 3000"
echo "   • Copy the ngrok URL"
echo "   • Configure webhook in Meta Developer Dashboard"
echo ""
echo "5️⃣  Access the application:"
echo "   • Open: http://localhost:4004"
echo "   • Navigate to: Communications → Feedback Management → WhatsApp Live"
echo ""
echo "📚 For detailed instructions, see:"
echo "   • docs/WHATSAPP_SETUP.md"
echo "   • backend/README.md"
echo ""
echo "🎉 Happy constituency engagement!"
