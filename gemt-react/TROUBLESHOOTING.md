# Troubleshooting Databricks Deployment

## What to Check in Logs

After deployment, check the Databricks Apps logs for these key indicators:

### 1. Build Phase
Look for:
```
STEP 1: Building application...
✓ Build completed successfully
```

If build fails, you'll see:
```
ERROR: Build failed with exit code [number]
```

### 2. Verification Phase
Look for:
```
STEP 2: Verifying build output...
✓ dist folder exists
✓ dist/index.html found
```

If this fails, the build didn't produce output files.

### 3. Server Startup
Look for:
```
STEP 3: Starting preview server...
```

Then Vite should output:
```
VITE v[version] ready in [time] ms

➜  Local:   http://localhost:8080/
➜  Network: http://0.0.0.0:8080/
```

### 4. Common Issues

#### Issue: Server starts but 502 persists

**Possible causes:**
1. **Port mismatch** - Databricks expecting different port
   - Check if Databricks expects port 8080
   - Server config in vite.config.js must match

2. **Host binding issue** - Server not accepting external connections
   - Must bind to 0.0.0.0 (not 127.0.0.1 or localhost)
   - Check vite.config.js preview.host setting

3. **Health check failure** - Databricks can't verify server is up
   - Try accessing: `https://your-app-url/health.html`
   - This simple file tests if server is serving files

4. **Path issues** - Working directory mismatch
   - Script should run from gemt-react directory
   - Check "Current directory" in startup logs

#### Issue: Build succeeds but server doesn't start

**Check for:**
- Missing dependencies in node_modules
- Port already in use (unlikely in fresh container)
- Preview command syntax errors

#### Issue: Application loads but blank page

**Check for:**
- Console errors in browser (F12 developer tools)
- Incorrect base path in vite.config
- Missing assets in dist folder

## Testing Health Check

Try accessing these URLs in browser:

1. **Main app**: `https://your-databricks-app-url/`
2. **Health check**: `https://your-databricks-app-url/health.html`
3. **Assets**: `https://your-databricks-app-url/assets/`

If health.html works but main page doesn't, it's a React app issue.
If neither works, it's a server/deployment issue.

## Debug Environment Variables

The app.yaml sets these for debugging:
- `DEBUG=vite:*` - Enables Vite debug logs
- `NODE_ENV=production` - Runs in production mode
- `VITE_LOG_LEVEL=info` - Sets log verbosity

## Next Steps

1. Deploy the app
2. Check Databricks Apps logs for the sections above
3. Note which step fails or if all succeed
4. Try accessing /health.html endpoint
5. Share the relevant log section for further diagnosis
