import React from "react";

export const AddressList = ({ state, dispatchAction }) => {
  const addAddress = (e) => {
    e.preventDefault();
    dispatchAction({ type: "AddAddressSection" });
  };

  return (
    <>
      <div
        style={{
          height: "48px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <button
          className="btn btn-primary"
          style={{ borderRadius: "100%" }}
          onClick={addAddress}
        >
          +
        </button>
        <p style={{ margin: "12px" }}>Add Address</p>
      </div>
      {state.addresses.map((address, index) => {
        return (
          <div key={index} className="addressCard">
            <section className="address1">
              <div>
                <label htmlFor="StreetName">StreetName</label>
                <input
                  type="text"
                  name="StreetName"
                  value={address.streetName}
                  onChange={(e) =>
                    dispatchAction({
                      type: "StreetName",
                      payload: {
                        value: e.target.value,
                        index: index,
                      },
                    })
                  }
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="PostalCode">PostalCode</label>
                <input
                  type="text"
                  name="PostalCode"
                  value={address.postalCode}
                  onChange={(e) =>
                    dispatchAction({
                      type: "PostalCode",
                      payload: {
                        value: e.target.value,
                        index: index,
                      },
                    })
                  }
                  className="form-control"
                />
              </div>
            </section>

            <div>
              <label htmlFor="ApartmentNumber">ApartmentNumber</label>
              <input
                type="number"
                name="ApartmentNumber"
                value={address.apartmentNumber}
                onChange={(e) =>
                  dispatchAction({
                    type: "ApartmentNumber",
                    payload: {
                      value: e.target.value,
                      index: index,
                    },
                  })
                }
                className="form-control"
              />
            </div>

            <section className="address1">
              <div>
                <label htmlFor="State">State</label>
                <input
                  type="text"
                  name="State"
                  value={address.state}
                  onChange={(e) =>
                    dispatchAction({
                      type: "State",
                      payload: {
                        value: e.target.value,
                        index: index,
                      },
                    })
                  }
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="Country">Country</label>
                <input
                  type="text"
                  name="Country"
                  value={address.country}
                  onChange={(e) =>
                    dispatchAction({
                      type: "Country",
                      payload: {
                        value: e.target.value,
                        index: index,
                      },
                    })
                  }
                  className="form-control"
                />
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};
