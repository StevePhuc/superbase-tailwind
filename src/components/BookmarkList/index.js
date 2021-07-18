import BookmarkCard from "./../BookmarkCard";
import axios from "axios";
import { useEffect, useState } from "react";
import AddBookmarkDialog from "./../AddBookmarkDialog";
import { headers } from "../../config/header";

export default function BookmarkList(params) {
  const [bookmarks, setBookmarks] = useState([]);
  const [showAddBookmarkDialog, setShowAddBookmarkDialog] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("https://jeaxwidfbdwnnbqfpusj.supabase.co/rest/v1/bookmark", { headers });
      // console.log('data',data);
      setBookmarks(data?.data);
    }
    fetchData()
  }, [])

  return (
    <div class="flex flex-col flex-wrap justify-center">
      <div class="m-2 p-2">
        <button
          onClick={() => setShowAddBookmarkDialog(true)}
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Bookmark
        </button>
      </div>
      <div>
        {bookmarks
          // ?.sort((a, b) => b.created_at.localeCompare(a.created_at))
          .map((bookmark, i) => (
            <BookmarkCard bookmark={bookmark} key={i} />
          ))}
      </div>
      {showAddBookmarkDialog ? (
        <AddBookmarkDialog closeModal={() => setShowAddBookmarkDialog(false)} />
      ) : null}
    </div>
  );
}