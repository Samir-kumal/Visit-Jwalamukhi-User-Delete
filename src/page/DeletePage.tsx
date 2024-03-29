import { useState } from "react";
const DeletePage = () => {
  const [id, setId] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `https://dev.castelltech.com/api/v1/users/delete/ad/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        alert("User Deleted Successfully");
      } else {
        alert("User Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <nav className="w-full h-14 bg-black text-white flex items-center">
        <h1>Delete Your Account - Visit Jwalamukhi</h1>
      </nav>
      <section className="h-lvh w-ful flex items-center justify-center">
        <div className="h-1/2 w-1/2 bg-slate-300 py-4 flex justify-center flex-col px-8">
          <h2 className="text-center">
            Are you sure you want to delete your account?
          </h2>
          <h2 className="text-center font-bold">Enter your id here</h2>
          <h2 className="text-center text-red-500 text-xs">
            , You will find your id in Jwalamukhi App, in My Details section
          </h2>
          <input
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            className="border-2 p-2 my-2"
          />
          <button onClick={handleSubmit} className="bg-red-500 text-white p-2 ">
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};

export default DeletePage;
