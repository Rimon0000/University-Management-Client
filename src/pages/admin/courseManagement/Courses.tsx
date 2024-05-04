import { Button, Modal, Table, TableColumnsType, Tag } from "antd";
import { useAddFacultiesMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { TSemester } from "../../../types";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
export type TTableData = Pick<TSemester, "status" | "startDate" | "endDate">;

const Courses = () => {
const {data:courseData, isFetching} = useGetAllCoursesQuery(undefined)

  const tableData = courseData?.data?.map(
    ({ _id, title, prefix, code }) => ({
      key: _id,
      title,
      code: `${prefix} ${code}`,
    })
  );


  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
        title: "Code",
        key: "code",
        dataIndex: "code",
    },
    {
      title: "Action",
      key: 'x',
      render: (item) => {
        return <AddFacultyModal facultyInfo={item}/>
      },
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    //   onChange={onChange}
    />
  );
}




const AddFacultyModal = ({facultyInfo}) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data:facultiesData} = useGetAllFacultiesQuery(undefined)
    const [addFaculties] = useAddFacultiesMutation()
    
    const facultiesOptions = facultiesData?.data?.map((item) => ({
        value: item._id,
        label: item.fullName
    }))

    const handleSubmit = (data) =>{
        const facultyData = {
            courseId: facultyInfo.key,
            data
        }

        addFaculties(facultyData)
    }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
        <>
          <Button onClick={showModal}>Add Faculty</Button>
          <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
            <PHForm onSubmit={handleSubmit}>
                <PHSelect mode="multiple" options={facultiesOptions} name="faculties" label="Faculty"/>
                <Button htmlType="submit">Submit</Button>
            </PHForm>
          </Modal>
        </>
    )
}
export default Courses;
