export default function ConfirmationModal({
  title,
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl">

        <h3 className="text-lg font-semibold text-red-400 mb-4">
          ⚠ {title}
        </h3>

        <p className="text-sm text-gray-300 mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-sm"
          >
            Yes, Continue
          </button>
        </div>
      </div>
    </div>
  );
}
