import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useGetAllRegisteredSemesterQuery } from "../../../redux/features/admin/courseManagement.api";
export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const RegisteredSemester = () => {
//   const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

const {data:semesterData, isFetching, isLoading} = useGetAllRegisteredSemesterQuery(undefined)

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status, 
      startDate, 
      endDate,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

//   const onChange: TableProps<TTableData>["onChange"] = (
//     _pagination,
//     filters,
//     _sorter,
//     extra
//   ) => {
//     if (extra.action === "filter") {
//       const queryParams: TQueryParam[] = [];

//       setParams(queryParams);
//     }
//   };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    //   onChange={onChange}
    />
  );
};

export default RegisteredSemester;
