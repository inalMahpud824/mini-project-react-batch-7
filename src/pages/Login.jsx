import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userStore } from "../store/userStore";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datalogin, setDatalogin] = useState({});
  const { email, password, name } = userStore();
  // const { login } = useTokenValidation();

  useEffect(() => {
    const auth =  localStorage.getItem("Autentication")
    if(auth === "true") {
      window.location.href = "/dashboard"
    }
  }, []);
  const handelChange = (e) => {
    setDatalogin({
      ...datalogin,
      [e.target.name]: e.target.value,
    });
  };
  const closeError = (e) => {
    e.target.parentElement.style.display = "none";
    setError(null);
  };
  const handelSubmit = async (e) => {
    console.log(datalogin);
    setLoading(true);
    e.preventDefault();
    if(datalogin.email === "" || datalogin.password === "") {
      setError("Email dan Password tidak boleh kosong");
      setLoading(false);
      return
    }
    if(datalogin.email != email || datalogin.password != password ) {
      setError("Email atau Password tidak sesuai");
      setLoading(false);
      return
    }
    localStorage.setItem("Autentication", true);
    window.location.href = "/dashboard";
    setLoading(false);
  };

  return (
    <>
      <section className="w-full min-h-screen bg-secondary flex flex-col items-center justify-center relative">
        <form
          action=""
          onSubmit={handelSubmit}
          className="md:w-[37rem] h-screen md:h-fit w-full py-4 px-10 shadow-lg flex flex-col justify-center text-gray-700 bg-white rounded-3xl"
        >
          <Link to={"/"}>
            <img
              src="./logo.png"
              alt=""
              className="object-contain w-[9rem] mx-auto py-2"
            />
          </Link>
          <h1 className="text-center text-primary heading-font text-3xl font-bold">
            Login
          </h1>
          <label htmlFor="email" className="py-2 font-semibold text-primary">
            Email
          </label>
          <input
            type="email"
            placeholder="Masukan Email"
            name="email"
            onChange={handelChange}
            className="w-full border px-4 py-2 outline-none bg-white rounded-full focus-within:border-black text-primary"
            required
          />
          <InputPassword
            label="Password"
            placeholder="Masukan Password"
            id="password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handelChange={handelChange}
          />
          <button
            className="py-2 bg-neutral text-primary rounded-full px-[3rem] font-semibold hover:bg-none hover:bg-blue-900 mt-7 text-xl"
            type="submit"
          >
            Login
          </button>
        </form>
        {isLoading && (
          <div className="w-full min-h-screen absolute bg-slate-100 opacity-85 flex items-center justify-center">
            <span className="loading loading-spinner text-primary w-[4rem]"></span>
          </div>
        )}
      </section>
      {error && (
        <div className="toast toast-bottom lg:toast-start toast-center">
          <div className="alert alert-error text-white flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
            <button
              className="btn btn-sm btn-circle border-none absolute right-0 top-0 bg-red-900 text-white"
              onClick={closeError}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const InputPassword = ({
  label,
  placeholder,
  id,
  showPassword,
  handelChange,
  setShowPassword,
}) => {
  return (
    <>
      <label htmlFor={id} className="py-2 font-semibold">
        {label}
      </label>
      <div className="flex items-center gap-2 w-[100%] bg-white rounded-full border px-4 py-2 focus-within:border-black">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full border-none outline-none bg-white"
          name={id}
          id={id}
          onChange={handelChange}
          required
        />
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};
