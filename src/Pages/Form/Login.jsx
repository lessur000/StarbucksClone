
const Login = ({toggleform}) => {
  return (
    <>
      <div className="space-y-5">
        <h1 className="text-center font-semibold text-3xl text-green-500">
          Log in
        </h1>
        <form className="space-y-10">
          <div className="flex flex-col space-y-5">
            <input
              className="border-gray-500 border py-2 px-2 rounded-md"
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="on"
            />
            <input
              className="border-gray-500 border py-2 px-2 rounded-md"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="on"
            />
          </div>
          <p className="text-right text-green-400">Forgot password?</p>
          <div className="flex flex-col justify-between space-y-5">
            <button className="bg-green-400 py-2 px-5 rounded-md cursor-pointer">
              Log in
            </button>
            <div className="flex justify-center text-xs sm:text-sm">
              <p>dont have an account?</p>
              <button onClick={toggleform}>
                <a className="text-green-500">Sign up</a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
