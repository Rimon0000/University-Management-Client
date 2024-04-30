import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";

export type TTableData = Pick<TAcademicSemester, "_id" | "name" | "year" | "startMonth" | "endMonth">


const AcademicSemester = () =>{
    const [params, setParams] = useState([])
    const {data: semesterData} = useGetAcademicSemestersQuery(params)

    const tableData = semesterData?.data?.map(({_id, name, year, startMonth, endMonth}) => ({
        key:_id,
        name,
        year,
        startMonth,
        endMonth
    }))


    const columns: TableColumnsType<TTableData> = [
        {
          title: 'Name',
          dataIndex: 'name',
          filters: [
            {
              text: 'Summer',
              value: 'Summer',
            },
            {
              text: 'Autumn',
              value: 'Autumn',
            },
            {
              text: 'Fall',
              value: 'Fall',
            },
          ],
        },
        {
          title: 'Year',
          dataIndex: 'year',
          filters: [
            {
              text: '2024',
              value: '2024',
            },
            {
              text: '2025',
              value: '2025',
            },
            {
              text: '2026',
              value: '2026',
            },
          ],
        },
        {
          title: 'Start Month',
          dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth',
          },
      ];
      

      const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {

        if(extra.action === 'filter'){
            const queryParams = []

            filters?.name?.forEach((item) => 
                queryParams.push({name: 'name', value: item})
            );

            filters?.year?.forEach((item) => 
                queryParams.push({name: 'year', value: item})
            );

            setParams(queryParams)

        }
       
      };

    return (
        <Table columns={columns} dataSource={tableData} onChange={onChange}/>
    )
}

export default AcademicSemester;