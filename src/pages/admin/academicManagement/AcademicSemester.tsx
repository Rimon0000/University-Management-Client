import { useGetAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement";

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