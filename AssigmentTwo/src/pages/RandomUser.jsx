import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function RandomUser() {
  const baseURL =
    "https://api.freeapi.app/api/v1/public/randomusers/user/random";
  const [userData, setUserData] = useState(null);
  const [date, setDate] = useState([]);
  const [registeredDate, setRegisteredDate] = useState([]);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get(baseURL);
      if (response.status === 200) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setDate(userData.dob.date.split("T")[0].split("-"));
      setRegisteredDate(userData.registered.date.split("T")[0].split("-"));
    }
  }, [userData]);

  return (
    <div
      className="
        bg-[#0f0f0f] w-screen h-screen bg-[url('src/assets/bg.svg')]
        flex justify-center items-center bg-no-repeat bg-cover
      "
    >
      {userData === null ? (
        <div className="w-[358px] h-[610px] bg-[#B6B3F3] border-8 rounded-xl flex justify-center items-center">
          Loading ...
        </div>
      ) : (
        <div className="w-[358px] h-[610px] bg-[#B6B3F3] border-8 rounded-xl flex flex-col p-4">
          <div className="w-[100%] h-[5%] flex justify-between text-center items-center">
            <img src="src/assets/rightArrow.svg" className="w-4 h-3" />
            <h1 className="font-bold">Profile Overview</h1>
            <button onClick={fetchUserData}>
              <img src="src/assets/reload.svg" className="w-4 h-3" />
            </button>
          </div>
          <div className="w-[100%] h-[40%] gap-3 flex flex-col items-center justify-center relative">
            <span className="top-5 right-24 bg-black text-white text-[9px] font-medium absolute w-[22px] h-[15px] rounded-xl text-center">
              {userData.name.title}
            </span>
            <img
              src={userData.picture.large}
              className="w-[100px] h-[100px] rounded-full"
            />
            <div className="font-semibold text-2xl tracking-wide">
              <h2>
                {userData.name.first} {userData.name.last}{" "}
              </h2>
            </div>
            <h2>{userData.login.username}</h2>
          </div>
          <hr className="border-black" />
          <div className="w-[100%] h-[10%] flex items-center justify-center gap-6">
            <div className="flex gap-2 justify-center items-center text-center">
              <img
                src="src/assets/location.svg"
                className="w-[22px] h-[22px]"
              />
              <span className="text-[9px]">Location</span>
            </div>
            <div className="flex gap-2 justify-center items-center text-center">
              <img src="src/assets/call.svg" className="w-[22px] h-[22px]" />
              <span className="text-[9px]">Call me</span>
            </div>
          </div>
          <hr className="border-black" />
          <div className="w-[100%] h-[30%] flex flex-col gap-4">
            <div className="flex justify-between h-[33%]">
              <div className="w-[50%]">
                <h3 className="text-[9px]">city</h3>
                <span className="font-bold text-lg">
                  {userData.location.city}
                </span>
              </div>
              <div className="w-[50%]">
                <h3 className="text-[9px]">Nationality</h3>
                <span className="font-bold text-lg">{userData.nat}</span>
              </div>
            </div>
            <div className="flex justify-between h-[33%]">
              <div className="w-[50%]">
                <h3 className="text-[9px]">Date of birth</h3>
                {date === undefined ? (
                  <span>...</span>
                ) : (
                  <span className="font-bold text-lg flex gap-1 ">
                    <span>{date[2]}</span>
                    <span>{months[Number(date[1]) - 1]}</span>
                    <span>{date[0]}</span>
                  </span>
                )}
              </div>
              <div className="w-[50%]">
                <h3 className="text-[9px]">Phone No.</h3>
                <span className="font-bold text-lg">{userData.phone}</span>
              </div>
            </div>
            <div className="flex justify-between h-[33%]">
              <div className="w-[50%]">
                <h3 className="text-[9px]">Time Zone</h3>
                <span className="font-bold text-lg">
                  {userData.location.timezone.offset}
                </span>
              </div>
              <div className="w-[50%]">
                <h3 className="text-[9px]">Registered Since</h3>
                {registeredDate === undefined ? (
                  <span>...</span>
                ) : (
                  <span className="font-bold text-lg flex gap-1">
                    <span>{registeredDate[2]}</span>
                    <span>{months[Number(registeredDate[1]) - 1]}</span>
                    <span>{registeredDate[0]}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[15%] relative">
            <Link to="https://chaicode.com/" target="_blank"  className="absolute bottom-5 right-0">
              <img src="src/assets/logo.svg" alt="" />
            </Link>
            <div className="absolute bottom-0 right-32 font-bold text-slate-200">© chai aur code</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomUser;
