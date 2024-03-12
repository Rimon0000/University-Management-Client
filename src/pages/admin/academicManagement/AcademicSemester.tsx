import { useGetAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () =>{
    const {data} = useGetAcademicSemestersQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>This is AcademicSemester</h1>
        </div>
    )
}

export default AcademicSemester;