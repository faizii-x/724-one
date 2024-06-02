function UserList({ users, deleteUser }) {
  return (
    <div className="mt-6">
      <table className="min-w-full divide-y divide-gray-200 border-collapse">
        <thead className="bg-orange-400">
          <tr>
            <th className="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <>
              <tr key={user.id}>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="flex justify-center">
                  <div
                    onClick={() => deleteUser(user.id)}
                    className=" mb-[2px] bg-orange-400 w-[85px] h-[40px] hover:text-black cursor-pointer hover:bg-gray-200 border flex justify-center items-center p-2 rounded-lg text-white"
                  >
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <hr className="mt-1" />
    </div>
  );
}

export default UserList;
