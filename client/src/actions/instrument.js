// import axios from "axios";
// import {
//   GET_INSTRUMENTS,
//   UPDATE_INSTRUMENT,
//   DELETE_INSTRUMENT,
//   ADD_INSTRUMENT
// } from "./actionTypes";

// export const getInstruments = marque => async dispatch => {
//   try {
//     const res = marque
//       ? await axios.get(`/instruments?marque=${marque}`)
//       : await axios.get(`/instruments`);

//     dispatch({
//       type: GET_INSTRUMENTS,
//       payload: res.data
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const addInstrument = (marque, logo, model) => async dispatch => {
//   try {
//     const res = await axios.post("/instruments", { marque, logo, model });
//     dispatch({
//       type: ADD_INSTRUMENT,
//       payload: res.data
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateInstrument = (id, marque, logo, model) => async dispatch => {
//   try {
//     const res = await axios.put(`/instruments/${id}`, {
//       marque,
//       logo,
//       model
//     });

//     dispatch({
//       type: UPDATE_INSTRUMENT,
//       payload: res.data
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteInstrument = id => async dispatch => {
//   try {
//     await axios.delete(`/instruments/${id}`);
//     dispatch({
//       type: DELETE_INSTRUMENT,
//       payload: id
//     });
//     dispatch(getInstruments);
//   } catch (error) {
//     console.log(error);
//   }
// };
