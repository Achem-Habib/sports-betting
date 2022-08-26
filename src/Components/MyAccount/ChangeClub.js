import Input from "../Form/Input";
import RadioInput from "../Form/RadioInput";

export default function ChangeClub() {
  const clubName = ["fdkjfjdk", "jfkdjkf", "jfjfdkjf", "kfjfjru"];
  return (
    <div className="flex flex-col mt-4 mx-2 ">
      <form
        className="mx-auto w-full max-w-md space-y-6"
        action="#"
        method="POST"
      >
        <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
          <RadioInput name="Select Club" options={clubName} />
          <Input id="password" name="password" placeholder="Your Password" />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Change Club
          </button>
        </div>
      </form>
    </div>
  );
}
