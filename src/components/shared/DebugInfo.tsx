import { useEffect, useState } from "react";
import { validateAppwriteConfig } from "@/lib/appwrite/config";

const DebugInfo = () => {
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const info = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      configValid: validateAppwriteConfig(),
      envVars: {
        url: import.meta.env.VITE_APPWRITE_URL ? "Set" : "Missing",
        projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID ? "Set" : "Missing",
        databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID ? "Set" : "Missing",
        storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID ? "Set" : "Missing",
        userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID ? "Set" : "Missing",
        postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID ? "Set" : "Missing",
        savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID ? "Set" : "Missing",
      },
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      location: window.location.href,
    };

    setDebugInfo(info);
    console.log("Debug Info:", info);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-dark-2 p-4 rounded-lg max-w-sm text-xs z-50">
      <h3 className="font-bold mb-2">Debug Info</h3>
      <pre className="text-xs overflow-auto max-h-96">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
};

export default DebugInfo; 