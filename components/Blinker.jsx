const Blinker = ({ status }) => {
  const bgColor = status == "Looking" ? "bg-green" : "bg-red";
  const blinkerText =
    status === "Looking" ? "Looking for Work" : "Open to Ideas";
  return (
    <div className="relative flex flex-row align-items-center">
      <div className={`rounded-full ${bgColor}-400 h-4 w-4`}></div>
      <div
        className={`absolute animate-ping rounded-full ${bgColor}-400 h-4 w-4`}
      ></div>
      <div>{blinkerText}</div>
    </div>
  );
};

export default Blinker;
