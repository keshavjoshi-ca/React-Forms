export const reducer = (state, action) => {
  let stateChange = {};
  let address = {};
  let addresses = [];
  const index = action.payload?.index || 0;
  const stateModified = action.payload;

  switch (action.type) {
    case "FirstName":
      stateChange = {
        ...state,
        firstName: action.payload,
      };
      return stateChange;
    case "LastName":
      stateChange = {
        ...state,
        lastName: action.payload,
      };
      return stateChange;
    case "Email":
      stateChange = {
        ...state,
        email: action.payload,
      };
      return stateChange;
    case "Phone":
      stateChange = {
        ...state,
        phoneNumber: action.payload,
      };
      return stateChange;
    case "AddAddressSection":
      addresses = state.addresses;
      addresses.push({
        streetName: "",
        postalCode: "",
        apartmentNumber: 0,
        state: "",
        country: "",
      });
      stateChange = {
        ...state,
        addresses: addresses,
      };
      return stateChange;
    case "StreetName":
      addresses = state.addresses;
      address = addresses[index];
      address.streetName = action.payload.value;
      addresses[index] = address;

      stateChange = {
        ...state,
        addresses: addresses,
      };
      return stateChange;
    case "PostalCode":
      addresses = state.addresses;
      address = addresses[index];
      address.postalCode = action.payload.value;
      addresses[index] = address;

      stateChange = {
        ...state,
        addresses: addresses,
      };
      return stateChange;
    case "ApartmentNumber":
      addresses = state.addresses;
      address = addresses[index];
      address.apartmentNumber = Number(action.payload.value);
      addresses[index] = address;

      stateChange = {
        ...state,
        addresses: addresses,
      };
      return stateChange;
    case "State":
      addresses = state.addresses;
      address = addresses[index];
      address.state = action.payload.value;
      addresses[index] = address;

      stateChange = {
        ...state,
        addresses: addresses,
      };
      return stateChange;
    case "Country":
      addresses = state.addresses;
      address = addresses[index];
      address.country = action.payload.value;
      addresses[index] = address;

      stateChange = {
        ...state,
        addresses: addresses,
      };
      return stateChange;
    case "StateClear":
      return {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        addresses: [],
      };
    case "StateUpdate":
      return stateModified;
  }
  return state;
};
