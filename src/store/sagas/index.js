import { all } from "redux-saga/effects";
import FAQSWatcher from "../../pages/home/FAQ/store/sagas";
import HealthIssueWatcher from "../../pages/home/HealthIssues/store/sagas";
import ServicesWatcher from "../../pages/home/ServiceWeProvide/store/sagas";
import WhatDoctorSaysWatcher from "../../pages/home/WhatsDoctorSays/store/sagas";
import SearchDoctorsWatcher from "../../components/form/store/sagas";
import BookOurDoctorsWatcher from "../../pages/home/BookOurDoctors/store/sagas";
import GetInTouchWatcher from "../../pages/home/GetInTouch/store/sagas";
import BlogsSectionWatcher from "../../pages/home/BlogsSection/store/sagas";
import FeaturesWatcher from "../../pages/home/Features/store/sagas";
export default function* rootSaga() {
  yield all([
    FAQSWatcher(),
    HealthIssueWatcher(),
    BlogsSectionWatcher(),
    ServicesWatcher(),
    WhatDoctorSaysWatcher(),
    SearchDoctorsWatcher(),
    BookOurDoctorsWatcher(),
    GetInTouchWatcher(),
    FeaturesWatcher(),
  ]);
}
