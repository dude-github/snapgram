import { GridPostList, Loader } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/QueriesAndMutations";

const LikedPost = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className="text-length-4">No liked posts</p>
      )}
      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  );
};

export default LikedPost;
