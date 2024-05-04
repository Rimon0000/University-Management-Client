import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import PHInput from "../../../components/form/PHInput";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import PHSelect from "../../../components/form/PHSelect";
import { TResponse } from "../../../types";


const CreateCourse = () => {
    const [addCourse] = useAddCourseMutation()
    const {data: courses} = useGetAllCoursesQuery(undefined)

    const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
        value: item._id,
        label: item.title
    }))

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const semesterId = toast.loading("Creating....");

    const courserData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses ? data?.preRequisiteCourses?.map((item) => ({
        course: item,
        isDeleted: false
      })) : [],

    };
    console.log(courserData);

    try {
      const res = (await addCourse(courserData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: semesterId });
      } else {
        toast.error("Semester Registered Successfully!", { id: semesterId });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: semesterId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
        >
          <PHInput type="text" label="Title" name="title"/>
          <PHInput type="text" label="Prefix" name="prefix"/>
          <PHInput type="text" label="Code" name="code"/>
          <PHInput type="text" label="Credits" name="credits"/>
          <PHSelect mode="multiple" label="Pre Requisite Courses" name="preRequisiteCourses" options={preRequisiteCoursesOptions}/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
