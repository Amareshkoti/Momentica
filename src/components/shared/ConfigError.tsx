import { validateAppwriteConfig } from "@/lib/appwrite/config";

const ConfigError = () => {
  const isConfigValid = validateAppwriteConfig();

  if (isConfigValid) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dark-2 p-8 rounded-lg max-w-md mx-4">
        <h2 className="h2-bold text-red-500 mb-4">Configuration Error</h2>
        <p className="body-medium text-light-3 mb-4">
          Your Appwrite configuration is incomplete. Please check your environment variables.
        </p>
        <div className="space-y-2 text-sm text-light-4">
          <p>Required environment variables:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>VITE_APPWRITE_URL</li>
            <li>VITE_APPWRITE_PROJECT_ID</li>
            <li>VITE_APPWRITE_DATABASE_ID</li>
            <li>VITE_APPWRITE_STORAGE_ID</li>
            <li>VITE_APPWRITE_USER_COLLECTION_ID</li>
            <li>VITE_APPWRITE_POST_COLLECTION_ID</li>
            <li>VITE_APPWRITE_SAVES_COLLECTION_ID</li>
          </ul>
        </div>
        <div className="mt-6">
          <a 
            href="https://appwrite.io/docs/getting-started-for-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline"
          >
            Learn how to set up Appwrite →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfigError; 