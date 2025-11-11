#!/bin/bash

echo "========================================="
echo "GEMT React App Startup Script"
echo "========================================="
echo "Timestamp: $(date)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Current directory: $(pwd)"
echo "========================================="

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "ERROR: package.json not found in current directory!"
    echo "Contents of current directory:"
    ls -la
    exit 1
fi

echo "✓ package.json found"
echo ""

# Show package.json scripts
echo "Available NPM scripts:"
cat package.json | grep -A 10 '"scripts"'
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "WARNING: node_modules not found. This should have been installed during deployment."
    echo "Contents of current directory:"
    ls -la
else
    echo "✓ node_modules directory exists"
fi
echo ""

# Step 1: Build the application
echo "========================================="
echo "STEP 1: Building application..."
echo "========================================="
echo "Running: npm run build"
echo ""

npm run build

BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -ne 0 ]; then
    echo ""
    echo "ERROR: Build failed with exit code $BUILD_EXIT_CODE"
    exit $BUILD_EXIT_CODE
fi

echo ""
echo "✓ Build completed successfully"
echo ""

# Step 2: Verify dist folder exists
echo "========================================="
echo "STEP 2: Verifying build output..."
echo "========================================="

if [ ! -d "dist" ]; then
    echo "ERROR: dist folder was not created by build!"
    echo "Contents of current directory:"
    ls -la
    exit 1
fi

echo "✓ dist folder exists"
echo ""
echo "Contents of dist folder:"
ls -lh dist/
echo ""

# Check for index.html
if [ ! -f "dist/index.html" ]; then
    echo "ERROR: dist/index.html not found!"
    exit 1
fi

echo "✓ dist/index.html found"
echo ""

# Step 3: Start preview server
echo "========================================="
echo "STEP 3: Starting preview server..."
echo "========================================="
echo "Server configuration:"
echo "  - Host: 0.0.0.0"
echo "  - Port: 8080"
echo "  - Serving from: dist/"
echo ""
echo "Running: npm run preview"
echo ""

# Run preview with more verbose output
npm run preview -- --host 0.0.0.0 --port 8080

# If we get here, the server stopped unexpectedly
echo ""
echo "ERROR: Preview server stopped unexpectedly!"
exit 1
