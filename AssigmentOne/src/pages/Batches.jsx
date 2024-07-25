function Batches() {
  const data = [
    {
      imageUrl: "https://picsum.photos/",
      title: "SQL Basics To Advanced Mastery Course",
      startDate: "20 Jul 2024",
      endDate: "28 Jul 2024",
      price: "₹ 0",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "30 Days Of Javascript Challenge",
      startDate: "13 Jul 2024",
      endDate: "12 Aug 2024",
      price: "₹ 0",
      validityExpiry: "33 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Interview Preparation With Javascript 2.0",
      startDate: "02 Aug 2024",
      endDate: "15 Sep 2024",
      price: "₹ 10,000",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Python for Data Science",
      startDate: "01 Aug 2024",
      endDate: "31 Aug 2024",
      price: "₹ 5,000",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "React Development Bootcamp",
      startDate: "05 Sep 2024",
      endDate: "05 Dec 2024",
      price: "₹ 8,000",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Machine Learning with Python",
      startDate: "15 Oct 2024",
      endDate: "15 Dec 2024",
      price: "₹ 12,000",
      validityExpiry: "90 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Advanced CSS Techniques",
      startDate: "01 Nov 2024",
      endDate: "30 Nov 2024",
      price: "₹ 3,000",
      validityExpiry: "60 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Java Programming Fundamentals",
      startDate: "10 Sep 2024",
      endDate: "10 Oct 2024",
      price: "₹ 7,000",
      validityExpiry: "120 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Web Development with HTML, CSS & JavaScript",
      startDate: "20 Aug 2024",
      endDate: "20 Oct 2024",
      price: "₹ 9,000",
      validityExpiry: "365 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Data Structures and Algorithms",
      startDate: "01 Sep 2024",
      endDate: "30 Sep 2024",
      price: "₹ 4,500",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Full-Stack Development with MERN",
      startDate: "01 Dec 2024",
      endDate: "31 Dec 2024",
      price: "₹ 11,000",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Introduction to Cybersecurity",
      startDate: "05 Oct 2024",
      endDate: "05 Nov 2024",
      price: "₹ 6,000",
      validityExpiry: "90 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Cloud Computing with AWS",
      startDate: "10 Nov 2024",
      endDate: "10 Dec 2024",
      price: "₹ 13,000",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Mobile App Development with Flutter",
      startDate: "15 Dec 2024",
      endDate: "15 Jan 2025",
      price: "₹ 10,000",
      validityExpiry: "365 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Blockchain Development",
      startDate: "01 Feb 2025",
      endDate: "28 Feb 2025",
      price: "₹ 15,000",
      validityExpiry: "90 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Artificial Intelligence Basics",
      startDate: "20 Jan 2025",
      endDate: "20 Feb 2025",
      price: "₹ 8,000",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "UX/UI Design Principles",
      startDate: "10 Mar 2025",
      endDate: "10 Apr 2025",
      price: "₹ 5,500",
      validityExpiry: "60 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "DevOps with Kubernetes",
      startDate: "01 Apr 2025",
      endDate: "01 May 2025",
      price: "₹ 9,500",
      validityExpiry: "365 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Big Data Analytics with Hadoop",
      startDate: "15 Mar 2025",
      endDate: "15 Apr 2025",
      price: "₹ 14,000",
      validityExpiry: "90 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Introduction to Internet of Things",
      startDate: "20 May 2025",
      endDate: "20 Jun 2025",
      price: "₹ 7,500",
      validityExpiry: "180 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Deep Learning with TensorFlow",
      startDate: "01 Jun 2025",
      endDate: "01 Jul 2025",
      price: "₹ 12,500",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Data Visualization with D3.js",
      startDate: "10 Jun 2025",
      endDate: "10 Jul 2025",
      price: "₹ 6,000",
      validityExpiry: "120 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Game Development with Unity",
      startDate: "01 Jul 2025",
      endDate: "01 Aug 2025",
      price: "₹ 9,000",
      validityExpiry: "365 days",
      status: "Published",
    },
  ];

  return (
    <div className="w-screen h-screen bg-[#e2bbe9] flex items-center flex-col justify-around font-mono">
      <h1 className="text-[80px] font-bold leading-[96.82px] text-[#4f6f52] drop-shadow-lg">
        Chai aur code
      </h1>
      <div className=" bg-white rounded-lg w-[1223px] h-[785px] flex items-center flex-col  gap-10">
        <div className="w-full flex  flex-col  gap-3 ml-28 mt-20">
          <h2 className="text-black text-4xl font-bold">Batches</h2>
          <p className="text-gray-500 text-xl ">
            Create learner’s batch and share information at the same time.
          </p>
        </div>
        <form className="w-full ml-28 flex text-center gap-4" action="/search">
          <input
            type="text"
            placeholder="Search by Title (alt+k or cmd+k)"
            className="w-[332px] h-[43px] flex text-center justify-center"
          />
          <button className="w-[116px] h-[43px] rounded-md bg-[#6c6baf] text-white">
            Search
          </button>
        </form>
        <table className="w-[1126px">
          <tr className="w-full h-[68px] bg-[#f2f2f2] ">
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th>Validity/Expiry</th>
            <th>Status</th>
          </tr>
          {
            data.map((value,index)=>(
              <tr key={index} className="">
                <td className="flex items-center gap-10">
                  <img src={`${value.imageUrl}id/${index+110}/106/60`}  alt={`img${index+1}`} />
                  <p className="">{value.title}</p>
                  </td>
                <td>{value.startDate}</td>
                <td>{value.endDate}</td>
                <td>{value.price}</td>
                <td>{value.validityExpiry}</td>
                <td>{value.status}</td>
              </tr>
            ))
          }

        </table>
      </div>
    </div>
  );
}

export default Batches;
