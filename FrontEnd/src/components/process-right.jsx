import '../assets/css/contentR.css'; // Import your CSS file

const Information = () => {
  return (
    <div className="container">
      <div className="image-right">
        <img src="https://img.freepik.com/free-vector/organic-flat-people-asking-questions-illustration_23-2148906283.jpg?w=740&t=st=1709432674~exp=1709433274~hmac=c2f14bbbb28a92ecf246bd24e51f0d313758898261d4f11aab573a7f8bf3603e" className='img-content' alt="Your Image"/>
      </div>
      <div className="content-right">
        <h1 className='query'>Query Management</h1>
        <p>TNo second thoughts creep in when candidates can log a query, track its resolution, take action, and share feedback. Real time notifications keep them updated as to when you’ve replied to their queries.</p>
      </div>
    </div>
  );
}

export default Information;
