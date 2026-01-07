import { useState } from "react";

const ListComments = ({comments}) => {
  

  const badge = (status) => {
    const base = "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium";
    if (status === "approved") return `${base} bg-emerald-50 text-emerald-700`;
    if (status === "pending") return `${base} bg-amber-50 text-amber-700`;
    if (status === "spam") return `${base} bg-rose-50 text-rose-700`;
    if (status === "trash") return `${base} bg-gray-100 text-gray-600`;
    return `${base} bg-gray-100 text-gray-600`;
  };

  return (
    <div className="bg-white p-3">
      {/* Header bar (like WP list header) */}
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold">Comments</h2>
        <div className="text-sm text-gray-500">
          Total: <span className="font-medium text-gray-800">{comments.length}</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr className="border-b">
              <th className="text-left font-medium px-4 py-3 w-[28%]">Author</th>
              <th className="text-left font-medium px-4 py-3">Comment</th>
              <th className="text-left font-medium px-4 py-3 w-[20%]">Blog title</th>
              <th className="text-left font-medium px-4 py-3 w-[18%]">Submitted On</th>
              <th className="text-left font-medium px-4 py-3 w-[12%]">Status</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((c) => (
              <tr
                key={c.id}
                className="border-b hover:bg-gray-50 group"
              >
                {/* Author */}
                <td className="px-4 py-4 align-top">
                  <div className="font-medium text-gray-900">{c.name}</div>
                </td>

                {/* Comment + row actions */}
                <td className="px-4 py-4 align-top">
                  <p className="text-gray-800">{c.content}</p>

                </td>

                {/* In response to */}
                <td className="px-4 py-4 align-top text-gray-700">
                  <span className="text-gray-900">{c.blog.title}</span>
                </td>

                {/* Date */}
                <td className="px-4 py-4 align-top text-gray-700">
                  {c.createdAt}
                </td>

                {/* Status */}
                <td className="px-4 py-4 align-top">
                  <span className={badge(c.isApproved)}>{c.isApproved ? 'Approved' : 'Not Approved'}</span>
                </td>
              </tr>
            ))}

            {comments.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                  No comments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListComments;
