export const handleAppwriteError = (error: any): string => {
  if (!error) return "An unknown error occurred";

  // Handle Appwrite specific errors
  if (error.code) {
    switch (error.code) {
      case 401:
        return "Authentication failed. Please sign in again.";
      case 403:
        return "You don't have permission to perform this action.";
      case 404:
        return "The requested resource was not found.";
      case 409:
        return "A resource with this information already exists.";
      case 413:
        return "File too large. Please choose a smaller file.";
      case 429:
        return "Too many requests. Please try again later.";
      default:
        return error.message || "An error occurred with the request.";
    }
  }

  // Handle network errors
  if (error.message?.includes("Failed to fetch")) {
    return "Network error. Please check your internet connection.";
  }

  // Handle validation errors
  if (error.message?.includes("Invalid document structure")) {
    return "Invalid data format. Please check your input.";
  }

  // Handle missing configuration errors
  if (error.message?.includes("Missing required parameter")) {
    return "Configuration error. Please check your Appwrite setup.";
  }

  return error.message || "An unexpected error occurred.";
};

export const logError = (error: any, context: string = "App") => {
  console.error(`[${context}] Error:`, error);
  
  // You can add additional error logging here
  // For example, sending to an error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Add production error logging here
  }
}; 