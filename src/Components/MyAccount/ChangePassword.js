import Input from "../Form/Input";

export default function ChangePassword() {
  return (
    <div className="flex flex-col mt-4 mx-2 ">
      <form
        className="mx-auto w-full max-w-md space-y-6"
        action="#"
        method="POST"
      >
        <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
          <Input
            id="current password"
            name="password"
            placeholder="Current Password"
          />
          <Input id="new password" name="password" placeholder="New Password" />
          <Input
            id="confirm password"
            name="password"
            placeholder="Confirm New Password"
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
