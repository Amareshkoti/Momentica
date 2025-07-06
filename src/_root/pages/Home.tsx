import { Models } from "appwrite";

// import { useToast } from "@/components/ui/use-toast";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";

const Home = () => {
  // const { toast } = useToast();

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  // Show a message when Appwrite is not configured
  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <div className="flex-center flex-col gap-4">
            <h2 className="h3-bold md:h2-bold text-center">Welcome to Snapgram!</h2>
            <p className="body-medium text-light-3 text-center max-w-md">
              To see posts and creators, you need to configure Appwrite backend. 
              Please add your Appwrite credentials to the .env file.
            </p>
            <div className="flex-center gap-4 mt-4">
              <a href="/sign-up" className="shad-button_primary px-6 py-2 rounded-lg">
                Sign Up
              </a>
              <a href="/sign-in" className="shad-button_dark_4 px-6 py-2 rounded-lg">
                Sign In
              </a>
            </div>
          </div>
        </div>
        <div className="home-creators">
          <h3 className="h3-bold text-light-1">Top Creators</h3>
          <p className="body-medium text-light-3">Configure Appwrite to see creators</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : posts?.documents && posts.documents.length > 0 ? (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex-center flex-col gap-4 mt-8">
              <p className="body-medium text-light-3 text-center">
                No posts available. Configure Appwrite to see posts.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : creators?.documents && creators.documents.length > 0 ? (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="body-medium text-light-3">No creators available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
