import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
          query: (args) => {
            // console.log(args);
            const params = new URLSearchParams()

            if(args){
              args.forEach((item : TQueryParam) => {
                params.append(item.name, item.value as string)
              });
            }
            return {
              url: "/academic-semesters",
              method: "GET",
              params: params,
            }
          },
          transformResponse: (response: TResponseRedux<TAcademicSemester[]>) =>{
            return {
              data: response.data,
              meta: response.meta
            }
          }
        }),
        addAcademicSemester: builder.mutation({
          query: (data) => ({
            url: "/academic-semesters/create-academic-semester",
            method: "POST",
            body: data
          }),
        }),
      
        getAcademicDepartment: builder.query({
          query: (args) => {
            // console.log(args);
            const params = new URLSearchParams()

            if(args){
              args.forEach((item : TQueryParam) => {
                params.append(item.name, item.value as string)
              });
            }
            return {
              url: "/academic-departments",
              method: "GET",
              params: params,
            }
          },
          transformResponse: (response: TResponseRedux<TAcademicSemester[]>) =>{
            return {
              data: response.data,
              meta: response.meta
            }
          }
        }),
        addAcademicDepartment: builder.mutation({
          query: (data) => ({
            url: "/academic-departments/create-academic-department",
            method: "POST",
            body: data
          }),
        }),

        getAllAcademicFaculty: builder.query({
          query: (args) => {
            const params = new URLSearchParams()

            if(args){
              args.forEach((item : TQueryParam) => {
                params.append(item.name, item.value as string)
              });
            }
            return {
              url: "/academic-faculties",
              method: "GET",
              params: params,
            }
          },
          transformResponse: (response: TResponseRedux<TAcademicSemester[]>) =>{
            return {
              data: response.data,
              meta: response.meta
            }
          }
        }),
    }),
})

export const {useGetAllSemestersQuery, useAddAcademicSemesterMutation, useGetAcademicDepartmentQuery, useAddAcademicDepartmentMutation, useGetAllAcademicFacultyQuery} = academicManagementApi;