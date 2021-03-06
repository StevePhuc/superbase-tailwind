import CloseIcon from "./../CloseIcon";
    
export default function ViewBookmarkDialog({ closeModal, bookmark }) {
  return (
    <div class="modal fixed -top-0 left-0 w-full h-full flex flex-col z-0 items-center">
      <div
        class="modal-backdrop opacity-70 bg-gray-50 fixed w-full h-full z-10"
        onClick={closeModal}
      ></div>
      <div class="modal-content z-20 w-2/5 mt-5 bg-white shadow-md">
        <div class="modal-header flex justify-between items-center bg-red-600 p-3 text-white">
          <h3 class="text-white font-bold">View Bookmark</h3>
          <span
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={closeModal}
          >
            <CloseIcon />
          </span>
        </div>
        <div className="modal-body content m-2 p-5 z-50">
          <div class="w-full">
            <div class="pl-2">
              <span>TITLE</span>
            </div>

            <input
              type="text"
              class="border-gray-200 border-2 w-full m-2 p-2 rounded-md"
              placeholder="Type in title.."
              defaultValue={bookmark?.title}
              disabled={true}
            />
          </div>
          <div class="w-full">
            <div class="pl-2 mt-3">
              <span>CONTENT</span>
            </div>

            <textarea
              type="text"
              class="border-gray-200 border-2 w-full m-2 p-2 rounded-md"
              placeholder="Type in content.."
              disabled={true}
              defaultValue={bookmark?.content}
            ></textarea>
          </div>
        </div>
        <div className="modal-footer flex justify-between p-4 bg-gray-200">
          <button
            class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}