export const LoginRegisterPage = () => {
  return (
    <div className="w-screen h-screen text-center flex flex-col ">

    {/* container */}
        <div className="flex bg-white m-auto min-w-md min-h-137.5 justify-center rounded-2xl ">
          <div className="flex justify-center align items-center w-100 flex-col">
            <div className="visual align-top p-2 self-center">
              <img src="login.svg" className="w-20 m-auto" alt="visualcon"/>
              <h2 className="subTitle">Login</h2>
              <p>Don't have an account? </p>
            </div>
          </div>
        </div>
    </div>
  )
}