import { put, takeEvery } from "redux-saga/effects";
import { ApiServices } from "../HTTP/api";
import { getPointsSuccess, getPoints, getPointsFailure } from "../reducers/PointsSlice";

export function* getPointsSaga({ payload }) {
  try {
    const response = yield ApiServices.get(`${payload}`);
    yield put(getPointsSuccess(response));
  } catch (error) {
    yield put(getPointsFailure(error.message));
  }
}

const pointsSagas = [takeEvery(getPoints, getPointsSaga)];

export default pointsSagas;
