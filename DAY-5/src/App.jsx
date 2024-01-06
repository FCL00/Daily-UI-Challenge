import "./App.css";

function App() {
  return (
    <>
     <div className="h-screen flex justify-center items-center bg-[#181818]">
        <div className="max-w-sm bg-gray-900 rounded-lg ">
          <div className="card-header mb-4 relative">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute top-1 right-3">
              <button>
                <FontAwesomeIcon
                  className="text-white"
                  icon={faEllipsisVertical}
                />
              </button>
            </div>
            <div className="absolute top-1 left-2">
              <button>
                <FontAwesomeIcon className="text-white" icon={faChevronLeft} />
              </button>
            </div>
          </div>
          <div className="card-body p-5">
            <div className="flex justify-between items-center text-white mb-5">
              <h1 className=" font-bold text-xl">Katty Perry</h1>
              <button
                className={`border border-emerald-400 p-2 bg-gray-900 rounded-md text-emerald-500 hover:bg-emerald-500 hover:text-white`}
                onClick={handleFollowToggle}
              >
                {follow ? "Unfollow" : "Follow"}
              </button>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum aut praesentium impedit expedita unde maiores, cumque at
                eos eveniet, ipsa quae veniam dignissimos illo neque asperiores
                quasi nisi, laudantium nam pariatur sequi soluta ratione.
              </p>
            </div>

            <div className="top-songs">
              <h1 className="flex justify-between text-white font-bold">
                Top Songs
                <span className="text-gray-700 font-small">see all</span>
              </h1>

              <div className="music mt-2">
                <div className="img-icon flex gap-2 mb-2">
                  <img
                    className="h-12 rounded-sm"
                    src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="flex flex-col text-white">
                    <h1 className="text-bold text-xl font-bold">Fireworks</h1>
                    <p className="text-gray-500 text-sm">Katty parry</p>
                  </div>
                </div>
                <div className="img-icon flex gap-2 mb-2">
                  <img
                    className="h-12 rounded-sm"
                    src="https://images.unsplash.com/photo-1512073995635-c7001b907e21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="flex flex-col text-white">
                    <h1 className="text-bold text-xl font-bold">Dark Horse</h1>
                    <p className="text-gray-500 text-sm">Katty parry</p>
                  </div>
                </div>
                <div className="img-icon flex gap-2 mb-2">
                  <img
                    className="h-12 rounded-sm"
                    src="https://images.unsplash.com/photo-1519939040527-1753e8b6b9d1?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="flex flex-col text-white">
                    <h1 className="text-bold text-xl font-bold">Roar!</h1>
                    <p className="text-gray-500 text-sm">Katty parry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
