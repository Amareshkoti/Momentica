# Troubleshooting Guide

This guide addresses common issues when setting up and running the Snapgram social media app.

## Common Issues and Solutions

### 1. Blank White Screen

**Problem:** The app loads but shows a blank white screen.

**Solutions:**
- Check that your `.env` file exists in the project root (not in `src/`)
- Verify all environment variables are set correctly
- Restart the development server after changing environment variables
- Check browser console (F12) for JavaScript errors

### 2. "Missing required parameter: bucketId" Error

**Problem:** Error when uploading files or creating posts.

**Solutions:**
- Ensure `VITE_APPWRITE_STORAGE_ID` is set correctly in your `.env` file
- Verify your Appwrite storage bucket exists and is accessible
- Check that your Appwrite project has the correct permissions

### 3. "Invalid document structure" Error

**Problem:** Error when creating users or posts.

**Solutions:**
- Ensure all required fields are provided in your Appwrite collections
- Check that your collection schemas match the expected data structure
- Verify that `imageUrl` is being passed as a string, not a URL object

### 4. "Failed to fetch" Network Errors

**Problem:** Network connectivity issues with Appwrite.

**Solutions:**
- Check your internet connection
- Verify `VITE_APPWRITE_URL` is correct
- Ensure your Appwrite project is running and accessible
- Check if your Appwrite project has CORS configured properly

### 5. Environment Variables Not Loading

**Problem:** App can't read environment variables.

**Solutions:**
- Ensure `.env` file is in the project root (same level as `package.json`)
- Restart the development server after adding environment variables
- Check that variable names start with `VITE_`
- Verify no spaces around the `=` sign in `.env` file

### 6. Sign-up Page Not Working

**Problem:** Sign-up form doesn't submit or shows errors.

**Solutions:**
- Check browser console for specific error messages
- Verify Appwrite authentication is properly configured
- Ensure user collection has the correct schema
- Check that email/password validation is working

### 7. File Upload Issues

**Problem:** Images or files won't upload.

**Solutions:**
- Verify `VITE_APPWRITE_STORAGE_ID` is correct
- Check file size limits in your Appwrite storage settings
- Ensure storage bucket has proper permissions
- Verify file type is supported

### 8. Tailwind CSS Not Working

**Problem:** Styles not applying correctly.

**Solutions:**
- Run `npm install` to ensure all dependencies are installed
- Check that `tailwind.config.js` is in the project root
- Verify `globals.css` is imported in your main component
- Restart the development server

## Environment Variables Checklist

Make sure your `.env` file contains all these variables:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_STORAGE_ID=your-storage-id
VITE_APPWRITE_USER_COLLECTION_ID=your-users-collection-id
VITE_APPWRITE_POST_COLLECTION_ID=your-posts-collection-id
VITE_APPWRITE_SAVES_COLLECTION_ID=your-saves-collection-id
```

## Appwrite Setup Checklist

1. **Create Appwrite Project**
   - Sign up at [appwrite.io](https://appwrite.io)
   - Create a new project
   - Get your project ID from the dashboard

2. **Set Up Database**
   - Create a database
   - Create collections for users, posts, and saves
   - Set up proper schemas for each collection

3. **Set Up Storage**
   - Create a storage bucket
   - Configure proper permissions
   - Get your storage ID

4. **Configure Authentication**
   - Enable email/password authentication
   - Set up proper redirect URLs

5. **Set Permissions**
   - Configure read/write permissions for collections
   - Set up proper user roles and access

## Getting Help

If you're still experiencing issues:

1. Check the browser console (F12) for specific error messages
2. Verify your Appwrite configuration matches the tutorial
3. Ensure all environment variables are set correctly
4. Try clearing browser cache and restarting the development server

## Useful Links

- [Appwrite Documentation](https://appwrite.io/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/) 