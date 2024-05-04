import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { useGetAllRegisteredSemesterQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { TSemester } from "../../../types";
import { useState } from "react";
export type TTableData = Pick<TSemester, "status" | "startDate" | "endDate">;

const items = [
    {
        label: 'Upcoming',
        key: 'UPCOMING'
    },
    {
        label: 'Ongoing',
        key: 'ONGOING'
    },
    {
        label: 'Ended',
        key: 'ENDED'
    },
]

const RegisteredSemester = () => {
//   const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
const [semesterId, setSemesterId] = useState('')

const {data:semesterData, isFetching, isLoading} = useGetAllRegisteredSemesterQuery(undefined)
const [updateSemesterStatus] = useUpdateRegisteredSemesterMutation()

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status, 
      startDate: moment(new Date(startDate)).format('MMMM'), 
      endDate: moment(new Date(endDate)).format('MMMM'),
    })
  );

  const handleStatusUpdate = (data) =>{
    const updateData = {
        id: semesterId,
        data: {
            status: data.key
        }
    }
    
    updateSemesterStatus(updateData)
  }

  const menuProps = {
    items,
    onClick: handleStatusUpdate
  }

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
      render: (item) => {
        let color;
        if(item === 'UPCOMING'){
            color = "blue";
        }
        if(item === 'ONGOING'){
            color = "green";
        }
        if(item === 'ENDED'){
            color = "red";
        }
        return <Tag color={color}>{item}</Tag>
      }
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
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={['click']}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
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
