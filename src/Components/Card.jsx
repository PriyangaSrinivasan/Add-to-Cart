import React, { useState } from "react";
import { StarFill } from "react-bootstrap-icons";
const Card = ({ data, setcount, count }) => {
  const [status, setStatus] = useState(Array(data.length).fill(true));

  function handleClickInc(index) {
    setcount((val) => val + 1);
    const newStatus = [...status];
    newStatus[index] = false;
    setStatus(newStatus);
  }
  function handleClickDec(index) {
    if (count > 0) {
      setcount((val) => val - 1);
    }
    const newStatus = [...status];
    newStatus[index] = true;
    setStatus(newStatus);
  }
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((element, index) => {
              return (
                <div key={index}>
                  <div className="col mb-5">
                    <div className="card h-100">
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        {element.sale}
                      </div>

                      {/* Product image*/}
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                        alt="..."
                      />

                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">{element.productname}</h5>
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            {element.rating ? (
                              <div>
                                <StarFill /> <StarFill /> <StarFill />{" "}
                                <StarFill />
                                {""}
                                <StarFill />
                              </div>
                            ) : (
                              <div> </div>
                            )}
                          </div>
                          {element.discount ? (
                            <div>
                              <span className="text-muted text-decoration-line-through">
                                {element.price1}
                              </span>

                              {element.price2}
                            </div>
                          ) : element.price2 ? (
                            <div>
                              {element.price1} - {element.price2}
                            </div>
                          ) : (
                            <div>{element.price1}</div>
                          )}
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          {status[index] ? (
                            <button
                              className="btn btn-outline-dark mt-auto"
                              onClick={(event) => handleClickInc(index, event)}
                            >
                              Add to cart
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-dark bg-danger mt-auto"
                              onClick={() => handleClickDec(index)}
                            >
                              Remove from cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
