import Moment from "moment";

export default function DateTime({ date_time }) {
  const date = new Date(date_time);
  const new_date = Moment(date).format("MMMM Do YYYY, h:mm a");

  return new_date;
}
