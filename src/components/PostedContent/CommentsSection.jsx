const CommentsSection = ({ comments = [] }) => {
  return (
    <div className="p-3 bg-zinc-900 rounded-lg">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="mb-2">
            <p className="text-sm font-semibold">{comment.user}</p>
            <p className="text-sm">{comment.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-400">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsSection;
