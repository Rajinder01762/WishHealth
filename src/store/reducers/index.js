import { combineReducers } from "redux";
import FAQS from "../../pages/home/FAQ/store/reducer";
import HealthIssues from "../../pages/home/HealthIssues/store/reducer";
import BlogsSection from "../../pages/home/BlogsSection/store/reducer";
import Services from "../../pages/home/ServiceWeProvide/store/reducer";
import Testimonials from "../../pages/home/WhatsDoctorSays/store/reducer";
import SearchDoctorForm from "../../components/form/store/reducer";
import BookOurDoctors from "../../pages/home/BookOurDoctors/store/reducer";
import GetInTouch from "../../pages/home/GetInTouch/store/reducer";
import Features from "../../pages/home/Features/store/reducer";
import VideoSessionData from '../../components/card/DocResultCard/store/reducer';

export const rootReducer = combineReducers({
  FAQS,
  HealthIssues,
  BlogsSection,
  Services,
  Testimonials,
  SearchDoctorForm,
  BookOurDoctors,
  GetInTouch,
  Features,
  VideoSessionData
});
