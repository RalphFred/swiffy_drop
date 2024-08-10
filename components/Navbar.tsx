export default function Navbar() {
  return (
    <div className="wrapper flex-between">
      <h1 className="playwrite font-bold text-4xl text-blue-900">
        swiffy_drop
      </h1>

      <div>
        <button className="bg-blue-100 px-6 py-3 rounded-xl mr-8">
          Sign up
        </button>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-xl">
          Sign up
        </button>
      </div>
    </div>
  );
}
