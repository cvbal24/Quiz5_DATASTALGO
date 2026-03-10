const Message = ({ palette }) => {
  return (
    <div className="row">
      {palette.map((color, index) => (
        <div key={index} className="col-md-4 mb-3">

          <div className="card text-center shadow-sm">

            <div
              style={{
                height: "80px",
                backgroundColor: color.hex,
              }}
            ></div>

            <div className="card-body">
              <h5>{color.name}</h5>
              <p>{color.hex}</p>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
};

export default Message;