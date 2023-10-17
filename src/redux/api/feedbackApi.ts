import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const FEEDBACK_URL = "/feedback";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFeedback: build.mutation({
      query: (feedbackData) => ({
        url: `${FEEDBACK_URL}/`,
        method: "POST",
        data: feedbackData,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),


    getFeedback: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${FEEDBACK_URL}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const { useAddFeedbackMutation, useGetFeedbackQuery } = feedbackApi;
