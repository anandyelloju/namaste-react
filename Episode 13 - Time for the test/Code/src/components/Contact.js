const Contact = () => {
  return (
    <div className="p-4 m-16" >
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input type="text" className="border-2 p-2 m-2" placeholder="Name"/>
        <input type="text" className="border-2 p-2 m-2" placeholder="Message"/>
        <button className="border-2 p-2 m-2 bg-gray-300 rounded-lg">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
